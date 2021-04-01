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
                            {{ !!client.id ? 'Редактирование клиента "' + client.name + '"' : 'Создание клиента'}}
                        </li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!client.id ? 'Редактирование клиента "' + client.name + '"' : 'Новый клиент'}}</h4>
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
                            <input v-model="client.isPublished" type="checkbox" class="custom-control-input" id="isPublished">
                            <label class="custom-control-label" for="isPublished"> Опубликован</label>
                        </div>
                    </div>
                </div>
                <ImagesUpload limit="1" ref="imgLoader" @imagesChanged="setImages"></ImagesUpload>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Наименование клиента</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.client_store_errors.name}" v-model="client.name" type="text" class="form-control" placeholder="Наименование клиента">
                        <div v-if="!!this.$store.getters.client_store_errors.name" class="invalid-feedback">{{ this.$store.getters.client_store_errors.name[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">ТЭГ клиента</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.client_store_errors.name}" v-model="client.tag" type="text" class="form-control" placeholder="Ссылка клиента">
                        <div v-if="!!this.$store.getters.client_store_errors.name" class="invalid-feedback">{{ this.$store.getters.client_store_errors.name[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Телефон клиента</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.client_store_errors.name}" v-model="client.phone" type="text" class="form-control" placeholder="Телефон клиента">
                        <div v-if="!!this.$store.getters.client_store_errors.name" class="invalid-feedback">{{ this.$store.getters.client_store_errors.name[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Ссылка клиента</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.client_store_errors.name}" v-model="client.link" type="text" class="form-control" placeholder="Ссылка клиента">
                        <div v-if="!!this.$store.getters.client_store_errors.name" class="invalid-feedback">{{ this.$store.getters.client_store_errors.name[0] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!--    <div>-->
<!--        <div v-for="client in clients">-->
<!--            {{ client.id}}-->
<!--        </div>-->
<!--    </div>-->
</template>
<script>
    // import auth from '../auth.js';
    import ImagesUpload from './../../system/ImagesUpload'
    export default {
        components:{
            ImagesUpload,
        },
        name: "client",
        data() {
            return {
                client : {
                    name : '',
                    content : '',
                    link : '',
                    phone : '',
                    published : true,
                    images : []
                },
            };
        },
        mounted(){
            this.$store.dispatch('get_clients').then(() => {
                this.client = this.$store.getters.getclientById(this.$route.params.id)[0];
                this.$refs.imgLoader.setImages(this.client.images);
                console.log(this.client);
            });
        },
        computed: {
        },
        methods: {
            setImages(data){
                this.client.images = data.images;
            },
            save(){
                let method = !!this.client.id ? 'update_client' : 'store_client';
                this.$store.dispatch(method, this.client).then(() => {
                    this.$router.push({ name: 'clients'})
                });
            },
        }
    }
</script>
