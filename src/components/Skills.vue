<template>
  <div class="grid grid-rows">
    <div class="grid grid-rows py-5">
      <div class="tagline text-5xl">Skills</div>
      <div class="tag_meaning text-2xl"><i>The most important skill for a programmer is their ability to google & figure out!</i></div>
    </div>
    <div class="flex flex-col gap-5 pb-5">
      <!-- <div class="grid grid-cols-2 grid-rows-2 gap-1"> -->
      <div class="flex flex-row gap-5 m-auto">
        <div class="">
          <div class="flex flex-col gap-2">
            <div class="text-center"><b>BACKEND</b></div>
            <div
              class="grid grid-cols-4 gap-4 itmes-center justify-center m-auto"
            >
              <img
                src="../assets/icons/Javascript.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/nodejs.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/express.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/go.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
            </div>
          </div>
        </div>
        <!--BACKEND-->

        <div class="">
          <div class="flex flex-col gap-2">
            <div class="text-center"><b>FRONTEND</b></div>
            <div
              class="grid grid-cols-4 gap-4 itmes-center justify-center m-auto"
            >
              <img
                src="../assets/icons/html.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/css.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/react.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/vuejs.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/tailwind.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/mui.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
            </div>
          </div>
        </div>
        <!--FRONTEND-->
      </div>
      <div class="flex flex-row gap-5 m-auto">
        <div class="">
          <div class="flex flex-col gap-2">
            <div class="text-center"><b>DATABASES & CLOUD</b></div>
            <div
              class="grid grid-cols-4 gap-4 itmes-center justify-center m-auto"
            >
              <img
                src="../assets/icons/postgrsql.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/mongodb.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/mysql.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/redis.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/firebase.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/aws.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/gcp.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/azure.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
            </div>
          </div>
        </div>
        <!--DB&CLOUD-->

        <div class="">
          <div class="flex flex-col gap-2">
            <div class="text-center"><b>OTHER TOOLS</b></div>
            <div
              class="grid grid-cols-4 gap-4 itmes-center justify-center m-auto"
            >
              <img
                src="../assets/icons/c.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/cpp.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <!-- <img
                src="../assets/icons/java.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              /> -->
              <img
                src="../assets/icons/python.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <!-- <img
                src="../assets/icons/r.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              /> -->
              <img
                src="../assets/icons/typescript.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <!-- <img
                src="../assets/icons/ruby.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/rails.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              /> -->
              <img
                src="../assets/icons/bash.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/git.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/github.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <img
                src="../assets/icons/jest.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              />
              <!-- <img
                src="../assets/icons/postman.png"
                class="flex p-3 w-20 border-4 border-black rounded-xl"
              /> -->
            </div>
          </div>
        </div>
        <!--OTHER TOOLS-->
      </div>
      <!-- And above all. the skill of googling and figuring it out -->
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
