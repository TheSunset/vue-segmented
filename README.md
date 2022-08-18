
# vue-segmented

![npm](https://img.shields.io/npm/v/vue-segmented)
![npm bundle size](https://img.shields.io/bundlephobia/min/vue-segmented?color=red)
![npm](https://img.shields.io/npm/dt/vue-segmented)

基于 vue 的 分段控制组件, [在线 demo](https://thesunset.github.io/vue-segmented/)

## Installation

```bash
npm install vue-segmented --save
```
```bash
yarn add vue-segmented
```
## Usage

```vue


<template>
  <div id="app">
    <Segmented :options="options" />
  </div>
</template>

<script>
import Segmented from 'vue-segmented';

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

```

## Props
| props         | type   | tip                                     |
| ------------- | ------ | --------------------------------------- |
| options       | array  | 数据，一个数组                          |
| options.label | string | 每个分段的展示名称                      |
| options.value | any    | 每个分段的值，change事件的回调结果      |
| @change       | 事件   | 分段改变触发的事件，参数为options.value |



## License
MIT
© 2022 GitHub, Inc.
