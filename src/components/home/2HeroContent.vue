<template>
  
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-text-top">Zawsze jest powód</div>
        <div class="hero-text-bottom">
          <div class="hero-text-bottom-left">aby</div>
          <div class="hero-text-bottom-slider">zacząć</div>
        </div>
      </div>
      <div class="hero-buttons">
        <button class="contact" @click="showModal">Napisz do nas</button>
        <Modal :isVisible="isModalVisible" @close="closeModal"></Modal> 
        <RouterLink to="/o-nas" class="offer">Przeglądaj ofertę</RouterLink>
      </div>
    </div>

</template>


<script>
import { ref } from 'vue';
import Modal from '@/components/home/Modal.vue';


export default {
  name: 'HeroContent',
  components: {
      Modal,
  },
  

  setup() {
        const isModalVisible = ref(false);
        const showModal = () => {
            isModalVisible.value = true;
        };

        const closeModal = () => {
            isModalVisible.value = false;
        };
        
        return {
            isModalVisible,
            showModal,
            closeModal,
        };
    }

}


</script>

<style scoped>

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

@media (max-width: 480px) {
.hero-content {
  display: flex;
  width: calc(100svw - var(--scrollbarWidth));
  height: 46.25rem;
  padding: 0rem var(--space-200, 1rem);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  /* flex-shrink: 0; */
  background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/LOGO/HSC\ logopak/hero.jpg) lightgray 50% / cover no-repeat;
}


.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch; 

}   

.hero-text-top {
  color: var(--Text-Inverse-primary, #FFF);
  align-self: stretch;

  /* Headings/Mobile/XXL */
  font-family: Montserrat;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.375rem; /* 135% */
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

.hero-text-bottom {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--space-300, 1.5rem);
  align-self: stretch;
}

.hero-text-bottom-left {
  color: var(--Text-Inverse-primary, #FFF);

  /* Headings/Mobile/XXL */
  font-family: Montserrat;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.375rem; /* 135% */
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

.hero-text-bottom-slider {
    
  /* Headings/Mobile/XXL */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--Border-Secondary, #FFF);
  font-family: "Montserrat";
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.375rem; /* 135% */
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  color: transparent;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  /* align-self: stretch; */
}

button.contact {
  display: flex;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: var(--Surface-Brand, #E30613);
  border-color: #E30613;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  align-self: stretch;

  /* Action/Large/Bold */
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 133.333% */
  text-transform: uppercase;
}

.offer {
  display: flex;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 2px solid var(--Border-Secondary, #FFF);
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;

  /* Action/Large/Bold */
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 133.333% */
  text-transform: uppercase;
  background-color: transparent;
  text-decoration: none;

}
}


@media (min-width: 481px) {
.hero-content {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    height: 48.25rem;
    padding: 0rem 4.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
    /* flex-shrink: 0; */
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/LOGO/HSC\ logopak/hero.jpg) lightgray 50% / cover no-repeat;
}

.hero-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;  
}

.hero-text-top {
  align-self: stretch;
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  font-family: Montserrat;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6rem;
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.hero-text-bottom {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: var(--space-300, 1.5rem);
  align-self: stretch;
}

.hero-text-bottom-left {
  color: var(--Text-Inverse-primary, #FFF);

  /* Headings/XXL */
  font-family: Montserrat;
  font-size: 4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 6rem; /* 150% */
  letter-spacing: 0.08rem;
  text-transform: uppercase;
}

.hero-text-bottom-slider {
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: var(--Border-Secondary, #FFF);
font-family: "Montserrat";
font-size: 4rem;
font-style: normal;
font-weight: 700;
line-height: 6rem; /* 150% */
letter-spacing: 0.08rem;
text-transform: uppercase;
color: transparent;

}

.hero-buttons {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 2rem;
  align-self: stretch;
  flex-wrap: wrap;
}

button.contact {
  display: flex;
  width: 20rem;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: var(--Surface-Brand, #E30613);
  border: 2px solid var(--Border-Primary, #E30613);
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  cursor: pointer;

  /* Action/Large/Bold */
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 133.333% */
  text-transform: uppercase;
}

.offer {
  display: flex;
  width: 20rem;
  padding: 1.25rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 2px solid var(--Border-Secondary, #FFF);
  color: var(--Text-Inverse-primary, #FFF);
  text-align: center;
  background-color: transparent;

  /* Action/Large/Bold */
  font-family: Montserrat;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 133.333% */
  text-transform: uppercase;
  text-decoration: none;
}
}

</style>