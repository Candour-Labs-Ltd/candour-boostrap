<template>
  <b-container fluid>
    <TopBar />
    <router-view></router-view>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TopBar from "@/components/TopBar.vue";

export default {
  mixins: [],
  name: "HomePage",
  props: {},
  data() {
    return {
      username: "Alan Avins",
      email: null,
      password: null,
    };
  },
  methods: {},
  components: {
    TopBar,
  },
};
</script>

<style>
.debug {
  background-color: cyan;
}

.nav-link {
  text-decoration: none;
  color: white;
}
</style>