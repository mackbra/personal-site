<script setup>
import Header from './components/Header.vue'
import SideNav from './components/SideNav.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'
</script>

<template>
  <header>
      <Header />
  </header>

  <main>
    <div class="wrapper">
      <SideNav :about="about" :skills="skills" :work="work" />
      <div class="body-wrapper">
        <div id="About" class="post" @mouseover="about = true, skills = false, work = false">
          <h1>Get to Know Me</h1>
          <About />
        </div>
        <div id="Skills" class="post" @mouseover="about = false, skills = true, work = false">
          <h1>Some of My Skills</h1>
          <Skills />
        </div>
        <div id="Work" class="post" @mouseover="about = false, skills = false, work = true">
          <h1>My Recent Work</h1>
          <Work />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      about: false,
      skills: false,
      work: false,
    }
  },
}
</script>
<style scoped>
  html {
      scroll-behavior: smooth;
    }
  #Skills {
    margin: 0 auto;
    display:grid;
    justify-content: center;
  }
  h1 {
    font-family: "Caveat", cursive;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    display:grid;
    justify-content: center;
    margin: 20px auto;
    color: #645567;
  }
  @media (min-width: 1000px) {
    .wrapper {
      width:75%;
      margin:auto;
    }
    .body-wrapper {
      margin-left:200px;
    }
    #About {
      margin-top:300px;
    }
    .post {
      margin: 100px auto;
    }
  }
  @media (max-width: 999px) {
    .body-wrapper {
      margin: auto 7%;
    }
    #About {
      margin-top:350px;
    }
    .post {
      margin:30px auto;
    }
  }
</style>
