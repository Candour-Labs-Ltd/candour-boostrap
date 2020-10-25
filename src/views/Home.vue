<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    username: "Alan Avins",
    password: null,
  }),
  methods: {},
  created: {
    exportUsername() {
      this.$emit(this.username)
    }
  },
  components: {},
};
</script>
