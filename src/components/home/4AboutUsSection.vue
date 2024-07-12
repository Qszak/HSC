<template>

<section class="about-us">
    <div class="title-banner">
        <div class="promo-text">O nas</div>
        <div class="section-title">ZAPOZNAJ SIĘ Z NASZYM CENTRUM, STWORZONYM Z PASJI DO SPORTU ORAZ ZAMIŁOWANIA DO POMOCY INNYM</div>
    </div>
    <div class="about-us-content">
        <img :src="image" alt="Siłka">
        <div class="content">
            <p class="text">Nasze holistyczne centrum sportu znajduje się bardzo blisko centrum Wrocławia i spełnia wszystkie wymagania, aby kompletnie zadbać o każdego podopiecznego. Będąc trenerami na rynku już kilkanaście lat, zapoznaliśmy się z szerokim zakresem potrzeb osób, które przychodzą do nas na treningi. Dzięki zdobytemu doświadczeniu, zadbaliśmy o każdy szczegół współpracy, aby móc go nazwać - holistycznym.
            W naszym studiu treningowym KAŻDY będzie mógł się poczuć w pełni zaopiekowany!
            Zapoznaj się z naszą ofertą!</p>
            <RouterLink to="/o-nas" class="read-more">Dowiedz się więcej</RouterLink>
        </div>
    </div>
</section>




</template>

<script>
import GymPhoto from '@/assets/gym-photo.jpg';
import { RouterLink } from 'vue-router';

    export default {
      name: 'AboutUsSection',

      data() {
        return {
            image: GymPhoto,
        };
      },
    };
</script>

<style scoped>

@media (max-width: 480px) {
.about-us {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.title-banner {
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

.section-title {
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

.about-us-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
}

img {
    width: 20.8125rem;
    height: 13.875rem;
    margin: 0 5vh;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
}

p.text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
    }


.read-more {
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
    cursor: pointer;
}
}

@media (min-width: 481px) {
.about-us {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}

.title-banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -5rem;
    align-self: stretch;
}

.promo-text {
    text-align: center;
    color: var(--Text-Background-text, #F5F5F5);
    font-family: Montserrat;
    font-size: 10rem;
    font-style: normal;
    font-weight: 700;
    line-height: 10rem; /* 100% */
    letter-spacing: 0.2rem;
    text-transform: uppercase;
}

.section-title {
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

.about-us-content {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}

img {
    height: 26.4375rem;
    min-width: 25rem;
    flex: 1 0 0;
}

.content {
    display: flex;
    width: 39.375rem;
    height: 26.4375rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
}

p.text {
    flex: 1 0 0;
    align-self: stretch;
    color: var(--Text-Secondary, #484848);

    /* Body/L/Regular */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}


.read-more {
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