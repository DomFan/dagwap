<template>
  <div>
    <div class="header">
      <div class="login_bg">
        <!--头部 回退键 注册-->
        <div class="head-top rela ftc">
          <!--<router-link to="/home" class="aback page-top"></router-link>-->
          <a class="aback page-top" href="javascript:void(0)" onclick="history.go(-1)"></a>
          <div class="zfont ft16 block">
            <!--<a class="afff" href="javascript:;">注册</a>-->
            <router-link class="afff" to="/register">注册</router-link>
          </div>
        </div>

        <!--中间logo图-->
        <div class="mlogo">
          <img src="./logo.png" alt="login">
        </div>

        <!--普通登陆 / 动态登陆-->
        <div class="es_por4">
          <ul id="tags4" class="login_style clearfix">
            <li class="selectTag4" @click="showOrNot(true)">
              <a href="javascript:void(0)">普通登陆</a>
              <i v-if="isShow"></i>
            </li>
            <li @click="showOrNot(false)">
              <a href="javascript:void(0)">手机动态密码登陆</a>
              <i v-if="notShow"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <div class="bgfff">
      <div class="mformBox">
        <div id="Content">
          <form method="post" id="login_form" action="" v-show="isShow">
            <input type="hidden" name="formhash" value="701c8b7767">
            <input type="hidden" id="referer" name="referer" value="https://wap.epet.com/user/UserCenter.html">
            <input type="hidden" name="inajax" value="1">
            <input type="hidden" value="3ejcjDu8D38Vx7d6">
            <input type="hidden" value="" name="imgkey">
            <input type="hidden" value="" name="moid">
            <input type="hidden" value="0" name="yzm">
            <input type="hidden" name="login_fromway" value="2">
            <div class="Content4" id="Content0">
              <ul class="mform">
                <li>
                  <span class="mNameIco"></span>
                  <input v-model="username" type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input v-model="password" type="password" placeholder="输入密码" class="text" name="password" id="password">
                </li>
              </ul>
            </div>
          </form>



          <form method="post" id="newlogin_form" action="" v-show="notShow">
            <input type="hidden" name="formhash" value="36e8fd4a68">
            <input type="hidden" id="referer" name="referer" value="https://wap.epet.com/user/UserCenter.html">
            <input type="hidden" name="inajax" value="1">
            <input type="hidden" name="login_fromway" value="2">
            <input type="hidden" value="" name="moid">
            <input type="hidden" value="n1yYdnOLkobYn2nl">
            <div class="Content4" id="Content1">
              <ul class="mform">
                <li>
                  <span class="mNumIco"></span><input @blur="show" type="text" placeholder="已注册的手机号" class="dttext" name="phone" id="bdphone">
                </li>
                <li>
                  <span class="mpasswordIco"></span><input type="text" placeholder="请输入图片内容" class="dttext" name="varify" id="varify">
                  <span style="display:block;position: absolute;top:5px;right:0px;">
                    <img src="./seccode.jpg" name="varify" class="codevar" align="absbottom" onclick="EpetWeixin.login.freshcode(this,85,30)">
                  </span>
                </li>
                <li>
                  <span class="mpasswordIco"></span>
                  <input type="text" class="dttext" placeholder="动态密码" name="code" id="code" style="padding-right:8.5em;">
                  <a class="get_phonepass afff ft14 w9 nocode" style="display:none;margin-right:0px">()短信已发送</a>
                  <a href="javascript:void(0);" onclick="EpetWeixin.login.getDynamicCode(this)" class="get_phonepass afff ft12 " id="scodebtn">获取动态密码</a>
                </li>
              </ul>
              <div class="forget_pass"></div>
            </div>
          </form>
        </div>
      </div>

      <div class="ftc" style="padding-left: 2em;padding-right: 2em;">
        <a href="javascript:;" class="btn-register ft14 forget pull-right">忘记密码？</a>
        <div class="clear"></div>
      </div>
      <div class="picture-yz"></div>
      <div class="ftc pt5 loginbtn" id="Content0_btn">
        <a href="javascript:void(0)" @click="checkin" class="btn-login afff" style="margin:0 4%">登 录</a>
      </div>
      <div class="ftc pt5 loginbtn" id="Content1_btn" style="display:none">
        <a href="javascript:void(0)" @click="checkin" class="btn-login afff" style="margin:0 4%">登 录</a>
      </div>
      <div class="ftc pt5 loginbtn" id="login_loading" style="display:none">
        <a href="javascript:void(0)" class="btn-login afff" style="margin:0 4%">正在登录</a>
        </div>
      <div class="ft12 c666 ftc mt5">APP专享:E宠团5折包邮,首单满99送99
        <a href="javascript:;" class="cblue">去下载</a>
      </div>
      <div style="height:10em"></div>
      <div class="other-login">
        <div class="ftc ft16 mt c666 partners">
          <b>合作网站登录</b>
        </div>
        <ul class="uList1 clearfix">
          <li>
            <a href="javascript:;">
              <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
            </a>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import {MessageBox} from 'mint-ui'
  export default {
    data () {
      return {
        isShow: true,
        notShow: false,
        username: '',
        password: ''
      }
    },

    methods: {
      showOrNot (isShow) {
        this.isShow = isShow
        this.notShow = !isShow
      },

      show () {
        console.log('xxxx')
      },

      checkin () {
        const username = this.username.trim()
        const password = this.password.trim()
        const url = `/api/login?username=${username}+password=${password}`
        axios.get(url)
          .then(response => {
            const result = response.data
            this.data = result.data
            /* console.log('vue-resource', this.data) */
            /* console.log('vue-result', result.data) */
            let index = result.data.findIndex(item => {
              return item.username === username && item.password === password
            })
            if (index === -1) {
              MessageBox('登陆失败')
            } else {
              MessageBox('登陆成功')
            }
          })
        this.username = ''
        this.password = ''
      }
    },

    mounted () {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
div
  font-size 12px
  .header
    .login_bg
      background url(./2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat
      background-size 100% 100%
      .head-top
        height 50px
        line-height 50px
        position relative
        padding 0 1em
        border-bottom 0
        .aback
          background url(./personal-bico3.png) no-repeat
          background-size 12px 17px
          display block
          width 22px
          height 20px
          position absolute
          margin-top 16px
        .zfont
          position: absolute
          right 10px
          top 0
      .mlogo
        padding 1em 0 2em 0
        &>img
          display block
          margin auto
          width 20%
      .es_por4
        background-color rgba(255,255,255,.3)
        &>ul
          overflow hidden
          &>li
            position: relative
            float left
            width 50%
            height 44px
            line-height 44px
            text-align center
            &>a
              font-size 15px
              color #fff
              display block
            &>i
              display block
              width 0
              height 0
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom: 0
              left: 0;
              right: 0;
              margin: auto;

  .bgfff
  div
    .mformBox
      background-color #fff
      border-radius 0.5em
      margin 0 4% 1em 4%
      padding 0 1.6%
      #Content
        #login_form
          .Content4
            .mform
              &>li
                border-bottom #e2e2e2 solid 1px
                padding 12px 0 12px 30px
                position relative
                .mNameIco
                  float left
                  display inline
                  width 17px
                  height 21px
                  background url(./ico3.png) no-repeat
                  background-size contain
                  margin 1px 0 0 -25px
                input
                  display block
                  height 21px
                  width 100%
                  font-size 15px
                  border none
                  padding 0
                  color #666
                  font-family "Microsoft Yahei", tahoma, Arial
                  outline none
              &>li
                .mpasswordIco
                  float left
                  display: inline;
                  width: 17px;
                  height: 20px;
                  margin: 0 0 0 -25px;
                  background: url(./ico4.png) no-repeat;
                  background-size: contain;


        #newlogin_form
          margin 0
          padding 0
          .Content4
            .mform
              li
                border-bottom: #e2e2e2 solid 1px;
                padding: 12px 0 12px 30px;
                position: relative;
                .mNumIco
                  float left
                  display: inline;
                  width: 17px;
                  height: 17px;
                  background: url(./ico1.png) no-repeat;
                  background-size: contain;
                  margin: 2px 0 0 -25px;
                input
                  display: block;
                  height: 21px;
                  width: 100%;
                  font-size: 15px;
                  border: none;
                  padding: 0;
                  color: #666;
                  font-family: "Microsoft Yahei",tahoma,arial;
                  outline: none;
                .mpasswordIco
                  float: left;
                  display: inline;
                  width: 17px;
                  height: 20px;
                  margin: 0 0 0 -25px;
                  background: url(./ico4.png) no-repeat;
                  background-size: contain;
                .nocode
                  background: #f5f5f5;
                  color: #b8b8b8;
                  border: 1px solid #b8b8b8;
                .get_phonepass
                  background: #fff;
                  color: #ff4259;
                  border: 1px solid #eb4c33;
                  position: absolute;
                  right: 0;
                  top: 0.5em;
                  border-radius: 3px;
                  width: 100px;
                  text-align: center;
                  padding: 0.3em 0;



    div
      .pull-right
        float right
      .btn-register
        color #898989
      .clear
        clear both
    div
      .btn-login
        display: block;
        letter-spacing: 5px;
        margin: 0 10%;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .6em 0;
        text-align: center;
    .other-login
      .partners
        color #d7d7d7
        margin-top 0.5em
      .uList1
        padding 1.5em 0
        &>li
          width 33.33%
          padding 0 1.2em
          float left
          display inline
          &>a
            display block
            &>img
              width 60%
              height auto
              display block
              margin auto
              max-width 176px






















</style>
