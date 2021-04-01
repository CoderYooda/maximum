<template>

    <div class="overflow-hidden">
        <input ref="file" style="display: none" type="file" accept="image/*" @change="uploadFile">
        <div class="upload_butt" v-if="bg">
            <button @click="freshImg(images[0])"></button>
        </div>
        <div class="w-100 h-100 overflow-hidden" v-if="thin">
            <div v-for="image in images" class="w-100 h-100 position-relative img-container">
                <img v-bind:style="{'width' : demension.width, 'height' : demension.height, 'background' : 'url(/images/noimage.jpg) center no-repeat #eaeaea'}" :src="image.url" alt="">
                <div class="float-butt">
                    <button type="button" @click="freshImg(image)">новое изображение</button>
                </div>
            </div>
            <div v-if="images.length < limit" class="pointer" @click="$refs.file.click()">
                <span>Загрузить изображение</span>
            </div>
        </div>
        <div v-if="!thin && !bg" class="row row-xs mb-4 overflow-hidden">
            <div v-for="image in images" class="pointer mb-2">
                <div class="card card-file wh-180 position-relative img-container overflow-hidden">
                    <img class="preview" :src="image.url" alt="">
                    <div class="float-butt">
                        <button type="button" @click="freshImg(image)">новое изображение</button>
                    </div>
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
                                    aspectRatio: aspect,
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
    </div>
</template>
<script>

    export default {
        name: "ImagesUpload",
        props: ['value'],
        data() {
            return {
                showModal: false,
                images : [
                    {
                        url : '/images/noimage.jpg',
                    }
                ],
                img : null,
                coordinates : null,
                result: null,
                limit:5,
                thin:false,
                bg:false,
                aspect: 1/1,
                instantUpload : null,
                demension : {width:100, height:100},
            };
        },
        mounted(){
            this.limit = !!this.$attrs.limit ? this.$attrs.limit : this.limit;
            this.thin = !!this.$attrs.thin ? this.$attrs.thin : this.thin;
            this.bg = !!this.$attrs.bg ? this.$attrs.bg : this.bg;
            this.aspect = !!this.$attrs.aspect ? this.$attrs.aspect : this.aspect;
            this.demension = !!this.$attrs.demension ? this.$attrs.demension : this.demension;

            //this.images = this.value.images;
            // let getter = 'get_' + this.storage_model + '_images';
            //
            // this.pr = this.$store.getters.getProduct(this.id);
            // return this.$store.getters[getter](this.id);
        },
        computed:{
            instant : () => {
                return this.instantUpload ? true : false;
            }
        },
        methods: {
            freshImg(image){
                console.log(image);
                this.instantUpload = image.id;
                // console.log(image);
                this.$refs.file.click();
            },
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
                // console.log(this.instantUpload);
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
                    console.log(this.instantUpload);
                    if(this.instantUpload != null){
                        this.images[this.images.findIndex(item => item.id === this.instantUpload)] = resp.data.image;
                    } else {
                        this.images.push(resp.data.image);
                    }
                    this.instantUpload = false;

                    this.$store.commit('loading', false);
                    this.$emit('imagesChanged', {images : this.images});
                });

            },
            change({coordinates, canvas}) {
                // console.log(this.instantUpload);
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
    .upload_butt button{
        height: 40px;
        width: 40px;
        background: transparent;
        outline: 0;
        border: 0;
    }
    .upload_butt button:hover{
        background: rgba(0, 0, 0, 0.16);
    }
    .float-butt{
        position: absolute;
        bottom: -30px;
        opacity: 0;
        width: 100%;
        background: #0000005c;
        transition: 0.3s all;
        z-index: 1000;
    }
    .float-butt button{
        width: 100%;
        color: #fff;
        background: transparent;
        border: 0;
        outline: 0!important;
    }
    .img-container:hover .float-butt{
        bottom: 0px;
        opacity: 1;
    }
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
