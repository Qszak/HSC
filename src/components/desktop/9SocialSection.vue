<template>
<section class="Social">
    <div class="SectionHeader">
        <div class="SectionTitle">
            <div class="PromoText">Sociale</div>
            <div class="Title">Nasza społeczność</div>
        </div>
        <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
    <div class="Gallery">
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
section.Social {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 6rem 4.5rem;
    flex-direction: column;
    align-items: center;
    gap: 4.5rem;
}
.SectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
}
.SectionTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: -5rem;
    align-self: stretch;
}
.PromoText {
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
.Title {
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
.Text {
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
.Gallery {
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


</style>