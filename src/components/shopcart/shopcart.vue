<template>
  <div>
    <div class="wap-top-bar hide" style="display: block;">
      <header class="ftc head-top bgfff zcolor rela">
        <div class="">
          <a href="javascript:void(0)" onclick="history.go(-1)" class="aback page-top go-back"></a>
          <span class="ft18 topbar-title">购物车</span>
          <div class="zfont ft16 block">
            <a class="zcolor topbar-link ">
            </a>
          </div>
          <span class="mla pull-right Jbur ml J_bur"></span>
        </div>
      </header>
      <div class="header-quick header-quicknew  hide Jtk">
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

    <div id="CartBox">
      <div class="mycart">
        <div class="m-emptycoupon ftc bgfff">
          <div>
            <span class="u-emtcoupon">&nbsp;</span>
          </div>
          <div class="ftc emttip ft16">购物车是空的</div>
          <div class="emt-a mt15">
            <a href="http://wap.epet.com" class="c999 ft16 mr5">去逛逛</a>
            <a href="/zt/knowledge/favorites.html" class="c999 ft16">我的收藏</a>
          </div>
        </div>
        <span></span>
        <div class="chooseaddbg hide"></div>
        <div class="chooseadd hide">
          <p class="addtext">收货地址</p>
          <ul class="choose">
            <li class="handcur tab1 now">请选择</li>
            <li class="handcur tab2 hide">请选择</li>
            <li class="handcur tab3 hide">请选择</li>
            <li class="handcur tab4 hide">请选择</li>
            <li class="handcur tab5 hide">请选择</li>
          </ul>
          <div class="address">
            <ul class="chooseone"></ul>
            <ul class="choosetwo"></ul>
            <ul class="choosethree"></ul>
            <ul class="choosefour"></ul>
            <ul class="choosefive"></ul>
          </div>
          <div class="addclose handcur"></div>
        </div>
        <div class="addresslist hide">
          <p class="addtext">收货地址</p>
          <ul></ul>
          <p class="handcur choseother">选择其他配送区域</p>
          <div class="addclose handcur"></div>
        </div>
      </div>
    </div>

    <div id="waf_nc_block" style=" display: none; ">
      <div class="waf-nc-h5-mask"></div>
      <div id="WAF_NC_WRAPPER" class="waf-nc-h5-wrapper">
        <div class="waf-nc-h5-panel">
          <img class="waf-nc-h5-icon" src="./TB1zmO_LXXXXXcBXFXXXXXXXXXX-200-200.png" alt="" height="30px" width="30px">
          <div class="waf-nc-h5-description">经检测你当前操作环境存在风险，请完成以下验证</div>
        </div>
        <hr class="waf-nc-h5-hr">
        <div id="nocaptcha" class="nc-container" data-nc-idx="1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
div
  div
    .head-top
      color #333
      height 50px
      line-height 50px
      position: relative
      padding 0 1em
      border-bottom 1px solid #F3F3F3
      div
        .go-back
          background url(./personal-bico1.png) no-repeat
          background-size 9px 17px
          display block
          width 22px
          height 20px
          position: absolute
          margin-top 16px
        .topbar-title
          width 90%
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          display inline-block
          margin 0 auto
      .zfont
        position absolute
        right 25px
        top 0
        .topbar-link
          colot #333
      .Jbur
        background url(./imgtk-new.png) no-repeat
        background-size 20px 20px
        position: absolute
        top 0
        right 12px
      .mla
        width 20px
        height 20px
        margin-top 14px
        z-index 100
        cursor pointer
    .header-quick
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #d7d7d7;
      overflow: hidden;
      padding: 12px 0;
      &>a
        display: inline-block;
        width: 25%;
        text-align: center;
        float: left;
        span
          display: block;
          height: 30px;
        .icon1
          background: url(./head_icon1.png) 50% 0 no-repeat;
          background-size: auto 100%;
        .icon2
          background: url(./head_icon2.png) 50% 0 no-repeat;
          background-size: auto 100%;
        .icon4
          background: url(./head_icon4.png) 50% 0 no-repeat;
          background-size: auto 100%;
          em
            display: inline-block;
            height: 22px;
            width: 22px;
            color: #fff;
            text-align: center;
            line-height: 18px;
            font-size: 12px;
            background: #FF0000;
            border-radius: 10px;
            border: #fff solid 2px;
            position: relative;
            top: -.5em;
            left: 1em;
        .icon5
          background: url(./head_icon5.png) 50% 0 no-repeat;
          background-size: auto 100%;
        p
          color: #666;
          font-size: 14px;
          text-align: center;
          margin 0


  div
    .mycart
      .m-emptycoupon
        padding-bottom: 50px;
        &>div
          .u-emtcoupon
            margin: 50px auto 20px;
            display: inline-block;
            width: 100px;
            height: 100px;
            background: url(./cart-ico.png) no-repeat 0 -160px;
            background-size: 105px auto;
        .emttip
          color #dbdbdb
        .emt-a
          a
            display: inline-block;
            border-radius: 5px;
            border: 1px solid #999;
            height: 40px;
            line-height: 40px;
            width: 100px;

      .chooseaddbg
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        top: 0;
        left: 0;
        z-index: 101;

      .chooseadd
        /*background #f00b0d*/
        position fixed
        width 100%
        bottom 0
        background #fff
        z-index: 102
        p
          margin 0
        .addtext
          text-align: center;
          width: 100%;
          height: 45px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
          background: #fbfbfb;
        .choose
          width 100%
          overflow hidden
          border-bottom 1px solid #eee
          li
            text-align center
            float left
            padding 10px 5px
            color #333
            font-size 14px
          .now
            color #f03e3e
        .address
          width 500%
          ul
            width 20%
            padding 5px 20px
            float left
            overflow-y scroll
            height 250px
        .addclose
          position: absolute
          width 20px
          height 20px
          right 20px
          top 20px
          background url(./addclose.png) no-repeat
          background-size 100% 100%



      .addresslist
        position fixed
        width 100%
        bottom 0
        background #fff
        z-index 102
        .addtext
          text-align center
          width 100%
          height 45px
          line-height 45px
          font-size 16px
          color #333
          background #fbfbfb
        ul
          font-size 14px
          color #333
          overflow-y scroll
          height 250px
        .choseother
          width 85px
          height 40px
          line-height 40px
          margin 20px auto
          background #f03e3e
          text-align center
          color #fff
          font-size 16px
          border-radius: 5px;
          -webkit-border-radius: 5px;
        .addclose
          position: absolute;
          width: 20px;
          height: 20px;
          right: 10px;
          top: 12.5px;
          background: url(./addclose.png) no-repeat;
          background-size: 100% 100%;


  #waf_nc_block
    position: fixed;
    _position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    .waf-nc-h5-mask
      background: #777;
      opacity: 0.5;
      /*filter: alpha(opacity=50);*/
      width: 100%;
      height: 100%;
    .waf-nc-h5-wrapper
      width: 94%;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -20%;
      margin-left: -47%;
      padding: 5% 1%;
      background: #ffffff;
      border-radius: 3px;
      box-sizing: border-box;
      .waf-nc-h5-panel
        width 100%
        .waf-nc-h5-icon
          display: inline-block;
          margin-right: 3%;
          margin-left: 2%;
          width: 12%;
          height: 12%;
          line-height: 12%;
          vertical-align: top;
        .waf-nc-h5-description
          width: 70%;
          display: inline-block;
          font-size: 15px;
      .waf-nc-h5-hr
        border: none;
        border-bottom: 1px solid #ccc;
        margin: 5px;
        padding 0

























</style>
