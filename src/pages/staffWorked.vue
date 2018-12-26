<template>
  <div>
    <Title :title="title"></Title>
    <div v-loading="loading">
      <template v-for="(item, index) in tableData">
        <h3 class="table-title" :key="`${index}-title`">{{item[0].year}}</h3>
        <el-table :data="item" :key="index">
          <el-table-column
            prop="name"
            label="姓名"
            width="220">
          </el-table-column>
          <el-table-column
            prop="sex"
            label="性别"
            width="200">
          </el-table-column>
          <el-table-column
            prop="graduationGoes"
            label="毕业去向">
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
import URL from '../config/index'
import Title from '../components/Title'
export default {
  components: {
    Title,
  },
  data () {
    return {
      title: '毕业硕士',
      loading: true,
      tableData: []
    }
  },
  methods : {
    collateData (data) {
      const tempDataObj = {}
      const tempDataArr = []
      data.forEach((item) => {
        if (!tempDataObj[item.year]) {
          tempDataObj[item.year] = [item]
        } else {
          tempDataObj[item.year].push(item)
        }
      })
      for (let key in tempDataObj) {
        tempDataArr.push(tempDataObj[key])
      }
      return tempDataArr
    }
  },
  mounted () {
    this.axios.get(URL.workedStuff)
    .then(res => {
      this.tableData = this.collateData(res.data)
      this.loading = false
    })
    .catch(err => {
      console.log(err)
      this.loading = false
      this.$notify.error({
        title: '错误',
        message: '服务器繁忙，刷新页面后请重试！',
      })
    })
  }
}
</script>

<style scoped>
.table-title {
  text-align: center;
}
</style>


