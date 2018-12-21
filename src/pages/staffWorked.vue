<template>
  <div>
    <Title :title="title"></Title>
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
      tableData: []
    }
  },
  mounted () {
    this.axios.get(URL.workedStuff)
    .then(res => {
      this.tableData = res.data
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.table-title {
  text-align: center;
}
</style>


