<template>
    <section class="hsc-more">
        <div class="section-header">
            <div class="section-title">
                <div class="promo-text">HSC</div>
                <div class="title">To nie tylko sport</div>
            </div>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
        <div class="cards">
            <div class="card">
                <div class="card-header">Dietetyka</div>
                <div class="card-photo">
                    <img src="" alt="">
                </div>
                <div class="card-info">Wieloletni Trener Personalny we Wrocławiu, absolwent wrocławskiego AWF-u, ukończył Zarządzanie Biznesem na WSB oraz Psychologię Sportu.</div>
                <RouterLink to="/dietetyka" class="read-more">Szczegóły usługi</RouterLink>
            </div>
            <div class="card">
                <div class="card-header">Fizjoterapia</div>
                <div class="card-photo">
                    <img src="" alt="">
                </div>
                <div class="card-info">Wieloletni Trener Personalny we Wrocławiu, absolwent wrocławskiego AWF-u, ukończył Zarządzanie Biznesem na WSB oraz Psychologię Sportu.</div>
                <RouterLink to="/fizjoterapia" class="read-more">Szczegóły usługi</RouterLink>
            </div>
        </div>



    </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
    name: 'HSCMoreSection',
}
</script>

<style scoped>
@media (max-width: 480px) {
section.hsc-more {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 3rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}
.section-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: -2rem;
    align-self: stretch;
}
.promo-text {
    align-self: stretch;
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
    max-width: 50rem;
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
.cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    align-self: stretch;
}
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
}
.card-header {
    align-self: stretch;
    color: #000;
    text-align: center;

    /* Body/L/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.card-photo {
    width: 15rem;
    height: 15rem;
    border-radius: var(--radius-rounded, 62.5rem);
    background: #D9D9D9;
}
.card-info {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;

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
    text-decoration: none;
}
}

@media (min-width: 481px) {
section.hsc-more {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}
.section-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    align-self: stretch;
}
.section-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: -5rem;
    align-self: stretch;
}
.promo-text {
    align-self: stretch;
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
    
    max-width: 50rem;
    align-self: center;
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
.cards {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 7.5rem;
    align-self: stretch;
}
.card {
    display: flex;
    width: 25rem;
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem);
}
.card-header {
    align-self: stretch;
    color: #000;
    text-align: center;

    /* Body/L/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem; /* 155.556% */
    letter-spacing: -0.00563rem;
}
.card-photo {
    width: 15rem;
    height: 15rem;
    border-radius: var(--radius-rounded, 62.5rem);
    background: #D9D9D9;
}
.card-info {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;

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
    background-color: transparent;
    text-decoration: none;
}
}
</style>