<template lang="pug">
  v-app#app
    transition(name="slide-fade")
      v-container(v-show="display")
        v-row.justify-center
          v-col(cols="12" md="10")
            v-app-bar(
              light
              flat
              color="white"
            )
              v-btn#logo.px-0.mx-0(to="/" text)
                v-icon.ml-3(size="60px" color="#2c3e50") $vuetify.icons.custom

              v-spacer

              v-app-bar-nav-icon(@click="drawer = true" right)

    v-navigation-drawer(v-model='drawer' absolute temporary right width="60%")
      v-list
        v-list-item-group(active-class="text--accent-4" )
          v-list-item(to="#skill")
            v-list-item-title.display-1 Skill Set
          v-list-item(to="#experience")
            v-list-item-title.display-1 Experience
          v-list-item(to="#recent-works")
            v-list-item-title.display-1 Projects
          v-list-item(@click="goToBottom")
            v-list-item-title.display-1 Contact
    v-main
      router-view

    transition(name="slide-fade")
      v-footer.mt-16#contact(padless dark v-show="display1")
        v-card.text-center(flat tile color="#2c3e50" width="100%")
          h1.display-2.font-weight-bold.pa-10 I would love to hear form you for potential collaborations, contact me at
          v-card-text
            v-btn.mx-4.text--white(x-large icon href="https://www.linkedin.com/in/runding-wang/" target="_blank")
              v-icon(x-large) mdi-linkedin
            | RUNDING WANG
            v-btn.mx-4(x-large icon href="mailto:wangrunding@gmail.com")
              v-icon(x-large) mdi-email
            | wangrunding@gmail.com
            v-btn.mx-4(x-large icon href="https://github.com/R-D-D-D" target="_blank")
              v-icon(x-large) mdi-github
            | R-D-D-D
            v-btn.mx-4(x-large icon href="https://github.com/R-D-D-D" target="_blank")
              v-icon(x-large) mdi-phone
            | +65 9879 1096
          v-divider
          v-card-text
            |	&copy; Wang Runding {{ new Date().getFullYear() }}

</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'App',

  components: {
    'page-header': PageHeader
  },

  data: () => ({
    drawer: false,
    display: false,
    display1: false
  }),

  methods: {
    goToBottom () {
      window.scrollTo(0,document.body.scrollHeight)
      this.drawer = false
    }
  },

  mounted: function () {
    this.display = true
    setInterval(() => {
      this.display1 = true
    }, 600);
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
  width: 100% !important;
  margin: 0 !important;
}

.text-color {
  color: #2c3e50 !important;
}

#logo::before {
  background: transparent !important;
}

.slide-fade-enter-active {
  transition: all .7s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(100px);
  opacity: 0;
}

html, body {
  overflow-x:hidden;
}

.hide {
  opacity: 0;
  offset-position: bottom 100px
}
</style>
