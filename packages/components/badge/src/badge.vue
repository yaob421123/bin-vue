<template>
  <div class="b--badge"
    :class="randerCls"
    :style="{
      'background': bgcolor,
      'color': color
    }">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'b-badge',
  props: {
    shape: {
      type: String,
      default: 'circle' // circle / square
    },
    color: {
      type: String,
      default: ''
    },
    bgcolor: {
      type: String,
      default: ''
    }
  },
  computed: {
    randerCls () {
      let cls = ''
      if (this.shape === 'square') {
        cls = 'b--badge-square';
      }
      return cls;
    }
  }
}
</script>

<style lang="less">
.b--badge {
  display: inline-block;
  background: #d0d0d0;
  color: #fff;
  font-size: 12px;
  line-height: 1;
  padding: 3px 6px;
  border-radius: 10000px;
}
.b--badge-square {
  border-radius:2px;
}
</style>