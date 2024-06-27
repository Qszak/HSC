<template>
<section class="AboutUs">
    <div class="Titlebanner">
        <div class="PromoText">O nas</div>
        <div class="SectionTitle">Poznaj naszych ziomków!</div>
    </div>
    <div class="AboutUsContent">
        <img></img>
        <div class="Content">
            <p class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button class="ReadMore">Dowiedz się więcej</button>
        </div>
    </div>


</section>



</template>

<script>
    export default {
      name: 'AboutUsMobile',
    }
</script>

<style scoped>

.AboutUs {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
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
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--Border-Idle, #C2C2C2);
    font-family: Montserrat;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem; /* 100% */
    letter-spacing: 0.2rem;
    text-transform: uppercase;
}

.SectionTitle {
    color: var(--Text-Primary, #181818);
    text-align: center;

    /* Headings/Desktop/S */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.0225rem;
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
    width: 20.8125rem;
    height: 13.875rem;
    background: url(/LOGO/AboutUs_IMG.jpg) lightgray 50% / cover no-repeat;
    align-items: center;
    align-content: center;
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
    align-self: stretch;
    color: var(--Text-Secondary, #484848);

    /* Body/M/Regular */
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: -0.005rem;
    text-align: justify;
    }


button.ReadMore {
    display: flex;
    padding: 1.25rem 2rem;
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
   
}



</style>