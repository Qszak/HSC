<template>
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
      <swiper-slide v-for="{name, position, src, alt} in coachData">
        <CoachCards :coach-name="name" :coach-position="position" :img-src="src" :img-alt="alt" />
      </swiper-slide>

    </swiper>
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
import { coachData } from 'static/coachData';
// import coach cards


export default {
  name: 'SwiperTeam',
  components: {
    Swiper,
    SwiperSlide,
    CoachCards,
  

  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
      coachData
    };
  },
};
</script>
