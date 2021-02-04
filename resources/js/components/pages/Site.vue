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
                <h4 class="mg-b-0 tx-spacing--1">{{ !!$route.meta.title ? $route.meta.title : 'Без заголовка'}}</h4>
            </div>
            <div class="d-none d-md-block">
                <button class="btn btn-sm pd-x-15 btn-white btn-uppercase"><i data-feather="save" class="wd-10 mg-r-5"></i> Save</button>
                <button class="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><i data-feather="share-2" class="wd-10 mg-r-5"></i> Share</button>
                <button class="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><i data-feather="plus" class="wd-10 mg-r-5"></i> Add New Ticket</button>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-9">
                <router-view></router-view>
            </div>
            <div class="col-lg-3 mg-t-10 mg-lg-t-0">
                <h6 class="tx-uppercase tx-semibold mg-b-15">Discover By Position</h6>
                <nav class="nav nav-classic tx-13">
                    <a href="" class="nav-link"><span>Software Engineer</span> <span class="badge">20</span></a>
                    <a href="" class="nav-link"><span>UI/UX Designer</span> <span class="badge">18</span></a>
                    <a href="" class="nav-link"><span>Sales Representative</span> <span class="badge">14</span></a>
                    <a href="" class="nav-link"><span>Product Representative</span> <span class="badge">12</span></a>
                    <a href="" class="nav-link"><span>Full-Stack Developer</span> <span class="badge">10</span></a>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
    // import auth from '../auth.js';

    export default {
        name: "Site",
        data() {
            return {
                // username: '',
                // password: '',
            };
        },

        methods: {
        }
    }
</script>
