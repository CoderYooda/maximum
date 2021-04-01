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
                            {{ !!feedback.id ? 'Редактирование клиента "' + feedback.name + '"' : 'Создание клиента'}}
                        </li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!feedback.id ? 'Редактирование клиента "' + feedback.name + '"' : 'Новый клиент'}}</h4>
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
                            <input v-model="feedback.isPublished" type="checkbox" class="custom-control-input" id="isPublished">
                            <label class="custom-control-label" for="isPublished"> Опубликован</label>
                        </div>
                    </div>
                </div>
                <ImagesUpload limit="1" ref="imgLoader" @imagesChanged="setImages"></ImagesUpload>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Имя клиента</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.feedback_store_errors.name}" v-model="feedback.name" type="text" class="form-control" placeholder="Имя клиента">
                        <div v-if="!!this.$store.getters.feedback_store_errors.name" class="invalid-feedback">{{ this.$store.getters.feedback_store_errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label class="d-block">Почта клиента</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.feedback_store_errors.email}" v-model="feedback.email" type="text" class="form-control" placeholder="Почта клиента">
                        <div v-if="!!this.$store.getters.feedback_store_errors.name" class="invalid-feedback">{{ this.$store.getters.feedback_store_errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label class="d-block">Город клиента</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.feedback_store_errors.email}" v-model="feedback.city" type="text" class="form-control" placeholder="Город клиента">
                        <div v-if="!!this.$store.getters.feedback_store_errors.name" class="invalid-feedback">{{ this.$store.getters.feedback_store_errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label class="d-block">Отзыв</label>
                        <textarea v-bind:class="{'is-invalid' : !!this.$store.getters.feedback_store_errors.content}" v-model="feedback.comment" rows="4" class="form-control" ></textarea>
                        <div v-if="!!this.$store.getters.feedback_store_errors.name" class="invalid-feedback">{{ this.$store.getters.feedback_store_errors.name[0] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!--    <div>-->
<!--        <div v-for="feedback in feedbacks">-->
<!--            {{ feedback.id}}-->
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
        name: "feedback",
        data() {
            return {
                feedback : {
                    id : 0,
                    name : 'Без имени',
                    email : 'Feedback@mail.ru',
                    comment : 'Не указано',
                    city : 'Белгород',
                    isPublished : false,
                    images : []
                },
            };
        },
        mounted(){
            this.$store.dispatch('get_feedbacks').then(() => {
                this.feedback = this.$store.getters.getfeedbackById(this.$route.params.id)[0];
                this.$refs.imgLoader.setImages(this.feedback.images);
                console.log(this.feedback);
            });
        },
        computed: {
        },
        methods: {
            setImages(data){
                this.feedback.images = data.images;
            },
            save(){
                let method = !!this.feedback.id ? 'update_feedback' : 'store_feedback';
                this.$store.dispatch(method, this.feedback).then(() => {
                    this.$router.push({ name: 'feedbacks'})
                });
            },
        }
    }
</script>
