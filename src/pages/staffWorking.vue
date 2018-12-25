<template>
  <div>
    <Title :title="title"></Title>
    <template v-for="(item, index) in tableData">
      <h3 class="table-title" :key="index">{{item[0].year}}</h3>
      <el-table :data="item" :key="item[index].name">
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
          prop="researchDirection"
          label="研究方向">
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
      title: '在读硕博',
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
    this.axios.get(URL.workingStuff)
    .then(res => {
      this.tableData = this.collateData(res.data)
      console.log(this.tableData)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.table-title {
  color: #333;
  text-align: center;
  padding: 15px 0;
}
</style>

