<template>
  <div id="app">
    <div class="app-container">
      <header>
        <Head></Head>
      </header>
      <main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </main>
      <footer class="app-footer">
        <Foot></Foot>
      </footer>
    </div>
  </div>
</template>

<script>
import Head from './components/Head'
import Foot from './components/Foot'
export default {
  name: 'app',
  components: {
    Head,
    Foot,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
.app-container {
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  width: 1000px;
  margin: 0 auto;
  padding-bottom: 60px;
}

.app-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.primary {
  color: #409EFF;
}

.success {
  color: #67C23A;
}

.warning {
  color: #E6A23C;
}

.danger {
  color: #F56C6C;
}

.title {
  font-weight: bold;
  font-size: 20px;
}
</style>
