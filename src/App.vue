<template>
  <div id="app">
    <div class="docs-header">
      UI
    </div>
    <div class="docs-main">
      <div class="docs-menu">
        <dl>
          <dt>基本</dt>
          <dd>
            <router-link to="/button">Button 按钮</router-link>
          </dd>
        </dl>
      </div>
      <div class="docs-content">
        <router-view/>
      </div>
    </div>
    
  </div>
</template>

<style lang="less">
@import "./style/base.less";
@import "./style/markdown.less";
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.docs-header {
  height: 70px;
  background-color:#fff;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  padding:0 20px;
}
.docs-main {
  flex: 1;
  height: 100%;
  display: flex;
  .docs-menu {
    min-width: 280px;
    overflow-y: auto;
    padding: 10px 20px;
    dt {
      padding: 15px 0 5px;
      color: #999;
    }
    dd a{
      display: block;
      padding-top: 5px;
      padding-bottom: 5px;
      position: relative;
      color: #333;
      &:hover{
        color: #409eff;
      }
    }
  }
  .docs-content {
    flex: 1;
    box-sizing: border-box;
    padding: 10px 20px;
    overflow-y: auto;
    overflow-x: auto;
    min-width: 880px;
    background-color: #fff;
    min-height: 100%;
  }
}
</style>
