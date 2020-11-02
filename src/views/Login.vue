<template>
  <b-container class="whole-page" :class="handleDarkMode" fluid>

    <b-row align-v="center" align-h="center">
      <b-col cols="4">
        <b-card min-width="120px" class="login-box">
          Login
          <b-container fluid>
            <b-row class="my-1">
              <b-col cols="12">
                <b-form-input
                  v-model="email"
                  placeholder="Email Address"
                ></b-form-input>
                <b-form-input
                  v-model="password"
                  placeholder="Password"
                ></b-form-input>
                <b-button>Login</b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-card>
      </b-col>
    </b-row>
    <Preferences />
  </b-container>
</template>

<script>
// @ is an alias to /src
import Preferences from "@/components/Preferences.vue"

export default {
  mixins: [],
  name: "Login",
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
    Preferences
  },
};
</script>

<style>

.whole-page {
  height: 100vh;
  /* background-color: #343434; */
}
</style>