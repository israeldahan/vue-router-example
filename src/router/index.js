import { createRouter, createWebHistory } from 'vue-router';
import HomeApp from "@/pages/HomeApp.vue"
import About from "@/pages/AboutPage.vue"
import Contact from "@/pages/ContactPage.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeApp,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
