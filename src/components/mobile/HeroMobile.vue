<template>
    <div class="HeroContent">
      <div class="HeroText">
        <div class="HeroText__upperRow">Zawsze jest powód</div>
        <div class="HeroText__bottomRow">
          <div class="HeroText__bottomRow-prefix">aby</div>
          <div class="HeroText__bottomRow-slider">zacząć</div>
        </div>
      </div>
      <div class="HeroButtons">
        <button class="Contact">Napisz do nas</button>
        <button class="Offer">Przeglądaj ofertę</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeroMobile',
}
</script>

<style scoped>

.HeroContent {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    height: 46.25rem;
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    flex-shrink: 0;
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/LOGO/HSC\ logopak/hero.jpg) lightgray 50% / cover no-repeat;
}


.HeroText {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch; 
}   

.HeroText__upperRow {
    align-self: center;
    color: var(--Text-Inverse-primary, #FFF);

    /* Headings/Mobile/XXL */
    font-family: Montserrat;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.375rem; /* 135% */
    letter-spacing: 0.05rem;
    text-transform: uppercase;
}

.HeroText__bottomRow {
    display: flex;
    /* justify-content: flex-start;
    align-items: flex-start; */
    gap: var(--space-300, 1.5rem);
    align-self: stretch;
}

.HeroText__bottomRow-prefix {
    color: var(--Text-Inverse-primary, #FFF);

    /* Headings/Mobile/XXL */
    font-family: Montserrat;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.375rem; /* 135% */
    letter-spacing: 0.05rem;
    text-transform: uppercase;
}

.HeroText__bottomRow-slider {
    color: transparent;
    -webkit-text-stroke-width: 1px ;
    -webkit-text-stroke-color: var(--Border-Secondary, #FFF);
    font-family: Montserrat;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3.375rem;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}

.HeroButtons {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2rem;
    align-self: stretch;
    flex-wrap: wrap;
}

button.Contact {
    display: flex;
    padding: 1.25rem 4.7715rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    background: var(--Surface-Brand, #E30613);
    border: 2px solid var(--Surface-Brand, #E30613);
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

button.Offer {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    border: 2px solid var(--Border-Secondary, #FFF);
    background: transparent;

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