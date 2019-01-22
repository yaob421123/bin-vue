<template>
  <div class="b--flexbox" :class="randerClass" :style="{
    'padding': gutter + 'px'
    }">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'b-flexbox',
  props: {
    gutter: {
      type: String,
      default: ''
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    iscolumn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    randerClass () {
      let a = '';
      let b = '';
      let c = '';
      if (this.justify === 'start' || this.justify === 'end' || this.justify === 'center' || this.justify === 'space-around' || this.justify === 'space-between') {
        a = 'b--flexboxj-' + this.justify
      }
      if (this.align === 'top' || this.align === 'middle' || this.align === 'bottom') {
        b = ' b--flexboxa-' + this.align
      }
      if (this.iscolumn) {
        c = ' b--flexbox-column'
      }
      return a + b + c
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.b--flexbox {
  display: flex;
  box-sizing: border-box;
}
.b--flexboxa-top {
  align-items: flex-start;
}
.b--flexboxa-middle {
  align-items: center;
}
.b--flexboxa-bottom {
  align-items: flex-end;
}
.b--flexboxj-start {
  justify-content:start;
}
.b--flexboxj-end {
  justify-content:end;
}
.b--flexboxj-center {
  justify-content:center;
}
.b--flexboxj-space-around  {
  justify-content:space-around;
}
.b--flexboxj-space-between  {
  justify-content:space-between;
}
.b--flexbox-column {
  flex-direction:column;
  .b--col {
    width: 100%;
  }
}
</style>