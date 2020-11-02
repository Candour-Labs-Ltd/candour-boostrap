<template>
  <div :class="handleDarkMode" id="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "App",
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

html,
body {
  height: 100vh;
}

.dark {
  color: white;
  background-color: #343434;
  transition: 0.4s ease-in-out;
  height: 100vh;
  & .card {
    color: white;
    background-color: #343434;
    transition: 0.4s ease-in-out;
  }
  & .body {
    color: white;
    background-color: #343434;
    transition: 0.4s ease-in-out;
  }
  & .html {
    color: white;
    background-color: #343434;
    transition: 0.4s ease-in-out;
  }
  & .div {
    color: white;
    background-color: #343434;
    transition: 0.4s ease-in-out;
  }
  & .form-control {
    color: white;
    background-color: #343434;
    transition: 0.4s ease-in-out;
  }
  & #app {
    color: white;
    background-color: #343434;
    transition: 0.4s ease-in-out;
  }
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
