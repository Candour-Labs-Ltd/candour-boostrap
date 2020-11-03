<template>
  <div>
    <b-navbar>
      <b-nav-text tag="h1" class="brand-text">SocialNetwork</b-nav-text>
      <b-link class="nav-link" :to="{ path: '/' }">Home</b-link>
      <b-link class="nav-link" :to="{ path: '/about' }">About</b-link>
      <b-link class="nav-link" :to="{ path: '/register' }">Register</b-link>
      <b-link class="ml-auto nav-link" :to="{ path: '/signin' }">Sign In</b-link>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    username: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.brand-text {
  color: white;
  font-weight: 100;
  font-size: 29pt;
}

.nav-link {
  color: white;
  text-decoration: none;
}
</style>
