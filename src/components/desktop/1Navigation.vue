<template>
<div class="Wrapper">
<nav>
    <div class="logo"> 
        <LogoHSC />
    </div>
    <div class="Content">
        <div class="PrimaryItems">
            <div class="MainPage">Strona Główna</div>
            <div class="Offer">Oferta</div>
            <div class="Crew">Kadra</div>
            <RouterLink to="/o-nas">O nas</RouterLink>
        </div>
        <div class="Separator"></div>
        <div class="SecondaryItems">
            <div class="Physio">Fizjoterapia</div>
            <div class="Diet">Dietetyka</div>
        </div>
        <div class="Separator"></div>
        <div class="TertiaryItems">
            <div class="Shop">Sklep</div>
        </div>
        <div class="Separator"></div>
        <div class="Facebook">
            <FacebookIcon />
        </div>
        <div class="Instagram">
            <InstagramIcon />
        </div>
    </div>
    <button class="Contact" @click="showModal">Kontakt</button>
    <Modal :isVisible="isModalVisible" @close="closeModal">sialalala</Modal>  
</nav>
</div>
</template>

<script>
import { ref } from 'vue';
import Modal from '@/components/desktop/Modal.vue';
import LogoHSC from '@/components/icons/LogoHSC.vue';    
import FacebookIcon from '@/components/icons/facebook.vue';
import InstagramIcon from '@/components/icons/instagram.vue';
import { RouterLink } from 'vue-router';

    export default {
    name: 'Navigation',
    components: {
        LogoHSC,
        FacebookIcon,
        InstagramIcon,
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
.Wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100svw - var(--scrollbarWidth));
    background: #181818;
}
nav {
    display: flex;
    width: 99vw;
    padding: 0.75rem 4.5rem;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    background: #181818;
}

.Logo {
    width: 3.5rem; 
    height: 3.5rem; 
    flex-shrink: 0;
}

.Content {
    display: flex;
    padding: var(--space-100, 0.5rem);
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    flex: auto;
}

.PrimaryItems, .SecondaryItems, .TertiaryItems {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
}

.MainPage, .Offer, .Crew, .AboutUs, .Physio, .Diet, .Shop {
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.00875rem;
    word-wrap: break-word;
}


.Separator {
    width: 0.125rem;
    height: var(--space-300, 1.5rem);
    background-color: #FFF;
}

button.Contact {
    display: flex;
    padding: 0.75rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: var(--Surface-Brand, #E30613);
    color: var(--Text-Inverse-primary, #FFF);
    text-align: center;
    font-family: Montserrat;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem;
    text-transform: uppercase;
    background-color: #E30613;
    border: none;
}


</style>