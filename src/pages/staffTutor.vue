<template>
  <div>
    <Title :title="title"></Title>
    <template v-for="(item, index) in tutors">
      <el-card class="box-card" :key="index" shadow="hover">
        <div slot="header">
          <span class="title">{{ item.name }}</span>
        </div>
        <div>
          <div class="tutor-img-container">
            <img :src="item.img" :alt="item.name" class="tutor-img">
          </div>
          <div class="description">
            {{ item.desc }}
          </div>
        </div>
      </el-card>
    </template>
  </div>
</template>

<script>
import Title from '../components/Title'
export default {
  components: {
    Title,
  },
  data () {
    return {
      title: '导师介绍',
      tutors: [
        {
          name: '岳鹏',
          img: require('../assets/yuepeng.jpg'),
          desc: '岳鹏，博士，副教授，硕士生导师。男，1976年生，陕西西安人。1998年于西安电子科技大学获得“通信工程”学士学位。1998年至2000年，工作于大唐电信股份有限公司，任助理工程师,主要负责网络终端的研发工作。2000～2003年于西安电子科技大学“综合业务网理论和关键技术”国家重点实验室攻读硕士学位，期间主要从事弹性分组环(IEEE 802.17)关键技术的研究，并于2003年春获得“通信与信息系统”硕士学位；2002～2006年于西安电子科技大学“综合业务网理论和关键技术”国家重点实验室攻读博士学位，期间主要从事因特网服务质量（QoS）、无线局域网若干关键问题和应用方面的研究，参与完成了国家自然科学基金重大研究计划面上项目——“因特网拥塞控制机制的研究”现工作于西安电子科技大学“综合业务网理论与关键技术”国家重点实验室，研究方向主要为无线光通信、无线通信以及计算机网络等。自2006年来，主持一项国家自然科学基金“基于无线光载射频（Radio over Free Space Optics）技术的分布式天线系统关键技术研究”项目，主持一项“十二五”国防预研基金“可见光信道特性及APT技术研究”项目，主研一项“十一五”国防预研基金项目，参加了海军装备部、总装备部、华为高校科技基金等多项通信与光通信以及无线光通信领域的科研项目。2014年10月至2015年10月去百度CEO李彦宏的母校美国州立大学布法罗分校“计算机科学与工程”系访学，参与有关车联网方向的课题研究。2018年5月起担任通信工程学院人工智能通信与综合业务研究中心无人机蜂群专项技术负责人。'
        }, {
          name: '易湘',
          img: require('../assets/yixiang.png'),
          desc: '易湘，博士后，讲师，硕士生导师。女，陕西西安人，2003年本科毕业于西安电子科技大学电子信息工程专业，2006和2013年于西安电子科技大学分别获得通信与信息系统专业工学硕士和博士学位。2013年10月起工作于西安电子科技大学通信工程学院、“综合业务网理论与关键技术”国家重点实验室（ISN），目前主要从事无线光信道特性研究与通信理论分析方面的研究工作。近年来先后在美国光学学会（OSA））《Optics Letters》（影响因子3.179）、《Optics Express》（影响因子3.525）、《Applied Optics》（影响因子1.784）等国际著名光学学术刊物上以第一作者发表论文十余篇，并应邀担任《Optics Express》,《IEEE Photonics Technology Letters》, 《Optics Communications》、《Optics Laser and Technology》、《Optik》等国际、国内重要期刊的审稿人。主持的项目有，国际自然科学基金青年基金（批准号：61505155）2016-2018 ，中国博士后科学基金面上资助一等资助 （批准号：2015M570813），2015-2016年主持项目主要面向水下激光通信应用研究海水的光学特性，重点研究海洋湍流对水下激光通信性能的影响及抑制不利影响的方法。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tutor-img-container {
  position: relative;
  width: 160px;
  float: left;
  margin: 0 10px 0 0;
  height: 140px;
  overflow: hidden;
}

.tutor-img {
  position: absolute;
  left: 0;
  top: -15px;
  width: 160px;
}

.box-card {
  line-height: 1.8em;
  margin-top: 30px;
}

.description {
  color: #666;
}
</style>


