<template>
    <div class="offer-card">
            <div class="offer-card-top">
              <div class="service-name">BJJ</div>
              <div class="subtitle">SUBTYTUŁ</div>
            </div>
            <div class="offer-card-bottom">
              <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
              <button class="more">Szczegóły usługi</button>
            </div>
          </div>
</template>

<script>
export default {
    name: 'BJJCard',
}
</script>

<style scoped>
.offer-card {
      display: flex;
      width: 18.75rem;
      height: 27rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 0.25rem;
      background: var(--Surface-Secondary, #F5F5F5);
    }
    
    .offer-card-top {
      display: flex;
      padding: 3rem 0rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--space-050, 0.25rem);
      flex: 1 0 0;
      align-self: stretch;
      background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%);
    }
    
    .service-name {
      align-self: stretch;
      color: var(--Text-Inverse-primary, #FFF);
      text-align: center;
    
      /* Headings/Mobile/XS */
      font-family: Montserrat;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem; /* 125% */
      letter-spacing: 0.02rem;
      text-transform: uppercase;
    }
    
    .subtitle {
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
    
    .offer-card-bottom {
      display: flex;
      padding: var(--space-300, 1.5rem);
      flex-direction: column;
      align-items: center;
      gap: var(--space-300, 1.5rem);
      align-self: stretch;
    }
    
    .text {
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
    
    button.more {
      display: flex;
      padding: 1rem 3rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      align-self: stretch;
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
      }
      
</style>