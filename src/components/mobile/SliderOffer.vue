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
        <div class="offer-card">
            <div class="offer-card-top">
              <div class="service-name">Kickboxing</div>
              <div class="subtitle">SUBTYTUŁ</div>
            </div>
            <div class="offer-card-bottom">
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <button class="more">Szczegóły usługi</button>
            </div>
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="offer-card">
            <div class="offer-card-top">
              <div class="service-name">Boks</div>
              <div class="subtitle">SUBTYTUŁ</div>
            </div>
            <div class="offer-card-bottom">
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <button class="more">Szczegóły usługi</button>
            </div>
          </div>
      </swiper-slide>
      <swiper-slide><div class="offer-card">
            <div class="offer-card-top">
              <div class="service-name">BJJ</div>
              <div class="subtitle">SUBTYTUŁ</div>
            </div>
            <div class="offer-card-bottom">
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <button class="more">Szczegóły usługi</button>
            </div>
          </div></swiper-slide>
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

export default {
  name: 'SwiperOffer',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
    
    <style scoped>
    @media (max-width: 480px) {
    
    .offer-card {
      display: flex;
      width: 18.75rem;
      height: 27rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      background: var(--Surface-Secondary, #F5F5F5);
    }
    
    .offer-card-top {
      display: flex;
      padding: 3rem 0rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--space-050, 0.25rem);
      flex: 1 0 0;
      align-self: stretch;
      background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%);
    }
    
    .service-name {
      align-self: stretch;
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Headings/Mobile/XS */
      font-family: Montserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem; /* 125% */
      letter-spacing: 0.02rem;
      text-transform: uppercase;
    }
    
    .subtitle {
      align-self: stretch;
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Body/M/Regular */
      font-family: Montserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      letter-spacing: -0.005rem;
    }
    
    .offer-card-bottom {
      display: flex;
      padding: var(--space-300, 1.5rem);
      flex-direction: column;
      align-items: center;
      gap: var(--space-300, 1.5rem);
      align-self: stretch;
    }
    
    .text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      align-self: stretch;
      overflow: hidden;
      color: var(--Text-Secondary, #484848);
      text-align: center;
      text-overflow: ellipsis;
    
      /* Body/M/Regular */
      font-family: Montserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      letter-spacing: -0.005rem;
    }
    
    button.more {
      display: flex;
      padding: 1rem 3rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-self: stretch;
      border: 2px solid var(--Border-Primary, #181818);
    
      color: var(--Text-Primary, #181818);
      text-align: center;
    
      /* Action/Large/Bold */
      font-family: Montserrat;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem; /* 133.333% */
      text-transform: uppercase;
      }
    
    .full-offer {
      display: flex;
      padding: 1.25rem 3rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-self: stretch;
      background: var(--Surface-Brand, #E30613);
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Action/Large/Bold */
      font-family: Montserrat;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem; /* 133.333% */
      text-transform: uppercase;
      text-decoration: none;
      }
      
    .swiper {
    display: flex;
    align-items: center;
    justify-content: center;
   
  }
  
    .swiper-slide {
    align-self: center;
    justify-self: center;
    text-align: center;
    font-size: 18px;
    background: var(--Surface-Inverse-primary, #181818);
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
    }
    
    @media (min-width: 481px) {
    section.offer {
      display: flex;
      width: calc(100svw - var(--scrollbarWidth));
      padding: 6rem 4.5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4.5rem;
      background: var(--Surface-Inverse-primary, #181818);
    }
    
    .section-header {
      display: flex;
      
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 2rem;
      align-self: stretch;
    }
    
    .title-banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: -5rem;
    }
    
    .promo-text {
      text-align: center;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: var(--Border-Idle, #C2C2C2);
      font-family: Montserrat;
      font-size: 10rem;
      font-style: normal;
      font-weight: 700;
      line-height: 10rem; /* 100% */
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }
    
    .section-title {
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Headings/Desktop/S */
      font-family: Montserrat;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3rem; /* 150% */
      letter-spacing: 0.04rem;
      text-transform: uppercase;
    }
    
    
    p.section-text {
      align-self: stretch;
      color: var(--Text-Inverse-secondary, #E1E1E1);
      text-align: center;
      
    
      /* Body/L/Regular */
      font-family: Montserrat;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.75rem; /* 155.556% */
      letter-spacing: -0.00563rem;
    }
    
    .services {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      align-self: stretch;
      }
    
    .services-title {
      align-self: stretch;
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Headings/Desktop/XS */
      font-family: Montserrat;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2rem; /* 133.333% */
      letter-spacing: 0.03rem;
      text-transform: uppercase;
    }
    
    .offer-slider {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      gap: 2rem;
      align-self: stretch;
      flex-wrap: wrap;
    }
    
    .offer-card {
      display: flex;
      width: 18.75rem;
      height: 27rem;
      flex-direction: column;
      align-items: center;
      border-radius: 0.25rem;
      background: var(--Surface-Secondary, #F5F5F5);
    }
    
    .offer-card-top {
      display: flex;
      padding: 3rem 0rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--space-050, 0.25rem);
      flex: 1 0 0;
      align-self: stretch;
      background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%);
    }
    
    .service-name {
      align-self: stretch;
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Headings/Desktop/XS */
      font-family: Montserrat;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2rem; /* 133.333% */
      letter-spacing: 0.03rem;
      text-transform: uppercase;
    }
    
    .subtitle {
      align-self: stretch;
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Body/M/Regular */
      font-family: Montserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      letter-spacing: -0.005rem;
    }
    
    .offer-card-bottom {
      display: flex;
      padding: var(--space-300, 1.5rem);
      flex-direction: column;
      align-items: center;
      gap: var(--space-300, 1.5rem);
      align-self: stretch;
    }
    
    .text {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      align-self: stretch;
      overflow: hidden;
      color: var(--Text-Secondary, #484848);
      text-align: center;
      text-overflow: ellipsis;
    
      /* Body/M/Regular */
      font-family: Montserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      letter-spacing: -0.005rem;
    }
    
    button.more {
      display: flex;
      padding: 1.25rem 1.5rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-self: stretch;
      border: 2px solid var(--Border-Primary, #181818);
      color: var(--Text-Primary, #181818);
      text-align: center;
    
      /* Action/Large/Bold */
      font-family: "Montserrat";
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem; /* 133.333% */
      text-transform: uppercase;
    
    }
    
    .full-offer {
      display: flex;
      padding: 1.25rem 3rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      background: var(--Surface-Brand, #E30613);
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Action/Large/Bold */
      font-family: Montserrat;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.5rem; /* 133.333% */
      text-transform: uppercase;
      text-decoration: none;
      }
    }
    </style>