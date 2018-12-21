<template>
  <div>
    <Banner></Banner>
    <Title :title="title"></Title>
    <el-card class="box-card">
      <div v-for="(item, index) in links" :key="`${index}-title`" class="box-card-link">
        <i class="el-icon-caret-right"></i> <a :href="item.url">{{ item.title }}</a>
      </div>
    </el-card>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Title from '../components/Title'
export default {
  components: {
    Banner,
    Title
  },
  data () {
    return {
      title: '相关链接',
      links: [
        {
          title: '西安电子科技大学大学主页',
          url: 'https://www.xidian.edu.cn/'
        },
        {
          title: '西安电子科技大学研究生院主页',
          url: 'https://gr.xidian.edu.cn/'
        },
        {
          title: '西安电子科技大学通信工程学院 ',
          url: 'http://ste.xidian.edu.cn/'
        },
        {
          title: '西安电子科技大学研究生招生信息网',
          url: 'http://yz.xidian.edu.cn/'
        },
        {
          title: '综合业务网理论及关键技术国家重点实验室',
          url: 'https://isn.xidian.edu.cn/'
        },
        {
          title: '西安电子科技大学图书馆',
          url: 'http://lib.xidian.edu.cn/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 40px;
}

.box-card-link a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color:darkturquoise;
  font-size: 18px;
  height: 48px;
}

.box-card-link a::after {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  content: '';
  display: block;
  background-color:darkturquoise;
  height: 2px;
  width: 0;
}

.box-card-link a:hover::after {
  transition: width linear .3s;
  width: 100%;
}
</style>


