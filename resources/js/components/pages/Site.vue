<template>
    <router-view @titleSet="titleSet"></router-view>
</template>
<script>
    export default {
        name: "Site",
        data() {
            return {
                tabs : [],
                title : 'Новая страница',
                modules : [
                    // {name : 'Benefits', component: () => import(/* webpackChunkName: "Benefits" */ "../modules/Benefits")},
                    // {name : 'Callback', component: () => import(/* webpackChunkName: "Callback" */ "../modules/Callback")},
                ]
                // username: '',
                // password: '',
            };
        },

        methods: {
            titleSet(title){
                this.title = title;
            },
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                });
            }
        }
    }
</script>
