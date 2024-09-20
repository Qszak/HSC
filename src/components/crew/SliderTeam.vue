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
    <swiper-slide v-for="(coach, index) in coachData" :key="index">
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
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import CoachCards from '../CoachCards/CoachCards.vue';

const coachData = [
{
  name: "Michal Kulej",
  position: "Trener Personalny",
  skills: "personal, medical, combat, motor",
  imgSrc: "/images/MKulej.png",
  imgAlt: "Zdjęcie Michała Kuleja"
},
{
  name: "Jakub Kulej",
  position: "Trener Personalny",
  skills: "personal, combat",
  imgSrc: "/images/MKulej.png",
  imgAlt: "Zdjęcie Jakuba Kuleja"
},
{
  name: "Filip Krasiński",
  position: "Trener Personalny",
  skills: "Personal",
  imgSrc: "/images/MKulej.png",
  imgAlt: "Zdjęcie Filipa Krasińskiego"
},
{
  name: "Sandra Cieślik-Kulej",
  position: "Trener Personalny",
  skills: "personal",
  imgSrc: "/images/MKulej.png",
  imgAlt: "Zdjęcie Sandry Cieślik-Kulej"
},
]

export default {
name: 'SwiperTeam',
components: {
  Swiper,
  SwiperSlide,
  CoachCards
},
setup() {
  return {
    modules: [EffectCoverflow, Pagination],
    coachData,
  };
}
};
</script>


<style scoped>
/* .slider {
    max-width: 90vw;
    display: flex;
    align-items: center;
    gap: var(--space-300, 1.5rem);
} */

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
