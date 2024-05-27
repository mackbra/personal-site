<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
</script>
<template>
      <div class="skills-wrapper">
        <div class="first-set animate__animated animate__pulse">
          <img
            src="../assets/icons/icons8-html-5.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="../assets/icons/icons8-css3.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="../assets/icons/icons8-javascript.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="../assets/icons/icons8-vuejs.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>

        <div class="second-set animate__animated animate__pulse">
          <img
            src="../assets/icons/icons8-visual-studio-code.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
            />
          <img
            src="../assets/icons/icons8-node-js.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="../assets/icons/icons8-bootstrap.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src="../assets/icons/icons8-github.svg"
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
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
</style>
