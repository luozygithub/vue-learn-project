<template>
    <div class="movie-item">
        <div class="img-box">
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
        margin:14px 0;
        .img-box{
            img{
                height: 2.6rem;
                width: 100%;
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
                color: orange;
            }
        }
    }
</style>
