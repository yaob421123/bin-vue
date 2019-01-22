<template>
  <div class="b--griditem" :style="{
    'height': griditemH + 'px'
    }">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'b-grid-item',
  props: {
    griditemH: {
      type: [Number, String],
      default: 100
    }
  }
}
</script>

<style lang="less">
.b--griditem {
  float:left;
  padding:1px;
  box-sizing: border-box;
  position:relative;
}
.b--grid-border {
  .b--griditem{
    &:after {
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
      border-right:1px solid #d4d4d4;
      left:0;
      top:0;
    }
    &:before {
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
      border-bottom:1px solid #d4d4d4;
      left:0;
      top:0;
    }
  }
  
}
.b--gridwidth-2 .b--griditem {
  width: 50%;
}
.b--gridwidth-3 .b--griditem {
  width: 33.33%;
}
.b--gridwidth-4 .b--griditem {
  width: 25%;
}
.b--gridwidth-5 .b--griditem {
  width: 20%;
}
.b--gridwidth-6 .b--griditem {
  width: 16.66%;
}
.b--gridwidth-7 .b--griditem {
  width: 14.28%;
}
.b--gridwidth-8 .b--griditem {
  width: 12.5%;
}
.b--gridwidth-9 .b--griditem {
  width: 11.11%;
}
.b--gridwidth-10 .b--griditem {
  width: 10%;
}
</style>