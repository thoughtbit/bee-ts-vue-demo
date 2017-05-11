<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import '~/container/index.less';

export default {
  name: 'app'
};
</script>

<style lang="less">
// @import "./container/index.less";
@color-text: #2c3e50;
#app {
  text-align: center;
  color: @color-text;
  margin-top: 60px;
}
</style>
