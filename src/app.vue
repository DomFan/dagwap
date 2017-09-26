<template>
  <div>
    <!--<epet-header></epet-header>-->
    <router-view></router-view>
    <!--<epet-footer></epet-footer>-->
    <!--<router-link to="/home"></router-link>-->

  </div>

</template>

<script>

  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'
//  import axios from 'axios'
  export default {
    data () {
      return {

      }
    },

    components: {
      'epet-header': header,
      'epet-footer': footer
    },

    mounted () {
      /* console.log(this.$http)
      this.$http.get('/api/home')
        .then(response => {
          const result = response.body
          if (result.code === 0) {
            this.datas = result.data
            console.log('vue-resource', this.datas)
          }
        }) */

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
