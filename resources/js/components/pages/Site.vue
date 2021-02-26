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
                <button class="btn btn-sm pd-x-15 btn-white btn-uppercase"><i data-feather="save" class="wd-10 mg-r-5"></i> Save</button>
                <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><i data-feather="share-2" class="wd-10 mg-r-5"></i> Share</button>
                <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><i data-feather="plus" class="wd-10 mg-r-5"></i> Add New Ticket</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9">
                <router-view @titleSet="titleSet"></router-view>
            </div>
            <div class="col-lg-3 mg-t-10 mg-lg-t-0">
                <h6 class="tx-uppercase tx-semibold mg-b-15">Модули</h6>
                <component  v-for="module in modules" :key="module.name" v-bind:is="module.component"></component>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Site",
        data() {
            return {
                title : 'Новая страница',
                modules : [
                    {name : 'Benefits', component: () => import(/* webpackChunkName: "Benefits" */ "../modules/Benefits")},
                    {name : 'Callback', component: () => import(/* webpackChunkName: "Callback" */ "../modules/Callback")},
                ]
                // username: '',
                // password: '',
            };
        },

        methods: {
            titleSet(title){
                this.title = title;
            }
        }
    }
</script>
