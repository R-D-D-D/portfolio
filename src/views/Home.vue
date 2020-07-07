<template lang="pug">
  .home
    v-container
      v-row.my-5.justify-center
        v-col(cols="12")
          h1.display-3.font-weight-bold Front-End Web Developer

      v-row.justify-center
        v-col(cols="12" xs="12 " sm="8" md="6")
          v-card
            v-row.align-center(no-gutters)
              v-col.py-0(cols="12" md="6")
                v-img(src="../assets/rd_photo.jpg")
              v-col.text-left.align-center(cols="12" md="6")
                .px-5
                  v-card-title.display-1.text-color.break-word Hi there, nice to meet you
                  v-card-text.text--primary 
                    div.display-1.text-color I'm Wang Runding, a self-motivated and independent web developer
                  v-card-actions
                    v-btn(color='orange' text)
                      | View My CV
                    v-btn(color='orange' text)
                      | Contact Me

      v-row.my-5.justify-center
        v-col(cols="12" md="6")
          h1.display-3.font-weight-bold Experience

      v-row.my-5.justify-center
        v-col(cols="12" md="8")
          v-card(flat rounded outlined)
            v-row(no-gutters)
              v-col.pa-0.education(cols="12" md="6")
                v-card-text.display-1.text-color Education
                .text-left
                  h3.text-color.font-weight-bold.pl-5 National University of Singapore
                  v-card-subtitle.pl-5.pa-0.text-h6.font-italic July 2018 - present
                  p - Currently pursuing a Bachelor of Computing (Computer Science) (Honours) with specialization in Software Engineering and AI
              v-col.pa-0(cols="12" md="6")
                v-card-text.display-1.text-color Work
                .text-left
                  h3.text-color.font-weight-bold.pl-5 Dateideas - Software Engineer Intern
                  v-card-subtitle.pl-5.pa-0.text-h6.font-italic Jan 2020 - May 2020
                  p - Currently pursuing a Bachel
        

      v-row.my-5.justify-center
        v-col(cols="12")
          h1.display-3.font-weight-bold My Recent Works


</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  mounted: function () {
    var reportWindowSize = () => {
      console.log(this.$vuetify.breakpoint)
    }

    window.onresize = reportWindowSize;
  }
}
</script>

<style scoped>
.education {
  border-right: 1px solid rgba(0,0,0,.12);
}

.break-word {
  word-break: normal !important;
}
</style>