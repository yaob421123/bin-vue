<template>
  <div class="b--grid" :class="randerCls">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'b-grid',
  props: {
    column: {
      type: [Number, String],
      default: '4'
    },
    showBorder: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    randerCls () {
      let b = '';
      if (this.showBorder) {
        b = ' b--grid-border'
      }
      return b + ' b--gridwidth-' + this.column;
    }
  }
}
</script>

<style lang="less">
.b--grid {
  width: 100%;
  position: relative;
  &:after {
    content: ""; 
    display: block; 
    height: 0;
    clear: both;
    visibility: hidden;
  }
  &:before {
    border:none;
  }
}
.b--grid-border:before {
  content: '';
  position: absolute;
  width:200%;
  height:200%;
  -webkit-transform:scale(.5);
          transform:scale(.5);
  -webkit-transform-origin:0 0;
          transform-origin:0 0;
  pointer-events:none;
  box-sizing:border-box;
  border:0;
  border-top:1px solid #d4d4d4;
  border-left:1px solid #d4d4d4;
  left:0;
  top:0;
}

</style>