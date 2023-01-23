<script setup>
import Navbar from "../components/Navbar.vue";
import About from "../components/About.vue";
</script>

<template>
  <div class="outer_container">
    <div class="grid grid-rows gap-5">
      <div class="inner_container px-2 py-4">
        <Navbar />
      </div>
      <div class="px-2">
        <About />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  /* font-family: 'Courier New', Courier, monospace; */
}

.outer_container {
  margin: 0 auto; /* this will center the page */
  width: 1000px; /*  use your width here */
}
</style>
