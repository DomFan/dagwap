<template>
  <div>
    <div class="banner_item">
      <div class="swiper-container" ref="swiperContainer">
        <mt-swipe :auto="2000" class="swiper-wrapper" style="height: 160px">
          <mt-swipe-item class="swiper-slide">
            <a href="javascript:;" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-09/20/10/4288b3a722d59db33b34181caa7ef1e4.jpg@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="swiper-slide">
            <a href="javascript:;" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-09/18/10/c3d406e9e2219ab08e083548161061d4.jpg@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="swiper-slide">
            <a href="javascript:;" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-09/18/10/ed80ee64f24384450e757c1188e553dc.png@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="swiper-slide">
            <a href="javascript:;" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-09/21/14/04e9257ea937c263aacf7d6241a84298.png@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="swiper-slide">
            <a href="javascript:;" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-09/18/08/c6ddc480d009e7ec42f4933070377dc6.jpg@!water">
            </a>
          </mt-swipe-item>
          <mt-swipe-item class="swiper-slide">
            <a href="javascript:;" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-09/13/19/ab6890236a6be0089d042873e7dc1797.jpg@!water"></a>
          </mt-swipe-item>
          <mt-swipe-item class="swiper-slide">
            <a href="javascript:;" class="pointer">
              <img src="https://img2.epetbar.com/nowater/2017-09/18/15/409553239265ca47621c007fb11c3241.jpg@!water">
            </a>
          </mt-swipe-item>
        </mt-swipe>

        <!--<div class="swiper-pagination banner-round">-->
          <!--<span class="swiper-pagination-bullet"></span>-->
          <!--<span class="swiper-pagination-bullet "></span>-->
          <!--<span class="swiper-pagination-bullet"></span>-->
          <!--<span class="swiper-pagination-bullet"></span>-->
          <!--<span class="swiper-pagination-bullet"></span>-->
          <!--<span class="swiper-pagination-bullet"></span>-->
          <!--<span class="swiper-pagination-bullet"></span>-->
        <!--</div>-->

      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
//  import BScroll from 'better-scroll'

  import {Swipe, SwipeItem} from 'mint-ui'
  Vue.component('swiper-wrapper', Swipe)
  Vue.component('swiper-slide', SwipeItem)

  export default {
    data () {
      return {}
    },

    mounted () {

      /* this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.swiperContainer, {
            scrollX: true,
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      }) */

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
          /*width 16.666%*/
          .pointer
          a
            display: block
            img
              width 100%
</style>
