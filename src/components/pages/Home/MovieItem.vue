<template>
    <div class="movie-item">
        <!-- <div class="img-box">
            <img v-lazy="movie.images.small" alt="">
        </div>
        <div class="info">
            <div class="info-left">
                <div class="title">{{movie.title}}</div>
                <div class="count">{{movie.collect_count}}人想看</div>
            </div>
            <div class="info-right">
                <div class="cast">{{movie.casts.length>2?movie.casts[0].name:""}}</div>
                <div class="rating">{{movie.rating.average}}分</div>
            </div>
        </div> -->
        <div class="img-box">
            <img v-lazy="movie.images.small" alt="">
        </div>
        <div class="center-content">
            <div class="title">
                <span>{{movie.title}}</span>
                <i class="tpp-lbl-g">
                    <i class="lbl-hdr">3D</i>
                    <i class="lbl">IMAX</i>
                </i>
            </div>
            <div class="rating">淘票票评分：<span class="txt-warning">{{movie.rating.average}}</span></div>
            <div class="director">类型：
                <span v-for="movietype in movie.genres" :key="movietype.id">{{movietype}} &nbsp;</span>
            </div>
            <div class="zhuyan">主演：{{movie.casts.length>0?movie.casts[0].name:""}}</div>
        </div>
        <div class="right">
            <router-link 
                :to="{name:'MovieDetail',params:{id:movie.id}}"
            >
                <mt-button class="mint-button mint-button--danger mint-button--small home-shop-btn">
                    购票
                </mt-button>
            </router-link>
            <div class="act-tag">影城特惠</div>
        </div>
       
    </div>
</template>
<script>

export default {
    props:['movie'],
}
</script>
<style lang="scss" scoped>
    .movie-item{
        padding: 10px 10px 20px 10px;
        display: flex;
        .center-content{
            padding-left: 6px;
            .title{
                font-size:16px;
                color: #111;
                padding-bottom: 6px;
                .tpp-lbl-g {
                    display: inline-block;
                    text-align: center;
                    vertical-align: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    color: #999;
                    background-color: transparent;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    white-space: nowrap;
                    height: 16px;
                    line-height: 16px;
                    padding: 0 4px;
                    position: relative;
                    padding: 0;
                    
                }
                .tpp-lbl-g .lbl-hdr {
                    color: #fff;
                    background-color: #999;
                    border-top-left-radius: 2px;
                    border-bottom-left-radius: 2px;
                }
                .tpp-lbl-g i {
                    font-style: normal;
                    display: inline-block;
                    padding: 0 4px;
                }
                .tpp-lbl-g:after {
                    position: absolute;
                    content: "";
                    top: 0;
                    left: 0;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    border: 1px solid #999;
                    border-radius: 4px;
                    pointer-events: none;
                    -webkit-transform-origin: 0 0;
                    -ms-transform-origin: 0 0;
                    transform-origin: 0 0;
                }
            }
            .rating{
                .txt-warning{
                    color: #fea54c;
                }
               
            }
            width:2rem;
        }
        .img-box{
            width: 0.8rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 2px;
                display: block;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: cover;
            }
        }
        .info{
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            .title{
                font-size: 16px;
                color: #111;
            }
            .rating{
                color: #fea54c;
            }
        }
        .right{
            padding-top:0.4rem;
            .home-shop-btn{
                border-radius: 0.2rem;
                height: 0.3rem;
                width: 0.6rem;
                line-height: 0.3rem;
                font-size:12px;
                background-color: #ff7ba0
            }
            .act-tag{
                color:#999;
            }
        }
    }
</style>
