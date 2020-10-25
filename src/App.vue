<template lang="pug">
  v-app#app
    transition(name="slide-fade")
      div(v-show="display")
        v-container(fluid)
          v-row.justify-center
            v-col(cols="10" lg="8")
              v-app-bar(
                light
                flat
                color="white"
              )
                v-btn#logo.px-0.mx-0(to="/" text)
                  v-icon(size="60px" color="#2A354F") $vuetify.icons.custom

                v-spacer

                v-app-bar-nav-icon(@click="drawer = true" right)

    v-navigation-drawer(v-model='drawer' absolute temporary right width="60%")
      v-list
        v-list-item-group(active-class="text--accent-4" )
          v-list-item(to="#skill")
            v-list-item-title.display-1 Skill Set
          v-list-item(to="#education")
            v-list-item-title.display-1 Education
          v-list-item(to="#work")
            v-list-item-title.display-1 Work Experience
          v-list-item(to="#recent-works")
            v-list-item-title.display-1 Projects
          v-list-item(@click="goToBottom")
            v-list-item-title.display-1 Contact
    v-main
      router-view

    transition(name="slide-fade")
      v-footer.mt-16#contact(padless dark v-show="display1")
        v-card.text-center(flat tile color="#1D2640" width="100%")
          h1.font-weight-bold.py-10.px-sm-16.px-10.text-h4.text-lg-h3(style="word-break:normal;") Interested for collaborations? Reach me at
          v-row
            v-col(cols="12" md="3")
              v-btn.text--white(x-large icon href="https://www.linkedin.com/in/runding-wang/" target="_blank")
                v-icon(x-large) mdi-linkedin
              | RUNDING WANG
            v-col(cols="12" md="3")
              v-btn(x-large icon href="mailto:wangrunding@gmail.com")
                v-icon(x-large) mdi-email
              | wangrunding@gmail.com
            v-col(cols="12" md="3")
              v-btn(large icon href="https://github.com/R-D-D-D" target="_blank")
                v-icon(x-large) mdi-github
              | R-D-D-D
            v-col(cols="12" md="3")
              v-btn(x-large icon href="https://github.com/R-D-D-D" target="_blank")
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
    setTimeout(() => {
      this.display1 = true
    }, 600);
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2A354F;
}

.text-color {
  color: #2A354F !important;
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
  /* overflow-x:hidden; */
}
</style>
