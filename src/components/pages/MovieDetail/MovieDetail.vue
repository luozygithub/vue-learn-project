<template>

    <div class="movie-detail">
        <img v-if="isShow" src="" alt="" class="loading-img">
        <div v-if="!isShow" class="MovideDetailBox">
            <div class="content" >
            <!-- 背景盒子 -->
            <div class="back-color">

            </div>
            <!-- 详情内容 -->
            <section class="show-info">
                <div class="poster-wrap">
                    <img :src="movieDetail.images.small" alt="">
                </div>
                <div class="info-container">
                    <div class="movie-name">
                        <p class="chinese">{{movieDetail.title?movieDetail.title:''}}</p>
                        <p class="source">{{movieDetail.original_title?movieDetail.original_title:''}}</p>
                    </div>
                    <div class="movie-detail">
                        <p class="show-intro"><span v-for="(item, index) in movieDetail.genres" :key="index">{{item}}&nbsp;</span>114分钟</p>
                        <p class="show-intro" id="J_more-country-go" data-tap="1">2019-01-04 中国大陆上映 <span class="triangle"></span></p>
                        <p class="show-intro"><span class="want ">20.3万人想看</span>  / ⼤V推荐度 71%<img class="weibo-icon" src="//gw.alicdn.com/tfs/TB1YEz8IxGYBuNjy0FnXXX5lpXa-27-22.png"></p>
                    </div>
                </div>
            </section>
            <div class="show-remark">
                <div class="show-remark-container">
                    <div class="audience-remark-score remark-star-rank">
                        <div class="score">{{movieDetail.rating.average}}</div>
                        <div class="star-rank">
                            <div class="star-rank-inner" style="width:90%;">
                                ☆☆☆☆☆
                            </div>             
                        </div>
                    </div>
                    <!-- conten left -->
                    <div class="remark-bd">
                        <div class="remark-title">淘票票评分</div> 
                        <div class="remark-num" style="color:orange;margin-top:2px">{{movieDetail.ratings_count}}人评</div>
                        <div class="triangle"></div>                        
                    </div>
                </div>
                <div class="remark-container module-wrapper"> 

                </div>
            </div>
        </div>
        <!-- 导航 -->
         <div class="J_tab-container">
            <div class="tab-item">
                <ul class="tab-container" id="J_tab-container">
                    <li data-type="intro" class="active" data-tap="1">简介</li>
                    <li data-type="comment" class="" data-tap="1">影评</li>
                    <li data-type="more" class="" data-tap="1">更多</li>
                </ul>
            </div>
            <div class="line-container">
                <div class="line" id="J_tab-line" style="left: 55px;"></div>
            </div>
        </div>
        <!-- 简介 -->
        <section class="show-desc">
            <p data-tap="1" class="line-limit">
                {{movieDetail.summary}}
            </p>  
            <div class="seg-line">
            </div>
        </section>
        <!-- 演员 -->
        
        <section class="show-artists">
            <h2>演职人员</h2>
            <div class="show-artists-container ">
                <div class="show-artist-list ">
                    <a @click="cast_detail(cast.alt)" class="show-artist" data-tap="1" v-for="(cast, index) in movieDetail.casts" :key="index">
                        <div class="show-poster fn-lazyload">
                            <img :src="getImages(cast.avatars.small)" alt="">
                            <!-- {{cast.avatars.small}} -->
                        </div> 
                        <dl>
                            <dt>{{cast.name}}</dt>
                            <dd class="profession actor">演员</dd>
                           
                        </dl>
                    </a>
                    <div class="show-artist-divider"></div>
                    
                </div>
              
            </div>
        </section>
        </div>
        <div id="J_movieBuy" class="actions-wrap" data-tap="1">
            <a href="javascript:;" jump-native="movieDetail" class="tpp-btn tpp-btn-block btn-select-seat">
                <div>选座购票</div>
            </a> 
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
// import "swiper/dist/css/swiper.min.js"
export default {
    data(){
        return{
            movieDetail:null,
            isShow:true,
            movieId:this.$route.params.id
        }
    },
    methods: {
        getMovieInfo(){  
            this.$http.get("/v2/movie/subject/"+this.movieId).then(res=>{
                this.movieDetail = res.data;
                this.$nextTick(()=>{
                    console.log( this.movieDetail)
                    var swiper = new Swiper('.swiper-container', {
                        slidesPerView: 4,
                        paginationClickable: true,
                        spaceBetween: 30
                    });
                    this.isShow = false;
                });
            })
        },
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        },
        cast_detail(alt){
            location.href= alt;
        }

    },
    created() {
        this.getMovieInfo()
    },
}
</script>
<style lang="scss" scoped>

    //大盒子
    .movie-detail{

        padding-bottom: 0.8rem;
        .content{
            .back-color{
                height: 1.84rem;
                width: 100%;
                background:rgb(64, 99, 144);
            }
            .show-info{
                position: relative;
                margin-top: -30%;
                z-index:10;
                background-color: transparent;
                .poster-wrap{
                    width: 92px;
                    height: 133px;
                    position: absolute;
                    left: 0.22rem;
                    border-radius: 4px;
                    background-color: #fff;
                    padding:2px;
                    img{
                        width: 100%;
        
                    }
                }
                .info-container{
                    .movie-name{
                        font-family: Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,STXihei,SimHei,WenQuanYi Micro Hei,Droid Sans,sans-serif;
                        padding-left: 1.28rem;
                         color:white;
                        .chinese{
                            font-size: 22px;
                            font-weight: bold;
                        }
                    }
                    .movie-detail{
                        height: 80px;
                        margin-top: 10px;
                        padding-left: 1.24rem;
                        padding-top: 0.1rem;
                        background-color: #fff;
                        color: #777;
                        font-size:12px;
                        border-top-left-radius: 12px;
                        border-top-right-radius: 12px;
                        .show-intro{
                            white-space: nowrap;
                            .weibo-icon{
                                height: 3.33333333vw;
                                width: 4vw;
                                display: inline-block;
                                margin-top:3px;
                            }
                        }
                       
                    }
                }
                .want{
                    font-weight: bold;
                }
            }
            
        }
        
    }

    .show-remark{
        padding-left: 0.24rem;
       
        .show-remark-container{

            .audience-remark-score {
                display:flex;
                .score{
                    
                    color: #333;
                    font-weight: 500;
                    
                    font-size: 0.28rem;
                    display: inline;
                }
                .star-rank{
                    star-rank-inner{
                        height: 100%;
                        background-size: 16px 100%;
                        background-image: url();
                    }
                }
                .star-rank-inner{
                    padding-top:10px;
                    padding-left: 5px;
                }
            }
            
        
        }
        .remark-bd{
            display: flex;
            .remark-title{
                font-weight: bold;

            }
            .remark-num {
                padding-left:5px;
                font-size: 12px;
                color: #777;
                opacity: .7;
            }
        }
    
    }
    //导航
    .J_tab-container{
        height: 0.46rem;
        line-height: 0.46rem;
        .tab-container{
            display: flex;
            justify-content: space-around;
            li{
               font-size: 18px;
            }
        }
        //hr
        .line-container{
            height: 2px;
            position: relative;
            #J_tab-line{
                position: absolute;
                top: 0;
                width: 15px;
                height: 2px;
                border-radius: 100px;
                background-color: #000;
                -webkit-transition: .5s;
                transition: .5s;
            }
            
        }
        .line-container:after{
            pointer-events: none;
            position: absolute;
            content: "";
            height: 1px;
            background: #ededed;
            left: 0;
            right: 0;
            bottom: 0;
            transform-origin: 100% 100%;
        }
        
    }
    //简介
    .show-desc {
       
        position: relative;
        width: 100%;
        padding-top: .9375rem;
        padding-top: 4vw;
        border-bottom: 0!important;
        p {
         
            text-align: justify;
            display: inline-block;
            position: relative;
            margin-bottom: .75rem;
            margin-bottom: 3.8vw;
            font-size: 15px;
            line-height: 1.5625rem;
            line-height: 7.8vw;
            color: #333;
            overflow: hidden;
            margin-left: 16px;
            margin-right: 16px;
        }
    }
    body .seg-line:after, html .seg-line:after {
        pointer-events: none;
        position: absolute;
        content: "";
        height: 1px;
        background: #ededed;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
    }
    //演员
    section h2 {
        font-size: 16px;
        line-height: 2rem;
        line-height: 10vw;
        padding-top: .5rem;
        padding-top: 2.5vw;
        color: #000;
        font-weight: 700;
        padding-left: 16px;
    }
    //cast-list
    .show-poster{
        width: 87px;
        height: 120px;
        // background: red;
        img{
            width: 87px;
            height: 120px;
        }
       
    }
    .show-artist{
        margin-right: 0.1rem;
        cursor: pointer;
    }
    .show-artists-container{
        margin-left: 16px;
        position: relative;
        overflow-x: scroll;
        
        .show-artist-list{
            display:flex;
            padding-right: 5vw;
            white-space: nowrap;
            overflow:auto;
            .show-artist {
                display: block;
                width: 5.4375rem;
                width: 23.2vw;
                vertical-align: top;
                text-align: center;
            }
        }
    }
    //选座购票
    .actions-wrap {
        position: fixed!important;
        width: 100%;
        z-index: 99;
        bottom: 0;
        left: 0;
        right: 0;
        height: 55px;
        background-image: linear-gradient(45deg,#ff7ba0,#ff4d64);
        text-align: center;
        .tpp-btn{
            height: 55px;
            width: 100%;
            line-height: 55px;
           
            div{
                font-size: 18px;
                color:white;
            }
        }
    }
</style>
