<template>
    <div class="tabitem" @click="clickItem">
        <span v-show="!flag"><slot name="normalImg"></slot></span>
        <span v-show="flag"><slot name="activeImg"></slot></span>
        <span><i>{{title}}</i></span>
        
    </div>
</template>

<script>
export default {
    props:['title','mask','sel'],
    data(){
        return {
       
        }
    },
    methods: {
        clickItem(){
            this.$emit("setSelect",this.mask);
            this.$router.push('/'+this.mask)
        }
    },
    computed: {
        flag(){
            if(this.mask === this.sel){
                return true;
            }
            return false;
        }
    },

}
</script>

<style lang="scss" scoped>

    .tabitem{
        display: flex;
        flex-direction: column;
        width: 40px;
        span{
            img{
                width: 100%;
            }
        }
        height: 50px;
        
        text-align: center;

    }
</style>