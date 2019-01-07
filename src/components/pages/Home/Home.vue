<template>
    <div class="home">
        <home-header></home-header>
        <Banner banner="app-banner"></Banner>
        <movie-box></movie-box>
        <back-top v-back-top></back-top>
    </div>
</template>
<script>
import Banner from "../../commens/Banner";
import MovieBox from "./MovieBox";
import BackTop from "../../commens/BackTop.vue";
import HomeHeader from "./HomeHeader.vue"
export default {
    components:{
        Banner,MovieBox,BackTop,HomeHeader
    }
}
</script>
<style lang="scss" scoped>
    
</style>