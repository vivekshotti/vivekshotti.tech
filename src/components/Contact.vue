<template>
  <div class="grid grid-rows">
    <div class="grid grid-rows py-5">
      <div class="tagline text-5xl">Contact Me</div>
      <div class="tag_meaning text-2xl"><i>Let's connect over a coffee</i></div>
      <div class="about text-2xl py-5">
        Whether it's an exciting idea, a tedious research proposal, or Computer
        Science in general, <br />I am always curious and all ears.
      </div>
    </div>
    <div class="flex flex-row gap-5 m-auto">
      <div class="">
        <div class="grid grid-cols-4 gap-4 itmes-center justify-center m-auto">
          <a href="mailto:vivekshotti@gmail.com"
            ><img
              src="../assets/socials/gmail.png"
              class="flex p-3 w-20 border-4 border-black rounded-xl"
          /></a>
          <a href="https://www.linkedin.com/in/vivekshotti/" target="_blank"
            ><img
              src="../assets/socials/linkedin.png"
              class="flex p-3 w-20 border-4 border-black rounded-xl"
          /></a>
          <a href="https://www.github.com/vivekshotti/" target="_blank"
            ><img
              src="../assets/socials/github.png"
              class="flex p-3 w-20 border-4 border-black rounded-xl"
          /></a>
          <a href="https://www.twitter.com/vivekshotti/" target="_blank"
            ><img
              src="../assets/socials/twitter.png"
              class="flex p-3 w-20 border-4 border-black rounded-xl"
          /></a>
        </div>
      </div>
    </div>
    <!-- And above all. the skill of googling and figuring it out -->
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
