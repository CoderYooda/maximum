<template>
    <div>
        <div class="module" v-html="parse(module)"></div>
    </div>

</template>

<script>
    import tag_parser from '../mixins/tag_parser'
    export default {
        name: "Benefits",
        mixins: [tag_parser],
        props: ['module'],
        data() {
            return {
                data : {
                }
            };
        },
        mounted(){
            if(!this.$props.module['images'].length){
                this.tags.forEach((item) => {
                    console.log(item);
                    let type = item.split('|');
                    let params = type[2];
                    if(type[0] === 'image'){
                        let image_params = JSON.parse(params);
                        this.$props.module['images'].push(
                            {
                                id : 0,
                                height : image_params.height,
                                width : image_params.width,
                                image : {
                                    id : 0
                                },
                                image_id : null,
                            }
                        );
                    }
                });
            }
            if(!this.$props.module['texts'].length){
                this.tags.forEach((item) => {
                    let type = item.split('|');
                    if(type[0] === 'text'){
                        this.$props.module['texts'].push(
                            {
                                text : "",
                            }
                        );
                    }
                });
            }
            this.tags.forEach((item) => {
                let chunk = item.split('|');

                let ch = this.$props.module[chunk[0] + 's'][parseInt(chunk[1]) - 1];

                let instance = new window[chunk[0]]({
                    store: this.$store,
                    parent: this,
                    propsData: { chunk: ch }
                });
                this.$children.push(instance);
                instance.$mount(this.$el.querySelector('#chunk_' + chunk[0] + '_' + chunk[1]));
            });
        },
        methods:{
        }
    }
</script>

<style scoped>

</style>
