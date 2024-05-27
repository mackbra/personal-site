<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>
<template>
      <div class="skills-wrapper">
        <div class="first-set">
          <span class="container">
            <img src="../assets/icons/icons8-html-5.svg" alt="HTML-5" loading="lazy" class="icon icon-card"/>
            <div class="overlay">
              <div class="text">HTML-5</div>
            </div>
          </span>
          <span class="container">
            <img src="../assets/icons/icons8-css3.svg" alt="CSS3" loading="lazy" class="icon icon-card" />
            <div class="overlay">
              <div class="text">CSS3</div>
            </div>
          </span>
          <span class="container">
            <img src="../assets/icons/icons8-javascript.svg"  alt="Javascript/JQUERY" loading="lazy" class="icon icon-card" />
            <div class="overlay">
              <div class="text">Javascript/JQuery</div>
            </div>
          </span>
          <span class="container">
            <img src="../assets/icons/icons8-vuejs.svg" alt="VUE.js" loading="lazy" class="icon icon-card" />
            <div class="overlay">
              <div class="text">Vue.js</div>
            </div>
          </span>
        </div>

        <div class="second-set">
          <span class="container">
            <img src="../assets/icons/icons8-visual-studio-code.svg" alt="VS Code" loading="lazy" class="icon icon-card" />
            <div class="overlay">
              <div class="text">VS Code</div>
            </div>
          </span>
          <span class="container">
            <img src="../assets/icons/icons8-node-js.svg" alt="Node.js" loading="lazy" class="icon icon-card" />
            <div class="overlay">
              <div class="text">Node.js</div>
            </div>
          </span>
          <span class="container">
            <img src="../assets/icons/icons8-bootstrap.svg" alt="Bootstrap" loading="lazy" class="icon icon-card" />
            <div class="overlay">
              <div class="text">Bootstrap</div>
            </div>
          </span>
          <span class="container">
            <img src="../assets/icons/icons8-github.svg" alt="Github" loading="lazy" class="icon icon-card" />
            <div class="overlay">
              <div class="text">Github</div>
            </div>
          </span>
        </div>
      </div>
</template>

<style scoped>
  .skills {
    max-width: 68.75rem;
    margin: auto;
    text-align: center;
    margin-top: 2.5rem;
  }

  .skill-header {
    margin-bottom: 1rem;
  }

  .skills-wrapper {
    justify-content: center;
  }
  .skills-wrapper img {
    padding: 1.25rem;
  }

  .icon {
    width: 11.875rem;
    height: 11.25rem;
  }
  .icon-card {
    background-color: #fff;
    border-radius: 11px;
    box-shadow: 0 3px 10px lightgray;
    padding: 20px;
    margin: 10px;
  }
  .container {
  position: relative;
  width: 50%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
    width: 11.875rem;
    height: 11.25rem;
  transition: .5s ease;
}

.container:hover .icon {
  opacity: 0.3;
}

.container:hover .overlay {
  opacity: 1;
}

.text {
  color: black;
  font-size: 20px;
  position: absolute;
  top: -50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
