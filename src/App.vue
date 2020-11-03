<template>
  <div id="app">
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
  background-color: #777777;
  color: white;
}

html, body {
  height: 100vh;
}

.brand-text {
  color: white;
}


// .dark {
//   color: white;
//   background-color: #343434;
//   transition: 0.4s ease-in-out;
//   height: 100vh;
//   & .card {
//     color: white;
//     background-color: #777777;
//     transition: 0.4s ease-in-out;
//   }
//   & .body {
//     color: white;
//     background-color: #343434;
//     transition: 0.4s ease-in-out;
//   }
//   & .html {
//     color: white;
//     background-color: #343434;
//     transition: 0.4s ease-in-out;
//   }
//   & .div {
//     color: white;
//     background-color: #343434;
//     transition: 0.4s ease-in-out;
//   }
//   & .form-control {
//     color: white;
//     background-color: #343434;
//     transition: 0.4s ease-in-out;
//   }
// }

</style>
