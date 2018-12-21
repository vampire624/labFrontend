<template>
  <div>
    <Banner></Banner>
    <Title :title="title"></Title>
    <el-card class="box-card" shadow="hover">
      <div slot="header">
        <span class="title">论文</span>
      </div>
      <div v-for="(item, index) in essays" :key="index" class="box-card-item">
        <span class="box-index" :class="colors[Math.floor(colors.length * Math.random())]">{{ index + 1 }} </span>
         {{ item }}
      </div>
    </el-card>
    <el-card class="box-card" shadow="hover">
      <div slot="header">
        <span class="title">专利</span>
      </div>
      <div v-for="(item, index) in rights" :key="index" class="box-card-item">
        <span class="box-index" :class="colors[Math.floor(colors.length * Math.random())]">{{ index + 1 }} </span>
         {{ item }}
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
      essays: ['Yue Peng, Li Qian-nan, Yi Xiang et al. “Ultra Linear Modulator with High Output RF Gain  Using A 1*2 MMI Coupler”, IEICE Trans. on electronics, Vol.E95-C,No.12,pp.1883-1886, 2012 (SCI/EI Index )', 'Xiang Yi, Zengji Liu, and Peng Yue, Inner- and outer-scale effects on the scintillation index of an optical wave propagating through moderate-to-strong non-Kolmogorov turbulence, Optics Express, vol. 20, no. 4, pp. 4232-4247, Feb. 2012. (SCI：000301041900088；EI：2012822153746)', 'Xiang Yi, Zengji Liu, and Peng Yue, Average BER of free-space optical systems in turbulent atmosphere with exponentiated Weibull distribution, Optics Letters, vol. 37, no. 24, pp. 5142-5144, Dec. 2012. (SCI/EI Index；EI：20125215831554)', 'Xiang Yi, Zengji Liu, and Peng Yue, Optical scintillations and fade statistics for FSO communications through moderate-to-strong non-Kolmogorov turbulence, Optics & Laser Technology, vol. 47, no. 4, pp. 199-207, Apr. 2013. (SCI Index；EI：20124715685966)', '易湘、岳鹏、刘增基、陈耿，无线光载射频通信系统误码率性能分析，光电子激光，vol. 23, no. 7, pp. 1309-1313, 2012.（EI：2012351581683）', '易湘、岳鹏、刘增基、陈耿，基于分集接收技术相干大气激光通信系统性能分析，光电子激光，vol. 23, no. 9, pp. 1743-1748, 2012.（EI：2012431599555）'],
      rights: ['集成光电探测器的CMOS图像传感器双模通信接收系统 (授权)', '基于LED车灯的双速率可见光通信发信机（授权）', '一种混合光编码方法及装置', '基于人造散射体的红外光散射通信装置及方法', '基于无线射频能量收集装置的可穿戴无源RFID设备', '面向车联网的区域交通流量预测系统及方法', '基于车载可见光通信的发射端LED车灯自动控制装置', '基于激光光强检测的无人机飞控设备', '水下智能无线光通信系统'],
    }
  },
  mounted () {
    this.axios.get(URL.essays)
    .then((res) => {
      this.essays = res.data
    })
    .catch((err) => {
      console.log(err)
    })

    this.axios.get(URL.rights)
    .then(res => {
      this.rights = res.data
    })
    .catch(err => {
      console.log(err)
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


