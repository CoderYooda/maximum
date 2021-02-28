import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let router =  new Router({
    mode: 'history',
    base: '/admin/',
    redirect: '/admin/dashboard',
    routes: [
        {
            path: '/login',
            name: 'login',
            meta: {layout: 'auth'},
            component: () => import(/* webpackChunkName: "Login" */ './components/auth/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            meta: {layout: 'auth'},
            component: () => import(/* webpackChunkName: "Register" */ './components/auth/Register.vue')
        },
        {
            path: '/',
            redirect: '/dashboard',
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {layout: 'main'},
            component: () => import(/* webpackChunkName: "Dashboard" */ './components/pages/Dashboard.vue')
        },
        {
            path: '/site',
            name: 'site',
            redirect: '/site/pages',
            meta: {layout: 'main'},
            component: () => import(/* webpackChunkName: "Site" */ './components/pages/Site.vue'),
            children:[
                {path: '/site/pages',               name: 'pages', meta: {layout: 'main', title: 'Страницы сайта'},            component: () => import(/* webpackChunkName: "Pages" */ './components/pages/site/Pages'), props: true},
                {path: '/site/company',             name: 'company', meta: {layout: 'main', title: 'Раздел "Компания"'},            component: () => import(/* webpackChunkName: "About" */ './components/pages/site/Company'), props: true},
                {path: '/site/catalog',             name: 'catalog', meta: {layout: 'main', title: 'Каталог товаров'},              component: () => import(/* webpackChunkName: "Catalog" */ './components/pages/site/Catalog'), props: true},
                {path: '/site/contacts',            name: 'contacts', meta: {layout: 'main'},           component: () => import(/* webpackChunkName: "Contacts" */ './components/pages/site/Contacts'), props: true},
                {path: '/site/farm',                name: 'farm', meta: {layout: 'main'},               component: () => import(/* webpackChunkName: "Farm" */ './components/pages/site/Farm'), props: true},
                {path: '/site/info',                name: 'info', meta: {layout: 'main'},               component: () => import(/* webpackChunkName: "Info" */ './components/pages/site/Info'), props: true},
                {path: '/site/main',                name: 'main', meta: {layout: 'main'},               component: () => import(/* webpackChunkName: "Main" */ './components/pages/site/MainPage'), props: true},
                {path: '/site/prices',              name: 'prices', meta: {layout: 'main'},             component: () => import(/* webpackChunkName: "Prices" */ './components/pages/site/Prices'), props: true},
                {path: '/site/services',            name: 'services', meta: {layout: 'main'},           component: () => import(/* webpackChunkName: "Farm" */ './components/pages/site/services'), props: true},
            ]
        },
        {
            path: '/site/pages/:id?',
            name: 'page',
            component: () => import(/* webpackChunkName: "Page" */ './components/pages/site/Page'),
            meta: {layout: 'main'},
            props: true
        },
        {
            path: '/shop/category/:category_id?',
            name: 'shop',
            props: true,
            meta: {layout: 'main', body_class: 'pd-0'},
            component: () => import(/* webpackChunkName: "Shop" */ './components/pages/Shop.vue'),
        },
        {
            path: '/shop/product/:product_id?/edit',
            name: 'product',
            props: true,
            meta: {layout: 'main'},
            component: () => import(/* webpackChunkName: "Product" */ './components/pages/Product.vue'),
        },
        {
            path: '/shop/category/:category_id?/edit',
            name: 'category',
            props: true,
            meta: {layout: 'main'},
            component: () => import(/* webpackChunkName: "Category" */ './components/pages/Category.vue'),
        },
        {
            path: '/settings',
            name: 'settings',
            meta: {layout: 'main'},
            component: () => import(/* webpackChunkName: "Settings" */ './components/pages/Settings.vue')
        },
        { path: '*', redirect: '/' },
    ]
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('token');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});

export default router;
