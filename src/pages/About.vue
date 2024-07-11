<template>
<Hero-Content/>
<Section/>
<Promo/>
<VideoContentMobile/>
<FooterMobile/>


</template>

<script>
import HeroContent from '@/components/about/1Hero-Content.vue';
import Section from '@/components/about/2Section.vue';
import Promo from '@/components/about/3Promo.vue';
import VideoContentMobile from '@/components/mobile/VideoContentMobile.vue';
import FooterMobile from '@/components/mobile/FooterMobile.vue';

export default {
    name: 'About',
    components: {
        HeroContent,
        Section,
        Promo,
        VideoContentMobile,
        FooterMobile,
    }
}

</script>