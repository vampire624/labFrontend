<template>
  <div>
    <Banner></Banner>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Banner from '../components/Banner'
export default {
  components: {
    Banner,
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>


