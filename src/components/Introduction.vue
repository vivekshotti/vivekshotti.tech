<template>
  <div class="grid grid-rows gap-5">
    <div class="grid grid-rows py-5">
      <div class="tagline text-5xl">"labor omnia vincit"</div>
      <div class="tag_meaning text-2xl"><i>hardwork conquers all</i></div>
    </div>
    <div class="">
      <div class="container mx-auto flex flex-col">
        <div class="mx-auto">
          <div class="flex flex-col sm:flex-row">
            <div class="sm:w-1/2 text-center">
              <div class="grid place-items-center">
                <img src="../assets/profile_picture.png" class="w-64" />
              </div>
              <div
                class="flex flex-col items-center text-center justify-center"
              >
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Vivek Shivakumar Hotti
                </h2>
                <div class="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                <p class="text-base italic">
                  Final Year Student, Computer Science & Engineering <br />
                  University of Mumbai
                </p>
              </div>
            </div>
            <div
              class="flex items-center sm:w-1/2 sm:border-l border-gray-200 sm:border-t-0 border-t pl-10 sm:mt-0 text-center sm:text-left"
            >
              <p class="leading-relaxed text-justify">
                Currently a final year student majoring in Computer Science &
                Engineering from University of Mumbai. Although a full Stack
                Developer who specializes in JavaScript Technologies across the
                whole stack (Node.js, ExpressJS, ReactJS, VueJS), but keen
                backend backend developer. Good experience with building robust,
                reusable & scalable Backend Systems, RESTful APIs, implementing
                authentication using JWT tokens & OAuth, testing using JEST,
                user profile generation and CRUD of data in NoSQL & SQL
                databases. Have Hands-on knowledge in developing full-fledged
                Frontend applications in ReactJS or use Libraries like ChakraUI,
                MaterialUI and establish secure connections with different
                components of the backend. Currently learning Data Structures
                and Algorithms, Caching with Redis & different Cloud
                Infrastructures. Always looking forward to working on new
                technologies to develop robust products and services.
              </p>
              <!-- <a class="inline-flex items-center"
                >Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a> -->
            </div>
          </div>
        </div>
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
</style>
