<template>
  <button class="b--button"
    :disabled="disabled || isloadding"
    :style="{
      'background': bgcolor, 
      'border-radius': radio,
      'color': color
    }"
    :class="classes"
    @click="bBtnClickHandle">
    <span class="loading" v-if="isloadding">
      <i></i>
    </span>
    <span class="text" :style="{'margin-left': isloadding ? '5px' : 0}">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'b-button',
  props: {
    size:{
      type: String,
      default: 'small'
    },
    bgcolor: {
      type: String,
      default: ''
    },
    radio: {
      type: String,
      default: 'square' // square, circle, angle
    },
    color: {
      type: String,
      default: '#fff'
    },
    isloadding: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      // 'b--button_mini': size == 'mini',
      // 'b--button_small': size == 'small',
      // 'b--button_large': size == 'large',
      // 'b--radio_square': radio == 'square',
      // 'b--radio_circle': radio == 'circle',
      // 'b--radio_angle': radio == 'angle',
      // 'b--button_block': block
      let a = '';
      if (this.size === 'mini') {
        a = 'b--button_mini'
      } else if (this.size === 'small') {
        a = 'b--button_small'
      } else if (this.size === 'large') {
        a = 'b--button_large'
      }
      let b = '';
      if (this.radio === 'square') {
        b = ' b--radio_square'
      } else if (this.radio === 'circle') {
        b = ' b--radio_circle'
      } else if (this.radio === 'angle') {
        b = ' b--radio_angle'
      }
      let c = '';
      if (this.block) {
        c = ' b--button_block'
      }
      let d = '';
      if (this.disabled) {
        d = ' b--button_disabled'
      }
      return a + b + c + d;
    }
  },
  methods: {
    bBtnClickHandle () {
      if (this.isloadding) return false;
      this.$emit('iclick');
    }
  }
}
</script>

<style lang="less">
.b--button_containar {
  display: inline-block;
}
.b--button_block {
  display: block;
  width: 100%;
}
.b--button {
  border: none;
  background: none;
  white-space: nowrap;
  vertical-align: middle;
  text-align: center;
  border-radius: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font: 100% tahoma,\5b8b\4f53,arial;
  .loading {
    display: inline-block;
    i {
      display:flex;
      align-items: center;
      height: 12px;
      width: 12px;
      border-radius: 100%;
      border: 1px solid #fff;
      border-bottom-color: transparent;
      vertical-align: middle;
      animation: rotate 0.75s linear infinite;
    }
  }
  &.b--button_disabled {
    opacity: 0.8;
  }
}
.b--button_mini {
  padding: 0 10px;
  font-size: 12px;
  height: 24px;
}
.b--button_small {
  padding: 0 10px;
  font-size: 12px;
  height: 34px;
  &.b--radio_angle {
    border-radius: 0;
  }
  &.b--radio_square {
    border-radius: 4px;
  }
  &.b--radio_circle {
    border-radius: 17px;
    padding:0 15px;
  }
}
.b--button_large {
  padding: 0 10px;
  font-size: 15px;
  height: 44px;
  &.b--radio_angle {
    border-radius: 0;
  }
  &.b--radio_square {
    border-radius: 5px;
  }
  &.b--radio_circle {
    border-radius: 22px;
  }
}
@keyframes rotate {
  0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}
</style>