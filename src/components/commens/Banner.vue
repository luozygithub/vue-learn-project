<template>
    <div class='banner'>
        <div class="swiper-container" :class="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                    v-for="banner in banners"
                    :key="banner.id"
                >
                    <img :src="banner.img" alt="">
                </div>
        
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
export default {
    props:{
        isLoop:{
            default:true,
            type:Boolean
        },
        banner:{
            default:"my-banner",
            type:String
        }
    },
    data(){
        return {
            banners:[]
        }
    },
    methods: {
        getBanners(){
            this.$http.get("/static/json/banner.json").then(res=>{
                this.banners = res.data;
                console.log(this.banners)
                this.$nextTick(()=>{
                   var mySwiper = new Swiper ('.'+this.banner, {
                        loop: this.isLoop, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    })       
                })
            })
        }
    },
    created() {
        this.getBanners();
    },
}
</script>

<style lang="scss" scoped>
    .swiper-container{
        img{
            width: 100%;
            height: 1.6rem;
        }

    }
    
</style>