<template>
  <div id="app">
    <Segmented :options="options" />
  </div>
</template>

<script>
import Segmented from './index.js';
// import Segmented from '../dist/segmented.umd';

export default {
  name: 'App',
  data() {
    return {
      options: [
        {
          label: '北京',
          value: 1
        },
        {
          label: '上海',
          value: 2
        },
        {
          label: '广州',
          value: 3
        },
        {
          label: '深圳',
          value: 4
        },
        {
          label: '杭州',
          value: 5
        }
      ]
    };
  },
  components: {
    Segmented
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
