<template>
  <div class="b--col" :class="randerClass" :style="{
    'marginLeft': space ? space + 'px' : spaceLeft + 'px',
    'marginRight': space ? space + 'px' : spaceRight + 'px',
    }">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'b-flexbox-item',
  props: {
    span: {
      type: Number,
      default: 1
    },
    spaceLeft: {
      type: String,
      default: ''
    },
    spaceRight: {
      type: String,
      default: ''
    },
    space: {
      type: String,
      default: ''
    }
  },
  computed: {
    randerClass () {
      let a = 'b--col-s' + this.span;
      return a
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.b--col-s1 {
  flex:1;
}
.b--col-s2 {
  flex:2;
}
.b--col-s3 {
  flex:3;
}
</style>