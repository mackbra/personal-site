<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>
<template>
  <div class="header-wrapper">
    <div class="slideshow-container">
      <div class="mySlides fade">
        <img class="me-img" src="/src/assets/images/me.jpg">
      </div>
      <div class="mySlides fade">
        <img class="me-img" src="../assets/images/Avatar.png">
      </div>
      <div class="mySlides fade">
        <img class="me-img" src="../assets/images/bitmoji.png">
      </div>
      <div class="mySlides fade">
        <img class="me-img" src="../assets/images/duolingoicon.png">
      </div>
    </div>
    <div class="header-title">
      <h1>Mackenzie Branch 
        <a class="header-icon" href="https://github.com/mackbra" target="_blank"><FontAwesomeIcon :icon="faGithub" /></a>
        <a class="header-icon" href="https://linkedin.com/in/mackenzie-branch" target="_blank"><FontAwesomeIcon :icon="faLinkedin" /></a></h1>
    </div>
  </div>
</template>

<style scoped>
.header-wrapper {
  justify-content: center;
  position:fixed;
  z-index: 100; /* Stay on top */
  top: 0;
  left: 0;
  margin:auto;
  width: 100%;
  background-color: whitesmoke;
  box-shadow: 10px 10px 15px 12px whitesmoke;
}

header {
  position:fixed;
  top: 0;
  left: 0;
  height:280px;
  width:100%;
}
h1 {
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  margin-top:10px;
  padding-left:10px;
  border-bottom: 2px solid #b2d5ba;
  color:#645567 ;
}
.header-icon {
  font-size:.4em;
}
.me-img {
  width:150px;
  height:150px;
  border: 3px solid #b2d5ba;
  border-radius: 50px 20px;
}
/* Slideshow container */
.slideshow-container {
  width:150px;
  position: relative;
}

/* Hide the images by default */
.mySlides {
  width:150px;
  display: none;
}
/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 2.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@media (min-width: 1000px) {
    .header-wrapper {
    display:grid;
    padding-top:50px;
    grid-template-columns: 150px 800px;
  }
  .header-wrapper > div {
    padding: 20px 0;
    font-size: 30px;
  }
  .header-title {
    text-align:left;
    left:0;
  }
  h1 {
  text-align: left;
  }
}

@media (max-width: 999px) {
    .header-wrapper {
    position:fixed;
  }
  .header-wrapper > span {
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
  }
  .slideshow-container {
    margin: 80px auto 0px;
  }
  .header-icon {
    font-size:.8em;
  }
  h1 {
  text-align: center;
  }
}
</style>
