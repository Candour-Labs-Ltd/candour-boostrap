<template>
  <div class="viewport" :class="theme">
    <b-navbar>
      <b-nav-text class="logo" :class="theme">SocialNetwork</b-nav-text>
      <b-button-toolbar class="ml-auto">
        <b-collapse id="themes">
          <b-button-group class="mr-1">
            <b-button
              class="sepia"
              title="Sepia"
              v-b-toggle.themes
              @click="themeHandler('sepia')"
            >
              <b-icon icon="brightness-high" aria-hidden="true"></b-icon>
            </b-button>
            <b-button
              class="light"
              title="Light"
              v-b-toggle.themes
              @click="themeHandler('light')"
            >
              <b-icon icon="brightness-high" aria-hidden="true"></b-icon>
            </b-button>
            <b-button
              class="dark"
              title="Dark"
              v-b-toggle.themes
              @click="themeHandler('dark')"
            >
              <b-icon icon="brightness-high" aria-hidden="true"></b-icon>
            </b-button>
            <b-button
              title="Default"
              v-b-toggle.themes
              @click="themeHandler('default')"
            >
              <b-icon icon="brightness-high" aria-hidden="true"></b-icon>
            </b-button>
          </b-button-group>
        </b-collapse>
        <b-button-group class="mr-1">
          <b-button
            :class="theme"
            title="Themes"
            v-b-tooltip.hover
            v-b-toggle.themes
          >
            <b-icon icon="moon" aria-hidden="true"></b-icon>
          </b-button>
          <b-button :class="theme" title="Profile" v-b-tooltip.hover>
            <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          </b-button>
          <b-button :class="theme" title="Logout" v-b-tooltip.hover>
            <b-icon icon="x-circle" aria-hidden="true"></b-icon>
          </b-button>
        </b-button-group>
      </b-button-toolbar>
    </b-navbar>
    <b-container class="viewport" fluid>
      <b-row align-h="center">
        <b-col cols="3">
          <b-card
            :bg-variant="theme"
            header="Contacts"
            class="text-center contacts-card"
            :class="theme"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </b-col>
        <b-col>
          <b-card
            :bg-variant="theme"
            header="Conversations"
            class="text-center conversations-card"
            :class="theme"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </b-col>
        <b-col cols="3">
          <b-card
            :bg-variant="theme"
            header="Statistics"
            class="text-center stats-card"
            :class="theme"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {},
  data: () => ({
    username: "Alan Avins",
    password: null,
    theme: "default",
  }),
  computed: {},
  methods: {
    themeHandler(mode) {
      this.theme = mode;
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  font-weight: 100;
  font-size: 29pt;
}

.viewport {
  height: 100vh;
}

.debug {
  background-color: cyan;
}

.contacts-card {
  max-width: 400px;
  height: 500px;
}

.stats-card {
  max-width: 400px;
  height: 500px;
}

.converstaions-card {
  max-width: 800px;
  width: 800px;
  height: 500px;
}

.sepia {
  color: #404040;
  background-color: wheat;
  transition: 0.4s ease-in-out;
  & .body {
    color: darkgrey;
    background-color: wheat;
    transition: 0.4s ease-in-out;
  }
}

.light {
  color: black;
  background-color: white;
  transition: 0.4s ease-in-out;
  & .body {
    color: darkgrey;
    background-color: burlywood;
    transition: 0.4s ease-in-out;
  }
}

.dark {
  color: white;
  background-color: black;
  transition: 0.4s ease-in-out;
}

.default {
  color: white;
  background-color: #777777;
  transition: 0.4s ease-in-out;
}
</style>