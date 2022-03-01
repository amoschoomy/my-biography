import { createRouter, createWebHistory } from "vue-router";
import AboutMeVue from "./components/AboutMe.vue";
import ContactMeVue from "./components/ContactMe.vue";
import ExpAndEduVue from "./components/ExpAndEdu.vue";
import HomeVue from "./components/Home.vue";
const routerHistory = createWebHistory();

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeVue,
    props: {
      name: "Amos Choo",
      age: "22",
      title: "Backend Developer",
      location: "Selangor, Malaysia",
    },
  },

  {
    path: "/about-me",
    name: "About Me",
    component: AboutMeVue,
  },
  {
    path: "/experience-and-education",
    name: "Experience and Education",
    component: ExpAndEduVue,
  },
  {
    path: "/contact-me",
    name: "Contact Me",
    component: ContactMeVue,
  },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
