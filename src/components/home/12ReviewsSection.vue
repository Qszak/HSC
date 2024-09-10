<template>
    <section class="opinions">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">Opinie</div>
                <div class="title">Tak mówią o nas nasi klienci</div>
            </div>
            <div class="text">Na naszej ścieżce trenerskiej pojawiło się wiele osób, które podjęły się współpracy z nami i kontynuują ją od nawet kilkunastu lat. Wiele osób nam zaufało, za co serdecznie dziękujemy, a do zapoznania się z ich opiniami zapraszamy poniżej!</div>
        </div>
        <div class="card-slider">
            <SwiperReviews v-if="isSmallScreen"/>
            <ReviewsCards v-else/>
        </div>


    </section>
</template>

<script>
import SwiperReviews from '@/components/mobile/SliderReviews.vue';
import ReviewsCards from '@/components/home/ReviewsCards.vue';

export default {
    name: 'ReviewsSection',
    components: {
        SwiperReviews,
        ReviewsCards,
    },

    data() {
    return {
      isSmallScreen: false
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
    }
  }
}
</script>

<style scoped>
@media (max-width: 640px) {
section.opinions {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.section-header {
    display: flex;
    max-width: 67.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -2rem;
    align-self: stretch;
}
.promo-text {
    color: var(--Text-Background-text-inverse, #313131);
    text-align: center;
    font-family: Montserrat;
    font-size: 4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4rem; /* 100% */
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}
.title {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Headings/Mobile/S */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    letter-spacing: 0.0225rem;
    text-transform: uppercase;
}
.text {
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
.card-slider {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    overflow: hidden;
}
}

@media (min-width: 640px) and (max-width: 960px) {
section.opinions {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 4.5rem var(--space-300, 1.5rem);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.section-header {
    display: flex;
    max-width: 67.125rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -2rem;
    align-self: stretch;
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
.title {
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
.text {
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
.card-slider {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    overflow: hidden;
}

}

@media (min-width: 960px){
section.opinions {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
    background: var(--Surface-Inverse-primary, #181818);
}
.section-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -5rem;
    align-self: stretch;
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
.title {
    align-self: stretch;
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
.text {
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
.card-slider {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    overflow: hidden;
}

}
</style>