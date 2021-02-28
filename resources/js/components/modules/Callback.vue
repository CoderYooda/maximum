<template>
    <div style="overflow:auto">
        <div style="width:1200px;" class="module" v-html="parse(module)"></div>
    </div>
</template>

<script>
    import tag_parser from '../mixins/tag_parser'
    export default {
        name: "Callback",
        mixins: [tag_parser],
        props: ['module'],
        data() {
            return {
            };
        },
        mounted(){
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
    }
</script>

<style scoped>

</style>
