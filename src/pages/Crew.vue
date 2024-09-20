<template>
<TeamHero/>
<TeamFilter/>
<TeamPromo/>
<Footer/>


</template>

<script>
import TeamHero from '@/components/crew/1TeamHero.vue';
import TeamFilter from '@/components/crew/2TeamFilter.vue';
import TeamPromo from '@/components/crew/3TeamPromo.vue';
import Footer from '@/components/home/15Footer.vue';





export default {
    name: 'Crew',
    components: {
      TeamHero,
      TeamFilter,
      TeamPromo,
      Footer,
    }
}

</script>