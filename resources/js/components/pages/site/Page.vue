<template>
    <div>
        <div>
            <div v-for="module in $store.getters.page_modules(page_id)" v-html="$store.getters.page_module_html(page_id, module.id)"></div>
        </div>
    </div>
</template>
<script>
    // import auth from '../auth.js';

    export default {
        name: "Page",
        data() {
            return {
                page : null,
                page_id : null,
                text: '2',
                // username: '',
                // password: '',
            };
        },
        mounted(){
            this.page_id = !!this.$route.params.id ? parseInt(this.$route.params.id) : null;
            if(this.page_id){
                this.$store.dispatch('get_page', this.page_id).then((resp) => {
                    // console.log(this.store.getters.page(this.page_id).title);
                    this.$emit('titleSet', this.$store.getters.page(this.page_id).title);

                    // let t = x.includes(“html”)


                }).catch(() => {
                });
            }
        },
        methods: {
            parse(html){
                let tags = [];
                for (let i = 0; i < html.length; i++){
                    if(html[i] === "[" && html[i+1] === "["){

                        let tag_index = i+2;
                        let tag = '';
                        while (html[tag_index] !== ']'){
                            tag += html[tag_index];
                            tag_index++;
                        }
                        tags.push(tag);
                    }
                }

                tags.forEach((tag) => {
                    let tag_splited = tag.split(':');

                    this.$store.dispatch('get_content', tag_splited).then((resp) => {
                        let entry = '';
                        switch (tag_splited[0]) {
                            case 'text' :
                                entry = '<textarea>' + resp.data.content.text + '</textarea>';
                            break;
                            case 'image' :
                                entry = '<img src="#">';
                            break;
                        }
                        console.log('[[' + tag + ']]', entry);
                        html = html.replace('[[' + tag + ']]', entry);
                        console.log(html);
                    });
                });

                return html;
            }
        }
    }
</script>
