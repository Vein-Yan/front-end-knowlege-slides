<template>
  <div class="catalog">
    <h2>大纲</h2>
    <ul>
      <li
        v-for="(text, key) in list"
        :key="key"
        v-bind:class="{ active: index === key }"
      >
        <h4>{{ text }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: -1,
    },
  },
  data() {
    return {
      list: [
        '新的变量声明 let 和 const',
        '变量解构及扩展运算符',
        '字符串模板',
        '对象的属性名表达式',
        'Promise 对象',
        'Generator 函数',
        'async 与 await 实现异步',
        'js 中的 Class',
        '模块化 Module',
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.catalog {
  text-align: center;

  ul {
    text-align: left;
    width: 400px;
    margin: auto;

    .active {
      color: red;
    }
  }
}
</style>
