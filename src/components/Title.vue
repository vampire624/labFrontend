<template>
  <div>
    <h3 class="title-content">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'default title'
    },
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.title-content {
  position: relative;
  background-color: #EAF8FF;
  padding: 10px;
  border-radius: 3px;
  border-left: #20BDFF solid 10px;
  color: #666;
}
</style>

