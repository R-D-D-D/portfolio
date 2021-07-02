<template lang="pug">
  .home
    v-container(fluid)
      transition(name="slide-fade")
        v-row.my-5.justify-center(v-show="display")
          v-col(cols="10" md="8" lg="6")
            div#recent-works.font-weight-black.text-h3.text-lg-h2 RUNDING WANG

      transition(name="slide-fade")
        div(v-show="display1")
          v-row.justify-center
            v-col(cols="10" md="8" lg="6")
              v-card
                v-row.align-center(no-gutters)
                  v-col.py-0(cols="0" sm="6")
                    v-img(:src="require('../assets/rd_photo.jpg')" eager)
                  v-col.text-left.align-center(cols="12" sm="6")
                    .px-5
                      v-card-text.text--primary 
                        div.text-h5.text-color I'm Runding Wang, a self-motivated and independent software engineer
                      v-card-actions
                        v-row(justify="start")
                          v-col.py-0(cols="12" md="6")
                            v-btn(small color='orange' text href="https://drive.google.com/file/d/1kQf5NW-4dk9KoNTZIiZ_SLnG-lIFh5Xm/view?usp=sharing")
                              | View My Resume
                          v-col.py-0(cols="12" md="6")
                            v-btn(color='orange' text @click="goToBottom" small)
                              | Contact Me
      
      transition(name="slide-fade")
        div(v-show="display1")
          v-row#skill.mb-5.justify-center.big-gap(v-show="display1")
            v-col(cols="12")
              h1.font-weight-black.text-h3.text-lg-h2 Skill Set

          v-row.justify-center
            v-col(cols="10" lg="8")
              v-card(flat rounded outlined)
                v-row(no-gutters)
                  v-col.pb-4.education(cols="12" md="6")
                    div.font-weight-bold.py-6.text-color(style="font-size:2.4rem;") Designer
                    div.px-4.px-md-8.text-left I am very interested in photo, video editing and logo design. I explore some of the adobe softwares on my own. I use Illustrator to do basic word art like this web page. I used Photoshop and iMovie for marketing materials when I was the publicity secretary. The process was fun.
                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8
                      .text-color.font-weight-bold(style="font-size:1.6rem;") Adobe Softwares
                      div.py-2 - Intermediate: Photoshop, Premiere pro, iMovie.
                      div.py-2 - Basic - Illustrator.
                      div.py-2 - A few demos:
                      v-btn(icon href="https://www.instagram.com/p/B3wYct7lJYV/?utm_source=ig_web_copy_link" target="_blank" color="#2c3e50")
                        v-icon mdi-instagram
                      v-btn(icon href="https://www.instagram.com/p/B3onxFFFDTe/?utm_source=ig_web_copy_link" target="_blank" color="#2c3e50")
                        v-icon mdi-instagram
                      v-btn(icon href="https://www.instagram.com/tv/B8F-KbtFGHN/?utm_source=ig_web_button_share_sheet" target="_blank" color="#2c3e50")
                        v-icon mdi-youtube

                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8
                      .text-color.font-weight-bold(style="font-size:1.6rem;") Mock-up Tools
                      div.py-2 - Proficient: Figma

                  v-col.pb-4(cols="12" md="6")
                    div.font-weight-bold.py-6.text-color(style="font-size:2.4rem;") Developer
                    div.px-4.px-md-8.text-left I like to build useful softwares that solves problems. Aside from school work, I have done quite a few personal projects which allow me to be familiarized with popular frameworks like Rails, Vuejs and Nodejs. From these experience I lauched my own startup Violian, a web app done using Nodejs and Vuejs that involve some video processing.
                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8
                      .text-color.font-weight-bold(style="font-size:1.6rem;") Languages
                      p.py-2 - Proficient: Javascript, Java, HTML, CSS
                      p.py-2 - Intermediate: Python
                      p.py-2 - Basic: Ruby, C#, C
                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8
                      .text-h5.text-color.font-weight-bold Frameworks
                      p.py-2 - Proficient: Ruby on Rails, Vue/Vuex, NodeJS + Express
                      p.py-2 - Intermediate: Git, React
                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8
                      .text-h5.text-color.font-weight-bold Website maintenance
                      p.py-2 - Proficient: AWS(EC2, RDS), Digital Ocean, SSL
                      p.py-2 - Intermediate: SEO, Google web console

          v-row#education.mb-5.justify-center.big-gap
            v-col(cols="12")
              h1.font-weight-black.text-h3.text-lg-h2 Education
            
          v-row.justify-center
            v-col(cols="10" lg="8")
              v-card(flat rounded outlined)
                v-row(no-gutters)
                  v-col.education(cols="12")
                    .text-left.px-4.px-md-8.py-6
                      .text-color.font-weight-bold(style="font-size:1.6rem;") National University of Singapore
                      v-card-subtitle.px-0.text-h6.font-italic.py-2 July 2018 - present
                      p.py-2 - Currently pursuing a Bachelor of Computing (Computer Science) (Honours) with specialization in Software Engineering and AI
                      p.py-2 - Held the role of publicity in my CCA NUS Guitar Ensemble
         
          v-row#work.mb-5.justify-center.big-gap
            v-col(cols="12")
              h1.font-weight-bold.text-h3.text-lg-h2 Work Experience
            
          v-row.justify-center
            v-col(cols="10" lg="8")
              v-card(flat rounded outlined)
                v-row(no-gutters)
                  v-col.pb-4(cols="12")
                    .text-left.px-4.px-md-8.py-6
                      .text-color.font-weight-bold(style="font-size:1.6rem;") Hunterz.io - Software Engineer Intern
                      v-card-subtitle.px-0.py-2.text-h6.font-italic Jan 2021 - Jul 2021
                      p.py-2 - Built the first test suite for the application using Selenium, a totally foreign framework.
                      p.py-2 - Picked up SQL independently via researching for daily tasks.
                      p.py-2 - Took over a very large codebase and restructured components to reduce complexicity of the code.
                      p.py-2 - Communicated UI design using Zeplin with UI expert and implement according to blurprint.
                      p.py-2 - Integrated multiple external services such as Hubspot, Calendly and Mailchimp.
                      
                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8.py-6
                      .text-color.font-weight-bold(style="font-size:1.6rem;") Violian - Co-Founder
                      v-card-subtitle.px-0.py-2.text-h6.font-italic Jun 2020 - Present
                      p.py-2 - Identified the need of online music teaching amist the COVID situation and took action.
                      p.py-2 - Earned trust from a senior Singapore Chinese Orchestra percussionist with 20 years of experience in the music industry to be my partner.
                      p.py-2 - Communicated with my partner and various music tutors to formulate a business model.
                      p.py-2 - Researched and analysed 10 other similar products to derive at an unique selling point that resonated with our clients(local music tutors).
                      p.py-2 - Learned new technologies and applied them immediately to implement features such as MPEG-DASH(the algorithm behind YouTube) streaming of video and creating music scores.
                      p.py-2 - Designed backend APIs using NodeJS and set up the server on Digital Ocean.

                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8.py-6
                      .text-color.font-weight-bold(style="font-size:1.6rem;") Dateideas - Software Engineer Intern
                      v-card-subtitle.px-0.py-2.text-h6.font-italic Jan 2020 - May 2020
                      p.py-2 - Worked as front end software engineer to implement a full album feature for the company
                      p.py-2 - Used vue, vuex and vue router to build authentication, album management and photo uploading front end api
                    hr.mx-auto.my-4(style="border:1px solid black; width:16px;")
                    .text-left.px-4.px-md-8
                      .text-color.font-weight-bold(style="font-size:1.6rem;") NUS Skylab - Software Engineer Part-Time
                      v-card-subtitle.px-0.py-2.text-h6.font-italic Mar 2020 - Present
                      p.py-2 - Worked on the NUS's website for the Orbital program
                      p.py-2 - Used Ruby on Rails and implemented new features like mentorship matching for students which involves updating the database schema and linking to the front end with email functionality

          v-row.mb-5.justify-center.big-gap
            v-col(cols="12")
              h1#recent-works.font-weight-black(style="font-size:3rem;") My Recent Works

          //- violian
          v-row.justify-center.pt-8(v-if="!isPhone")
            v-col(cols="12" md="10" lg="8")
              v-sheet.elevation-10.card(style="position:relative; height:0; padding-bottom:31.25%;" ref="cardWrapper")
                img.elevation-10(:src="require('../assets/violian.jpg')" width="50%" :style="imgStyle")
                div(style="position:absolute; bottom:20px; left:calc(50% + 44px);")
                  v-btn(outlined href="https://github.com/R-D-D-D/violian" target="_blank" color="#2c3e50")
                    v-icon(left size="24") mdi-github
                    | Github
                  v-btn.ml-4(outlined href="https://github.com/R-D-D-D/violian" target="_blank" color="#2c3e50")
                    v-icon(left size="22") mdi-link-variant
                    | Visit Site
                v-container.px-6
                  v-row(no-gutters)
                    v-col.text-left(cols="6" offset="6" style="padding-left:44px; position:relative;")
                      img(width="30px" height="30px" :src="require('../assets/Node.js_logo.svg')" style="top:5px; right:0; position:absolute;")
                      h1.font-weight-black(style="font-size: 1.6rem;") Violian
                      div(style="border-bottom: 2px solid #BDBDBD; width:100%;")
                      div.pt-2.font-weight-black.alignleft(style="color: #616161;") Startup
                      div.pt-2.font-weight-black.alignright(style="color: #616161;") May 2020
                      div(style="clear:both;")
                      div.font-weight-black(style="color: #616161;") NodeJS &#183; Vue.js &#183; AWS
                      div.font-weight-medium.pt-2 A web app that delivers quality music video courses. It has special features tailored to facilitate the process such as overlaying score on video and customizing scores. 

          //- rhythm master
          v-row.justify-center.pt-8(v-if="!isPhone")
            v-col(cols="12" md="10" lg="8")
              v-sheet.elevation-10.card(style="position:relative; height:0; padding-bottom:31.25%;")
                img.elevation-10(:src="require('../assets/rhythm_master.jpg')" width="50%" :style="imgStyle")
                div(style="position:absolute; bottom:20px; left:calc(50% + 44px);")
                  v-btn(outlined href="https://github.com/R-D-D-D/Ground-Zero/tree/master/waveform_processing" target="_blank" color="#2c3e50")
                    v-icon(left size="24") mdi-github
                    | Github
                v-container.px-6
                  v-row(no-gutters)
                    v-col.text-left(cols="6" offset="6" style="padding-left:44px; position:relative")
                      img(width="30px" height="30px" :src="require('../assets/C_Sharp_logo.svg')" style="top:2px; right:0; position:absolute;")
                      h1.font-weight-black(style="font-size: 1.6rem;") Rhythm Master
                      div(style="border-bottom: 2px solid #BDBDBD; width:100%;")
                      div.pt-2.font-weight-black.alignleft(style="color: #616161;") Personal Project
                      div.pt-2.font-weight-black.alignright(style="color: #616161;") May 2020
                      div(style="clear:both;")
                      div.font-weight-black(style="color: #616161;") .NET &#183; C#
                      div.font-weight-medium.pt-2 A windows form app to programatically analyse a piece of rhythm played by student against the solution

          //- dateideas intern
          v-row.justify-center.pt-8(v-if="!isPhone")
            v-col(cols="12" md="10" lg="8")
              v-sheet.elevation-10.card(style="position:relative; height:0; padding-bottom:31.25%;")
                img.elevation-10(:src="require('../assets/dateideas.jpg')" width="50%" :style="imgStyle")
                div(style="position:absolute; bottom:20px; left:calc(50% + 44px);")
                  v-btn(outlined href="https://gitlab.com/R-D-D-D/mem" target="_blank" color="#2c3e50")
                    v-icon(left size="24") mdi-gitlab
                    | Gitlab
                v-container.px-6
                  v-row(no-gutters)
                    v-col.text-left(cols="6" offset="6" style="padding-left:44px; position:relative;")
                      img(width="30px" height="30px" :src="require('../assets/Vue.js_Logo_2.svg')" style="top:2px; right:0; position:absolute;")
                      h1.font-weight-black(style="font-size: 1.6rem;") Dateideas
                      div(style="border-bottom: 2px solid #BDBDBD; width:100%;")
                      div.pt-2.font-weight-black.alignleft(style="color: #616161;") Intern Project
                      div.pt-2.font-weight-black.alignright(style="color: #616161;") Mar 2020
                      div(style="clear:both;")
                      div.font-weight-black(style="color: #616161;") Vue.js
                      div.font-weight-medium.pt-2 My intern project. It uses Vue as front end framework and links to the backend api to form an album feature for couples.
          
          //- genus website
          v-row.justify-center.pt-8(v-if="!isPhone")
            v-col(cols="12" md="10" lg="8")
              v-sheet.elevation-10.card(style="position:relative; height:0; padding-bottom:31.25%;")
                img.elevation-10(:src="require('../assets/nusguitarensemble.jpg')" width="50%" :style="imgStyle")
                div(style="position:absolute; bottom:20px; left:calc(50% + 44px);")
                  v-btn(outlined href="https://github.com/R-D-D-D/GENUS" target="_blank" color="#2c3e50")
                    v-icon(left size="24") mdi-github
                    | Github
                  v-btn.ml-4(outlined href="https://www.nusguitarensemble.com" target="_blank" color="#2c3e50")
                    v-icon(left size="22") mdi-link-variant
                    | Visit Site
                v-container.px-6
                  v-row(no-gutters)
                    v-col.text-left(cols="6" offset="6" style="padding-left:44px; position:relative;")
                      img(width="60px" height="60px" :src="require('../assets/Ruby_On_Rails_Logo.svg')" style="top:-12px; right:0; position:absolute;")
                      h1.font-weight-black(style="font-size: 1.6rem;") NUS Guitar Ensemble
                      div(style="border-bottom: 2px solid #BDBDBD; width:100%;")
                      div.pt-2.font-weight-black.alignleft(style="color: #616161;") Personal Project
                      div.pt-2.font-weight-black.alignright(style="color: #616161;") Aug 2019
                      div(style="clear:both;")
                      div.font-weight-black(style="color: #616161;") Ruby on Rails &#183; Heroku
                      div.font-weight-medium.pt-2 A website build for my cca using rails. It has basic album features. It allows admins to edit html content for easier maintenance.
          
          //- music academy
          v-row.justify-center.pt-8(v-if="!isPhone")
            v-col(cols="12" md="10" lg="8")
              v-sheet.elevation-10.card(style="position:relative; height:0; padding-bottom:31.25%;")
                img.elevation-10(:src="require('../assets/music_academy.jpg')" width="50%" :style="imgStyle")
                div(style="position:absolute; bottom:20px; left:calc(50% + 44px);")
                  v-btn(outlined href="https://github.com/R-D-D-D/orbital_niibori" target="_blank" color="#2c3e50")
                    v-icon(left size="24") mdi-github
                    | Github
                  v-btn.ml-4(outlined href="https://music-academy-orbital.herokuapp.com/" target="_blank" color="#2c3e50")
                    v-icon(left size="22") mdi-link-variant
                    | Visit Site
                v-container.px-6
                  v-row(no-gutters)
                    v-col.text-left(cols="6" offset="6" style="padding-left:44px; position:relative;")
                      img(width="60px" height="60px" :src="require('../assets/Ruby_On_Rails_Logo.svg')" style="top:-12px; right:0; position:absolute;")
                      h1.font-weight-black(style="font-size: 1.6rem;") Music Academy
                      div(style="border-bottom: 2px solid #BDBDBD; width:100%;")
                      div.pt-2.font-weight-black.alignleft(style="color: #616161;") Orbital
                      div.pt-2.font-weight-black.alignright(style="color: #616161;") May 2019
                      div(style="clear:both;")
                      div.font-weight-black(style="color: #616161;") Ruby on Rails &#183; Heroku
                      div.font-weight-medium.pt-2 A website to sell online music courses which encompass a variety of features. It includes payment system, subscribing forum and rating system.

          //- begin of phone section
          v-row.justify-center(v-if="isPhone")
            //- violian
            v-col(cols="10" sm="6")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/violian.jpg')" eager)
                v-container.py-0
                  v-row
                    v-col(cols="12") 
                      h1.font-weight-black(style="font-size: 1.8rem;") Violian
                      div.font-weight-black(style="color: #616161;") NodeJS &#183; Vue.js &#183; AWS
                      div.font-weight-medium.pt-2 A web app that delivers quality music video courses. It has special features tailored to facilitate the process such as overlaying score on video and customizing scores. 
                  v-row
                    v-col
                      v-btn(outlined href="https://github.com/R-D-D-D/violian" target="_blank" color="#2c3e50")
                        v-icon(left size="24") mdi-github
                        | Github
                      v-btn.ml-4(outlined href="https://github.com/R-D-D-D/violian" target="_blank" color="#2c3e50")
                        v-icon(left size="22") mdi-link-variant
                        | Visit Site

            //- rhythm master
            v-col(cols="10" sm="6")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/rhythm_master.jpg')" eager)
                v-container.py-0
                  v-row
                    v-col(cols="12") 
                      h1.font-weight-black(style="font-size: 1.8rem;") Rhythm Master
                      div.font-weight-black(style="color: #616161;") .NET &#183; C#
                      div.font-weight-medium.pt-2 A windows form app to programatically analyse a piece of rhythm played by student against the solution. Automatically generates feedback on student's wrong notes.
                  v-row
                    v-col
                      v-btn(outlined href="https://github.com/R-D-D-D/Ground-Zero/tree/master/waveform_processing" target="_blank" color="#2c3e50")
                        v-icon(left size="24") mdi-github
                        | Github
            
            //- dateideas
            v-col(cols="10" sm="6")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/dateideas.jpg')" eager)
                v-container.py-0
                  v-row
                    v-col(cols="12") 
                      h1.font-weight-black(style="font-size: 1.8rem;") Dateideas
                      div.font-weight-black(style="color: #616161;") Vue.js
                      div.font-weight-medium.pt-2 My intern project. It uses Vue as front end framework and links to the backend api to form an album feature for couples.
                  v-row
                    v-col
                      v-btn(outlined href="https://gitlab.com/R-D-D-D/mem" target="_blank" color="#2c3e50")
                        v-icon(left size="24") mdi-gitlab
                        | Gitlab

            //- genus
            v-col(cols="10" sm="6")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/nusguitarensemble.jpg')" eager)
                v-container.py-0
                  v-row
                    v-col(cols="12") 
                      h1.font-weight-black(style="font-size: 1.8rem;") NUS Guitar Ensemble
                      div.font-weight-black(style="color: #616161;") Ruby on Rails &#183; Heroku
                      div.font-weight-medium.pt-2 A website build for my cca using rails. It has basic album features. It allows admins to edit html content for easier maintenance.
                  v-row
                    v-col
                      v-btn(outlined href="https://github.com/R-D-D-D/GENUS" target="_blank" color="#2c3e50")
                        v-icon(left size="24") mdi-github
                        | Github
                      v-btn.ml-4(outlined href="https://www.nusguitarensemble.com" target="_blank" color="#2c3e50")
                        v-icon(left size="22") mdi-link-variant
                        | Visit Site
            
            //- music academy
            v-col(cols="10" sm="6")
              v-card.elevation-12(rounded)
                v-img.img-border(:src="require('../assets/music_academy.jpg')" eager)
                v-container.py-0
                  v-row
                    v-col(cols="12") 
                      h1.font-weight-black(style="font-size: 1.8rem;") Violian
                      div.font-weight-black(style="color: #616161;") Ruby on Rails &#183; Heroku
                      div.font-weight-medium.pt-2 A website to sell online music courses which encompass a variety of features. It includes payment system, subscribing forum and rating system.
                  v-row
                    v-col
                      v-btn(outlined href="https://github.com/R-D-D-D/orbital_niibori" target="_blank" color="#2c3e50")
                        v-icon(left size="24") mdi-github
                        | Github
                      v-btn.ml-4(outlined href="https://music-academy-orbital.herokuapp.com/" target="_blank" color="#2c3e50")
                        v-icon(left size="22") mdi-link-variant
                        | Visit Site
                      

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',

  data () {
    return {
      display: false,
      display1: false,
      hack: 0,
      imgStyle: {
        position: 'absolute',
        left: '20px',
        top: '-20px'
      }
    }
  },

  computed: {
    isPhone () {
      return this.$vuetify.breakpoint.name == 'xs' || this.$vuetify.breakpoint.name == 'sm'
    }
  },

  methods: {
    goToBottom () {
      window.scrollTo(0,document.body.scrollHeight)
    }
  },

  mounted: function () {
    var reportWindowSize = () => {
      this.hack++
      console.log(this.$vuetify.breakpoint.name)
    }

    window.onresize = reportWindowSize;

    setTimeout(() => {
      this.display = true
    }, 300);
    setTimeout(async () => {
      this.display1 = true
      await this.$nextTick()
      this.hack++
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
  margin-top: 2rem;
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

.project-info {
  text-align: left;
  color: #616161;
  position:absolute; 
  bottom:0; 
  left:30px;
  font-size:18px;
}

.card::before,
.card::after {
  content: '';
  position: absolute;
  border: 1px solid #BDBDBD;
}

.card::before {
  top: 20px;
  left: 10px;
  bottom: 10px;
}

.card::after {
  left: 10px;
  right: 50%;
  bottom: 10px;
}

.alignleft {
	float: left;
}
.alignright {
	float: right;
}


</style>