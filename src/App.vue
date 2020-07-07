<template lang="pug">
  v-app#app
    v-container
      v-row.justify-center
        v-col(cols="12" md="10")
          v-app-bar(
            light
            flat
            color="white"
          )
            v-btn(to="/" text)
              v-icon.ml-3(size="60px" color="#2c3e50") $vuetify.icons.custom

            v-spacer

            v-app-bar-nav-icon(@click="drawer = true" right)

    v-navigation-drawer(v-model='drawer' absolute temporary right :width="windowWidth * 0.3")
      v-list
        v-list-item-group(active-class="text--accent-4" )
          v-list-item(to="/home")
            v-list-item-title.display-1 Home
    v-main
      router-view
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'App',

  components: {
    'page-header': PageHeader
  },

  data: () => ({
    drawer: false
  }),

  computed: {
    windowWidth () {
      return window.innerWidth
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.text-color {
  color: #2c3e50 !important;
}
</style>
