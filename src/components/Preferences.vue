<template>
  <b-col align-self="end">
    <b-icon icon="gear" v-b-toggle.prefs />
    <b-collapse id="prefs">
      <b-form-checkbox v-model="darkMode" name="dark-mode" switch>{{
        darkMode === true ? "Dark Mode" : "Light Mode"
      }}</b-form-checkbox>
    </b-collapse>
  </b-col>
</template>

<script>
export default {
  name: "Preferences",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottomright {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

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
