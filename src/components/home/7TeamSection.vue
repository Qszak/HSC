<template>
  
    <section class="team">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">KADRA</div>
                <div class="title">ZIOMKI Z MORDOWNI</div>
            </div>
            <div class="text">W naszej kadrze znajdują się pasjonaci różnych dziedzin czy dyscyplin sportowych tj. sporty siłowe, kulturystyczne, kickboxingu, boksu piłki nożnej czy kalisteniki. W naszej siłowni prowadzi zajęcia wielu doświadczonych trenerów, gotowych wesprzeć Cię w procesie treningowym.
                Zapoznaj się z naszą kadrą poniżej!</div>
            <div class="team-slider">
            <SliderTeam v-if="isSmallScreen"/>
            <CardsTeam v-else/>
            </div>
                
            
        </div>
        <RouterLink to="/kadra" class="meet-crew">Poznaj naszą kadrę</RouterLink>

    </section>

</template>


<script>
import { RouterLink } from 'vue-router';
import SliderTeam from '@/components/mobile/SliderTeam.vue';
import CardsTeam from '@/components/home/CardsTeam.vue';

export default {
    name: 'TeamSection',
    components: {
        SliderTeam,
        CardsTeam,
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
  destroyed() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 480; // Przykładowy próg dla małego ekranu
    }
  }
}

</script>


<style scoped>
@media (max-width: 480px){
section.team {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
.section-header {
    display: flex;
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
    color: var(--Text-Background-text, #F5F5F5);
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
    color: var(--Text-Primary, #181818);
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
    color: var(--Text-Secondary, #484848);
    text-align: center;

    /* Body/M/Light */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
}
.team-slider {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}
.meet-crew {
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


@media (min-width: 481px){
section.team {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}
.section-header {
    display: flex;
    max-width: 100%;
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
    color: transparent;
}
.title {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
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
    color: var(--Text-Secondary, #484848);
    text-align: center;

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.team-slider {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}

.meet-crew {
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