import { createRouter, createWebHistory } from "vue-router";

import Home from "./../pages/Home.vue";
import About from "./../pages/About.vue";
import Contact from "./../pages/Contact.vue";

// check the doc !!!
// https://router.vuejs.org/introduction.html

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "is-active",
  routes, // short for `routes: routes`
});
