<template>
    <div class="slider">
        <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }"
            :pagination="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide
                v-for="(coach, index) in selectedCoaches"
                :key="index"
            >
                <CoachCards
                    :coachName="coach.name"
                    :coachPosition="coach.position"
                    :imgSrc="coach.imgSrc"
                    :imgAlt="coach.imgAlt"
                />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import CoachCards from "../CoachCards/CoachCards.vue";
import { coachData } from "@/data/coachData";

export default {
    name: "SwiperTeam",
    components: {
        Swiper,
        SwiperSlide,
        CoachCards,
    },
    setup() {
        const selectedCoachNames = [
            "Michał Kulej",
            "Jakub Kulej",
            "Filip Krasiński",
            "Sandra Cieślik-Kulej",
        ];

        const selectedCoaches = coachData.filter((coach) =>
            selectedCoachNames.includes(coach.name)
        );

        return {
            modules: [EffectCoverflow, Pagination],
            selectedCoaches,
        };
    },
};
</script>

<style scoped>
.myswiper {
    max-width: 90vw;
    display: flex;
    align-items: center;
    gap: var(--space-300, 1.5rem);
}
.swiper-slide {
    align-self: flex-start;
    justify-self: flex-start;
    text-align: center;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
