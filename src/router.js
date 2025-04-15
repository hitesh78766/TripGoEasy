import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import Bangkok from "./pages/Bangkok";
import PackageDetail from "./pages/Bangkok/[id].vue"


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/state/:city',
        name: 'CityPage',
        component: Bangkok,
    },
    {
        path: '/destination/bangkok/:id',
        name: 'PackageDetail',  // this is load the [id].vue form the page bangkok
        component: PackageDetail,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router



// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "./components/HomePage.vue";
// import PackageDetail from "./pages/Bangkok/[id].vue";
// import NotFound from "./components/NotFound.vue";

// const routes = [
//   {
//     path: "/",
//     name: "HomePage",
//     component: HomePage,
//   },
//   {
//     path: "/state/:city",
//     name: "CityPage",
//     component: () => import("./pages/Bangkok"),
//     props: true,
//   },
//   {
//     path: "/state/:city",
//     name: "CityPage",
//     component: () => import("./pages/Andaman"),
//     props: true,
//   },
//   {
//     path: "/destination/bangkok/:id",
//     name: "PackageDetail",
//     component: PackageDetail,
//   },
//   {
//     path: "/:catchAll(.*)",
//     name: "NotFound",
//     component: NotFound,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
