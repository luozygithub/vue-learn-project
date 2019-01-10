<template>
    <div class="tabbar">
        <tabItem title="热映" mask="Home" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_home_normal1.png'/>
            <img slot="activeImg" src="../../assets/ic_tab_home_active1.png" alt=""/>
        </tabItem>

        <tabItem title="影院" mask="Audio" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_audio_normal1.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_audio_active1.png'/>
        </tabItem>

    
        <tabItem title="我的" mask="Mine" @setSelect="setSelect" :sel="selected">
            <img slot='normalImg' src='../../assets/ic_tab_mine_normal1.png'/>
            <img slot='activeImg' src='../../assets/ic_tab_mine_normal1.png'/>
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
        height: 0.5rem;
        justify-content: space-around;
        background: white;
        z-index: 10;
    }
    .router-link-active img{
        width:80%;
      
    }
</style>