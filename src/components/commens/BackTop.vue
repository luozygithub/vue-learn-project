<template>
    <div class="back-top-box" v-if="isShow">
        <transition
            enter-active-class="animated bounce"
            leave-active-class="animated fadeOut"
        >
            <div class="back-top">
                <i class="fa fa-chevron-up"></i>
            </div>
        </transition>
        
    </div>
</template>
<script>
export default {
    
    data(){
        return {
            isShow:false
        }
    },
    created() {
        window.addEventListener("scroll",()=>{
            if(document.documentElement.scrollTop > 200){
                if(!this.isShow){
                    this.isShow = true;
                }
            }else{
                if(this.isShow){
                    this.isShow = false;
                }
            }
        })
    },
}
</script>
<style lang="scss" scoped>
    .back-top-box{
        position: fixed;
        right: 15px;
        bottom: 0.75rem;
        .back-top{
            width: 0.5rem;
            height: 0.5rem;
            background: rgba(0,0,0,0.7);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-size: 22px;
        }
    }
</style>
