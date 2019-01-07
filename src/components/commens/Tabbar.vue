<template>
    <div class="tabbar">
        <tabItem title="首页" mask="Home" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_home_normal.png'/>
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt=""/>
        </tabItem>

        <tabItem title="影音" mask="Audio" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_audio_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_audio_active.png'/>
        </tabItem>

        <tabItem title="广播" mask="Broadcast" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_broadcast_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_broadcast_active.png'/>
        </tabItem>

        <tabItem title="小组" mask="Group" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_group_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_group_active.png'/>
        </tabItem>
    
        <tabItem title="我的" mask="Mine" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_mine_normal.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_mine_active.png'/>
        </tabItem>
    </div>
</template>

<script>
import tabItem from "./TabItem";
import bus from "../../modules/bus";
export default {
    components:{tabItem},
    data(){
        return {
            selected:this.$route.name,

        }
    },
    methods: {
        setSelect(val){
            this.selected=val
        }
    },
    created() {
        bus.$on("setSelect",this.setSelect)
    },
    watch: {
        $route(to, from){
            this.selected = to.name;
        }
    },
    
}
</script>

<style lang="scss" scoped >
    .tabbar{
        width: 100%; 
        display: flex;
        position:fixed;
        bottom: 0;
        height: 60px;
        justify-content: space-around;
        background: white;
    }
    .router-link-active img{
        background: greenyellow;
        background-size: 100%
    }
</style>