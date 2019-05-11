<template>
  <div id="app">
    <img id="background" :src="chalkboard" />
    <router-view />
  </div>
</template>

<script>
import chalkboard from '@/assets/green-chalkboard.jpg'
export default {
  data() {
    return {
      chalkboard,
    }
  },
}
</script>

<style lang="stylus">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fefefe;
}

#background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 5px solid #8b4726;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
