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
      <swiper-slide>
        <KickboxingCard/>
      </swiper-slide>
      <swiper-slide>
        <BoksCard/>
      </swiper-slide>
      <swiper-slide>
        <MMACard/>
      </swiper-slide>
      <swiper-slide>
        <Bjj/>
      </swiper-slide>
      <swiper-slide>
        <Kids/>
      </swiper-slide>
      <swiper-slide>
        <Stretching/>
      </swiper-slide>
    </swiper>
    
  </template>

<script>
import KickboxingCard from '../OfferCards/kickboxing.vue';
import BoksCard from '@/components/OfferCards/boks.vue';
import MMACard from '@/components/OfferCards/mma.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Bjj from '../OfferCards/bjj.vue';
import Kids from '../OfferCards/kids.vue';
import Stretching from '../OfferCards/stretching.vue';


export default {
  name: 'SwiperOfferMedium',
  components: {
    Swiper,
    SwiperSlide,
    KickboxingCard,
    BoksCard,
    MMACard,
    Bjj,
    Kids,
    Stretching,
    
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
    
    <style scoped>
    @media (min-width: 640px) {
      
      .mySwiper {
        display: flex;
        justify-content: center; /* Wyśrodkowanie slajdów */
        align-items: center;
        width: 100%;
        height: 100%;
    }
    
    .swiper-slide {
        display: flex;
        justify-content: center; /* Wyśrodkowanie każdego slajdu */
        align-items: center;
        width: auto; /* Automatyczna szerokość, aby dopasować do zawartości */
    }
    }
    
    
    </style>