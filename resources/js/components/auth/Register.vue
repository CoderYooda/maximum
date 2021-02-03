<template>
    <div class="content content-fixed content-auth">
        <div class="container">
            <div class="media align-items-stretch justify-content-center ht-100p">
                <div class="sign-wrapper mg-lg-r-50 mg-xl-r-60">
                    <div class="pd-t-20 wd-100p">
                        <h4 class="tx-color-01 mg-b-5">Создайте аккаунт</h4>
                        <p class="tx-color-03 tx-16 mg-b-40">Это займет не более минуты</p>
                        <form @submit.prevent="register">
                            <div class="form-group">
                                <label>Имя</label>
                                <input type="text" class="form-control" v-model="name" required autofocus>
                            </div>
                            <div class="form-group">
                                <label>Почтовый адрес</label>
                                <input type="email" class="form-control" v-model="email">
                            </div>
                            <div class="form-group">
                                <label>Пароль</label>
                                <input type="password" class="form-control" v-model="password" required>
                            </div>
                            <div class="form-group">
                                <label>Подтверждение пароля</label>
                                <input type="password" class="form-control" v-model="password_confirmation" required>
                            </div>
                            <div class="form-group tx-12">
                                При нажатии на кнопку <strong>Создать аккаунт</strong> вы соглашаетесь с правилами сайта.
                            </div><!-- form-group -->

                            <button type="submit" class="btn btn-brand-02 btn-block">Создать аккаунт</button>
                            <div class="tx-13 mg-t-20 tx-center">Уже есть аккаунт?
                                <router-link to="/login" v-slot="{ href, route, navigate, isActive, isExactActive }" custom>
                                    <a :href="href" @click="navigate">войти</a>
                                </router-link>
                            </div>

                        </form>
                    </div>
                </div><!-- sign-wrapper -->
                <div class="media-body pd-y-30 pd-lg-x-50 pd-xl-x-60 align-items-center d-none d-lg-flex pos-relative">
                    <div class="mx-lg-wd-500 mx-xl-wd-550">
                        <img src="https://via.placeholder.com/1280x1225" class="img-fluid" alt="">
                    </div>
                    <div class="pos-absolute b-0 r-0 tx-12">
                        Панель администратора разработал <a href="https://github.com/CoderYooda" target="_blank">CoderYooda</a>
                    </div>
                </div><!-- media-body -->
            </div><!-- media -->
        </div><!-- container -->
    </div>
<!--    <div>-->
<!--        <h4>Register</h4>-->
<!--        <form @submit.prevent="register">-->
<!--            <label for="name">Name</label>-->
<!--            <div>-->
<!--                <input id="name" type="text" v-model="name" required autofocus>-->
<!--            </div>-->
<!--            <label for="email" >E-Mail Address</label>-->
<!--            <div>-->
<!--                <input id="email" type="email" v-model="email" required>-->
<!--            </div>-->
<!--            <label for="password">Password</label>-->
<!--            <div>-->
<!--                <input id="password" type="password" v-model="password" required>-->
<!--            </div>-->
<!--            <label for="password-confirm">Confirm Password</label>-->
<!--            <div>-->
<!--                <input id="password-confirm" type="password" v-model="password_confirmation" required>-->
<!--            </div>-->
<!--            <div>-->
<!--                <button type="submit">Register</button>-->
<!--            </div>-->
<!--        </form>-->
<!--    </div>-->
</template>
<script>

    export default {
        name: "Register",
        data(){
            return {
                name : "",
                email : "",
                password : "",
                password_confirmation : "",
                is_admin : null
            }
        },

        methods: {
            register: function () {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                    is_admin: this.is_admin
                };
                this.$store.dispatch('register', data)
                    .then(() => this.$router.push('/'))
                    .catch(err => console.log(err))
            }
        }
    }
</script>
