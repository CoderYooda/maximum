<template>
    <div class="content content-fixed content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p">
                <div class="sign-wrapper mg-lg-r-50 mg-xl-r-60">
                    <div class="pd-t-20 wd-100p">
                        <h4 class="tx-color-01 mg-b-5">Вход в аккаунт</h4>
                        <p class="tx-color-03 tx-16 mg-b-40">С возвращением! Авторизуйтесь для продолжения.</p>
                        <form @submit.prevent="login" class="needs-validation">
                            <div class="form-group">
                                <label>Почтовый адрес</label>
                                <input @keydown="$store.commit('clear_auth_request')" type="text" class="form-control" v-bind:class="{'is-invalid' : !!this.$store.getters.login_email_error}" v-model="email" autofocus>
                                <div v-if="!!this.$store.getters.login_email_error" class="invalid-feedback">{{ this.$store.getters.login_email_error[0] }}</div>
                            </div>
                            <div class="form-group">
                                <label>Пароль</label>
                                <input @keydown="$store.commit('clear_auth_request')" type="password" class="form-control" v-bind:class="{'is-invalid' : !!this.$store.getters.login_password_error}" v-model="password">
                                <div v-if="!!this.$store.getters.login_password_error" class="invalid-feedback">{{ this.$store.getters.login_password_error[0] }}</div>
                            </div>
                            <button type="submit" class="btn btn-brand-02 btn-block">Войти</button>
                            <div class="tx-13 mg-t-20 tx-center">Нет аккаунта?
                                <router-link to="/register" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                                    <a :href="href" @click="navigate">создать аккаунт</a>
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div><!-- sign-wrapper -->
                <div class="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
                    <div class="mx-lg-wd-500 mx-xl-wd-550">
<!--                        <img src="https://via.placeholder.com/1280x1225" class="img-fluid" alt="">-->
                    </div>
                    <div class="pos-absolute b-0 r-0 tx-12">
                        Панель администратора разработал <a href="https://github.com/CoderYooda" target="_blank">CoderYooda</a>
                    </div>
                </div><!-- media-body -->
            </div><!-- media -->
        </div><!-- container -->
    </div>
<!--    <div>-->
<!--        <form class="login" @submit.prevent="login">-->
<!--            <h1>Sign in</h1>-->
<!--            <label>Email</label>-->
<!--            <input required v-model="email" type="email" placeholder="Name"/>-->
<!--            <label>Password</label>-->
<!--            <input required v-model="password" type="password" placeholder="Password"/>-->
<!--            <hr/>-->
<!--            <button type="submit">Login</button>-->
<!--        </form>-->
<!--    </div>-->
</template>
<script>
    // import auth from '../auth.js';

    export default {
        name: "Login",
        data(){
            return {
                email : "",
                password : ""
            }
        },

        methods: {
            login: function () {
                let email = this.email;
                let password = this.password;
                this.$store.dispatch('login', { email, password })
                    .then(() => {
                        this.$router.push('/');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
</script>
