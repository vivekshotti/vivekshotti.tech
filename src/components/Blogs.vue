<script setup>
import router from "../router";
function redirectToKannadaBlog() {
  router.push({ name: "kannadablog" });
}
</script>

<template>
  <div class="grid grid-rows">
    <div class="grid grid-rows py-5">
      <div class="tagline text-5xl">Blogs</div>
      <div class="tag_meaning text-2xl"><i>My thoughts</i></div>
    </div>
    <div class="pt-5">
      <div class="flex flex-col gap-5">
        <div
          class="flex flex-col border-b-4 gap-2 pb-3 cursor-pointer"
          @click="redirectToKannadaBlog"
        >
          <text class="text-3xl text-blue-500">Kannada language</text>
          <text class="italic"
            >the history of the world languages, what dravidian languages are,
            and the history of Kannada</text
          >
        </div>
        <!-- <div class="">1</div>
        <div class="">1</div>
        <div class="">1</div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@1,600&display=swap");

.tagline {
  font-family: "Source Serif Pro", serif;
  text-align: center;
}

.tag_meaning {
  text-align: center;
}

.about {
  text-align: center;
}
</style>
