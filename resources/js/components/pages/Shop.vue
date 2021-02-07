<template>
    <div class="filemgr-wrapper filemgr-wrapper-two">
        <div class="filemgr-sidebar">
            <div class="filemgr-sidebar-header">
                <div class="dropdown dropdown-icon flex-fill">
                    <button class="btn btn-xs btn-block btn-white" data-toggle="dropdown">Создать <i data-feather="chevron-down"></i></button>
                    <div class="dropdown-menu tx-13">
<!--                        <a href="" class="dropdown-item"><i data-feather="folder"></i><span>Категорию</span></a>-->
<!--                        <router-link :to="{ name : 'category_edit'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>-->
<!--                            <a class="dropdown-item" :href="href" @click="navigate">-->
<!--                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>-->
<!--                                <span>Категорию</span>-->
<!--                            </a>-->
<!--                        </router-link>-->
<!--                        <a href="" class="dropdown-item"><span>Товар</span></a>-->
<!--                        <div class="dropdown-divider"></div>-->
                    </div><!-- dropdown-menu -->
                </div><!-- dropdown -->
            </div><!-- filemgr-sidebar-header -->
            <div class="filemgr-sidebar-body">
                <div class="flex-fill pd-y-20 pd-x-10">
                    <div class="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
                        <span class="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1">{{ current_category ? current_category.name : 'Корневой каталог' }}</span>
                        <a v-tooltip="{ content: 'Новая категория' }" @click.prevent="new_cat_field = true" class="chat-btn-add" data-toggle="modal"><span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg></span></a>
                    </div>
                    <div v-if="new_cat_field" class="mg-b-15">
                        <div class="input-group mg-b-10">
                            <input v-model="new_category_name" type="text" class="form-control" style="height: 30px; line-height: 30px" placeholder="Название категории">
                            <div class="input-group-append">
                                <button v-tooltip="{ content: 'Сохранить категорию' }" @click.prevent="store_category()" style="height: 30px; line-height: 16px" class="btn btn-outline-light" ><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg></button>
                            </div>
                        </div>
                    </div>
                    <nav class="nav nav-sidebar tx-13">
                        <router-link :to="{ name: 'shop', params: {category_id: parent_id }}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                            <a v-if="category_id" :href="href" @click="navigate" class="nav-link active">../</a>
                        </router-link>

                        <router-link v-for="category in categories"
                                     :key="category.id"
                                     :to="{ name: 'shop', params: {category_id: category.id }}"
                                     v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                            <a :href="href" class="nav-link" @click="navigate">
                                <i data-feather="folder"></i>
                                <span>{{ category.name }}</span>
                            </a>
                        </router-link>
                    </nav>
                </div>
            </div><!-- filemgr-sidebar-body -->
        </div><!-- filemgr-sidebar -->

        <div class="filemgr-content">
            <div class="filemgr-content-header">
                <h4 class="mg-b-0">{{ current_category ? current_category.name : 'Корневой каталог' }}</h4>
                <nav class="nav d-none d-sm-flex mg-l-auto">
                    <a href="" class="nav-link"><i data-feather="list"></i></a>
                    <a href="" class="nav-link"><i data-feather="alert-circle"></i></a>
                    <a href="" class="nav-link"><i data-feather="settings"></i></a>
                </nav>
            </div><!-- filemgr-content-header -->
            <div class="filemgr-content-body">
                <div class="pd-20 pd-lg-25 pd-xl-30">
                    <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Товары в категории "{{ current_category ? current_category.name : 'Корневой каталог' }}"</label>
                    <div class="row row-xs">

                        <div class="col-6 col-sm-4 col-md-3 col-xl mg-t-10" style="max-width: 25%">
                            <div class="card card-file">
                                <div class="card-file-thumb tx-purple">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">package.json</a></h6>
                                    <p>JSON File</p>
                                    <span>2.3kb</span>
                                </div>
                            </div>
                        </div><!-- col -->

                        <div v-for="product in products" class="col-6 col-sm-4 col-md-3 col-xl mg-t-10" style="max-width: 25%">
                            <div class="card card-file">
                                <div class="dropdown-file">
                                    <a href="" class="dropdown-link" data-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a href="#modalViewDetails" data-toggle="modal" class="dropdown-item details"><i data-feather="info"></i>View Details</a>
                                        <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                                        <a href="#modalShare" data-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                                        <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                                        <a href="#modalCopy" data-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                                        <a href="#modalMove" data-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                                        <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                                        <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                                    </div>
                                </div><!-- dropdown -->
                                <div class="card-file-thumb tx-purple">
                                    <i class="far fa-file-code"></i>
                                </div>
                                <div class="card-body">
                                    <h6><a href="" class="link-02">package.json</a></h6>
                                    <p>JSON File</p>
                                    <span>2.3kb</span>
                                </div>
                            </div>
                        </div><!-- col -->
                    </div><!-- row -->
                </div>
            </div><!-- filemgr-content-body -->
        </div><!-- filemgr-content -->

    </div><!-- filemgr-wrapper -->
</template>
<script>
    export default {
        name: "Shop",
        data() {
            return {
                new_category_name : null,
                new_cat_field : false,
            };
        },
        watch: {
            '$route.params.category_id': function (category_id) {
                //this.categories = this.$store.getters.getByParent(this.category_id);
                this.category_id = category_id;
            }
        },
        computed: {
            current_category(){
                return this.$store.getters.getCategory(this.category_id);
            },
            parent_id(){
                return this.$store.getters.getParent(this.category_id);
            },
            category_id : {
                get(){
                    return parseInt(this.$route.params.category_id) || 0
                },
                set(newName){
                    return newName
                }

            },
            categories() {
                return this.$store.getters.getByParent(this.category_id);
            },
            products() {
                return this.$store.getters.getByCategoryId(this.category_id);
            }
        },
        mounted(){
            this.$store.dispatch('get_categories');
            this.$store.dispatch('get_products');
            //this.category_id = parseInt(this.$route.params.category_id) || 0;
        },
        methods: {
            store_category(){
                let data = {
                    name: this.new_category_name,
                    parent_id : this.category_id
                };
                this.$store.dispatch('store_category', data).then(() => {
                    this.new_category_name = '';
                    this.new_cat_field = false;
                })
            }
        }
    }
</script>
