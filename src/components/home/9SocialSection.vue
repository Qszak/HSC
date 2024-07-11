<template>
<section class="social">
    <div class="section-header">
        <div class="section-title">
            <div class="promo-text">Sociale</div>
            <div class="title">Nasza społeczność</div>
        </div>
        <div class="text">Działając od wielu lat na rynku, zebraliśmy sporo osób wokół, z którymi działamy nieprzerwanie nawet przez kilkanaście lat. Naszą misją jest tworzenie "holistycznej" społeczności, która będzie z nami wspólnie dzielić miłe chwilę na siłowni oraz poza nią.
            Zapraszamy do zapoznania się z naszym codziennym życiem w socjalach na Facebooku oraz Instagramie! </div>
    </div>
    <div class="gallery">
        <img :src="pic" alt="ziomki">
        <img :src="pic" alt="ziomki">
        <img :src="pic" alt="ziomki">
        <img :src="pic" alt="ziomki">
      
    </div>
</section>
</template>


<script>
import pic from "@/assets/ziomeczki.jpeg";

export default {
    name: 'SocialSection',
    data () {
        return {
            pic
        };
    },
};
</script>

<style scoped>
@media (max-width: 480px) {
section.social {
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
    align-items: flex-start;
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
    max-width: 37.5rem;
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
.gallery {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 1rem var(--space-200, 1rem);
    align-self: stretch;
    flex-wrap: wrap;
}

img {
    width: 10.1875rem;
    height: 10.1875rem;
}
}


@media (min-width: 481px) {
section.social {
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
    justify-content: center;
    align-items: flex-start;
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
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--Border-Idle, #C2C2C2);
    font-family: 'Montserrat';
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

    /* Headings/Desktop/S */
    font-family: 'Montserrat';
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 150% */
    letter-spacing: 0.04rem;
    text-transform: uppercase;
}
.text {
    max-width: 37.5rem;
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
.gallery {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
    justify-content: space-between;
}

img {
    width: 22.5rem;
    height: 22.5rem;
    background-color: pink;
}
}

</style>