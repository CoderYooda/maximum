<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
            <div>
                <h4 class="mg-b-0 tx-spacing--1">Вакансии</h4>
            </div>
            <div class="d-none d-md-block">
                <router-link :to="{ name: 'vacancy', params: { id: 0}}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                    <button @click="navigate" class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">Новая вакансия</button>
                </router-link>
            </div>
        </div>
        <div>
            <div class="card">
                <ul class="list-group list-group-flush tx-13">
                    <router-link  v-for="vacancy in vacancies" :key="vacancy.id" :to="{ name: 'vacancy', params: { id: vacancy.id}}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li @click="navigate" class="list-group-item d-flex pd-sm-x-20 pointer">
                            <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-gray-600 op-5"><i data-feather="file-text"></i></span></div>
                            <div class="pd-sm-l-10">
                                <p class="tx-medium mg-b-2">{{ vacancy.title }}</p>
                                <small class="tx-12 tx-color-03 mg-b-0"></small>
                            </div>
                            <div class="mg-l-auto text-right">
                                <p class="tx-medium mg-b-2"></p>
                                <small class="tx-12 tx-success mg-b-0"></small>
                            </div>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Vacancy",
        data() {
            return {
                vacancy : {
                    title : '',
                    content : '',
                    published : true,
                },
            };
        },
        mounted(){
            this.$store.dispatch('get_vacancies').then(() => {
            });
        },
        computed: {
            vacancies() {
                return this.$store.getters.vacancies;
            }
        },
        methods: {
        }
    }
</script>
