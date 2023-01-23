<template>
  <div class="grid grid-rows">
    <div class="grid grid-rows py-5">
      <div class="tagline text-5xl">Education</div>
      <div class="tag_meaning text-2xl"><i>Alma Matter</i></div>
    </div>
    <div class="">
      <ol
        class="border-l md:border-l-0 md:border-t border-black md:flex md:justify-center md:gap-6"
      >
        <li>
          <div class="flex md:block flex-start items-center pt-2 md:pt-0">
            <div
              class="bg-black w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"
            ></div>
            <p class="text-sm mt-2"><b>2017</b></p>
            <div class="flex flex-rows py-2">
              <div class="">
                <img src="../assets/cambridge-crest1.png" width="50" />
              </div>
              <div class="">
                <img src="../assets/rbk_crest1.png" width="50" />
              </div>
            </div>
          </div>
          <div class="mt-0.5 ml-4 md:ml-0">
            <h4 class="text-gray-800 font-semibold text-xl">Grade 10</h4>
            <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
              IGCSE (University of Cambridge)
            </h4>
            <p class="text-gray-500 mb-3">
              <i>RBK International School, Mumbai</i> <br /><br />
              <!-- <i>77.5%</i><br /> <br/> -->
              <i>Sciences + Computers + Mathematics</i>
            </p>
          </div>
        </li>
        <li>
          <div class="flex md:block flex-start items-center pt-2 md:pt-0">
            <div
              class="bg-black w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"
            ></div>
            <p class="text-sm mt-2"><b>2019</b></p>
            <div class="flex flex-rows py-2">
              <div class="">
                <img src="../assets/cisce_crest.png" width="50" />
              </div>
              <div class="">
                <img src="../assets/NLDalmia_crest.png" width="50" />
              </div>
            </div>
          </div>
          <div class="mt-0.5 ml-4 md:ml-0">
            <h4 class="text-gray-800 font-semibold text-xl">Grade 12</h4>
            <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
              ISC (CISCE)
            </h4>
            <p class="text-gray-500 mb-3">
              <i>N.L.Dalmia High School, Mumbai</i><br /><br />
              <!-- <i>73.80%</i> -->
              <i>Sciences + Mathematics</i>
            </p>
          </div>
        </li>
        <li>
          <div class="flex md:block flex-start items-center pt-2 md:pt-0">
            <div
              class="bg-black w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"
            ></div>
            <p class="text-sm mt-2"><b>2023</b></p>
            <div class="flex flex-rows py-2">
              <div class="">
                <img src="../assets/uniofmumbai_crest.png" width="50" />
              </div>
              <div class="">
                <img src="../assets/ucoe_crest.png" width="50" />
              </div>
            </div>
          </div>
          <div class="mt-0.5 ml-4 md:ml-0">
            <h4 class="text-gray-800 font-semibold text-xl">
              B.Engg - Computer Engineering
            </h4>
            <h4 class="text-gray-800 font-semibold text-xl mb-1.5">
              B.Engg (University of Mumbai)
            </h4>
            <p class="text-gray-500 mb-3">
              <i>Universal College of Engineering, Mumbai</i><br /><br />
              <i>Specialization in Computer Engineering</i><br />
              <i>GPA: 9.27</i>
            </p>
            <!-- <p class="text-gray-500 mb-3">
              <i>Courses taken:</i><br /><br/>
              <i>Specialization in Computer Engineering</i><br />
              <i>GPA: 9.27</i>
            </p> -->
            <!--ISSUE 1 Courses taken, Accordian or List-->
          </div>
        </li>
      </ol>
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
