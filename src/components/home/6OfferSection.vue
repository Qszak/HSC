<template>

<section class="offer">
  <div class="section-header">
    <div class="title-banner">
      <div class="promo-text">OFERTA</div>
      <div class="section-title">ZNAJDŹ COŚ DLA SIEBIE</div>
    </div>
    <p class="section-text">W Holistic Sport Center pełnimy szeroki zakres usług, aby w pełni zadbać o poszczególne aspekty tj. kondycję, siłę, wytrzymałość, szybkość i szeroko pojętą sprawność. Wspólnie z wyspecjalizowaną kadrą zadbamy o Twoje zdrowie!
      Zapoznaj się z ofertą poniżej!</p>
  </div>
  <div class="services">
    <div class="services-title">Wybrane usługi</div>
    <div class="offer-slider">
      <SwiperOffer v-if="isSmallScreen"/>
      <SwiperOfferMedium v-else-if="isMediumScreen"/>
      <CardsOffer v-else/>
    </div>
  </div>
    <RouterLink to="/oferta" class="full-offer">Zapoznaj się z pełną ofertą</RouterLink>
</section>

</template>


<script>
import { RouterLink } from 'vue-router';
import SwiperOffer from '@/components/mobile/SliderOffer.vue';
import CardsOffer from '@/components/home/CardsOffer.vue';
import SwiperOfferMedium from '@/components/mobile/SliderOfferMedium.vue';

    export default {
      name: 'OfferSection',
      components: {
      SwiperOffer,
      CardsOffer,
      SwiperOfferMedium,
      },

      data() {
    return {
      isSmallScreen: false,
      isMediumScreen: false,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize(); // Sprawdzenie rozmiaru ekranu po załadowaniu komponentu
  },
  unmounted() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 640; // Przykładowy próg dla małego ekranu
      this.isMediumScreen = window.innerWidth >= 640 && window.innerWidth < 960;
    }
  }



    }
</script>

<style scoped>
@media (max-width: 640px) {
section.offer {
  display: flex;
  width: calc(100svw - var(--scrollbarWidth));
  padding: 3rem var(--space-200, 1rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: var(--Surface-Inverse-primary, #181818);
}

.section-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
}

.title-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -2rem;
}

.promo-text {
  color: var(--Text-Background-text-inverse, #313131);
  text-align: center;
  font-family: Montserrat;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.section-title {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; 
  letter-spacing: 0.0225rem;
  text-transform: uppercase;
}


p.section-text {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; 
  letter-spacing: -0.005rem;
}

.services {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
  }

.services-title {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; 
  letter-spacing: 0.0225rem;
  text-transform: uppercase;
}

.offer-slider {
  display: flex;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
  flex-wrap: wrap;
}

.full-offer {
  display: flex;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: center;
  background: var(--Surface-Brand, #E30613);
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; 
  text-transform: uppercase;
  text-decoration: none;
  }
}

@media (min-width: 640px) and (max-width: 960px){
section.offer {
  display: flex;
  width: calc(100svw - var(--scrollbarWidth));
  padding: 4.5rem var(--space-300, 1.5rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: var(--Surface-Inverse-primary, #181818);
}

.section-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
}

.title-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -2rem;
}

.promo-text {
  text-align: center;
  color: var(--Text-Background-text-inverse, #313131);
  font-family: Montserrat;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.section-title {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  font-family: Montserrat;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
}


p.section-text {
  max-width: 35rem;
  align-self: stretch;
  color: var(--Text-Inverse-secondary, #E1E1E1);
  text-align: center;
  
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: -0.005rem;
  margin: 0 10vw;
}

.services {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
  }

.services-title {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.0225rem;
  text-transform: uppercase;
}

.offer-slider {
  display: flex;
  align-items: center;
  gap: var(--space-300, 1.5rem);
  align-self: stretch;
 
}


.full-offer {
  display: flex;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: var(--space-200, 1rem);
  background: var(--Surface-Brand, #E30613);
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;


  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  text-transform: uppercase;
  text-decoration: none;
  }
}

@media (min-width: 960px) {
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
  color: var(--Text-Background-text-inverse, #313131);
  font-family: Montserrat;
  font-size: 10rem;
  font-style: normal;
  font-weight: 700;
  line-height: 10rem; 
  letter-spacing: 0.2rem;
  text-transform: uppercase;
}

.section-title {
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  
  font-family: Montserrat;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
}


p.section-text {
  align-self: stretch;
  color: var(--Text-Inverse-secondary, #E1E1E1);
  text-align: center;
  
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; 
  letter-spacing: -0.00563rem;
}

.services {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
  align-self: stretch;
  }

.services-title {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; 
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


.full-offer {
  display: flex;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: var(--Surface-Brand, #E30613);
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; 
  text-transform: uppercase;
  text-decoration: none;
  }
}
</style>