<template>
  <div>
    <Banner></Banner>
    <Title :title="title"></Title>
    <div class="introduct-info">
      <el-card class="box-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="title">光通信技术实验室</span>
        </div>
        <div class="introduct-item">
          {{ introductData }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Title from '../components/Title'
export default {
  components: {
    Banner,
    Title,
  },
  data () {
    return {
      title: '实验室简介',
      introductData: '本实验室隶属综合业务网理论及关键技术国家重点实验室 (ISN)，研究成员基础雄厚，功底扎实，极具创新精神，科研能力强。多年来一直从事光通信以及无线光通信领域的相关研究工作。实验室先后承担过四项纵向项目的研究：国家重点研发计划国际战略合作项目“基于多域智能宽带机动自组网应急通信系统”，国家自然科学基金“基于无线光载射频（Radio over Free Space Optics）技术的分布式天线系统关键技术研究”，“十二五”国防预研基金“可见光信道特性及APT技术研究”，西安电子科技大学基本科研业务费资助项目“基于改进RoF架构的分布式天线系统中无线射频分配关键技术研究”。完成两项横向课题：可见光斜程链路大气信道传播特性的研究与基于多维图像处理的车辆超限检测系统若干关键技术研究。自成立以来实验室参加了海军装备部，总装备部，华为高校科技基金等多项通信与光通信以及无线光通信领域的科研项目，与上述部门和有关单位建立了长久的合作关系。实验室重点研究水下激光通信及下一代（5G）通信技术的相关工作。在车联网，5Gbackhaul方向都作过深入的研究工作，具有相当的技术积累，并取得了一系列的成果。申请了相关发明专利20项，其中10项授权。在国内外SCI，EI等检索目录的期刊和会议上发表相关学术论文50余篇，其中SCI 10篇，EI 30篇，同时与英、美诸多高效建立了长久的合作关系，合作并完成了诸多国际合作重大专项课题。毕业学生前景广阔，可选择推荐前往海外顶级高校继续攻读博士、或在国内顶级互联网及IT企业任职。'
    }
  }
}
</script>

<style scoped>
.introduct-item {
  line-height: 1.8em;
  color: #666;
}
</style>


