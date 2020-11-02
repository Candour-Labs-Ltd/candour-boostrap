<template>
  <div>
    <h1>Sign In Page</h1>
    <b-row align-v="center">
      <b-col></b-col>
      <b-col> </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  components: {},
  data: () => ({
    username: "Alan Avins",
    password: null,
  }),
  methods: {},
  created: {
    exportUsername() {
      this.$emit(this.username);
    },
  },
};
</script>
