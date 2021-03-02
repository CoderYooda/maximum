<template>
    <div>
        <div class="editor">
            <editor-content ref="edit" class="editor__content" :editor="editor" />
        </div>
    </div>
</template>
<script>
    import { Editor, EditorContent } from 'tiptap'
    import {
        CodeBlockHighlight,
        HardBreak,
        Heading,
        Bold,
        Code,
        Italic,
    } from 'tiptap-extensions'
    import javascript from 'highlight.js/lib/languages/javascript'
    import css from 'highlight.js/lib/languages/css'
    import html from 'highlight.js/lib/languages/vbscript-html'
    // import {
    //     JavaScriptExample,
    //     CSSExample,
    //     ExplicitImportExample,
    // } from './examples'
    export default {
        components: {
            EditorContent,
        },
        name : "Templates",
        data() {
            return {
                editor: new Editor({
                    lineNumbers: true,
                    extensions: [
                        new CodeBlockHighlight({
                            languages: {
                                javascript,
                                css,
                                html,
                            },
                        }),
                        new HardBreak(),
                        new Heading({ levels: [1, 2, 3] }),
                        new Bold(),
                        new Code(),
                        new Italic(),
                    ],
                    content: '<pre><code>var i = 21;</code></pre>',
                }),
            }
        },
        mounted(){
            this.editor.on('update', ({ getHTML }) => {
                // get new content on update
                console.log(getHTML());
                //this.editor.setContent(getHTML());
                console.log(1);
                //const newContent = getHTML()
            })
        }
    }
</script>
<style lang="scss">
    pre {
        &::before {
            content: attr(data-language);
            text-transform: uppercase;
            display: block;
            text-align: right;
            font-weight: bold;
            font-size: 0.6rem;
        }
        code {
            .hljs-comment,
            .hljs-quote {
                color: #999999;
            }
            .hljs-variable,
            .hljs-template-variable,
            .hljs-attribute,
            .hljs-tag,
            .hljs-name,
            .hljs-regexp,
            .hljs-link,
            .hljs-name,
            .hljs-selector-id,
            .hljs-selector-class {
                color: #f2777a;
            }
            .hljs-number,
            .hljs-meta,
            .hljs-built_in,
            .hljs-builtin-name,
            .hljs-literal,
            .hljs-type,
            .hljs-params {
                color: #f99157;
            }
            .hljs-string,
            .hljs-symbol,
            .hljs-bullet {
                color: #99cc99;
            }
            .hljs-title,
            .hljs-section {
                color: #ffcc66;
            }
            .hljs-keyword,
            .hljs-selector-tag {
                color: #6699cc;
            }
            .hljs-emphasis {
                font-style: italic;
            }
            .hljs-strong {
                font-weight: 700;
            }
        }
    }
</style>