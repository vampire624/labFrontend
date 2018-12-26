<template>
  <div>
    <div class="error-head">
      <div>
        <span>4</span>
        <span><i class="el-icon-question primary"></i></span>
        <span>4</span>
      </div>
      <div>{{ tip }}</div>
      <el-button>
        <router-link :to="{path: '/'}" class="btn primary">返回主页</router-link>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tip: 'Sorry! 页面走失了...',
    }
  }
}
</script>

<style scoped>
.error-head {
  text-align: center;
  color: darkgray;
  font-size: 98px;
  font-weight: bold;
  margin-block-start: 0;
  margin-block-end: 0;
}

.error-head div {
  margin-top: 100px;
}

.btn {
  font-size: 28px;
  text-decoration: none;
}
</style>

