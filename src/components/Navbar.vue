<script setup>
import router from "../router";

function redirectToHome() {
  router.push({ name: "home" });
}

function redirectToAbout() {
  router.push({ name: "about" });
}

function redirectToEducation() {
  router.push({ name: "education" });
}

function redirectToSkills() {
  router.push({ name:"skills" })
}

function redirectToProjResInt() {
  router.push({ name: "projresint" })
}

function redirectToExperience() {
  router.push({ name: "experience" });
}

function redirectToCV() {
  window.open('https://drive.google.com/file/d/1TbQzJ81dd8U4Vy7u4EZDM7SckOhLmGoS/view?usp=sharing', '_blank');
}

function redirectToBlogs() {
  router.push({ name: "blogs" });
}

function redirectToBookmarks() {
  router.push({ name: "bookmarks" });
}

function redirectToContact() {
  router.push({ name: "contact" });
}
</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/4 name">
      <button @click="redirectToHome">
        <text><b>vivekshotti</b></text>
      </button>
    </div>
    <div class="basis-3/4">
      <div class="flex flex-row navoptions">
        <button  @click="redirectToAbout"><div class="about">About</div></button>
        <button  @click="redirectToEducation"><div class="education">Education</div></button>
        <button  @click="redirectToSkills"><div class="skills">Skills</div></button>
        <button  @click="redirectToExperience"><div class="experience">Experience</div></button>
        <button  @click="redirectToProjResInt"><div class="proj-res">Projects & Research Interests</div></button>
        <button  @click="redirectToCV"><div class="cv">CV</div></button>
        <button  @click="redirectToBlogs"><div class="blogs">Blogs</div></button>
        <button  @click="redirectToBookmarks"><div class="bookmarks">Bookmarks</div></button>
        <button  @click="redirectToContact"><div class="contact">Contact</div></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.name {
}
.navoptions {
  justify-content: space-between;
}
</style>
