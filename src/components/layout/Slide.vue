<template>
    <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :slidesPerGroup="3"
        :loop="true"
        :loopFillGroupWithBlank="true"
        :pagination="{
            clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide ><SlideItem></SlideItem></swiper-slide>
        <swiper-slide ><SlideItem2></SlideItem2></swiper-slide>
        <swiper-slide ><SlideItem3></SlideItem3></swiper-slide>
        <swiper-slide ><SlideItem4></SlideItem4></swiper-slide>
        <swiper-slide ><SlideItem5></SlideItem5></swiper-slide>
        <swiper-slide ><SlideItem></SlideItem></swiper-slide>
        <swiper-slide ><SlideItem2></SlideItem2></swiper-slide>
        <swiper-slide ><SlideItem3></SlideItem3></swiper-slide>
        <swiper-slide ><SlideItem4></SlideItem4></swiper-slide>

    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {  Navigation } from "swiper";
import SlideItem from "../bases/SlideItem.vue";
import SlideItem2 from "../bases/SlideItem2.vue";
import SlideItem3 from "../bases/SlideItem3.vue";
import SlideItem4 from "../bases/SlideItem4.vue";
import SlideItem5 from "../bases/SlideItem5.vue";


export default {
    components: {
    Swiper,
    SwiperSlide,
    SlideItem,
    SlideItem2,
    SlideItem3,
    SlideItem4,
    SlideItem5,
},
    setup() {
        return {
            modules: [ Navigation],
        };
    },
};
</script>

<style scoped>
#app {
    height: 100%;
}
html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>