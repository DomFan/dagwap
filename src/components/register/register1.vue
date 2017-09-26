<template>
  <div>

    <!-- 主体注册内容 -->
    <div class="wap-top-bar hide">
      <header class="ftc head-top bgfff zcolor rela">
        <div class="">
          <a href="javascript:void(0)" class="aback page-top go-back"></a>
          <span id="topbar-title" class="ft18 topbar-title">新用户注册</span>
          <div class="zfont ft16 block">
            <a class="zcolor topbar-link ">
            </a>
          </div>
          <span id="Jbur" class="mla pull-right Jbur ml J_bur"></span>
        </div>
      </header>
      <div class="header-quick header-quicknew hide Jtk">
        <a href="https://wap.epet.com/main.html?pet_type=dog">
          <span class="icon1"></span>
          <p>首页</p>
        </a>
        <a href="https://wap.epet.com/category.html">
          <span class="icon2"></span>
          <p>商品分类</p>
        </a>
        <a href="https://wap.epet.com/cart/">
          <span class="icon4" id="getCartNum"><em>0</em></span>
          <p>购物车</p>
        </a>
        <a href="https://wap.epet.com/orders/user.html">
          <span class="icon5"></span>
          <p>我的e宠</p>
        </a>
      </div>
    </div>



    <!-- 第一次进入 显示内容 -->
    <div class="content " id="register_info">
      <form method="post" action="" id="regform">
        <input type="hidden" id="referer" name="referer" value="http://wap.epet.com/cart.html">
        <input type="hidden" id="mod" name="moid" value="">
        <input type="hidden" name="formhash" value="6ae029c5ff">
        <input type="hidden" name="authid" class="authid" value="">
        <ul class="mform ml">
          <li><span class="mNumIco"></span>
            <input v-model="phonenum" type="text" placeholder="请输入手机号码" class="nexttext" name="phone" id="phone">
          </li>
        </ul>
        <div class="ftc pt15 mt20">
          <a @click="checknext" class="btn-login btn-dark-login nextreg afff">下一步</a>
        </div>
      </form>
    </div>


    <div id="showAddUser" class="content hide" style="">
      <form method="post" action="" id="regaddform">
        <input type="hidden" id="referer" name="referer" value="">
        <input type="hidden" name="formhash" value="6ae029c5ff">
        <input type="hidden" name="moid" class="moid" value="">
        <input type="hidden" name="isupdate" class="isupdate" value="0">
        <ul class="mform ml">
          <li>
            <span class="mNumIco"></span>
            <input type="text" :placeholder="phonenum" name="bdphone" id="bdphone" class="regtext" readonly="readonly">
          </li>
          <li>
            <span class="seccodeIco"></span>
            <input type="seccode" placeholder="图片验证码" name="seccode" id="seccode" style="width:57%;display:inline-block;" class="regtext">
            <img name="varify" style="right:20px;position: absolute;" src="./seccode.jpg" class="codevar" align="absbottom" onclick="freshcode(this,85,30)">
          </li>
          <li>
            <span class="mEmailIco"></span>
            <input type="text" placeholder="验证码" name="code" id="code" class="regtext" style="padding-right:9.5em;">
            <a class="get_phonepass afff ft14 w9 nocode" style="display:none">()验证码已发送</a>
            <a href="javascript:void(0);" onclick="" class="get_phonepass afff ft14 w9" id="scodebtn">获取短信验证码</a>
          </li>
          <li>
            <span class="mNameIco"></span>
            <input type="text" placeholder="你的昵称/用户名" name="username" id="username" class="regtext">
          </li>
          <li>
            <span class="mpasswordIco"></span>
            <input type="password" placeholder="请设置密码" name="password" check="no" id="password" class="regtext">
          </li>
          <li>
            <span class="mpasswordIco"></span>
            <input type="password" placeholder="请确认密码" name="passwordag" id="passwordag" class="regtext">
          </li>
        </ul>
        <div class="ftc pt10 mt15">
          <a href="javascript:void(0);" class="btn-login btn-dark-login regbtn  afff">下一步</a>
        </div>
      </form>
    </div>


  </div>
</template>

<script>
  export default {
    data () {
      return {
        phonenum: '',
        username: '',
        password: '',
        confirmpsw: '',
        seccode: 0,
        code: 0
      }
    },

    methods: {
      checknext () {
        console.log('22')
      }
    },

    mounted: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .content
  #register_info
    form
      margin 0
      padding 0
      input
        outline none
      ul
        /*padding 10px*/
        margin-left 12px
      .mform
        li
          border-bottom #e2e2e2 solid 1px
          padding 14.4px 0 14.4px 30px
          position: relative
          .mNumIco
            float left
            display: inline
            width 17px
            height 17px
            background url(./ico1.png) no-repeat
            background-size contain
            margin 2px 0 0 -25px
          input
            display: block
            height: 21px
            width: 100%
            font-size 13px
            border none
            padding 0
            color #b8b8b8
      div
        margin-top 24px
        a
          line-height 20px
        .btn-login
          display block
          margin 0 10%
          border-radius 30px
          background #f03131
          font-size 15px
          padding 5px 0
          text-align center
        .btn-dark-login
          background #d7d7d7
          color #fff

  .wap-top-bar
    .head-top
      height 50px
      line-height 50px
      position: relative
      padding 0 10px
      border-bottom 1px solid #f3f3f3
    .zcolor
      color #333
      div
        a
        .aback
          background url(./personal-bico1.png) no-repeat
          background-size 9px 17px
          display: block
          width: 22px
          height: 20px
          position: absolute
          margin-top 16px
        #topbar-title
          width: 90%
          height 50px
          text-overflow ellipsis
          white-space nowrap
          overflow: hidden
          display: inline-block
          margin 0 auto
        div
        .zfont
          position: absolute
          right 25px
          top 0
          font-size 16px
          a
          .topbar-link
            width: 0
            height: 0
            color #333
        span
        .mla
          width: 20px
          height: 20px
          z-index: 100
          cursor pointer
        #Jbur
          margin 14px 12px 15px 12px
          background url(./imgtk-new.png) no-repeat
          background-size 20px 20px
          position: absolute
          top 0
          right 10px



    .header-quick
      width: 100%
      background #fff
      border-bottom 1px solid #d7d7d7
      overflow: hidden
      padding 12px 0
      a
        display: inline-block
        width: 25%
        text-align center
        float left
        span
          display: block
          height 30px
        p
          margin 0
          color #666
          font-size 14px
          text-align center
        .icon1
          background url(./head_icon1.png) 50% 0 no-repeat
          background-size auto 100%
        .icon2
          background url(./head_icon2.png) 50% 0 no-repeat
          background-size auto 100%
        .icon4
          background url(./head_icon4.png) 50% 0 no-repeat
          background-size auto 100%
          em
            display: inline-block
            height: 22px
            width: 22px
            color #fff
            text-align center
            line-height 18px
            font-size 14.4px
            background #ff0000
            border-radius 10px
            border #fff solid 2px
            position: relative
            top -6px
            left 12px
            vertical-align: middle
        .icon5
          background url(./head_icon5.png) 50% 0 no-repeat
          background-size auto 100%

  #showAddUser
    #regaddform
      ul
        margin-left 12px
        li
          border-bottom: #e2e2e2 solid 1px;
          padding: 14.4px 0 14.4px 30px;
          position: relative;
          .seccodeIco
            float: left;
            display: inline;
            width: 17px;
            height: 17px;
            background: url(./ico5.png) no-repeat bottom;
            background-size: contain;
            margin: 2px 0 0 -25px;
          .mEmailIco
            float: left;
            display: inline;
            width: 17px;
            height: 21px;
            background: url(./ico2.png) no-repeat;
            background-size: contain;
            margin: 7px 0 0 -25px;
          .ft14
            font-size 14px
          .get_phonepass
            background: #fed171;
            position: absolute;
            right: 0;
            top: 0.7em;
            border-radius: 30px;
            width: 7em;
            text-align: center;
            padding: 0.3em 0;
          .w9
            width: 9em;
            margin-right: 1em;
          .mNameIco
            float: left;
            display: inline;
            width: 17px;
            height: 21px;
            background: url(./ico3.png) no-repeat;
            background-size: contain;
            margin: 1px 0 0 -25px;
          .mpasswordIco {
            float: left;
            display: inline;
            width: 17px;
            height: 20px;
            margin: 0 0 0 -25px;
            background: url(./ico4.png) no-repeat;
            background-size: contain;
          }






















</style>
