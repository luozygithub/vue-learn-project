<template>
    <div class="login">
        <div class="logo tb-logo">
            <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt="">
        </div>
        <div class="login-from">
            <div class="am-list">
                <div class="am-list-item">
                    <div class="am-list-control">
                        <input type="text" class="am-input-required" name="TPL_username" placeholder="手机号/邮箱/会员名" value="" id="username">
                    </div>
                    <div class="am-list-action"><i class="am-icon-clear"></i></div>
                </div>
                <div class="am-list-item">
                    <div class="am-list-control">
                        <input type="password" class="am-input-required am-input-required-password" name="TPL_password" placeholder="请输入密码" value="" id="password">
                    </div>
                    <div class="am-list-action am-list-action-password"><i class="am-icon-clear"></i></div>
                    <div class="pwd-show iconfont" id="show-pwd"></div>
                </div>
            </div>
            <div class="am-footer">
                <a href="" class="duanxin">短信验证码登录</a>
                 <a href="" class="register">免费注册</a>
            </div>
            <button type="submit" class="am-button am-button-submit" id="btn-submit">登 录</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .login{
        
        .logo{
            padding-top: 0.5rem;
            display: flex;
            justify-content: center;
            align-content: center;
            img{
                width:0.8rem;
                height: 0.8rem;
            }
        }
        .am-list {
   
            position: relative;
            margin: 0 auto;
            font-size: .42666667rem;
            color: #333;
            padding:0 0.2rem;
        }
        .am-list-item {
            position: relative;
            width: 100%;
            margin: 0.3rem 0 0;
            border-bottom: 1px solid #ff5000;

        }
        .am-input-required {
            font-size: 16px;
            width: 100%;
            outline: none;
            border: 0;
            color: #333;
            height: 0.4rem;
        }
        .am-footer{
             padding:0.05rem 0.2rem;
             
             .duanxin{
                 font-size:14px;
             }
             .register{
                  font-size:14px;
                 float: right;
             }
        }
        .am-button-submit {
            background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
            color: #fff;
            box-shadow: 0 0.08rem 0.16rem #f7c7b1;
       

        }
        .am-button {
            font-size: .2rem;
            width: 80%;
            height: 0.5rem;
            line-height: 0.4rem;
            border-radius: .2rem;
            text-align: center;
            position: relative;
            border: 0;
            top:0.4rem;
            left: 0.4rem;
        }
    }
</style>
