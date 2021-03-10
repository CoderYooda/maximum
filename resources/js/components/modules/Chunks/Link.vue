<template>
<!--    <div  class="">-->
<!--        <textarea name="" id=""  v-model="chunk.text"></textarea>-->
<!--        <input type="text" v-model="chunk.text">-->
<!--    </div>-->
    <div class="link_module">
        <a style="user-select: none" draggable="false" href="javascript:void(0)"><input @focus="focused = true" v-model="chunk.text" type="text"></a>
<!--        @blur="focused = false"-->
        <div class="inset_url" v-if="focused">
            <span>Ссылка</span><button @click="focused = false"></button>
            <input @blur="focused = false"  v-model="chunk.link" type="text">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Link",
        props: [ 'chunk' ],
        data() {
            return {
                keepInBounds: true,
                focused: false
            };
        },
        computed: {

            text(){
                //return this.$props.chunk.text;
            }
        },
        mounted() {
            //this.editor.content = this.$props.chunk.text;
        },
        methods:{
            init(){
            },
            onUpdate(e) {
                console.log(e.target.innerText);
                this.$refs.text.value = e.target.innerText;
                this.$props.chunk.text = e.target.innerText;
            },
            showLinkMenu(attrs) {
                this.linkUrl = attrs.href
                this.linkMenuIsActive = true
                this.$nextTick(() => {
                    this.$refs.linkInput.focus()
                })
            },
            hideLinkMenu() {
                this.linkUrl = null
                this.linkMenuIsActive = false
            },
            setLinkUrl(command, url) {
                command({ href: url })
                this.hideLinkMenu()
            },
        },
        beforeDestroy() {
            this.editor.destroy()
        },
    }
</script>

<style scoped>
    .link_module a{
        border: 2px solid #eaeaea;
    }
    /*.link_module a{*/
    /*    border: 2px solid #eaeaea;*/
    /*}*/
    .inset_url{
        margin-left: -10px;
        margin-right: -10px;
        background: #000000c7;
        padding: 10px;
        display: flex;
        flex-direction: column;
        min-width: 300px;
        position: absolute;
        z-index: 9999;
    }
    .inset_url input{
        border: #000!important;
        background: #484848!important;
        padding: 5px 5px;
        border-radius: 3px;
    }
    .link_module input{
        background: none;
        border: 0;
        width: 100%;
        outline: none;
        color: inherit;
    }
    .inset_url button{
        background: url(/images/icons/x.svg) center no-repeat;
        border: 0;
        position: absolute;
        right: 10px;
        top: 10px;
        height: 10px;
        width: 10px;
    }
</style>
