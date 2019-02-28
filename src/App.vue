<template>
  <div id="app">
    <div class="docs-header">
      <router-link class="logo" to="/"> <img src="./assets/logo.jpg" alt=""> VUE BINUI 使用文档</router-link>
      <div class="version">{{ version }}</div>
      <div class="social">
        <a href="https://github.com/yaob421123/bin-vue" target="_blank">
          <b-icon type="github" size="30" color="#c8d6e8"></b-icon>
        </a>
      </div>
    </div>
    <div class="docs-main">
      <div class="docs-menu">
        <dl>
          <dd>
            <router-link to="/quick-start">快速上手</router-link>
          </dd>
          <dd>
            <router-link to="/changelog">更新日志</router-link>
          </dd>
        </dl>
        <dl>
          <dt>基本</dt>
          <dd>
            <router-link to="/button">Button 按钮</router-link>
          </dd>
          <dd>
            <router-link to="/icon">Icon 图标</router-link>
          </dd>
          <dd>
            <router-link to="/flexbox">Flexbox 布局</router-link>
          </dd>
          <dd>
            <router-link to="/grid">Grid 九宫格</router-link>
          </dd>
          <dd>
            <router-link to="/badge">Badge 角标</router-link>
          </dd>
          <dd>
            <router-link to="/cell">Cell 表单</router-link>
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
  .logo {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #313131 !important;
    font-family:\5fae\8f6f\96c5\9ed1;
    font-weight: 400;
    img {
      width: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
  .version {
    font-size: 16px;
    margin-left: 10px;
    color:#d6d6d6;
    padding-top: 10px;
  }
  .social {
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    a {
      display: inline-block;
      margin-left: 15px;
    }
    a:hover i {
     color: #8b97a7 !important; 
    }
  }
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
