<template>
<div class="Wrapper">
<div class="ContactBanner">
  <div class="Claim">Kontynuacja claimu z hero</div>
  <div class="ContactInfo">
    <div class="Location">
      <div class="LocationOn">
       <Location />
      </div>
      <div class="Address">
        <ul>
          <li>Holistic Sport Center</li>
          <li>ul. Krakowska 29C</li>
          <li>50-424 Wrocław</li>
        </ul>
      </div>
    </div>
    <div class="Phone">
      <div class="Phone">
       <Phone />
      </div>
      <div class="PhoneNumber">+48 793 951 015</div>
    </div>
    <div class="E-mail">
      <div class="Mail">
        <Mail />
      </div>
      <div class="Email">holisticsportcenter@gmail.com</div>
    </div>
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

.Wrapper {
  display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100svw - var(--scrollbarWidth));
    background: #181818;
}

.ContactBanner {
  display: flex;
  width: 99vw;
  padding: 4.5rem;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  background: var(--Surface-Inverse-primary, #181818);
}
.Claim {
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

.ContactInfo {
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

.Location {
  display: flex;
  align-items: center;
  gap: var(--space-100, 0.5rem);
}

.Address, .PhoneNumber, .Email {
  color: #FFF;
  font-family: "Montserrat";
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem; /* 175% */
  letter-spacing: 0.01rem;
}

.Phone, .E-mail {
  display: flex;
  align-items: center;
  gap: var(--space-150, 0.75rem);
}




</style>

