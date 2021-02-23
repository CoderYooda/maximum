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
            <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.category_store_errors.description}" v-model="category.description" rows="4" class="form-control" ></textarea>
            <div v-if="!!this.$store.getters.category_store_errors.description" class="invalid-feedback">{{ this.$store.getters.category_store_errors.description[0] }}</div>
        </div>
    </div>
</template>

<script>
    import ImagesUpload from './../system/ImagesUpload'
    export default {
        components:{
            ImagesUpload
        },
        name: "Category",
        data() {
            return {
                images : [],
                //category : {name: 'Корневая директория', id: 0},
                category : {
                    name : '',
                    description : '',
                    images : null,
                    parent : {name: 'Корневая директория', id: 0},
                },
            };
        },
        // watch:{
        //     value : () => {
        //         console.log(1)
        //     }
        // },
        mounted(){
            this.$store.dispatch('get_categories').then(() => {

                let category = this.$store.getters.getCategory(this.$route.params.category_id);

                console.log();

                if(!category){
                    this.$store.dispatch('get_category', this.$route.params.category_id)
                        .then((resp) => {

                            this.category = resp.data.category;
                            let parent_id = !!category ? category.parent.id : 0;

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
                    console.log(1212);
                    this.category = category;
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
                this.category.category_id = !!this.category ? this.category.parent.id : 0;
                let method = !!this.category.id ? 'update_category' : 'store_category';
                //
                // this.category.images = this.images;

                this.$store.dispatch(method, this.category).then(() => {
                    this.$router.push({ name: 'shop', params: {category_id: !!this.category ? this.category.category_id : 0 }})
                });
            }
        }
    }
</script>

<style scoped>

</style>
