<template>

<div class="contact-banner">
  <div class="claim">Holistyczne Centrum Sportu</div>
  <div class="contact-info">
      <div class="location">
       <Location />
      <div class="address">
        <ul>
          <li>Holistic Sport Center</li>
          <li>ul. Krakowska 29C</li>
          <li>50-424 Wrocław</li>
        </ul>
      </div>
      </div>
      <div class="phone">
       <Phone />
      <p class="phone-number">+48 793 951 015</p> 
       </div>   
      <div class="mail">
        <Mail />
      <p class="email">holisticsportcenter@gmail.com</p>
      </div>
  </div>    
</div>  



</template>
    
<script>
import Location from '@/components/icons/location.vue';
import Phone from '@/components/icons/phone.vue';
import Mail from '@/components/icons/mail.vue';


    export default {
      name: 'ContactBanner',
      components: {
        Location,
        Phone,
        Mail,
      }

    }
</script>



<style scoped>
@media (max-width: 480px) {
  

.contact-banner {
  display: flex;
  width: calc(100svw - var(--scrollbarWidth));
  padding: 3rem var(--space-200, 1rem);
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: var(--Surface-Inverse-primary, #181818);
}
.claim {
  align-self: stretch;
  text-align: center;

  /* Headings/Mobile/L */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #FFF;
  font-family: Montserrat;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 133.333% */
  letter-spacing: 0.03rem;
  text-transform: uppercase;
}

.contact-info {
  display: flex;
  padding: 0rem var(--space-300, 1.5rem);
  align-items: center;
  align-content: center;
  gap: var(--space-300, 1.5rem) 4.5rem;
  align-self: stretch;
  flex-wrap: wrap;
}

.location {
  display: flex;
  align-items: center;
  gap: var(--space-100, 0.5rem);
}

.address, .phone-number, .email {
  color: #FFF;
  font-family: "Montserrat";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: 0.01rem;
}

.phone, .mail {
  display: flex;
  align-items: center;
  gap: var(--space-150, 0.75rem);
}

ul {
  list-style: none;
}
}

@media (min-width: 481px) {
.contact-banner {
  display: flex;
  width: calc(100svw - var(--scrollbarWidth));
  padding: 4.5rem;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  background: var(--Surface-Inverse-primary, #181818);
}
.claim {
  align-self: stretch;
  text-align: center;

  /* Headings/Desktop/S */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #FFF;
  font-family: Montserrat;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3rem; /* 150% */
  letter-spacing: 0.04rem;
  text-transform: uppercase;  
}

.contact-info {
  display: flex;
  padding: 0rem var(--space-300, 1.5rem);
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 3rem 4.5rem;
  align-self: stretch;
  flex-wrap: wrap;
}

ul {
  list-style: none;
}

.location {
  display: flex;
  align-items: center;
  gap: var(--space-100, 0.5rem);
}

.address, .phone-number, .email {
  color: #FFF;
  font-family: "Montserrat";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: 0.01rem;
}

.phone, .mail {
  display: flex;
  align-items: center;
  gap: var(--space-150, 0.75rem);
}
}



</style>

