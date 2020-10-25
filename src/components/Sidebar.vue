<template>
  <div class="hello">
    <b-sidebar
      visible
      id="sidebar"
      title="Conversations"
      bg-variant="dark"
      text-variant="light"
    >
      <div>
        <p>Home</p>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
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
