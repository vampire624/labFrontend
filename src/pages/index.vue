<template>
  <div>
    <p class="index-title">欢迎访问西安电子科技大学<span class="index-title-name">光通信技术实验室</span></p>
    <Slide></Slide>
    <Contact></Contact>
  </div>
</template>

<script>
import Slide from '../components/Slide'
import Contact from '../components/Contact'
export default {
  components: {
    Slide,
    Contact,
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.index-title {
  margin: 40px 0;
  font-size: 24px;
  text-align: center;
  color: #898989;
}

.index-title-name {
  color: #409EFE;
}
</style>


