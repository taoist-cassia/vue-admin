<template>
   <div id="layout">
        <LayoutHeader />
        <LayoutNav />
        <LayoutMain />
   </div>
</template>

<script>
    import LayoutNav from './Components/Nav.vue';
    import LayoutMain from './Components/Main.vue';
    import LayoutHeader from './Components/Header.vue';
    
    export default{
        name:'layout',
        components:{
            LayoutNav,
            LayoutMain,
            LayoutHeader
        },
        setup(){

        }
    }
</script>

<style lang="scss" scoped>

</style>