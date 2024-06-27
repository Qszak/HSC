<template>
  <div class="Wrapper">
    <div class="HeroContent">
      <div class="HeroText">
        <div class="HeroText__top">Zawsze jest powód</div>
        <div class="HeroText__bottom">
          <div class="HeroText__bottom-left">aby</div>
          <div class="HeroText__bottom-slider">zacząć</div>
        </div>
      </div>
      <div class="HeroButtons">
        <button class="Contact">Napisz do nas</button>
        <button class="Offer">Przeglądaj ofertę</button>
      </div>
    </div>
  </div>



</template>


<script>
export default {
  name: 'HeroContent',
}
</script>

<style scoped>

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

.Wrapper {
  display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100svw - var(--scrollbarWidth));
    background: #181818;
}

.HeroContent {
    display: flex;
    width: 99vw;
    height: 48.25rem;
    padding: 0rem 4.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
    /* flex-shrink: 0; */
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/LOGO/HSC\ logopak/hero.jpg) lightgray 50% / cover no-repeat;
}

.HeroText {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;  
}

.HeroText__top {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  font-family: Montserrat;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.HeroText__bottom {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--space-300, 1.5rem);
  align-self: stretch;
}

.HeroText__bottom-left {
  color: var(--Text-Inverse-primary, #FFF);

  /* Headings/XXL */
  font-family: Montserrat;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6rem; /* 150% */
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.HeroText__bottom-slider {
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: var(--Border-Secondary, #FFF);
font-family: Montserrat;
font-size: 4rem;
font-style: normal;
font-weight: 700;
line-height: 6rem; /* 150% */
letter-spacing: 0.08rem;
text-transform: uppercase;
color: transparent;

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
  width: 20rem;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: var(--Surface-Brand, #E30613);
  border: 2px solid var(--Border-Primary, #E30613);
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
  width: 20rem;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 2px solid var(--Border-Secondary, #FFF);
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  background-color: transparent;

  /* Action/Large/Bold */
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 133.333% */
  text-transform: uppercase;
}


</style>