<template>
    <div class="movie-box"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <img  v-if="isShow" src="" alt="" class="loading-img">
        <movie-item
            v-for="movie in movies"
            :key="movie.id"
            :movie="movie"
        ></movie-item>
    </div>
</template>
<script>
import MovieItem from "./MovieItem";
import { Toast } from 'mint-ui';
export default {
    components:{
        MovieItem,
    },
    data(){
        return {
            movies:[],
            count: 6,
            isShow: true,
            loading:false,//让无限滚动触发
            start:0,
            hasMore:true
        }
    },
    methods: {
        getMovies(){
            let toast = Toast({
                message: '正在加载中...',
                duration:-1,
                iconClass: 'fa fa-cog fa-spin'
            });
            this.$http.get("/v2/movie/in_theaters?",{
                params:{
                    count:this.count,
                    start:this.start
                }
            }).then(res=>{
                this.movies = this.movies.concat(res.data.subjects);
                // console.log(res);//test
                this.start+=6;
                this.$nextTick(()=>{
                    this.isShow = false;//加载图片隐藏
                    toast.close();
                    let total = res.data.total;
                    if(total - this.start <= 0){
                        this.hasMore = false;
                        return false;
                    }
                    this.loading = false;//开启无限滚动
                });
                

            })
        },
        loadMore() {
            if(!this.hasMore){
                Toast({
                    message: '数据加载完毕！',
                    iconClass: 'fa fa-check',
                    duration: 2000,
                    position: 'bottom',
                });
                return false;
            }
            this.loading = true;//关闭无限滚动
            this.getMovies()
        }
    },
    created() {
     
    },
}
</script>
<style lang="scss" scoped>
    .movie-box{
        padding-bottom: 0.5rem;
    }
</style>
