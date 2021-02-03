<template>
    <div>
        <router-view></router-view>
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
            //Event.$on('userLoggedIn', () => {
                // this.authenticated = true;
                // this.user = auth.user;
            //});
        },
    }
</script>
