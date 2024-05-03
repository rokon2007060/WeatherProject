import { createRouter, createWebHistory } from "vue-router";
import HomeRoute from "./Pages/HomeRoute.vue";

const routes = [
    {
        path:"/",
        component: () => import("./Pages/HomeRoute.vue"),
    },
    {
        path:"/test",
        component: () => import("./Pages/TestRoute.vue"),
    },
    {
        path:"/weather",
        component: () => import("./Pages/HomeRoute.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
