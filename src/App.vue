<script setup>
import Header from "./components/layout/Header.vue";
import Menu from "./components/layout/Menu.vue";
import Slide from "./components/layout/Slide.vue";
import Content from "./components/layout/Content.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
    <div id="app" class="max-w-[1240px] bg-white mx-auto px-5">
        <Header> </Header>
        <Menu></Menu>
        <Slide class="mt-10"></Slide>
        <Content></Content>
    </div>
    <Footer class="max-w-[1240px] mx-auto"></Footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400&display=swap");

#app {
    font-family: "Fredoka";
}
</style>
