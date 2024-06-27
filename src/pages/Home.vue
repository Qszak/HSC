<template>
 
    
    <HeroContent/>
    <ContactBanner/>
    <AboutUsSection/>
    <VideoAsset/>
    <OfferSection/>
    <TeamSection/>
    <ImageGallery/>
    <SocialSection/>
    <Cooperation/>
    <HSCMoreSection/>
    <ReviewsSection/>
    <ContactSection/>
    <VideoContent/>
    <Footer/>
    <Modal/>
  
  
  </template>
  
  <script>
  
  
  import HeroContent from '@/components/desktop/2HeroContent.vue';
  import ContactBanner from '@/components/desktop/3ContactBanner.vue';
  import AboutUsSection from '@/components/desktop/4AboutUsSection.vue';
  import VideoAsset from '@/components/desktop/5VideoAsset.vue';
  import OfferSection from '@/components/desktop/6OfferSection.vue';
  import TeamSection from '@/components/desktop/7TeamSection.vue';
  import ImageGallery from '@/components/desktop/8ImageGallery.vue';
  import SocialSection from '@/components/desktop/9SocialSection.vue';
  import Cooperation from '@/components/desktop/10Cooperation.vue';
  import HSCMoreSection from '@/components/desktop/11HSCMoreSection.vue';
  import ReviewsSection from '@/components/desktop/12ReviewsSection.vue';
  import ContactSection from '@/components/desktop/13ContactSection.vue';
  import VideoContent from '@/components/desktop/14VideoContent.vue';
  import Footer from '@/components/desktop/15Footer.vue';
  import Modal from '@/components/desktop/Modal.vue';
  
  
  
  
  export default {
    name: 'Home',
    components: {
      
      HeroContent,
      ContactBanner,
      AboutUsSection,
      VideoAsset,
      OfferSection,
      TeamSection,
      ImageGallery,
      SocialSection,
      Cooperation,
      HSCMoreSection,
      ReviewsSection,
      ContactSection,
      VideoContent,
      Footer,
      Modal,  
  
      
      
  
    }
  }
  </script>