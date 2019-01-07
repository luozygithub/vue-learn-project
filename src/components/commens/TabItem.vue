<template>
    <div class="tabitem" @click="clickItem">
        <span v-show="!flag"><slot name="normalImg"></slot><span ><i>{{title}}</i></span></span>
        <span v-show="flag"><slot name="activeImg"></slot><span class="activeTitle"><i>{{title}}</i></span></span>
        
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
        },
        
    },
    beforeRouteEnter (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
        // setSelect(to.name)
        console.log(111)
        next()
    },
    // created() {
    //       this.$emit("setSelect",this.mask);
    // },
     
 
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
    .activeTitle{
        color:green;
    }
</style>