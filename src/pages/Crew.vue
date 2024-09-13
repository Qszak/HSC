<template>
<TeamHero/>
<TeamSlider/>
<TeamPromo/>
<FooterMobile/>


</template>

<script>
import TeamHero from '@/components/crew/1TeamHero.vue';
import TeamSlider from '@/components/crew/2TeamSlider.vue';
import TeamPromo from '@/components/crew/3TeamPromo.vue';
import FooterMobile from '@/components/mobile/FooterMobile.vue';





export default {
    name: 'Crew',
    components: {
      TeamHero,
      TeamSlider,
      TeamPromo,
      FooterMobile,
    }
}

</script>