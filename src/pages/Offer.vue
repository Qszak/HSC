<template>
<HeroOffer/>
<SliderOffer/>
<Footer/>


  


</template>

<script>
import HeroOffer from '@/components/offer/1HeroOffer.vue';
import Footer from '@/components/home/15Footer.vue';
import SliderOffer from '@/components/offer/2SliderOffer.vue';




export default {
    name: 'Offer',
    components: {
        HeroOffer,
        Footer,
        SliderOffer,
        
    }
}

</script>

