<template>
    <section>
        <Header />
        <Aside />
        <router-view />
    </section>
</template>

<script>

    import Header from './layout/header';
    import Aside from './layout/aside';
    import './assets/scss/style.scss'
    import "material-icons/iconfont/material-icons.scss";
    
    export default {
    
        components:{
            Header,
            Aside
        },
        name: 'App',

    }
</script>
