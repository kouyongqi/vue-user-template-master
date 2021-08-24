<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>

    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">

        <el-form-item class="input-prepend restyle" prop="mobile" :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]">
          <div >
            <el-input type="text" placeholder="手机号" v-model="user.mobile"/>
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>

        <el-form-item class="input-prepend" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <div>
            <el-input type="password" placeholder="密码" v-model="user.password"/>
            <i class="iconfont icon-password"/>
          </div>
        </el-form-item>

        <div class="btn">
          <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li><a id="weixin" class="weixin" target="_blank" href="http://localhost:9001/api/ucenter/wx/login"><i class="iconfont icon-weixin"/></a></li>
          <li><a id="qq" class="qq" target="_blank" href="#"><i class="iconfont icon-qq"/></a></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'
  import cookie from 'js-cookie'
  import { userLogin,getUserInfo} from '/api/login'
  export default {
    layout: 'sign',

    data () {
      return {
        user:{
          mobile:'',
          password:''
        },
        loginInfo:{}
      }
    },

    methods: {
      submitLogin(){
         userLogin(this.user)
           .then(response =>{
               //登录成功，将token信息(字符串)放在请求头的cookie中(作用域是localhost请求)
               cookie.set("guli_token",response.data.data.token,{domain:"localhost"})

               //向请求头中放入token后，获取用户信息(需要先后顺序)
               getUserInfo()
               .then(response =>{
                    //此时返回的是json对象(vue对josn字符串做了封装)
                    this.loginInfo = response.data.data.memberinfo

                    //将用户信息放入cookie中(先把json对象转为json字符串)
                    cookie.set("guli_ucenter",JSON.stringify(response.data.data.memberinfo),{domain:"localhost"})

                    //跳转页面到首页
                    this.$router.push({path:'/'})
               }) 
           })
      },

      checkPhone (rule, value, callback) {
        //debugger
        if (!(/^1[34578]\d{9}$/.test(value))) {
          return callback(new Error('手机号码格式不正确'))
        }
        return callback()
      }
    }
  }
</script>
<style>
   .el-form-item__error{
    z-index: 9999999;
  }
</style>