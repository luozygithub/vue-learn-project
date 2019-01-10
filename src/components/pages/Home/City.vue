<template>
    <div class="home-city">
        <mt-header title="请选择城市" >
            <router-link to="/Home" slot="left">
                返回
            </router-link>
        </mt-header>   
        <mt-index-list style="z-index:20">
            <mt-index-section index="热门">
                <mt-cell title="北京"></mt-cell>
                <mt-cell title="武汉"></mt-cell>
                <mt-cell title="上海"></mt-cell>
                <mt-cell title="成都"></mt-cell>
                <mt-cell title="厦门"></mt-cell>
                <mt-cell title="深圳"></mt-cell>
                <mt-cell title="广州"></mt-cell>
                <mt-cell title="西安"></mt-cell>
                <mt-cell title="青岛"></mt-cell>
            </mt-index-section>
            <mt-index-section index="A">
                <mt-cell title="阿坝"></mt-cell>
                <mt-cell title="阿克苏"></mt-cell>
            </mt-index-section>
            <mt-index-section index="Z">
                <mt-cell title="枣庄"></mt-cell>
                <mt-cell title="张家界"></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
export default {
    
}
</script>   
<style lang="scss">
    .mint-indexlist-navitem{
        color:#349cec;
    }
</style>
