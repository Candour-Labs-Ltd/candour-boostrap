<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col col lg="2"></b-col>
      <b-col cols="12" md="auto">
        <b-card v-if="!registrationComplete" bg-variant="dark">
          <h1>Register</h1>
          <br />
          <b-form @submit.stop.prevent="registration">
            <b-form-group
              label-cols-sm="3"
              label="First Name"
              label-align-sm="right"
            >
              <b-form-input
                v-model="firstname"
                placeholder="First Name"
                id="firstname"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Surname Name"
              label-align-sm="right"
            >
              <b-form-input
                v-model="surname"
                placeholder="Username"
                id="surnname"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Date of Birth:"
              label-align-sm="right"
              label-for="dob"
            >
              <b-form-datepicker id="dob" :state="true"></b-form-datepicker>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Email:"
              label-align-sm="right"
              label-for="email"
            >
              <b-form-input
                v-model="email"
                type="email"
                id="email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label-cols-sm="3"
              label="Password:"
              label-align-sm="right"
              label-for="password"
            >
              <b-form-input
                v-model="password"
                type="password"
                id="password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" size="sm">Register</b-button>
          </b-form>
        </b-card>
        <b-card v-else bg-variant="dark">
          <code>
            Registration Details:<br />
            {{ firstname }} {{ surname }}<br />
            {{ email }}<br />
            {{ password }}<br />
          </code>
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
    firstname: null,
    surname: null,
    dateOfBirth: null,
    email: null,
    password: null,
    registrationComplete: false,
  }),
  methods: {
    registration() {
      console.log(this.firstname, this.surname, "has signed up.");
      this.registrationComplete = true;
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