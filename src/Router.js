import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";

const routes= [
    { path : '/', name : 'HOME', component : Home },
    { path : '/Login', name : 'LOGIN', component : Login },
    { path : '/Signup', name : 'SIGNUP', component : SignUp },
];

const router= createRouter({
    history : createWebHistory(),
    routes
});

export default router;