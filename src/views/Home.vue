<template>
  <div class="home">
    <div style="margin:10px 0">
      <b-button bgcolor="#04be02" size="mini" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#ef4f4f" size="mini" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#ffb400" size="mini" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#04be02" size="mini" isloadding>加载中...</b-button>
    </div>
    <div style="margin:10px 0">
      <b-button bgcolor="#04be02" size="small" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#ef4f4f" size="small" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#ffb400" size="small" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#04be02" size="small" radio="angle" isloadding>加载中...</b-button>
    </div>
    <div style="margin:10px 0">
      <b-button bgcolor="#04be02" size="small" radio="angle" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#ef4f4f" size="small" radio="square" style="margin-right: 5px;">button</b-button>
      <b-button bgcolor="#ffb400" size="small" radio="circle">button</b-button>
    </div>
    <div style="margin:10px 0">
      <b-button bgcolor="#ef4f4f" size="large" radio="angle" block isloadding @iclick="btnClick">加载中...</b-button>
    </div>
    <div style="margin:10px 0">
      <b-button bgcolor="#ef4f4f" size="large" radio="angle" block disabled @iclick="btnClick">禁用</b-button>
    </div>
    <div style="margin:10px 0">
      <b-button bgcolor="#ef4f4f" size="large" radio="angle" block isloading @iclick="btnClick">radio="angle"</b-button>
    </div>
    <div style="margin:10px 0">
      <b-button bgcolor="#ef4f4f" size="large" radio="square" block @iclick="btnClick">radio="square"</b-button>
    </div>
    <div style="margin:10px 0">
      <b-button bgcolor="#ef4f4f" size="large" radio="circle" :isloadding="isloadding" block @iclick="btnClick">radio="circle"</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

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