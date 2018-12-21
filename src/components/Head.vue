<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div>
          <router-link :to="{path: '/'}" class="head-title">光通信技术实验室</router-link>
        </div>
      </el-col>
      <el-col :span="14">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/introduct">实验室简介</el-menu-item>
          <el-submenu index="/staff">
            <template slot="title">人员组成</template>
            <el-menu-item index="/staff/tutor">导师简介</el-menu-item>
            <el-menu-item index="/staff/working">在读硕博</el-menu-item>
            <el-menu-item index="/staff/worked">毕业硕士</el-menu-item>
          </el-submenu>
          <el-menu-item index="/project">研究项目</el-menu-item>
          <el-menu-item index="/achievement">研究成果</el-menu-item>
          <el-menu-item index="/relatedLink">相关链接</el-menu-item>          
        </el-menu>
      </el-col> 
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/'
    }
  }
}
</script>

<style scoped>
.head-title {
  display: block;
  text-decoration: none;
  font-size: 22px;
  padding-top: 20px;
  color: #409EFF;
}
</style>


