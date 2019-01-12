<template>
    <div class="home">
        <home-header></home-header>
        <Banner banner="app-banner"></Banner>
        <div class="advertising">
            <img src="../../../assets/advertising.gif" alt="">
        </div>
        <movie-box></movie-box>
        <back-top v-back-top></back-top>
        <tabBar></tabBar>
    </div>
</template>
<script>
import Banner from "../../commens/Banner";
import MovieBox from "./MovieBox";
import BackTop from "../../commens/BackTop.vue";
import HomeHeader from "./HomeHeader";
import tabBar from "../../commens/Tabbar";
export default {
    components:{
        Banner,MovieBox,BackTop,HomeHeader,tabBar,
    }
}
</script>
<style lang="scss" scoped>
    .advertising{
        width: 100%;
        img{
            width: 100%;
        }
    }
</style>