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
                            {{ !!employee.id ? 'Редактирование сотрудника "' + employee.name + '"' : 'Создание сотрудника'}}
                        </li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ !!employee.id ? 'Редактирование сотрудника "' + employee.name + '"' : 'Новый сотрудник'}}</h4>
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
                            <input v-model="employee.isPublished" type="checkbox" class="custom-control-input" id="isPublished">
                            <label class="custom-control-label" for="isPublished"> Опубликован</label>
                        </div>
                    </div>
                </div>
                <ImagesUpload limit="1" ref="imgLoader" @imagesChanged="setImages"></ImagesUpload>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Имя сотрудника</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.employee_store_errors.name}" v-model="employee.name" type="text" class="form-control" placeholder="Имя сотрудника">
                        <div v-if="!!this.$store.getters.employee_store_errors.name" class="invalid-feedback">{{ this.$store.getters.employee_store_errors.name[0] }}</div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="form-group">
                        <label class="d-block">Должность сотрудника</label>
                        <input v-bind:class="{'is-invalid' : !!this.$store.getters.employee_store_errors.name}" v-model="employee.post" type="text" class="form-control" placeholder="Должность сотрудника">
                        <div v-if="!!this.$store.getters.employee_store_errors.name" class="invalid-feedback">{{ this.$store.getters.employee_store_errors.name[0] }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--    <div>-->
    <!--        <div v-for="employee in employees">-->
    <!--            {{ employee.id}}-->
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
        name: "employee",
        data() {
            return {
                employee : {
                    name : '',
                    post : '',
                    isPublished : true,
                    images : []
                },
            };
        },
        mounted(){
            this.$store.dispatch('get_employees').then(() => {
                this.employee = this.$store.getters.getemployeeById(this.$route.params.id)[0];
                this.$refs.imgLoader.setImages(this.employee.images);
                console.log(this.employee);
            });
        },
        computed: {
        },
        methods: {
            setImages(data){
                this.employee.images = data.images;
            },
            save(){
                let method = !!this.employee.id ? 'update_employee' : 'store_employee';
                this.$store.dispatch(method, this.employee).then(() => {
                    this.$router.push({ name: 'employees'})
                });
            },
        }
    }
</script>
