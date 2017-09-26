<template>
  <div>

    <!--<theader></theader>-->

    <!--<router-view></router-view>-->



  </div>

</template>

<script>
//  import theader from '../header/header.vue'
//  import split from '../split/split.vue'
  export default {
    data () {
      return {}
    },

    components: {
//      split,
//      theader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.allmodule
    !*轮播图*!
    div
      .banner_item
        .swiper-container
          width: 100%
          height:100%
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          z-index: 1
          .swiper-wrapper
            overflow: hidden
            width 100%
            .swiper-slide
              float left
              !*width 16.666%*!
              .pointer
              a
                display: block
                img
                  width 100%
    !*height 100%*!
    !*导航列表*!
    div
      .columnnavdiv
        div
          ul
            list-style none
            overflow: hidden
          .pb10
            padding-bottom 10px
          .pt10
            padding-top 10px
            .fl
              float left
            li
              width 25%
              list-style none
              a
                color #333
                text-decoration none
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                img
                  display block
                  width 100%
                  border 0
                  vertical-align middle







    !*每日疯抢*!
    div
      .surprise_day
        .surprise
          .surprise-tit
          .rela
            position: relative
          .pad10
            padding 10px
          .overflow
            overflow hidden !important
            .fl
              float left
            .titimg
              img
                height: 24px;
                margin-left: -20px;
                display block
                vertical-align: middle;
            div
            .ft13
              font-size 13px
            .ml10
              margin-left 10px
            .fl
              float left
            .surprise-time
            .hide
              display none
            .time
              font-size 14px
              height 40px
            .ml5
              margin-left 5px
            .fl
              float left
            .ftc
              text-align center
              .time1
              .ft12
                font-size 12px
              .dib
                display inline-block
            .more
              position absolute
              top 2px
              right -8px
              a
                color #333
                text-decoration none
                -webkit-tap-highlight-color rgba(0,0,0,0)
              .db
                display block
              .ftr
                text-align right
                img
                  display block
                  margin 0 0 0 auto
                  width 50%
                  border 0
                  vertical-align middle
          .surprise-pro
          .pl5
            padding-left 5px
          .mb10
            margin-bottom 10px
            .swiper-container
              width: 100%
              height 100%
              margin 0 auto
              position: relative
              overflow: hidden
              z-index 1
              .swiper-wrapper
                z-index 1
                display flex
                box-sizing content-box
                width 100%
                height 100%
                position relative
                .swiper-slide
                  flex-shrink 0
                  height 100%
                  position relative
                  .pro-block
                    margin 0 .5em
                    a
                      display block
                      color #333
                      .loadimg-nofixed
                        background: url(./default-epet.png) no-repeat center center #f4f4f4;
                        background-size: 120px auto;
                        position: relative;
                        padding-top: 100%;
                        .image
                          position absolute
                          top 0
                          left 0
                        img
                          display block
                          width 100%
                          border 0
                          vertical-align middle
                      div
                      .cred
                        color red
                      .mt5
                        margin-top 5px
                      .ftc
                        text-align center
                        .ft12
                          font-size 12px
                      .c999
                        color #999
                      .ft12
                        font-size 12px
                      .ftc
                        text-align center
                      p
                        display block











    !*热门栏目*!
    div
      .currency_ad
        margin-top: 10px;
        div
          .currency-adcon
            display block
            .titdiv
            .rela
              position: relative;
              .clum-tit
                .titclass
                .ftc
                  text-align center
                  a
                    color #333
                    img
                      display block
                      border 0
                      vertical-align: middle
                .more
                  position: absolute
                  top 2px
                  right -8px
            .divboximg
              border-top 1px solid #e7e7e7
              overflow hidden
              .divimg
                float left
                a
                  display block
                  color #333
                  img
                    border-bottom 0
                    border-right 1px solid #e7e7e7
                    display block
                    width 100%
                    vertical-align middle









    !*热门视频-标签*!
    div
      .custom_tite
        .titmoudle
          div
            .centerimg
              div
                img
                  display: block
                  max-width 50%
                  max-height 73px
                  margin 0 auto
          div
            div
              .titclass
              .more
                text-align right
                right 0
                top 0
                a
                  img
                    max-width inherit
                    max-height inherit
                    margin 0 0 0 auto
                    display block
                    width 50%

    !*热门视频-视频*!
    div
      .singlediv .soleimg
        padding-top: 41%;
      .fashion
        div
          .cmVideoList
            overflow hidden
            padding 0 9px
          .cmVideoListIndex
            padding 0
            li
              padding 0
              width 100%
              float none
              a
                display: block
                .imgBox
                  img
                    display: block
                    width 100%
                  .cmallPlayIco
                    background: url(./play.png) 0 0 no-repeat;
                    background-size: contain;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -10px;
                    margin-top: -10px;
                div
                  .textover
                  div
                    .cmallViewIco
                      display: inline-block;
                      width: 10px;
                      height: 9px;
                      background: url(./view-black.png) 0 0 no-repeat;
                      background-size: contain;

    !*TA公益*!
    div
      .ta_welfare
        div
          div
            .ta-tit
            .yhtitdiv
              .leftimg2
                a
                  img
                    height 45px
                    width auto
                    margin 0 auto
              .more
                position: absolute
                top 7px
                right 0
                z-index 0
                a
                  img
                    width 75px
                    height auto
                    margin 10px 5px 0 0
            .ta-bg
              padding-top 37%
              .image
                position: absolute
                top 0
                left 0
                width 100%
              .tafloat
                position: absolute
                top 20%
                left 0
                width 100%
                &>p
                  margin-bottom 0
                  font-weight 700
            .ta-barnds
              .ta-brandsName
                width 60px
                padding-top 10px
                &>img
                  width 90%
                  margin-top 10px
              .ta-scrolldiv
                margin-left 70px
                padding 5px 0 0 5px
                border-left 1px solid #e7e7e7
                .swiper-container
                  width: 100%;
                  height: 100%;
                  .swiper-wrapper
                    display flex
                    z-index 1
                    box-sizing content-box
                    position: relative
                    width: 100%
                    height: 100%
                    .swiper-slide
                      border-right 1px solid #e7e7e7
                      text-align center
                      flex-shrink 0
                      &>a
                        display block
                        margin-right 10px
                        &>div
                          &>img
                            display: block
                            max-width 100%
                            height 40px
                            margin 0 auto
                        .help-money
                          border-top 1px solid #e7e7e7
                          margin-top 5px
                          padding 3px 0
    !*口碑评价*!
    div
      .judgediv
        div
          .titdiv
            .leftimg1
            .leftimg2
              a
                img
                  height: 45px;
                  width: auto;
                  margin: 0 auto;
            .right_text
              position: absolute;
              top: 14px;
              right: -4px;
              background: url(./index_icon_comment_sanjiao.png) no-repeat right;
              background-size: 8px 9px;
              padding-right: 10px;
              transform: scale(0.84);
          .brands-judge
            &>ul
            .clearfix
              &>li
                width 50%
                display list-item
                text-align -webkit-match-parent
                &>a
                  &>div
                    .main_img
                      height 150px
                      overflow: hidden
                      .thisimg
                        img
                          width 100%
                      .join_time
                        position absolute
                        bottom 0
                        left 0
                        width 100%
                        background rgba(0,0,0,.4)
                      .ft12
                        font-size 12px
                    &>div
                      &>span
                      .pet-name
                        background: #ddd;
                        border-radius: 5px;
                        padding: 0 5px;
                    .font-intro
                      height 60px
                      overflow hidden










    !*底部*!
    .footer
      padding-bottom 0
      border-top 5px solid #f3f4f5
      background #fff
      clear both
      margin 1em 0 0
      .ft
      &>div
        font-size 14px
        .bt
          color red
        &>span
          padding-right 10px




*/


























</style>
