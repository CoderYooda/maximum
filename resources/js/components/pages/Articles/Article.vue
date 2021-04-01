<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <router-link to="/site" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                            <li class="breadcrumb-item" ><a :href="href" @click="navigate">Управление сайтом</a></li>
                        </router-link>
                        <li class="breadcrumb-item active" aria-current="page">
                            {{ !!article.id ? 'Редактирование статьи "' + article.name + '"' : 'Создание статьи'}}
                        </li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!article.id ? 'Редактирование статьи "' + article.name + '"' : 'Новая статья'}}</h4>
            </div>
            <div class="d-none d-md-block">
                <button @click="save" class="btn btn-sm pd-x-15 btn-white btn-uppercase">Сохранить</button>
            </div>
        </div>
        <div class="overflow-hidden">
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-group">
                        <div class="custom-control custom-switch">
                            <input v-model="article.isPublished" type="checkbox" class="custom-control-input" id="isPublished">
                            <label class="custom-control-label" for="isPublished"> Опубликована</label>
                        </div>
                    </div>
                </div>
                <ImagesUpload limit="1" ref="imgLoader" @imagesChanged="setImages"></ImagesUpload>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Название страницы (Title)</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.article_store_errors.title}" v-model="article.title" type="text" class="form-control" placeholder="Тайтл">
                        <div v-if="!!this.$store.getters.article_store_errors.title" class="invalid-feedback">{{ this.$store.getters.article_store_errors.title[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">URL</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.article_store_errors.slug}" v-model="article.slug" type="text" class="form-control" placeholder="URL">
                        <div v-if="!!this.$store.getters.article_store_errors.slug" class="invalid-feedback">{{ this.$store.getters.article_store_errors.slug[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Описание страницы (Description)</label>
                        <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.article_store_errors.description}" v-model="article.description" rows="4" class="form-control" ></textarea>
                        <div v-if="!!this.$store.getters.article_store_errors.description" class="invalid-feedback">{{ this.$store.getters.article_store_errors.description[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Название статьи (H1)</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.article_store_errors.name}" v-model="article.name" type="text" class="form-control" placeholder="Наименование клиента">
                        <div v-if="!!this.$store.getters.article_store_errors.name" class="invalid-feedback">{{ this.$store.getters.article_store_errors.name[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Содержимое статьи</label>
                        <editor-menu-bubble :editor="editor" v-slot="{ commands, isActive, menu }">
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
                            </div>
                        </editor-menu-bubble>
                        <editor-content :editor="editor"/>

                        <!--                    <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.content}" v-model="product.content" rows="4" class="form-control" ></textarea>-->
                        <div v-if="!!this.$store.getters.vacancy_store_errors.content" class="invalid-feedback">{{ this.$store.getters.vacancy_store_errors.content[0] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--    <div>-->
    <!--        <div v-for="article in articles">-->
    <!--            {{ article.id}}-->
    <!--        </div>-->
    <!--    </div>-->
</template>
<script>
    // import auth from '../auth.js';
    import ImagesUpload from './../../system/ImagesUpload'
    import { Editor, EditorContent, EditorMenuBubble  } from 'tiptap';
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
        components:{
            ImagesUpload, EditorContent, EditorMenuBubble
        },
        name: "article",
        data() {
            return {
                article : {
                    name : '',
                    content : '',
                    description : '',
                    slug : '',
                    title : '',
                    isPublished : true,
                    images : []
                },
                editor : new Editor({
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
                    content: "",
                    onInit: () => {
                        // this.init();
                        //this.editor.content = this.$props.chunk.text;
                    },
                    onUpdate: ({ getHTML }) => {
                        this.article.content = getHTML();
                    },
                }),
            };
        },
        watch : {
            'article.slug': function (val) {
                this.article.slug = window.urlRusLat(val);
            },
            'article.title': function (val) {
                this.article.slug = window.urlRusLat(val);
                this.article.title = val;
            },
        },
        mounted(){
            this.$store.dispatch('get_articles').then(() => {
                this.article = this.$store.getters.getarticleById(this.$route.params.id)[0];
                this.editor.setContent(this.article.content);
                this.$refs.imgLoader.setImages(this.article.images);
                console.log(this.article);
            });
        },
        computed: {
        },
        methods: {
            setImages(data){
                this.article.images = data.images;
            },
            save(){
                let method = !!this.article.id ? 'update_article' : 'store_article';
                this.$store.dispatch(method, this.article).then(() => {
                    this.$router.push({ name: 'articles'})
                });
            },
        }
    }
</script>
