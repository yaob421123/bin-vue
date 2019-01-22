<template>
  <i class="w-icon" :class="randerCls" :style="{
    'fontSize': size + 'px',
    'color': color
    }"></i>
</template>
<script>

export default {
  name: 'b-icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    spin: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '18'
    },
    color: {
      type: String,
      default: '#999'
    },
  },
  computed: {
    randerCls () {
      let a = this.type ? 'w-icon-' + this.type : '';
      let b = '';
      if (this.spin) {
        b = ' w-icon-spin';
      }
      return a + b
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.w-icon {
  display: inline-flex;
}
.w-icon:before {
  display: block;
}
.w-icon-spin:before {
  animation: loading-circle 1s infinite linear;
}
@keyframes loading-circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>