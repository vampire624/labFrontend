<template>
  <div>
    <br />
    <el-card class="box-card" shadow="hover">
      <div slot="header">
        <span class="title">联系我们</span>
      </div>
      <div v-for="(item, index) in contactData" :key="index" class="contact-item">
        <i :class="item.icon"></i> {{item.name}} <span class="grey">{{item.content}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'address',
      contactData: [
        {
          name: '邮编',
          content: '710071',
          icon: ['el-icon-mobile-phone', 'warning']
        },{
          name: '邮箱',
          content: 'pengy@xidian.edu.cn',
          icon: ['el-icon-message', 'success']
        },{
          name: '地址',
          content: '陕西省西安市雁塔区太白南路2号西安电子科技大学主楼I区135室',
          icon: ['el-icon-location-outline', 'danger']
        }
      ]
    }
  }
}
</script>

<style scoped>
.primary {
  color: #409eff;
}

.contact-title {
  font-weight: bold;
}

.contact-item {
  margin: 15px 0;
}

.grey {
  color: grey;
}
</style>


