<template>
    <div class="loading" v-bind:class="{'load' : this.$store.getters.loading}">
        <component :is="layout" />
<!--        <login/>-->
<!--        <Dialogs/>-->
    </div>
</template>

<script>
    import MainLayout from './layouts/MainLayout'
    import AuthLayout from './layouts/AuthLayout'

    export default {
        data: ()=> {
            return {
                echo:null,
            }
        },
        mounted() {
            this.$eventBus.$on('TooManyAttempts', ()=>{
                // this.$notify({
                //     group: 'main',
                //     title: 'Ошибка сервера!',
                //     text: 'Слишком много запросов, повторите попытку позже.'
                // });
            });
            // this.loadSettings();
            // this.loadStores();
            window.feather.replace();
        },
        created(){
            // let token = this.getFromLocalStorage('api_token');
            // let user_id = this.getFromLocalStorage('user_id');
            // let company_id = this.getFromLocalStorage('company_id');
            // if(token && user_id){
            //     this.echo = new Echo({
            //         broadcaster: 'socket.io',
            //         auth: {
            //             headers: {
            //                 Authorization: 'Bearer ' + token
            //             }
            //         },
            //         host: window.location.hostname + ':6001',
            //     });
            //     this.echo
            //         .private('system_message.' + user_id)
            //         .listen('SystemMessage', (data)=>{
            //             this.$eventBus.$emit('systemMessage', data);
            //             // let audio = new Audio('/sounds/system_message.mp3');
            //             // audio.play();
            //         });
            //     this.echo
            //         .private('company.' + company_id)
            //         .listen('SettingsUpdated', (data)=>{
            //             this.updateSetting(data.setting);
            //         });
            // } else {
            //     console.warn('API токен не выдан, возможно Вы не авторизованы в системе');
            // }

        },
        methods: {
            // loadSettings(){
            //     window.axios({
            //         method: 'get',
            //         url: '/settings',
            //     }).then((resp) => {
            //         this.saveToLocalStorage('settings', resp.data);
            //     });
            // },
            // loadStores(){
            //     window.axios({
            //         method: 'get',
            //         url: '/stores',
            //     }).then((resp) => {
            //         this.saveToLocalStorage('stores', resp.data);
            //     });
            // },
            // updateSetting(setting){
            //     let local_settings = this.getFromLocalStorage('settings');
            //     let index = _.findIndex(local_settings, function(o) { return o.id === setting.id; });
            //     if (index < 0){
            //         local_settings.push(setting)
            //     } else {
            //         local_settings[index] = setting;
            //     }
            //     this.saveToLocalStorage('settings', local_settings);
            //     this.$eventBus.$emit('SettingUpdated', setting);
            // }
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || 'main') + '-layout'
            },
        },
        components: {
            MainLayout,
            AuthLayout
        }
    }
</script>
