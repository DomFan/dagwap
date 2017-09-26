<template>
  <div>
    <div class="indexheader">
      <div class="indexnavcon">
        <div class="headerbox floatheader float-div" style="top: 0;">
          <div class="main">
            <div class="clearfix pt5 pl10 pr10 pb5">
              <div class="epet-search bgf">
                <div class="fl rela ft14 location">
                  <a href="javascript:;">
                    <span class="catordog c89">狗狗站</span>
                    <span class="c89">|</span>
                    <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                    <i></i></a>
                </div>
                <p class="search-text">
                  <a href="javascript:;">
                    <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                    <span class="eico serach-ico"></span>
                  </a>
                </p>
                <a href="javascript:;" class="epet-category">
                  <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
                </a>
              </div>
            </div>
            <div class="find_nav">
              <div class="find_nav_left dscroll">
                <div class="find_nav_list dscroll-div" style="width: 100%;" ref="navlist">

                  <ul class="navscroll-ul" style="width: 120%">
                    <li class="navscroll-li" style="width: 74.5px;">
                      <router-link to="/home">
                        <!---->
                        <span class="rela">
                        <span>首页</span>
                        <i></i>
                      </span>
                      </router-link>
                    </li>
                    <li class="navscroll-li" style="width: 74.5px;">
                      <router-link to="/foods">
                        <!---->
                        <span class="rela">
                        <span>主粮</span>
                        <i></i>
                      </span>
                      </router-link>
                    </li>
                    <li class="navscroll-li" style="width: 74.5px;">
                      <router-link to="/health">
                        <!---->
                        <span class="rela">
                        <span>医疗保健</span>
                        <i></i>
                      </span>
                      </router-link>
                    </li>
                    <li class="navscroll-li" style="width: 74.5px;">
                      <router-link to="/toys">
                        <!---->
                        <span class="rela">
                        <span>零食玩具</span>
                        <i></i>
                      </span>
                      </router-link>
                    </li>
                    <li class="navscroll-li" style="width: 74.5px;">
                      <router-link to="/daily">
                        <!---->
                        <span class="rela">
                        <span>日用外出</span>
                        <i></i>
                      </span>
                      </router-link>
                    </li>
                    <li class="navscroll-li" style="width: 74.5px;">
                      <router-link to="/beauty">
                        <!---->
                        <span class="rela">
                        <span>美容香波</span>
                        <i></i>
                      </span>
                      </router-link>
                    </li>
                  </ul>

                </div>

              </div>
            </div>


          </div>

        </div>
      </div>
      <div class="switchtype">
        <div type="dog" class="go-dog pointer dog"></div>
        <div class="changepop bgfff">
          <div class="cartc-bg db"></div>
          <div class="cartc-box rela overflow" style="overflow: hidden; display: block;">
            <div class="main">
              <p class="ftc c999 ft16 rela">DOG<b class="b-line c000 ft12">▁</b></p>
              <p class="ftc mt20 ft20 c666">亲爱的小主</p>
              <p class="ftc c333 ft20">您即将进入<span>狗狗站</span></p>
              <ul class="clearfix ftc change-ul">
                <li type="cat" class="fl pet1 cat">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-cat.png">
                  <div class="pet1name">猫猫站</div>
                </li>
                <li type="dog" class="fl pet2 mainpet rela dog">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-dog1.png">
                  <div>狗狗站</div> <b class="current-line c000 ft12">▁</b>
                  <a href="javascript:;" class="cfff ft14 ftc once-into mt15 dib">立即进入</a>
                </li>
                <li type="fish" class="fl pet3 fish">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-fish.png">
                  <div class="pet3name">水族站</div>
                </li>
              </ul>
            </div>
          </div>
          <a href="javascript:;" class="cartc-close afff ft20 ftc c666">
            <img src="//static.epetbar.com/static_web/wap/src/images/close2.png"></a>
        </div>
      </div>


    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {

      }
    },

    mounted () {
      Vue.nextTick(() => {
        if (!this.navlistscroll) {
          this.navlistscroll = new BScroll(this.$refs.navlist, {
            scrollX: true,
            click: true
          })
        } else {
          this.surpriseScroll.refresh()
        }
      })
    },

    methods: {

    },

    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .indexheader
    .indexnavcon
      height: 86px;
      .headerbox
        box-shadow none
        .main
          box-shadow 0 2px 2px #e9e9e9
          max-width: 640px;
          margin: auto;
          .clearfix
            .epet-search
              padding: 8px 0;
              background-color #fff
              text-align: center;
              display: -webkit-box;
              -webkit-box-align: center;
              display: -moz-box;
              -moz-box-align: center;
              width: 100%;
              .location
                margin-right 20px
                &>a
                  &>i
                    position: absolute;
                    top: 10px;
                    right: -11px;
                    border-width: 4px;
                    font-size: 0;
                    line-height: 0;
                    border-style: solid solid dotted;
                    border-color: #898989 transparent transparent;
              .search-text
                margin 0
              &>p
                position: relative
                -webkit-box-flex: 1;
                -moz-box-flex: 1;
                &>a
                  &>input
                    width: 100%;
                    border: 0;
                    height: 25px;
                    background: #e9e9e9;
                    border-radius: 4px;
                    color: #bcbcbc;
                    text-indent: 10px;
                    font-size: 13px;
                    outline: 0;
                  .serach-ico
                    width: 11px;
                    height: 11px;
                    position: absolute;
                    right: 5px;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    background-position: 0 0;
                  .eico
                    background: url(./search.png) no-repeat;
                    background-size: 11px auto;
              .epet-category
                display block
              &>a
                &>img
                  width: 25px;
                  margin-left: 10px;
          .find_nav
            /*background-color #0a8ddf*/
            width: 100%;
            height: 35px;
            min-width: 320px
            .finc_nav_left
            .dscroll
              .find_nav_list
                ul
                .navscroll-ul
                  white-space: nowrap;
                  overflow-y: hidden
                  /*display: flex;*/
                  /*overflow hidden*/
                  float left
                  .navscroll-li
                    display inline-block
                    a
                      display: block;
                      width: 100%;
                      height: 100%;
                      line-height: 36px;
                      font-size: 14px;
                      text-align: center;
                      color: #666;
                      .rela
                        &>i
                          position: absolute;
                          bottom: 1px;
                          left: -10%;
                          width: 120%;
                          height: 2px;


    .switchtype
      display none


</style>
