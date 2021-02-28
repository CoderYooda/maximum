<template>
    <div class="">
        <ImagesUpload v-bind:style="{ width : width, height : height}" limit="1" thin="true" v-bind:aspect='aspect' ref="imgLoader" @imagesChanged="setImages"></ImagesUpload>
    </div>
</template>

<script>
    import ImagesUpload from './../../system/ImagesUpload';
    export default {
        name: "Img",
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
            this.$refs.imgLoader.setImages([this.$props.chunk.image]);
        },
        methods:{
            setImages(data){
                console.log(data);
                this.$props.chunk.image_id = data.images[0].id;
                this.$props.chunk.image = data.images[0];
            },
        }
    }
</script>

<style scoped>

</style>
