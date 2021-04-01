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
                            {{ !!vacancy.id ? 'Редактирование вакансии "' + vacancy.title + '"' : 'Создание вакансии'}}
                        </li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!vacancy.id ? 'Редактирование вакансии "' + vacancy.title + '"' : 'Новая вакансия'}}</h4>
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
                            <input v-model="vacancy.isPublished" type="checkbox" class="custom-control-input" id="isPublished">
                            <label class="custom-control-label" for="isPublished"> Опубликован</label>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Наименование вакансии</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.vacancy_store_errors.name}" v-model="vacancy.title" type="text" class="form-control" placeholder="Наименование вакансии">
                        <div v-if="!!this.$store.getters.vacancy_store_errors.name" class="invalid-feedback">{{ this.$store.getters.vacancy_store_errors.name[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Описание вакансии</label>
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
<!--                    <div class="form-group">-->
<!--                        <label class="d-block">Описание вакансии</label>-->
<!--                        <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.vacancy_store_errors.content}" v-model="vacancy.content" rows="4" class="form-control" ></textarea>-->
<!--                        <div v-if="!!this.$store.getters.vacancy_store_errors.name" class="invalid-feedback">{{ this.$store.getters.vacancy_store_errors.name[0] }}</div>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>

<!--    <div>-->
<!--        <div v-for="vacancy in vacancies">-->
<!--            {{ vacancy.id}}-->
<!--        </div>-->
<!--    </div>-->
</template>
<script>
    // import auth from '../auth.js';
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
            EditorContent, EditorMenuBubble
        },
        name: "Vacancy",
        data() {
            return {
                vacancy : {
                    title : '',
                    content : '',
                    published : true,
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
                        this.vacancy.content = getHTML();
                    },
                }),
            };
        },
        mounted(){
            this.$store.dispatch('get_vacancies').then(() => {
                this.vacancy = this.$store.getters.getVacancyById(this.$route.params.id)[0];
                this.editor.setContent(this.vacancy.content);
                console.log(this.vacancy);
            });
        },
        computed: {
        },
        methods: {
            save(){
                let method = !!this.vacancy.id ? 'update_vacancy' : 'store_vacancy';
                this.$store.dispatch(method, this.vacancy).then(() => {
                    this.$router.push({ name: 'vacancies'})
                });
            },
        }
    }
</script>
