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
  <swiper-slide><img :src="photo" alt="boys"></swiper-slide>
  <swiper-slide><img :src="photo" alt="boys"></swiper-slide>
  <swiper-slide><img :src="photo" alt="boys"></swiper-slide>
  <!-- <div class="gallery">
</div> -->
  </swiper>   

</template>


<script>
import photo from '@/assets/gym-photo.jpg';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
    name: 'ImageGallery',
    components: {
    Swiper,
    SwiperSlide,
  },
    data() {
        return {
            photo,
        };
    },
    setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};

</script>

<style scoped>
  
  .mySwiper {
    display: flex;
    justify-content: center; /* Wyśrodkowanie slajdów */
    align-items: center;
    width: 100vw;
    height: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center; /* Wyśrodkowanie każdego slajdu */
    align-items: center;
    width: auto; /* Automatyczna szerokość, aby dopasować do zawartości */
}


img {
  display: block;
  max-width: 80vw;
  max-height: 80%;
  object-fit: contain;
}

</style>

