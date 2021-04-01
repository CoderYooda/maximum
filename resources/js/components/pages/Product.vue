<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <router-link to="/site" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                            <li class="breadcrumb-item" ><a :href="href" @click="navigate">Управление сайтом</a></li>
                        </router-link>
                        <li class="breadcrumb-item active" aria-current="page">{{ !!product.id ? 'Редактирование товара "' + product.name + '"' : 'Создание товара'}}</li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!product.id ? 'Редактирование товара "' + product.name + '"' : 'Новый товар'}}</h4>
            </div>
            <div class="d-none d-md-block">
                <button @click="save" class="btn btn-sm pd-x-15 btn-white btn-uppercase">Сохранить</button>
            </div>
        </div>
        <ImagesUpload ref="imgLoader" @imagesChanged="setImages"></ImagesUpload>
        <div class="row">
            <div class="col-lg-2 mg-t-10 mg-lg-t-0 br">
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input v-model="product.isPublished" type="checkbox" class="custom-control-input" id="isPublished">
                        <label class="custom-control-label" for="isPublished"> Опубликован</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input v-model="product.isAction" type="checkbox" class="custom-control-input" id="isAction">
                        <label class="custom-control-label" for="isAction"> Акционный товар</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input v-model="product.inStock" type="checkbox" class="custom-control-input" id="inStock">
                        <label class="custom-control-label" for="inStock"> Есть в наличии</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="d-block">Цена</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.price}" v-model="product.price" type="number" class="form-control">
                    <div v-if="!!this.$store.getters.product_store_errors.price" class="invalid-feedback">{{ this.$store.getters.product_store_errors.price[0] }}</div>
                </div>
                <div class="form-group">
                    <label class="d-block">Акционная цена</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.action_price}" v-model="product.action_price" type="number" class="form-control">
                    <div v-if="!!this.$store.getters.product_store_errors.action_price" class="invalid-feedback">{{ this.$store.getters.product_store_errors.action_price[0] }}</div>
                </div>
            </div>
            <div class="col-lg-10">
                <div class="form-group">
                    <label class="d-block">Наименование товара</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.name}" v-model="product.name" type="text" class="form-control" placeholder="Наименование товара">
                    <div v-if="!!this.$store.getters.product_store_errors.name" class="invalid-feedback">{{ this.$store.getters.product_store_errors.name[0] }}</div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="d-block">Артикул</label>
                            <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.article}" v-model="product.article" type="text" class="form-control" placeholder="Артикул">
                            <div v-if="!!this.$store.getters.product_store_errors.article" class="invalid-feedback">{{ this.$store.getters.product_store_errors.article[0] }}</div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="d-block">Категория</label>
                            <v-select v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.category_id}" v-model="category" label="name" :options="categories"></v-select>
                            <div v-if="!!this.$store.getters.product_store_errors.category_id" class="invalid-feedback">{{ this.$store.getters.product_store_errors.category_id[0] }}</div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label class="d-block">Описание товара</label>
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
                    <editor-content :editor="editor"/>

<!--                    <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.content}" v-model="product.content" rows="4" class="form-control" ></textarea>-->
                    <div v-if="!!this.$store.getters.product_store_errors.content" class="invalid-feedback">{{ this.$store.getters.product_store_errors.content[0] }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="form-group">
                    <label class="d-block">Тайтл ( Текст вкладки браузера )</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.title}" v-model="product.title" type="text" class="form-control" placeholder="Тайтл">
                    <div v-if="!!this.$store.getters.product_store_errors.title" class="invalid-feedback">{{ this.$store.getters.product_store_errors.title[0] }}</div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label class="d-block">URL</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.slug}" v-model="product.slug" type="text" class="form-control" placeholder="URL">
                    <div v-if="!!this.$store.getters.product_store_errors.slug" class="invalid-feedback">{{ this.$store.getters.product_store_errors.slug[0] }}</div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="form-group">
                    <label class="d-block">Описание страницы</label>
                    <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.description}" v-model="product.description" rows="4" class="form-control" ></textarea>
                    <div v-if="!!this.$store.getters.product_store_errors.description" class="invalid-feedback">{{ this.$store.getters.product_store_errors.description[0] }}</div>
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
        name: "Product",
        data() {
            return {
                images : [],
                category : {name: 'Корневая директория', id: 0},
                product : {
                    name : '',
                    price : 0,
                    article : '',
                    action_price : 0,
                    isAction : false,
                    isPublished : true,
                    content : '',
                    images : null,
                    inStock : true,
                    title : null,
                    description : null,
                    slug : this.slug,
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
        // computed : {
        //     slug: function () {
        //         return window.urlRusLat(this.product.name);
        //     }
        // },
        watch : {
            'product.slug': function (val) {
                if(!this.product.id){
                    this.product.slug = window.urlRusLat(val);
                }
            },
            'product.name': function (val) {
                if(!this.product.id) {
                    this.product.slug = window.urlRusLat(val);
                    this.product.title = val;
                }
            },
        },
        mounted(){
            this.$store.dispatch('get_categories');
            let product = this.$store.getters.getProduct(this.$route.params.product_id);
            if(!product){
                this.$store.dispatch('get_product', this.$route.params.product_id).then((resp) => {
                    product = resp.data.product;
                    let category_id = this.$route.query.category || !!product ? product.category_id : 0;
                    this.editor.setContent(resp.data.product.content);
                    this.product = product;
                    this.$refs.imgLoader.setImages(product.images);
                    this.setCategory(category_id);
                }).catch(() => {
                    let category_id = this.$route.query.category;
                    this.setCategory(category_id);
                });
            } else {
                this.product = product;
                this.editor.setContent(product.content);
                this.$refs.imgLoader.setImages(product.images);
                this.category = this.$store.getters.getCategoryById(product.category_id)[0];
            }
        },
        computed:{
            // selected_category(){
            //     return this.$store.getters.getCategoryById(this.$route.query.category);
            // },
            // product_images(){
            //     return _.pluck(this.images, 'id');
            // },
            categories(){
                return this.$store.getters.categories;
            }
        },
        methods:{

            setImages(data){
                this.product.images = data.images;
            },
            change({ coordinates, canvas }) {
                console.log(coordinates, canvas);
            },
            setCategory(category_id){
                let category = this.$store.getters.getCategoryById(category_id)[0];
                this.category = category;

                if(!category){
                    this.$store.dispatch('get_category', category_id).then((resp) => {
                        category = resp.data.category;
                        this.category = category;
                    });
                }
            },

            save(){
                this.product.category_id = !!this.category ? this.category.id : 0;

                let method = !!this.product.id ? 'update_product' : 'store_product';
                //
                // this.product.images = this.images;

                this.$store.dispatch(method, this.product).then(() => {
                    this.$router.push({ name: 'shop', params: {category_id: !!this.category ? this.category.id : 0 }})
                });
            }
        }
    }
</script>

<style scoped>

</style>
