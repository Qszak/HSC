<template>
    <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'1'"
    :coverflowEffect="{
      rotate: 0,
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
            <MKulej/>
        </swiper-slide>
        <swiper-slide>
            <JKulej/>
        </swiper-slide>
        <swiper-slide>
            <FKrasinski/>
        </swiper-slide>
        <swiper-slide>
            <SCieslik/>
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
// import coach cards
import MKulej from '../CoachCards/MKulej.vue';
import JKulej from '../CoachCards/JKulej.vue';
import FKrasinski from '../CoachCards/FKrasinski.vue';
import SCieslik from '../CoachCards/SCieslik.vue';

export default {
  name: 'SwiperTeam',
  components: {
    Swiper,
    SwiperSlide,
    MKulej,
    JKulej,
    FKrasinski,
    SCieslik,

  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
