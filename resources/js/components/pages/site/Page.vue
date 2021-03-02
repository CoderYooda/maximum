<template>
    <div class="mr-3">
        <div>
            <div class="d-sm-flex align-items-center justify-content-between mg-b-10">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                            <router-link to="/site" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                                <li class="breadcrumb-item" ><a :href="href" @click="navigate">Управление сайтом</a></li>
                            </router-link>
                            <li class="breadcrumb-item active" aria-current="page">Helpdesk Management</li>
                        </ol>
                    </nav>
                    <h4 class="mg-b-0 tx-spacing--1">{{ page.name }}</h4>
                </div>
                <div class="d-none d-md-block">
                    <button @click="save" class="btn btn-sm pd-x-15 btn-white btn-uppercase">Сохранить</button>
                </div>
            </div>
            <div>
                <ul class="nav nav-line" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Визуальный редактор</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#seo" role="tab" aria-controls="contact" aria-selected="false">SEO</a>
                    </li>
                </ul>
                <div class="tab-content pd-y-20" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row">
                            <div class="col-lg-12 template">
                                <div v-for="module in page.modules">
                                        <Module v-bind:module="module"></Module>
                                </div>
                                <div @click="modules_show = !modules_show" class="add_module mt-3 pointer user-select-none"> Добавить модуль</div>
                                <div v-if="modules_show">
                                    <div v-for="module in $store.getters.modules">
                                        <div @click="appendModule(module)">{{ module.name }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="row">
                            <div class="col-lg-2 mg-t-10 mg-lg-t-0 br">
                                <div class="form-group">
                                    <div class="custom-control custom-switch">
                                        <input v-model="page.isPublished" type="checkbox" class="custom-control-input" id="isPublished">
                                        <label class="custom-control-label" for="isPublished"> Опубликован</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div class="form-group">
                                    <label class="d-block">Текст меню</label>
                                    <input v-model="page.menu" type="text" class="form-control" placeholder="Наименование товара">
                                </div>
                            </div>
                            <div class="col-lg-10">
                                <div class="form-group">
                                    <label class="d-block">Название мтраницы</label>
                                    <input v-model="page.name" type="text" class="form-control" placeholder="Название мтраницы">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="seo" role="tabpanel" aria-labelledby="contact-tab">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label class="d-block">SEO заголовок</label>
                                    <input v-model="page.title" type="text" class="form-control" placeholder="SEO заголовок">
                                </div>
                                <div class="form-group">
                                    <label class="d-block">SEO описание</label>
                                    <input v-model="page.description" type="text" class="form-control" placeholder="SEO описание">
                                </div>
                                <div class="form-group">
                                    <label class="d-block">url страницы</label>
                                    <input v-model="page.slug" type="text" class="form-control" placeholder="url страницы">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Module from './../../modules/Module';
    import styles from '/public/templates/assets/css/style.module.scss';
    export default {
        name: "Page",
        components:{
            Module
        },
        data() {
            return {
                page : {
                    name : 'Новая страница',
                    isPublished : true,
                    modules : []
                },
                page_id : null,
                text: '2',
                modules_show : false,
            };
        },
        watch : {
            'page.slug': function (val) {
                if(!this.page.id && this.page.id !== 0){
                    this.page.slug = window.urlRusLat(val);
                }
            },
            'page.name': function (val) {
                if(!this.page.id && this.page.id !== 0) {
                    this.page.slug = window.urlRusLat(val);
                    this.page.title = val;
                }
            },
        },
        mounted(){
            this.$store.dispatch('get_modules', this.page_id);
            this.page_id = !!this.$route.params.id ? parseInt(this.$route.params.id) : null;
            if(this.page_id){
                this.$store.dispatch('get_page', this.page_id).then((resp) => {
                    // console.log(this.store.getters.page(this.page_id).title);
                    // this.$emit('titleSet', this.$store.getters.page(this.page_id).title);
                    this.page = this.$store.getters.page(this.page_id);
                    // let t = x.includes(“html”)
                }).catch(() => {
                });
            }
            // console.log(this.$store.getters.get_module_chunk(1, 1, 'text', 1));
        },
        methods: {
            appendModule(module){
                let m = {
                    template : module,
                    module_template_id : module.id,
                    images : [],
                    texts : [],
                };
                this.page.modules.push(m);
            },
            save(){
                //this.product.category_id = !!this.category ? this.category.id : 0;

                let method = !!this.page.id ? 'update_page' : 'store_page';
                //
                // this.product.images = this.images;

                this.$store.dispatch(method, this.page).then(() => {
                    this.$router.push({ name: 'pages'})
                });
            }
        }
    }
</script>
<style scoped lang="scss">
    .add_module{
        border: 4px dashed rgb(238, 238, 238);
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #c7c3c3;
        line-height: 100px;
    }
    .container{
        width: 200px;
    }
</style>
