<template>
     <div class="home pt50">
        <!--
        Mine
        <p>num:{{this.$store.state.num}}</p>
        <p>_num:{{_num}}</p>
        <p> doubleNum:{{this.$store.getters.doubleNum}} doublueNum2:{{doubleNum}}</p>
        <p>CHANGE_NUM: <mt-button @click="CHANGE_NUM" type="primary">add</mt-button></p>
         <mt-button @click=""></mt-button> 
        <car/>
        <list/>
        <router-view></router-view>
        -->
         <tabBar></tabBar>
    </div> 
</template>
<script>
import tabBar from "../../commens/Tabbar";
export default {
    components:{
        tabBar,
    }
}
// import {mapState, mapGetters,mapMutations} from "vuex";

// export default {
//     components:{
    
//     },
//     computed:{
//         ...mapState({
//             _num:(state)=>state.num
//         }),
//         ...mapGetters(["doubleNum"]),

//     },
//     methods: {
//         ...mapMutations([CHANGE_NUM]),
//         clickRandom(){
//             this.$store.dispatch("getNumFromBackEnd");
//         }
//     },
// }
</script>
<style lang="scss" scoped>
  
</style>