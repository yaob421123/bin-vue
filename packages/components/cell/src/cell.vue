<template>
  <div class="b--cell-item" :class="randerCls" @click="clickHanle">
    <div class="icon" v-if="$slots.icon"><slot name="icon"></slot></div>
    <div class="label" 
      :style="{
        'color': labcolor,
        'min-width': labwidth ? labwidth : ''
      }">
      <slot name="label"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="more" v-if="ismore"></div>
  </div>
</template>
<script>

export default {
  name: 'b-cell-item',
  props: {
    type: {
      type: String,
      default: 'left' // left / right
    },
    labcolor: {
      type: String,
      default: ''
    },
    labwidth: {
      type: String,
      default: ''
    },
    ismore: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.labcolor)
  },
  computed: {
    randerCls () {
      let a = ''
      if (this.type === 'right') {
        a = 'b--cell-right ';
      }
      return a;
    }
  },
  methods: {
    clickHanle () {
      this.$emit('iclick');
    }
  }
}
</script>

<style lang="less">
.b--cell-item {
  display: flex;
  align-items: center;
  height: 50px;
  position: relative;
  font-size: 14px;
  .icon {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
  .label {
    margin-right: 10px;
    color: #9b9b9b;
  }
  .content {
    flex: 1;
    input {
      width: 100%;
      border:none;
      background: none;
      height: 30px;
    }
  }
  .more {
    margin-left: 5px;
    width: 9px;
    height: 9px;
    border-top: 1px solid #a0a0a0;
    border-right: 1px solid #a0a0a0;
    transform: rotate(45deg);
  }
  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(.5);
    transform: scale(.5);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid #e8e8e8;
    left: 0;
    top: 0;
  }
  &:last-child::after {
    display:none;
  }
}
.b--cell-right {
  .content {
    text-align: right;
    input {
      text-align: right;
    }
  }
}
</style>