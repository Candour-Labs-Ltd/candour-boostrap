<template>
  <div>
    Register
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Register",
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
