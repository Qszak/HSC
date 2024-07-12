<template>
<div class="promo-content">
    <p class="promo-text">Czekamy na Ciebie!</p>
    <button class="primary" @click="showModal">Dołącz do nas!</button>
      <Modal :isVisible="isModalVisible" @close="closeModal"></Modal>
</div>
</template>

<script>
import { ref } from 'vue';
import Modal from '@/components/home/Modal.vue';

export default {
    name: 'TeamPromo',
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
        },
}

</script>

<style scoped>
.promo-content {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    height: 30rem;
    padding: 0rem var(--space-200, 1rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
    background: linear-gradient(0deg, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 0%, var(--Background-shade-Moderate, rgba(0, 0, 0, 0.60)) 100%), url(/LOGO/HSC\ logopak/hero.jpg) lightgray 50% / cover no-repeat;
}

.promo-text {
    align-self: stretch;
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Headings/Mobile/L */
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem; /* 133.333% */
    letter-spacing: 0.03rem;
    text-transform: uppercase;
}

.primary {
    display: flex;
    padding: 1.25rem 3rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    background: var(--Surface-Brand, #E30613);
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;

    /* Action/Large/Bold */
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 133.333% */
    text-transform: uppercase;
    border-color: #E30613;
}

</style>