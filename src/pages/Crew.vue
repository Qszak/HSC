<template>
<TeamHero/>
<TeamSlider/>
<TeamPromo/>
<Footer/>


</template>

<script>
import TeamHero from '@/components/crew/1TeamHero.vue';
import TeamSlider from '@/components/crew/2TeamSlider.vue';
import TeamPromo from '@/components/crew/3TeamPromo.vue';
import Footer from '@/components/home/15Footer.vue';





export default {
    name: 'Crew',
    components: {
      TeamHero,
      TeamSlider,
      TeamPromo,
      Footer,
    }
}

</script>