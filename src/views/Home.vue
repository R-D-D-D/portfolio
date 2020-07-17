<template lang="pug">
  .home
    v-container
      transition(name="slide-fade")
        v-row.my-5.justify-center(v-show="display")
          v-col(cols="12")
            h1.display-3.font-weight-bold Full-Stack Web Developer

      transition(name="slide-fade")
        div(v-show="display1")
          v-row.justify-center
            v-col(cols="12" md="10" lg="8")
              v-card
                v-row.align-center(no-gutters)
                  v-col.py-0(cols="12" md="6")
                    v-img(:src="require('../assets/rd_photo.jpg')" eager)
                  v-col.text-left.align-center(cols="12" md="6")
                    .px-5
                      v-card-title.text-color.break-word Hi there, nice to meet you
                      v-card-text.text--primary 
                        div.display-1.text-color I'm Wang Runding, a self-motivated and independent web developer
                      v-card-actions
                        v-btn(color='orange' text href="https://drive.google.com/file/d/1EpAmjqVwv0K7-bHPUfAsyuQpz59Ve4gi/view?usp=sharing")
                          | View My CV
                        v-btn(color='orange' text @click="goToBottom")
                          | Contact Me
      
      transition(name="slide-fade")
        div(v-show="display1")
          v-row#skill.mb-5.justify-center.big-gap(v-show="display1")
            v-col(cols="12" md="10" lg="8")
              h1.display-3.font-weight-bold Skill Set

          v-row.justify-center
            v-col(cols="12" md="10" lg="8")
              v-card(flat rounded outlined)
                v-row(no-gutters)
                  v-col.pa-0.education(cols="12" md="6")
                    v-card-text.display-1.text-color.font-weight-bold Marketing / Design
                    p I picked up photoshop in Junior College for project work and further went on to assume the role of publicity secretary. 
                    .text-left.pl-5
                      .text-h5.text-color.font-weight-bold Adobe Softwares
                      v-card-subtitle.px-0.text-h6.font-italic.py-2 Publicity Secretary of NUS Guitar Ensemble
                      p.py-2 - Intermediate: Photoshop, Premiere pro, iMovie.
                      p.py-2 - Basic - Illustrator.
                      p.py-2 - A few demos:
                      v-btn(icon href="https://www.instagram.com/p/B3wYct7lJYV/?utm_source=ig_web_copy_link" target="_blank" color="#2c3e50")
                        v-icon mdi-instagram
                      v-btn(icon href="https://www.instagram.com/p/B3onxFFFDTe/?utm_source=ig_web_copy_link" target="_blank" color="#2c3e50")
                        v-icon mdi-instagram
                      v-btn(icon href="https://www.instagram.com/tv/B8F-KbtFGHN/?utm_source=ig_web_button_share_sheet" target="_blank" color="#2c3e50")
                        v-icon mdi-youtube

                  v-col.pa-0(cols="12" md="6")
                    v-card-text.display-1.text-color.font-weight-bold Coding
                    .text-left.pl-5
                      .text-h5.text-color.font-weight-bold Languages
                      p.py-2 - Proficient: Javascript, Java, HTML, CSS
                      p.py-2 - Intermediate: Python
                      p.py-2 - Basic: Ruby, C#, C
                      .text-h5.text-color.font-weight-bold Frameworks
                      p.py-2 - Proficient: Ruby on Rails, Vue/Vuex
                      p.py-2 - Intermediate: Git, NodeJS + Express

          v-row#experience.mb-5.justify-center.big-gap
            v-col(cols="12" md="10" lg="8")
              h1.display-3.font-weight-bold Experience
            
          v-row.justify-center
            v-col(cols="12" md="10" lg="8")
              v-card(flat rounded outlined)
                v-row(no-gutters)
                  v-col.pa-0.education(cols="12" md="6")
                    v-card-text.display-1.text-color.font-weight-bold Education
                    .text-left.pl-5
                      .text-h5.text-color.font-weight-bold National University of Singapore
                      v-card-subtitle.px-0.text-h6.font-italic.py-2 July 2018 - present
                      p.py-2 - Currently pursuing a Bachelor of Computing (Computer Science) (Honours) with specialization in Software Engineering and AI
                      p.py-2 - Held the role of publicity in my CCA NUS Guitar Ensemble, managed instagram, facebook and youtube accounts
                  v-col.pa-0(cols="12" md="6")
                    v-card-text.display-1.text-color.font-weight-bold Work
                    .text-left.pl-5.mb-5
                      .text-h5.text-color.font-weight-bold Dateideas - Software Engineer Intern
                      v-card-subtitle.px-0.py-2.text-h6.font-italic Jan 2020 - May 2020
                      p.py-2 - Worked as front end software engineer to implement a full album feature for the company
                      p.py-2 - Used vue, vuex and vue router to build authentication, album management and photo uploading front end api
                      .text-h5.text-color.font-weight-bold NUS Skylab - Software Engineer Part-Time
                      v-card-subtitle.px-0.py-2.text-h6.font-italic Mar 2020 - Present
                      p.py-2 - Worked on the NUS's website for the Orbital program
                      p.py-2 - Used Ruby on Rails and implemented new features like mentorship matching for students which involves updating the database schema and linking to the front end with email functionality

          v-row.mb-5.justify-center.big-gap
            v-col(cols="12")
              h1#recent-works.display-3.font-weight-bold My Recent Works
          v-row.justify-center
            v-col(cols="12" md="6" lg="4")
              v-card.elevation-12(rounded)
                v-carousel.img-border(cycle hide-delimiter-background show-arrows-on-hover height="auto")
                  v-carousel-item
                    v-img(src="https://media.giphy.com/media/Qwnck25CaTuwB6VIoG/giphy.gif" eager)
                  v-carousel-item
                    v-img(src="https://media.giphy.com/media/J1d22ol5kv7OCPs7u7/giphy.gif" eager)
                v-row
                  v-col.pa-0(cols="12") 
                    v-card-text.display-1.text-color.pb-0 Violian
                    div.px-8.pt-2.text-left
                      p.subtitle.text-h6.font-italic My startup project
                      p.py-2 Aims to facilitate online music tutoring by providing tutors with the ability to customize rhythm patterns for students to practice and overlay scores over their video demo 
                v-row
                  v-col
                    v-btn(width="52px" height="52px" icon href="https://github.com/R-D-D-D/rhythm-academy" target="_blank" color="#2c3e50")
                      v-icon(size="40px") mdi-github
                    v-btn(width="52px" height="52px" icon href="http://www.violian.com/" target="_blank" color="#2c3e50")
                      v-icon(size="40px") mdi-link-variant

            v-col(cols="12" md="6" lg="4")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/genus_website.png')" eager)
                v-row
                  v-col.pa-0(cols="12") 
                    v-card-text.display-1.text-color.pb-0 NUS Guitar Ensemble
                    div.px-8.pt-2.text-left
                      p.subtitle.text-h6.font-italic Website for my CCA
                      p.py-2 A website build for my cca using rails. It has basic album features and allows admin to edit the website's content without having to code anything.
                v-row
                  v-col
                    v-btn(width="52px" height="52px" icon href="https://github.com/R-D-D-D/GENUS" target="_blank" color="#2c3e50")
                      v-icon(size="40px") mdi-github
                    v-btn(width="52px" height="52px" icon href="https://www.nusguitarensemble.com" target="_blank" color="#2c3e50")
                      v-icon(size="40px") mdi-link-variant

            v-col(cols="12" md="6" lg="4")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/music_academy.png')" eager)
                v-row
                  v-col.pa-0(cols="12") 
                    v-card-text.display-1.text-color.pb-0 Music Academy
                    div.px-8.pt-2.text-left
                      p.subtitle.text-h6.font-italic Orbital
                      p.py-2 A website to sell online music courses which encompass a variety of features. It includes payment system, subscribing and rating system.
                v-row
                  v-col
                    v-btn(width="52px" height="52px" icon href="https://github.com/R-D-D-D/orbital_niibori" target="_blank" color="#2c3e50")
                      v-icon(size="40px") mdi-github
                    v-btn(width="52px" height="52px" icon href="https://music-academy-orbital.herokuapp.com/" target="_blank" color="#2c3e50")
                      v-icon(size="40px") mdi-link-variant

            v-col(cols="12" md="6" lg="4")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/audio-analysis.png')" width="100%" eager)
                v-row
                  v-col.pa-0(cols="12") 
                    v-card-text.display-1.text-color.pb-0 Audio Analysis
                    div.px-8.pt-2.text-left
                      p.py-2 A windows form app to programatically analyse a piece of rhythm played by student against the solution
                v-row
                  v-col
                    v-btn(width="52px" height="52px" icon href="https://github.com/R-D-D-D/Ground-Zero/tree/master/waveform_processing" target="_blank" color="#2c3e50")
                      v-icon(size="40px") mdi-github
          


</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  data () {
    return {
      display: false,
      display1: false
    }
  },

  methods: {
    goToBottom () {
      window.scrollTo(0,document.body.scrollHeight)
    }
  },

  mounted: function () {
    var reportWindowSize = () => {
      console.log(this.$vuetify.breakpoint)
    }

    window.onresize = reportWindowSize;

    setInterval(() => {
      this.display = true
    }, 300);
    setInterval(() => {
      this.display1 = true
    }, 600);
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

.big-gap {
  margin-top: 16rem;
}

p {
  margin-bottom: 2px;
}

.img-border {
  border-bottom: 1px solid rgba(0,0,0,.12);
}

.subtitle {
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "Roboto", sans-serif !important;
}
</style>