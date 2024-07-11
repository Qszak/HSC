<template>

<nav>
    <div class="logo"> 
        <LogoHSC/>
    </div>
    <div class="content">
        <div class="primary-items">
            <RouterLink to="/" class="nav-link">Strona Główna</RouterLink>
            <RouterLink to="/oferta" class="nav-link">Oferta</RouterLink>
            <RouterLink to="/kadra" class="nav-link">Kadra</RouterLink>
            <RouterLink to="/o-nas" class="nav-link">O nas</RouterLink>
        </div>
        <div class="separator"></div>
        <div class="secondary-items">
            <RouterLink to="/fizjoterapia" class="nav-link">Fizjoterapia</RouterLink>
            <RouterLink to="/dietetyka" class="nav-link">Dietetyka</RouterLink>
        </div>
        </div>
        <div class="separator"></div>
        <div class="tertiary-items">
            <RouterLink to="/sklep" class="nav-link">Sklep</RouterLink>
        </div>
        <div class="separator"></div>
        <div class="facebook">
            <FacebookIcon/>
        </div>
        <div class="instagram">
            <InstagramIcon/>
        </div>
    
    <button class="contact" @click="showModal">Kontakt</button>
    <Modal :isVisible="isModalVisible" @close="closeModal"></Modal>  
</nav>

</template>

<script>
import { ref } from 'vue';
import Modal from '@/components/home/Modal.vue';
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

nav {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0.75rem 4.5rem;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    background: #181818;
}

.logo {
    width: 3.5rem; 
    height: 3.5rem; 
    flex-shrink: 0;
}

.content {
    display: flex;
    padding: var(--space-100, 0.5rem);
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    flex: auto;
}

.primary-items, .secondary-items, .tertiary-items {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
}

.nav-link {
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.00875rem;
    word-wrap: break-word;
    text-decoration: none;
}


.separator {
    width: 0.125rem;
    height: var(--space-300, 1.5rem);
    background-color: #FFF;
}

button.contact {
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
    cursor: pointer;
}


/* @media (min-witdth:  ){
    
    nav {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0.75rem 4.5rem;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    background: #181818;
}

.logo {
    width: 3.5rem; 
    height: 3.5rem; 
    flex-shrink: 0;
}

.content {
    display: flex;
    padding: var(--space-100, 0.5rem);
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    flex: auto;
}

.primary-items, .secondary-items, .tertiary-items {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
}

.nav-link {
    color: #FFF;
    text-align: center;
    font-family: "Montserrat";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: 0.00875rem;
    word-wrap: break-word;
    text-decoration: none;
}


.separator {
    width: 0.125rem;
    height: var(--space-300, 1.5rem);
    background-color: #FFF;
}

button.contact {
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
    cursor: pointer;
}

} */
</style>