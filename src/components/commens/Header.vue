<template>
    <div class="app-header">
       <div class="header-left">
           <i :class="['fa', 'fa-' + logo]"></i>
           {{title}}
       </div>
       <div class="header-right">
           <i class="fa fa-map-marker"></i>
           城市
       </div>
    </div>
</template>
<script>
import router from "../../router";
export default {
    data(){
        return {
            title:"淘票票首页",
            logo:'home'
        }
    },
    methods: {
        setTitle(name){
            switch(name){
                case 'Home': this.title = "淘票票首页"; this.logo = 'home';
                    break;
                case 'Audio': this.title = "淘票票影音"; this.logo = 'audio-description'
                    break;
                case 'Broadcast': this.title = "淘票票广播"; this.logo = 'bullhorn'
                    break;
                case 'Group': this.title = "淘票票团队"; this.logo = 'users'
                    break;
                case 'Mine': this.title = "我的"; this.logo = 'user'
                    break;
            }
    
        }
    },
    created() {
        this.setTitle(this.$route.name);
        router.beforeEach((to,from,next)=>{
            this.setTitle(to.name);
            next();
        });
    },
    
}
</script>
<style lang="scss" scoped>
    .app-header{
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: fixed;
        z-index: 10;
        top:0;
        color: white;

        .header-left{
            float: left;
        }
        .header-right{
            float: right;
        }
        padding: 0 10px;
        background: rgb(37, 0, 0);
    }
</style>
