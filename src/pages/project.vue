<template>
  <div>
    <Banner></Banner>
    <Title :title="title"></Title>
    <template v-for="(item, index) in projects">
      <el-card class="box-card" :key="index" shadow="hover">
        <div slot="header" class="title">
          <span>{{ item.title }}</span>
        </div>
        <div>
          <div class="content" v-html="item.content"></div>
        </div>
      </el-card>
    </template>
  </div>
</template>

<script>
import URL from '../config/index'
import Banner from '../components/Banner'
import Title from '../components/Title'
export default {
  components: {
    Title,
    Banner,
  },
  data () {
    return {
      title: '研究项目',
      projects: []
    }
  }, 
  mounted () {
    this.axios.get(URL.projects)
    .then((res) => {
      this.projects = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 30px;
}

.content {
  line-height: 1.8em;
  color: #666;
}
</style>


