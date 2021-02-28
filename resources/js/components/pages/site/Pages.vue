<template>
    <div>
        <div class="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-30">
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-style1 mg-b-10">
                        <router-link to="/site" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                            <li class="breadcrumb-item" ><a :href="href" @click="navigate">Управление сайтом</a></li>
                        </router-link>
                        <li class="breadcrumb-item active" aria-current="page">Helpdesk Management</li>
                    </ol>
                </nav>
                <h4 class="mg-b-0 tx-spacing--1">{{ title }}</h4>
            </div>
            <div class="d-none d-md-block">
                <router-link :to="{ name: 'page', params: { id: 0}}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                    <button @click="navigate" class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5">Новая страница</button>
                </router-link>
            </div>
        </div>
        <div>
            <div class="card">
                <ul class="list-group list-group-flush tx-13">
                    <router-link  v-for="page in pages" :key="page.id" :to="{ name: 'page', params: { id: page.id}}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li @click="navigate" class="list-group-item d-flex pd-sm-x-20 pointer">
                            <div class="avatar d-none d-sm-block"><span class="avatar-initial rounded-circle bg-gray-600 op-5"><i data-feather="file-text"></i></span></div>
                            <div class="pd-sm-l-10">
                                <p class="tx-medium mg-b-2">{{ page.name }}</p>
                                <small class="tx-12 tx-color-03 mg-b-0">{{ page.title }}</small>
                            </div>
                            <div class="mg-l-auto text-right">
                                <p class="tx-medium mg-b-2"></p>
                                <small class="tx-12 tx-success mg-b-0">{{ isPublished(page) }}</small>
                            </div>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    // import auth from '../auth.js';

    export default {
        name: "Pages",
        data() {
            return {
                // username: '',
                // password: '',
                title : 'Каталог страниц'
            };
        },
        computed: {
            pages() {
                return this.$store.getters.pages;
            }
        },
        mounted(){
            this.$store.dispatch('get_pages').then(() => {
                window.feather.replace();
            });
        },
        methods: {
            isPublished(page) {
                return page.isPublished ? 'Опубликовано' : 'Не опубликовано';
            },
        }
    }
</script>
