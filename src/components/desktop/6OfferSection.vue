<template>
<div class="Wrapper">
<section class="Offer">
  <div class="SectionHeader">
    <div class="TitleBanner">
      <div class="PromoText">OFERTA</div>
      <div class="SectionTitle">ZNAJDŹ COŚ DLA SIEBIE</div>
    </div>
    <p class="SectionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
  <div class="Services">
    <div class="ServicesTitle">Wybrane usługi</div>
    <div class="OfferSlider">
      <div class="OfferCard">
        <div class="OfferCardTop">
          <div class="ServiceName">Kickboxing</div>
          <div class="Subtitle">SUBTYTUŁ</div>
        </div>
        <div class="OfferCardBottom">
          <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
          <button class="More">Szczegóły usługi</button>
        </div>
      </div>
      <div class="OfferCard">
        <div class="OfferCardTop">
          <div class="ServiceName">BOKS</div>
          <div class="Subtitle">SUBTYTUŁ</div>
        </div>
        <div class="OfferCardBottom">
          <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
          <button class="More">Szczegóły usługi</button>
        </div>
      </div>
      <div class="OfferCard">
        <div class="OfferCardTop">
          <div class="ServiceName">MMA</div>
          <div class="Subtitle">SUBTYTUŁ</div>
        </div>
        <div class="OfferCardBottom">
          <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
          <button class="More">Szczegóły usługi</button>
        </div>
      </div>
      <div class="OfferCard">
        <div class="OfferCardTop">
          <div class="ServiceName">BJJ</div>
          <div class="Subtitle">SUBTYTUŁ</div>
        </div>
        <div class="OfferCardBottom">
          <div class="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
          <button class="More">Szczegóły usługi</button>
        </div>
      </div>
    </div>
  </div>
    <button class="FullOffer">Zapoznaj się z pełną ofertą</button>
</section>
</div>
</template>


<script>
    export default {
      name: 'OfferSection',
    }
</script>

<style scoped>

.Wrapper {
  display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100svw - var(--scrollbarWidth));
}

section.Offer {
  display: flex;
  width: 99vw;
  padding: 6rem 4.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;
  background: var(--Surface-Inverse-primary, #181818);
}

.SectionHeader {
  display: flex;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
}

.TitleBanner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: -5rem;
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
}

.SectionTitle {
  color: var(--Text-Inverse-primary, #FFF);
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


p.SectionText {
  align-self: stretch;
  color: var(--Text-Inverse-secondary, #E1E1E1);
  text-align: center;
  

  /* Body/L/Regular */
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 155.556% */
  letter-spacing: -0.00563rem;
}

.Services {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  align-self: stretch;
  }

.ServicesTitle {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  /* Headings/Desktop/XS */
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  letter-spacing: 0.03rem;
  text-transform: uppercase;
}

.OfferSlider {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  gap: 2rem;
  align-self: stretch;
  flex-wrap: wrap;
}

.OfferCard {
  display: flex;
  width: 18.75rem;
  height: 27rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.25rem;
  background: var(--Surface-Secondary, #F5F5F5);
}

.OfferCardTop {
  display: flex;
  padding: 3rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-050, 0.25rem);
  flex: 1 0 0;
  align-self: stretch;
  background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/LOGO/Offer.jpg) lightgray 50% / cover no-repeat;
}

.ServiceName {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  /* Headings/Desktop/XS */
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  letter-spacing: 0.03rem;
  text-transform: uppercase;
}

.Subtitle {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  /* Body/M/Regular */
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.005rem;
}

.OfferCardBottom {
  display: flex;
  padding: var(--space-300, 1.5rem);
  flex-direction: column;
  align-items: center;
  gap: var(--space-300, 1.5rem);
  align-self: stretch;
}

.Text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  align-self: stretch;
  overflow: hidden;
  color: var(--Text-Secondary, #484848);
  text-align: center;
  text-overflow: ellipsis;

  /* Body/M/Regular */
  font-family: Montserrat;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.005rem;
}

button.More {
  display: flex;
  padding: 1.25rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  border: 2px solid var(--Border-Primary, #181818);
  color: var(--Text-Primary, #181818);
  text-align: center;

  /* Action/Large/Bold */
  font-family: "Montserrat";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 133.333% */
  text-transform: uppercase;

}

button.FullOffer {
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