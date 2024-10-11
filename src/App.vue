<template>
    <NavigationMobile v-if="isSmallScreen" />
    <Navigation v-else />

    <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import Navigation from "@/components/home/1Navigation.vue";
import NavigationMobile from "./components/mobile/1NavigationMobile.vue";

export default {
    name: "App",
    components: {
        Navigation,
        NavigationMobile,
        RouterView,
    },
    data() {
        return {
            isSmallScreen: false,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreenSize);
        this.checkScreenSize(); // Sprawdzenie rozmiaru ekranu po załadowaniu komponentu
    },
    destroyed() {
        window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth < 1063; // Przykładowy próg dla małego ekranu
        },
    },
};
</script>
