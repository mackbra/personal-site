<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
defineProps({
  about: {
    type: Boolean,
  },
  skills: {
    type: Boolean,
  },
  work: {
    type: Boolean,
  },
})
</script>
<template>
  <div class="sidenav">
    <ul>
      <li><a href="#About" :class="{ active: about }">About</a></li>
      <li><a href="#Skills" :class="{ active: skills }">Skills</a></li>
      <li><a href="#Work" :class="{ active: work }">Work Experience</a></li>
    </ul>
  </div>
</template>

<style scoped>



/* The navigation menu links */
.sidenav a {
  margin: auto;
  text-decoration: none;
  color: #645567;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

@media (min-width: 1000px) {
    /* The sidebar menu */
    .sidenav {
      width: 250px; /* Set the width of the sidebar */
      position: fixed; /* Fixed Sidebar (stay in place on scroll) */
      z-index: 1; /* Stay on top */
      border-left: 3px solid #b2d5ba;
      margin-left: -100px;
    }
    .sidenav a {
      font-size: 1.3em;
    }
    li {
      margin: auto auto auto -20px;
    }

    li::marker {
      margin-top:10px;
      color: #645567;
      font-size: 2em;
    }
    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
      font-size: 2em;
    }

    .active  {
      font-size: 2em !important;
    }
}

@media (max-width: 999px) {
  .sidenav {
      position: fixed; /* Fixed Sidebar (stay in place on scroll) */
      z-index: 101; /* Stay on top */
      top: 0;
      left: 0;
    }
    .sidenav a {
      font-size: 1em;
    }
    ul {
      padding:10px;
      margin-top:20px;
    }
    li {
      list-style-type:none;
      display: inline;
      padding:7px;
    }
    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
      font-size: 1.3em;
    }

    .active  {
      font-size: 1.3em !important;
    }
}
</style>
