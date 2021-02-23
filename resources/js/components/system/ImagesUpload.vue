<template>
    <div>
        <div class="row row-xs mb-4">
            <input ref="file" style="display: none" type="file" accept="image/*" @change="uploadFile">
            <div v-for="image in images" class="pointer mb-2">
                <div class="card card-file wh-180">
                    <img class="preview" :src="image.url" alt="">
                </div>
            </div>
            <div v-if="images.length < limit" class="pointer mb-2" @click="$refs.file.click()">
                <div class="card card-file wh-180">
                    <div class="card-file-thumb h-100 tx-danger">
                        <span>Загрузить изображение</span>
                    </div>
                </div>
            </div>
        </div>
        <transition name="modal">
            <div v-if="showModal" class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                        <div class="modal-header">
                            <slot name="header">
                                Редактор изображений
                            </slot>
                        </div>

                        <div class="modal-body" style="min-height: 380px;">
                            <cropper ref="cropper" :stencil-props="{
                                    aspectRatio: 1/1,
                                }"
                                :src="img"
                                @change="change"
                            />
                            <div class="vertical-buttons">
                                <div class="square-button" title="Flip Horizontal" @click="flip(true, false)">
                                    <img src="/images/icons/flip-horizontal.svg" />
                                </div>
                                <div class="square-button" title="Flip Vertical" @click="flip(false, true)">
                                    <img src="/images/icons/flip-vertical.svg" />
                                </div>
                                <div class="square-button" title="Rotate Clockwise" @click="rotate(45)">
                                    <img src="/images/icons/rotate-clockwise.svg" />
                                </div>
                                <div class="square-button" title="Rotate Counter-Clockwise" @click="rotate(-45)">
                                    <img src="/images/icons/rotate-counter-clockwise.svg" />
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <slot name="footer">
                                <button class="btn btn-sm pd-x-15 btn-white btn-uppercase" @click="cropImage()">Сохранить</button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <pre>{{ stored_images }}</pre>
    </div>
</template>
<script>

    export default {
        name: "ImagesUpload",
        props: ['value'],
        data() {
            return {
                showModal: false,
                images : [],
                img : null,
                coordinates : null,
                result: null,
                limit:5,
                // username: '',
                // password: '',
            };
        },
        mounted(){
            this.limit = !!this.$attrs.limit ? this.$attrs.limit : this.limit;
            //this.images = this.value.images;
            // let getter = 'get_' + this.storage_model + '_images';
            //
            // this.pr = this.$store.getters.getProduct(this.id);
            // return this.$store.getters[getter](this.id);
        },
        computed:{
            stored_images : () => {

            }
        },
        methods: {
            uploadFile(){
                let input = this.$refs.file;
                if (input.files && input.files[0]) {
                    let reader = new FileReader();
                    reader.readAsDataURL(input.files[0]);
                    reader.onload = (e) => {
                        this.img = e.target.result;
                        this.showModal = true;
                    };

                }

                // this.$store.dispatch('store_temp_image', {file : this.$refs.file.files[0]}).then((resp) => {
                //     this.showModal = true;
                //     this.img = this.$store.getters.getTempImage();
                // });
            },
            setImages(images){
                this.images = images;
            },
            cropImage(){
                this.result = this.$refs.cropper.getResult().canvas.toDataURL();
                this.$store.commit('loading', true);
                this.$store.dispatch('store_image', {image : this.result}).then((resp) => {
                    this.showModal = false;
                    this.images.push(resp.data.image);
                    this.$store.commit('loading', false);
                    this.$emit('imagesChanged', {images : this.images});
                });
            },
            change({coordinates, canvas}) {
                // this.coordinates = coordinates;
            },
            ready() {
                // console.log(3);
            },
            flip(x,y) {
                this.$refs.cropper.flip(x,y);
            },
            rotate(angle) {
                this.$refs.cropper.rotate(angle);
            },
        }
    }
</script>
<style>
    .vertical-buttons {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    .square-button {
        background: rgba(0,0,0,.4);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 42px;
        width: 42px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: background .5s;
    }
</style>
