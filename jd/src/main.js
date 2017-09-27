import Vue from "vue";
import Swiper from "swiper";
import App from "./App.vue";
import router from "./router";

import 'swiper/dist/css/swiper.css';

import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper)

new Vue({
    el:"#app",
    render:xx=>xx(App),
    router
})
