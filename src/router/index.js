import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import EducationView from "../views/EducationView.vue";
import SkillsView from "../views/SkillsView.vue";
import ExperienceView from "../views/ExperienceView.vue";
import ProjResIntView from "../views/ProjResIntView.vue";
import BlogsView from "../views/BlogsView.vue";
import BookmarksView from "../views/BookmarksView.vue";
import ContactView from "../views/ContactView.vue";
import KannadaLanguageBlogView from "../views/Blogs/KannadaLanguageBlogView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/education",
      name: "education",
      component: EducationView,
    },
    {
      path: "/skills",
      name: "skills",
      component: SkillsView,
    },
    {
      path: "/experience",
      name: "experience",
      component: ExperienceView,
    },
    {
      path: "/projects_research_interests",
      name: "projresint",
      component: ProjResIntView,
    },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogsView,
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: BookmarksView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },

    // Blogs
    {
      path: "/blogs/kannada-language",
      name: "kannadablog",
      component: KannadaLanguageBlogView,
    }
  ],
});

export default router;
