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
                            {{ !!category.id ? 'Редактирование категории "' + category.name + '"' : 'Создание категории'}}
                        </li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!category.id ? 'Редактирование товара "' + category.name + '"' : 'Новая категория'}}</h4>
            </div>
            <div class="d-none d-md-block">
                <button @click="save" class="btn btn-sm pd-x-15 btn-white btn-uppercase">Сохранить</button>
            </div>
        </div>
        <ImagesUpload limit="1" ref="imgLoader" @imagesChanged="setImages"></ImagesUpload>
        <div class="row">
            <div class="col-lg-6">
                <div class="form-group">
                    <label class="d-block">Наименование категории</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.category_store_errors.name}" v-model="category.name" type="text" class="form-control" placeholder="Наименование категории">
                    <div v-if="!!this.$store.getters.category_store_errors.name" class="invalid-feedback">{{ this.$store.getters.category_store_errors.name[0] }}</div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="form-group">
                    <label class="d-block">В категории</label>
                    <v-select v-bind:class="{'is-invalid' : !!this.$store.getters.category_store_errors.category_id}" v-model="category.parent" label="name" :options="categories"></v-select>
                    <div v-if="!!this.$store.getters.category_store_errors.category_id" class="invalid-feedback">{{ this.$store.getters.category_store_errors.category_id[0] }}</div>
                </div>
            </div>
        </div>

        <div class="form-group">
            <label class="d-block">Описание категории</label>
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
                </div>
            </editor-menu-bubble>
            <editor-content :editor="editor" v-model="category.content"/>

            <!--<textarea v-bind:class="{'is-invalid' : !!this.$store.getters.category_store_errors.content}" v-model="category.content" rows="4" class="form-control" ></textarea>-->
            <div v-if="!!this.$store.getters.category_store_errors.content" class="invalid-feedback">{{ this.$store.getters.category_store_errors.content[0] }}</div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="form-group">
                    <label class="d-block">Тайтл ( Текст вкладки браузера )</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.category_store_errors.title}" v-model="category.title" type="text" class="form-control" placeholder="Тайтл">
                    <div v-if="!!this.$store.getters.category_store_errors.title" class="invalid-feedback">{{ this.$store.getters.category_store_errors.title[0] }}</div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label class="d-block">URL</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.category_store_errors.slug}" v-model="category.slug" type="text" class="form-control" placeholder="URL">
                    <div v-if="!!this.$store.getters.category_store_errors.slug" class="invalid-feedback">{{ this.$store.getters.category_store_errors.slug[0] }}</div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label class="d-block">Описание страницы</label>
                    <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.category_store_errors.description}" v-model="category.description" rows="4" class="form-control" ></textarea>
                    <div v-if="!!this.$store.getters.category_store_errors.description" class="invalid-feedback">{{ this.$store.getters.category_store_errors.description[0] }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Editor, EditorContent, EditorMenuBubble  } from 'tiptap'
    import ImagesUpload from './../system/ImagesUpload'
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
        name: "Category",
        data() {
            return {
                keepInBounds: true,
                images : [],
                //category : {name: 'Корневая директория', id: 0},
                category : {
                    name : '',
                    content : '',
                    images : null,
                    parent : {name: 'Корневая директория', id: 0},
                    title : null,
                    description : null,
                    slug : null,
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
                            this.category.content = getHTML();
                    },
                }),
            };
        },
        // watch:{
        //     value : () => {
        //         console.log(1)
        //     }
        // },
        watch : {
            'category.slug': function (val) {
                this.category.slug = window.urlRusLat(val);
            },
            'category.name': function (val) {
                this.category.slug = window.urlRusLat(val);
                this.category.title = val;
            },
        },
        mounted(){
            this.$store.dispatch('get_categories').then(() => {
                let category = this.$store.getters.getCategory(this.$route.params.category_id);
                if(!category){
                    this.$store.dispatch('get_category', this.$route.params.category_id)
                        .then((resp) => {
                            this.category = resp.data.category;
                            let parent_id = !!category ? category.parent.id : 0;
                            this.editor.setContent(resp.data.category.content);
                            //this.initEditor(resp.data.category.content);
                            if(!!!parent_id){
                                parent_id = !!this.$route.query.category ? this.$route.query.category : 0;
                            }
                            this.$refs.imgLoader.setImages(this.category.images);
                            //this.setCategory(parent_id);
                        }).catch(() => {
                            let parent_id = this.$route.query.category;
                            console.log(parent_id);
                            this.setCategory(parent_id);
                    });
                } else {
                    this.category = category;
                    // this.editor.content = category.content;
                    this.$refs.imgLoader.setImages(category.images);
                    this.category.category = this.$store.getters.getCategoryById(category.category_id)[0];
                }
            });
        },
        computed:{
            // selected_category(){
            //     return this.$store.getters.getCategoryById(this.$route.query.category);
            // },
            // category_images(){
            //     return _.pluck(this.images, 'id');
            // },
            // content(){
            //     return this.category.content;
            // },
            categories(){
                return this.$store.getters.categories;
            }
        },
        methods:{
            setImages(data){
                this.category.images = data.images;
            },
            change({ coordinates, canvas }) {
                console.log(coordinates, canvas);
            },
            setCategory(parent_id){

                if(parent_id === 0) {
                    this.category.parent = {name: 'Корневая директория', id: 0};
                } else {
                    let category = this.$store.getters.getCategoryById(parent_id)[0];
                    console.log(category);
                    this.category.parent = category;
                    if(!category){
                        this.$store.dispatch('get_category', parent_id).then((resp) => {
                            category = resp.data.category;
                            this.category.parent = category;
                        });
                    }
                }
            },
            save(){
                this.category.parent_id = !!this.parent ? this.parent.parent.id : 0;
                let method = !!this.category.id ? 'update_category' : 'store_category';
                //
                // this.category.images = this.images;

                this.$store.dispatch(method, this.category).then(() => {
                    this.$router.push({ name: 'shop', params: {category_id: !!this.category ? this.category.parent_id : 0 }})
                });
            },
            initEditor(text){
                this.editor = new Editor({
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
                    content: text,
                    onInit: () => {
                        this.init();
                        //this.editor.content = this.$props.chunk.text;
                    },
                    onUpdate: ({ getHTML }) => {
                        this.$props.chunk.text = getHTML();
                    },
                })
            }
        }
    }
</script>

<style scoped>

</style>
