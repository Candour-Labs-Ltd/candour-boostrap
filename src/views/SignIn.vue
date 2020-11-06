<template>
  <b-row align-v="center">
    <b-col></b-col>
    <b-col>
      <b-card bg-variant="dark">
        <b-form @submit.stop.prevent="signIn">
          <h1>Sign In</h1>
          <br />
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
          <b-button type="submit" size="sm">Sign In</b-button>
        </b-form>
      </b-card>
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: "SignIn",
  components: {},
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.$router.replace({ name: "Profile", params: {id: data.user.uid }});
          console.log(data)
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
