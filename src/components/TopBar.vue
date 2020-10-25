<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item v-b-toggle.sidebar>Conversations</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto" align="center">
        <b-nav-item>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item right
          ><b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            size="sm"
          ></b-avatar>
          Alan Avins</b-nav-item
        >
      </b-navbar-nav>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
