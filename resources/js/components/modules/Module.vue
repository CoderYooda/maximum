<template>
    <div class="module" v-html="parse(module)"></div>
</template>

<script>
    import tag_parser from '../mixins/tag_parser'
    export default {
        name: "Module",
        mixins: [tag_parser],
        props: ['module'],
        data() {
            return {
                data : {
                }
            };
        },
        mounted(){
            this.mount();
            this.$on('fresh', () => {
                this.mount();

            });
        },
        methods:{
            setModule(m){
                this.$props.module = m;
            },
            mount(){
                console.log(this.$props.module);
                // if(!this.$props.module['images'].length){
                //     this.tags.forEach((item) => {
                //         let type = item.split('|');
                //         let params = type[2];
                //         if(type[0] === 'image'){
                //             let image_params = JSON.parse(params);
                //             this.$props.module['images'].push(
                //                 {
                //                     id : 0,
                //                     height : image_params.height,
                //                     width : image_params.width,
                //                     image : {
                //                         id : 0
                //                     },
                //                     image_id : null,
                //                 }
                //             );
                //         }
                //     });
                // }

                this.tags.forEach((item) => {
                    let type = item.split('|');
                    let params = type[2];

                    if(type[0] === 'link'){
                        if(!this.$props.module['links'][parseInt(type[1]) - 1]){
                            this.$props.module['links'].push({text : "Ссылка", link : "#",});
                        }
                    }
                    if(type[0] === 'text'){
                        if(!this.$props.module['texts'][parseInt(type[1]) - 1]){
                            this.$props.module['texts'].push({text : "Текст"});
                        }
                    }
                    if(type[0] === 'background'){
                        let image_params = JSON.parse(params);
                        if(!this.$props.module['backgrounds'][parseInt(type[1]) - 1]){
                            this.$props.module['backgrounds'].push(
                                {
                                    id : 0,
                                    height : image_params.height,
                                    width : image_params.width,
                                    image : {
                                        id : 0,
                                        url : '/images/noimage.jpg',
                                    },
                                    image_id : null,
                                }
                            );
                        }
                    }
                    if(type[0] === 'image'){
                        let image_params = JSON.parse(params);
                        if(!this.$props.module['images'][parseInt(type[1]) - 1]){
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
                    }
                });

                // if(!this.$props.module['backgrounds'].length){
                //     this.tags.forEach((item) => {
                //         let type = item.split('|');
                //         let params = type[2];
                //         if(type[0] === 'background'){
                //             let image_params = JSON.parse(params);
                //             this.$props.module['backgrounds'].push(
                //                 {
                //                     id : 0,
                //                     height : image_params.height,
                //                     width : image_params.width,
                //                     image : {
                //                         id : 0,
                //                         url : '/images/noimage.jpg',
                //                     },
                //                     image_id : null,
                //                 }
                //             );
                //         }
                //     });
                // }
                this.tags.forEach((item) => {
                    let chunk = item.split('|');
                    console.log(chunk);
                    let ch = this.$props.module[chunk[0] + 's'][parseInt(chunk[1]) - 1];

                    let instance = new window[chunk[0]]({
                        store: this.$store,
                        parent: this,
                        propsData: { chunk: ch }
                    });
                    this.$children.push(instance);
                    instance.$mount(this.$el.querySelector('#chunk_' + chunk[0] + '_' + chunk[1]));
                });
            }
        }
    }
</script>

<style scoped>

</style>
