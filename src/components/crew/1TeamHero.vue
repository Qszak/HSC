<template>
    <div class="team-section">
        <div class="title-banner">
            <p class="promo-text">Kadra</p>
            <p class="section-title">"Nie wierzę w podejmowanie właściwych decyzji. Podejmuję decyzję i czynię ją właściwą"</p>
        </div>
        <div class="content">
            <p class="content-text">W naszej kadrze znajdują się pasjonaci różnych dziedzin czy dyscyplin sportowych tj. sporty siłowe, kulturystyczne, kickboxingu, boksu, piłki nożnej czy kalisteniki. W naszej siłowni prowadzi zajęcia wielu doświadczonych trenerów, gotowych wesprzeć Cię w procesie treningowym.
                Zapoznaj się z naszą kadrą poniżej!</p>
        </div>
    </div>

</template>


<script>
export default {
    name: 'TeamHero',
}
</script>

<style scoped>

@media (max-width: 640px) {
.team-section {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 2.5rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem);
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

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
}

.content-text {
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
}

@media (min-width: 640px) and (max-width: 960px) {
.team-section {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 2.5rem var(--space-200, 1rem);
    flex-direction: column;
    align-items: center;
    gap: var(--space-300, 1.5rem)
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
    line-height: 4rem;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}

.section-title {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    text-align: center;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
        
}

.content-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}
}

@media (min-width: 960px) {
.team-section {
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
    line-height: 4rem;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}

.section-title {
    align-self: stretch;
    color: var(--Text-Primary, #181818);
    text-align: center;
    font-family: Montserrat;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}

.content {
    display: flex;
    width: 39.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
        
}

.content-text {
    align-self: stretch;
    color: var(--Text-Secondary, #484848);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
}
}
</style>