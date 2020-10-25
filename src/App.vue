<template>
  <div id="app">
    <TopBar />
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    TopBar
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
