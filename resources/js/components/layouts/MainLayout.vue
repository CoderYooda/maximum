<template>
    <div>
        <aside class="aside aside-fixed">
            <div class="aside-header">
                <a href="/admin" class="aside-logo">Максимум<span> цветов</span></a>
            </div>
            <div class="aside-body">
<!--                <div class="aside-loggedin">-->
<!--                    <div class="d-flex align-items-center justify-content-start">-->
<!--                        <a href="" class="avatar"><img src="https://via.placeholder.com/500" class="rounded-circle" alt=""></a>-->
<!--                        <div class="aside-alert-link">-->
<!--                            <a href="" class="new" data-toggle="tooltip" title="You have 2 unread messages"><i data-feather="message-square"></i></a>-->
<!--                            <a href="" class="new" data-toggle="tooltip" title="You have 4 new notifications"><i data-feather="bell"></i></a>-->
<!--                            <a href="" data-toggle="tooltip" title="Sign out"><i data-feather="log-out"></i></a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="aside-loggedin-user">-->
<!--                        <a href="#loggedinMenu" class="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">-->
<!--                            <h6 class="tx-semibold mg-b-0">Katherine Pechon</h6>-->
<!--                            <i data-feather="chevron-down"></i>-->
<!--                        </a>-->
<!--                        <p class="tx-color-03 tx-12 mg-b-0">Administrator</p>-->
<!--                    </div>-->
<!--                    <div class="collapse" id="loggedinMenu">-->
<!--                        <ul class="nav nav-aside mg-b-0">-->
<!--                            <li class="nav-item"><a href="" class="nav-link"><i data-feather="edit"></i> <span>Edit Profile</span></a></li>-->
<!--                            <li class="nav-item"><a href="" class="nav-link"><i data-feather="user"></i> <span>View Profile</span></a></li>-->
<!--                            <li class="nav-item"><a href="" class="nav-link"><i data-feather="settings"></i> <span>Account Settings</span></a></li>-->
<!--                            <li class="nav-item"><a href="" class="nav-link"><i data-feather="help-circle"></i> <span>Help Center</span></a></li>-->
<!--                            <li class="nav-item"><a href="" class="nav-link"><i data-feather="log-out"></i> <span>Sign Out</span></a></li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>&lt;!&ndash; aside-loggedin &ndash;&gt;-->
                <ul class="nav nav-aside">
                    <li class="nav-label">Основное</li>
                    <router-link :to="{name:'pages'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="file-text"></i> <span>Страницы</span></a>
                        </li>
                    </router-link>
                    <li class="nav-label">Контент</li>
                    <router-link :to="{name:'shop'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="shopping-cart"></i> <span>Интернет магазин</span></a>
                        </li>
                    </router-link>
                    <router-link :to="{name:'feedbacks'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="thumbs-up"></i> <span>Отзывы</span></a>
                        </li>
                    </router-link>
                    <router-link :to="{name:'employees'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="users"></i> <span>Сотрудники</span></a>
                        </li>
                    </router-link>
                    <router-link :to="{name:'vacancies'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="briefcase"></i> <span>Вакансии</span></a>
                        </li>
                    </router-link>
                    <router-link :to="{name:'clients'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="share-2"></i> <span>Клиенты</span></a>
                        </li>
                    </router-link>
                    <router-link :to="{name:'actions'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="star"></i> <span>Акции</span></a>
                        </li>
                    </router-link>
<!--                    <router-link :to="{name:'articles'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>-->
<!--                        <li class="nav-item" :class="[isActive && 'active']" >-->
<!--                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="book"></i> <span>Статьи</span></a>-->
<!--                        </li>-->
<!--                    </router-link>-->
                    <router-link :to="{name:'news'}" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="database"></i> <span>Новости</span></a>
                        </li>
                    </router-link>
                    <router-link to="/prices" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="dollar-sign"></i> <span>Прайс</span></a>
                        </li>
                    </router-link>
                    <li class="nav-label">Настройки</li>
                    <router-link to="/settings" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                        <li class="nav-item" :class="[isActive && 'active']" >
                            <a class="nav-link" :href="href" @click="navigate"><i data-feather="settings"></i> <span>Настройки</span></a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </aside>

        <div class="content ht-100v pd-0">
            <div class="content-header">
                <div class="content-search">
                    <i data-feather="search"></i>
                    <input type="search" class="form-control" placeholder="Search...">
                </div>
                <nav class="nav">
                    <a @click.prevent="logout" title="Выход" href="" class="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    </a>
                </nav>
            </div><!-- content-header -->
            <div class="content-body" v-bind:class="this.$route.meta.body_class">
                <perfect-scrollbar style="height: calc(100%);">
                <router-view></router-view>
                </perfect-scrollbar>
            </div>
        </div><!-- content -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // authenticated: auth.check(),
                // user: auth.user
            };
        },
        mounted() {
            // Event.$on('userLoggedIn', () => {
                // this.authenticated = true;
                // this.user = auth.user;
            // });
        },
        methods: {
            logout: function () {
                this.$store.dispatch('logout')
                    .then(() => this.$router.push('/login'))
                    .catch(err => console.log(err));
            }
        }
    }
</script>
