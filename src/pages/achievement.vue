<template>
  <div>
    <Banner></Banner>
    <Title :title="title"></Title>
    <el-card class="box-card" shadow="hover" v-loading="essayLoading">
      <div slot="header">
        <span class="title">论文</span>
      </div>
      <div v-for="(item, index) in essays" :key="index" class="box-card-item">
        <span class="box-index" :class="colors[Math.floor(colors.length * Math.random())]">{{ index + 1 }} </span>
         {{ item.title }}
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover" v-loading="rightLoading">
      <div slot="header">
        <span class="title">专利</span>
      </div>
      <div v-for="(item, index) in rights" :key="index" class="box-card-item">
        <span class="box-index" :class="colors[Math.floor(colors.length * Math.random())]">{{ index + 1 }} </span>
         {{ item.title }}
      </div>
    </el-card>
  </div>
</template>

<script>
import URL from '../config/index'
import Banner from '../components/Banner'
import Title from '../components/Title'
export default {
  components: {
    Banner,
    Title,
  },
  data () {
    return {
      title: '研究成果',
      colors: ['primary', 'success', 'warning', 'danger'],
      essayLoading: true,
      rightLoading: true,
      essays: [],
      rights: []
    }
  },
  mounted () {
    this.axios.get(URL.essays)
    .then((res) => {
      this.essays = res.data
      this.essayLoading = false
    })
    .catch((err) => {
      console.log(err)
      this.essayLoading = false
      this.$notify.error({
        title: '错误',
        message: '服务器繁忙，刷新页面后请重试！',
      })
    })

    this.axios.get(URL.rights)
    .then(res => {
      this.rights = res.data
      this.rightLoading = false
    })
    .catch(err => {
      console.log(err)
      this.rightLoading = false
      this.$notify.error({
        title: '错误',
        message: '服务器繁忙，刷新页面后请重试！',
      })
    })
  }
}
</script>

<style>
.box-card {
  line-height: 2em;
  margin-top: 20px;
}

.box-card-item {
  margin-top: 5px;
  color: #666;
}

.box-index {
  width: 18px;
  display: inline-block;
  padding-right: 15px;
  font-size: 28px;
  font-style: oblique;
}
</style>


