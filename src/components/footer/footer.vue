<template>
  <div class="footernav" v-show="isShow">
    <ul class="clearfix">
      <li class="index-a">
        <router-link to="/home" class="db">
          <div style="width: 100%; height: 45px"></div>
        </router-link>
      </li>
      <li class="type-a">
        <router-link to="/classify" class="db">
          <div style="width: 100%; height: 45px"></div>
        </router-link>
      </li>
      <li class="cart-a" @click="isShow = !isShow">
        <router-link to="shopcart" class="db">
          <div style="width: 100%; height: 45px"></div>
        </router-link>
      </li>
      <li class="myepet-a" @click="isShow = !isShow">
        <router-link to="/login" class="db">
          <div style="width: 100%; height: 45px"></div>
        </router-link>
      </li>
    </ul>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

.footernav
  background-color #fff
  border-top: 1px solid #e7e7e7;
  height: 45px;
  line-height: 45px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 103;
  &>ul
    list-style none
    li
      float left
      width 25%
      height 55px
    .index-a
      background url("./main_tab_1_sel.png") no-repeat center 2px
      background-size auto 40px
    .type-a
      background url("./main_tab_2.png") no-repeat center 2px
      background-size auto 40px
    .cart-a
      background url("./main_tab_3.png") no-repeat center 2px
      background-size auto 40px
    .myepet-a
      background url("./main_tab_4.png") no-repeat center 2px
      background-size auto 40px
      .db
        width 100%
        height 55px
        display block

</style>
