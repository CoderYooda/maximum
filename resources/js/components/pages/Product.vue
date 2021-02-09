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
                <button class="btn btn-sm pd-x-15 btn-white btn-uppercase">Сохранить</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 mg-t-10 mg-lg-t-0 br">
                <div class="form-group">
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                        <label class="custom-control-label" for="customSwitch1"> Акционный товар</label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="d-block">Цена</label>
                    <input type="number" class="form-control">
                </div>
                <div class="form-group">
                    <label class="d-block">Акционная цена</label>
                    <input type="number" class="form-control">
                </div>
            </div>
            <div class="col-lg-9">
                <div class="form-group">
                    <label class="d-block">Наименование товара</label>
                    <input type="text" class="form-control" placeholder="Наименование товара">
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="d-block">Артикул</label>
                            <input type="text" class="form-control" placeholder="Артикул">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label class="d-block">Категория</label>
                            <v-select v-model="category" label="name" :options="categories"></v-select>
                            <!--<input type="text" class="form-control" placeholder="Артикул">-->
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="d-block">Описание товара</label>
                    <textarea rows="4" class="form-control" ></textarea>
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
                category : {"id":3,"name":"вложенная","parent_id":1,"created_at":"2021-02-06T23:58:42.000000Z","updated_at":"2021-02-06T23:58:42.000000Z"},
            };
        },
        mounted(){
            this.$store.dispatch('get_categories');
        },
        computed:{
            categories(){
                return this.$store.getters.categories;
            }
        }
    }
</script>

<style scoped>

</style>
