<template>
<!--    <div  class="">-->
<!--        <textarea name="" id=""  v-model="chunk.text"></textarea>-->
<!--        <input type="text" v-model="chunk.text">-->
<!--    </div>-->
    <div class="text_module">
        <editor-menu-bubble :editor="editor" :keep-in-bounds="keepInBounds" v-slot="{ commands, isActive, menu }">
            <div
                class="menububble"
                :class="{ 'is-active': menu.isActive }"
                :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
            >
                <button
                    class="menububble__button"
                    :class="{ 'is-active': isActive.bold() }"
                    @click="commands.bold"
                >
                    <img src="/images/icons/typo/bold-w.svg" alt="">
                </button>

                <button
                    class="menububble__button"
                    :class="{ 'is-active': isActive.italic() }"
                    @click="commands.italic"
                >
                    <img src="/images/icons/typo/italic-w.svg" alt="">
                </button>

                <button
                    class="menububble__button"
                    :class="{ 'is-active': isActive.code() }"
                    @click="commands.code"
                >
                    <img src="/images/icons/typo/code-w.svg" alt="">
                </button>
                <!--<button-->
                    <!--class="menububble__button"-->
                    <!--:class="{ 'is-active': isActive.code() }"-->
                    <!--@click="setLinkUrl(commands.link, null)"-->
                <!--&gt;-->
                    <!--<img src="/images/icons/typo/code-w.svg" alt="">-->
                <!--</button>-->

            </div>
        </editor-menu-bubble>
        <editor-content :editor="editor" />
<!--        <input ref="text" type="hidden" v-model="chunk.text">-->
<!--        <div-->
<!--            ref="editable"-->
<!--            contenteditable-->
<!--            v-on="listeners"-->
<!--        />-->
    </div>
</template>

<script>
    import Icon from './../../Icon'
    import { Editor, EditorContent, EditorMenuBubble  } from 'tiptap'
    import {
        Blockquote,
        BulletList,
        CodeBlock,
        HardBreak,
        Heading,
        ListItem,
        OrderedList,
        TodoItem,
        TodoList,
        Bold,
        Code,
        Italic,
        Link,
        Strike,
        Underline,
        History,
    } from 'tiptap-extensions'
    export default {
        components: {
            EditorContent, EditorMenuBubble, Icon
        },
        name: "Text",
        props: [ 'chunk' ],
        data() {
            return {
                keepInBounds: true,
                editor: new Editor({
                    extensions: [
                        new Blockquote(),
                        new BulletList(),
                        new CodeBlock(),
                        new HardBreak(),
                        new Heading({ levels: [1, 2, 3] }),
                        new ListItem(),
                        new OrderedList(),
                        new TodoItem(),
                        new TodoList(),
                        new Link(),
                        new Bold(),
                        new Code(),
                        new Italic(),
                        new Strike(),
                        new Underline(),
                        new History(),
                    ],
                    content: this.$props.chunk.text,
                    onInit: () => {
                        this.init();
                        //this.editor.content = this.$props.chunk.text;
                    },
                    onUpdate: ({ getHTML }) => {
                        this.$props.chunk.text = getHTML();
                    },
                }),
            };
        },
        computed: {

            text(){
                //return this.$props.chunk.text;
            }
        },
        mounted() {
            this.editor.content = 'awdawd';
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

</style>
