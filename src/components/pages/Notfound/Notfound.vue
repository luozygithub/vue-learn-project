<template>
    <div class="home">
        Not found
        <button @click="back">
            返回首页
        </button>

    </div>
</template>
<script>
import bus from "../../../modules/bus";
export default {
    methods: {
        back(){
            bus.$emit("setSelect","Home");
            this.$router.push('/home');
        }
    },
}
</script>
<style lang="">
    
</style>