<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col col lg="2"></b-col>
      <b-col cols="12" md="auto">
        <h1>Register</h1>
        <b-card bg-variant="dark">
          <b-form-group
            label-cols-sm="3"
            label="First Name"
            label-align-sm="right"
          >
            <b-form-input placeholder="First Name" id="name"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Surname Name"
            label-align-sm="right"
          >
            <b-form-input placeholder="Username" id="name"></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Email:"
            label-align-sm="right"
            label-for="email"
          >
            <b-form-input id="email"></b-form-input>
          </b-form-group>
          <b-button size="sm">Register</b-button>
        </b-card>
      </b-col>
      <b-col col lg="2"></b-col>
    </b-row>
  </b-container>
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
      this.$emit(this.username);
    },
  },
  components: {},
};
</script>

<style>
.form-control,
.form-control:focus {
  background-color: #777777;
  color: white;
}


.card {
  width: 600px;
}
</style>