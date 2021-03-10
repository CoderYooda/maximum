<template >
    <div class="bg_upload_butt">
        <ImagesUpload
            v-bind:demension="{'width':width, 'height':height}"
            v-bind:style="{ width : width, height : height}"
            limit="1"
            bg=true
            v-bind:aspect='aspect'
            ref="imgLoader"
            @imagesChanged="setImages">
        </ImagesUpload>
    </div>
</template>

<script>
    import ImagesUpload from './../../system/ImagesUpload';
    export default {
        name: "Back",
        props: [ 'chunk' ],
        components:{
            ImagesUpload
        },
        computed : {
            width: function () {
                return this.$props.chunk.width + 'px'
            },
            height: function () {
                return this.$props.chunk.height + 'px'
            }
        },
        data() {
            return {
                data : {
                    aspect : '1/1'
                    // html : '<div>222</div>',
                    // fields : '',
                }
            };
        },
        beforeMount(){
            this.aspect = this.$props.chunk.width / this.$props.chunk.height;
        },
        mounted(){
            // console.log(this.$el.parentNode);
            this.$refs.imgLoader.setImages([this.$props.chunk.image]);
            this.$el.parentNode.style.backgroundImage = 'url("' + this.$props.chunk.image.url + '")';
        },
        methods:{
            setImages(data){
                console.log(data.images[0].url,  this.$el.parentNode);
                this.$el.parentNode.style.backgroundImage = 'url("' + data.images[0].url + '")';
                this.$el.parentNode.style.backgroundImage = data.images[0].url;
                this.$props.chunk.image_id = data.images[0].id;
                this.$props.chunk.image = data.images[0];
            },
        }
    }
</script>

<style scoped>
    .bg_upload_butt{
        position: absolute;
        bottom: -40px;
        left: 0;
        width: 40px;
        height: 40px;
        background: #00000073;
        background-image: url(/images/icons/upload.svg);
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 999999;
    }

</style>
