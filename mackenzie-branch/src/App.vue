<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/Header.vue'
</script>

<template>
  <header>
      <Header />
  </header>

  <main>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    <TheWelcome />
    </div>
  </main>
</template>

<style scoped>

</style>
