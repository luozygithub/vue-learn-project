<template>
    <div class="tabbar">
        <tabItem title="首页" mask="home" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_home_normal.png'/>
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt=""/>
        </tabItem>

        <tabItem title="影音" mask="audio" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_audio_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_audio_active.png'/>
        </tabItem>

        <tabItem title="广播" mask="broadcast" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_broadcast_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_broadcast_active.png'/>
        </tabItem>

        <tabItem title="小组" mask="group" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_group_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_group_active.png'/>
        </tabItem>
    
        <tabItem title="我的" mask="mine" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_mine_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_mine_active.png'/>
        </tabItem>
    </div>
</template>

<script>
import tabItem from "./TabItem";

export default {
    components:{tabItem},
    data(){
        return {
            selected:'home',
            
        }
    },
    methods: {
        setSelect(val){
            this.selected=val
        }
    },
}
</script>

<style lang="scss" scoped >
    .tabbar{
        width: 100%;
        display: flex;
        position:absolute;
        bottom: 0;
        height: 60px;
        justify-content: space-around;
    }
    .router-link-active img{
        background: greenyellow;
        background-size: 100%
    }
</style>