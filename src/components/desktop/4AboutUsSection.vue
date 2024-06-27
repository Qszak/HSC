<template>
<div class="Wrapper">
<section class="AboutUs">
    <div class="Titlebanner">
        <div class="PromoText">O nas</div>
        <div class="SectionTitle">Poznaj naszych ziomków!</div>
    </div>
    <div class="AboutUsContent">
        <img :src="image" alt="Siłka">
        <div class="Content">
            <p class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button class="ReadMore">Dowiedz się więcej</button>
        </div>
    </div>
</section>
</div>



</template>

<script>
import GymPhoto from '@/assets/gym-photo.jpg';

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

.Wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100svw - var(--scrollbarWidth));
}

.AboutUs {
    display: flex;
    width: 99vw;
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}

.TitleBanner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: -5rem;
    align-self: stretch;
}

.PromoText {
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

.SectionTitle {
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

.AboutUsContent {
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

.Content {
    display: flex;
    width: 39.375rem;
    height: 26.4375rem;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-300, 1.5rem);
}

p.Text {
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


button.ReadMore {
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
}



</style>