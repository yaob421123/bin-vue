<template>
  <div class="home">
    aaa
  </div>
</template>

<script>
export default {
  data () {
    return {
      isloadding: false
    }
  },
  methods: {
    btnClick () {
      console.log(2222)
      this.isloadding = true;
    }
  }
}
</script>

<style lang="less">
.home {
  padding: 10px;
}
</style>