<template>
  <div class="home">
    <Sidebar />
    <TopBar />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import TopBar from "@/components/TopBar.vue";

export default {
  name: "Profile",
  components: {
    Sidebar,
    TopBar
  },
  data: () => ({
    username: "Alan Avins",
    password: null,
  }),
  methods: {},
  created: {
    exportUsername() {
      this.$emit(this.username);
    },
  }
};
</script>
