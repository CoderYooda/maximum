<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <router-link to="/site" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                            <li class="breadcrumb-item" ><a :href="href" @click="navigate">Управление сайтом</a></li>
                        </router-link>
                        <li class="breadcrumb-item active" aria-current="page">Создание товара</li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!$route.meta.title ? $route.meta.title : 'Новый товар'}}</h4>
            </div>
            <div class="d-none d-md-block">
                <button @click="save" class="btn btn-sm pd-x-15 btn-white btn-uppercase">Сохранить</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-2 mg-t-10 mg-lg-t-0 br">
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input v-model="isAction" type="checkbox" class="custom-control-input" id="isAction">
                        <label class="custom-control-label" for="isAction"> Акционный товар</label>
                    </div>
                </div>
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input v-model="inStock" type="checkbox" class="custom-control-input" id="inStock">
                        <label class="custom-control-label" for="inStock"> Есть в наличии</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="d-block">Цена</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.price}" v-model="price" type="number" class="form-control">
                    <div v-if="!!this.$store.getters.product_store_errors.price" class="invalid-feedback">{{ this.$store.getters.product_store_errors.price[0] }}</div>
                </div>
                <div class="form-group">
                    <label class="d-block">Акционная цена</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.action_price}" v-model="action_price" type="number" class="form-control">
                    <div v-if="!!this.$store.getters.product_store_errors.action_price" class="invalid-feedback">{{ this.$store.getters.product_store_errors.action_price[0] }}</div>
                </div>
            </div>
            <div class="col-lg-10">
                <div class="form-group">
                    <label class="d-block">Наименование товара</label>
                    <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.name}" v-model="name" type="text" class="form-control" placeholder="Наименование товара">
                    <div v-if="!!this.$store.getters.product_store_errors.name" class="invalid-feedback">{{ this.$store.getters.product_store_errors.name[0] }}</div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="d-block">Артикул</label>
                            <input v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.article}" v-model="article" type="text" class="form-control" placeholder="Артикул">
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
                    <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.product_store_errors.description}" v-model="description" rows="4" class="form-control" ></textarea>
                    <div v-if="!!this.$store.getters.product_store_errors.description" class="invalid-feedback">{{ this.$store.getters.product_store_errors.description[0] }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
                category : {name: 'Корневая директория', id: 0},
                name : '',
                price : 0,
                article : '',
                action_price : 0,
                isAction : false,
                description : '',
                inStock : true,
            };
        },
        mounted(){
            this.$store.dispatch('get_categories').then(() => {
                this.category = this.$store.getters.getCategoryById(this.$route.query.category)[0];
                console.log(this.category);
            });
        },
        computed:{
            // selected_category(){
            //     return this.$store.getters.getCategoryById(this.$route.query.category);
            // },
            categories(){
                return this.$store.getters.categories;
            }
        },
        methods:{

            save(){
                let data = {
                    price: this.price,
                    name: this.name,
                    article: this.article,
                    action_price: this.action_price,
                    isAction: this.isAction,
                    description: this.description,
                    inStock: this.inStock,
                    category_id : !!this.category ? this.category.id : 0
                };
                this.$store.dispatch('store_product', data).then(() => {
                    this.$router.push({ name: 'shop', params: {category_id: !!this.category ? this.category.id : 0 }})
                });
            }
        }
    }
</script>

<style scoped>

</style>
