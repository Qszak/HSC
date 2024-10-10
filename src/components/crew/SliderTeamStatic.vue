<template>
    <div class="static" v-for="(coach, index) in selectedCoaches" :key="index">
        <CoachCards
            :coachName="coach.name"
            :coachPosition="coach.position"
            :imgSrc="coach.imgSrc"
            :imgAlt="coach.imgAlt"
        />
    </div>
</template>

<script>
import CoachCards from "../CoachCards/CoachCards.vue";
import { coachData } from "@/data/coachData";

export default {
    name: "SwiperTeamStatic",
    components: {
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
            selectedCoaches,
        };
    },
};
</script>

<style scoped>
.static {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: calc(5rem + 8vw);
    align-self: stretch;
    flex-wrap: wrap;
}
@media (min-width: 1440px) {
    .static {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
        align-self: stretch;
        flex-wrap: nowrap;
    }
}
</style>
