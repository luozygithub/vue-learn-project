<template>
  <div class="home-header">
    <!-- <mt-header title="正在热映">
      <router-link to="/Home/City" slot="left" class="left">
        <img src="../../../assets/logo-icon.png" alt>
        城市
      </router-link>
      
    </mt-header> -->
    <header class="home-header-1">
        <router-link to="/Home/City" >
            <div class="left">
                <img src="../../../assets/logo-icon.png" alt="">
                <span class="home-city"> 城市</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </router-link>
        <div class="right">
            <div class="is-hit">正在热映</div>
            <div class="coming-soon">即将上映</div>
        </div>
    </header>
  </div>
  
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.mint-header {
  background-color: #fff;
  color: #777;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 0.3rem;
    }
    font-size: 16px;
  }
}
.home-header-1 {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
    justify-content: space-between;
    .left{
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 0.3rem;
        }
        font-size: 16px;
        .home-city{
            padding-left: 0.12rem;
            font-weight: bold;
            font-size: 14px;
        }
        
    }
    .right{
        padding-right: 0.2rem;
        display: flex;
        color:#777;
        .is-hit{
            font-weight: bold;
            color: #ff4d64;
            
        }
        .coming-soon{
            padding-left:0.1rem;
           
        }
        .is-hit:after{
            content:'';
            display:block;
            width:20px;
            margin-left: 18px;
            margin-top:5px;
            border-bottom:2px solid #ff4d64;
        }
    }
}

</style>

