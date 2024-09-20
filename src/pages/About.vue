<template>
<Hero-Content/>
<Section/>
<Promo/>
<VideoContentMobile/>
<Footer/>


</template>

<script>
import HeroContent from '@/components/about/1Hero-Content.vue';
import Section from '@/components/about/2Section.vue';
import Promo from '@/components/about/3Promo.vue';
import VideoContentMobile from '@/components/mobile/VideoContentMobile.vue';
import Footer from '@/components/home/15Footer.vue';

export default {
    name: 'About',
    components: {
        HeroContent,
        Section,
        Promo,
        VideoContentMobile,
        Footer,
    }
}

</script>