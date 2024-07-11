<template>

  <nav>
    <div class="Logo">
        <LogoHSC />
    </div>
    <div class="Content">
        <div class="Facebook"><FacebookIcon /></div>
        <div class="Instagram"><InstagramIcon /></div>
        <div class="Menu">
            <div class="menu-icon" @click="toggleMenu">
        <div v-if="!isMenuOpen" class="hamburger">
            <MenuIcon/>
        </div>
        <div v-else class="close-icon">
          <CloseIcon />
        </div>
      </div>
  
      <!-- Sidebar Menu -->
      <div class="sidebar" :class="{ 'active': isMenuOpen }">
        <ul>
          <li><RouterLink to="/" class="nav-link" @click="toggleMenu">Strona Główna</RouterLink></li>
          <li><RouterLink to="/oferta" class="nav-link" @click="toggleMenu">Oferta</RouterLink></li>
          <li><RouterLink to="/kadra" class="nav-link" @click="toggleMenu">Kadra</RouterLink></li>
          <li><RouterLink to="/o-nas" class="nav-link" @click="toggleMenu">O nas</RouterLink></li>
          <li><RouterLink to="/fizjoterapia" class="nav-link" @click="toggleMenu">Fizjoterapia</RouterLink></li>
          <li><RouterLink to="/dietetyka" class="nav-link" @click="toggleMenu">Dietetyka</RouterLink></li>
          <li><RouterLink to="/sklep" class="nav-link" @click="toggleMenu">Sklep</RouterLink></li>
          <!-- Add more menu items here -->
        </ul>
      </div>
    </div>
    </div>
  </nav>

</template>

<script>
import LogoHSC from '@/components/icons/LogoHSC.vue';    
import FacebookIcon from '@/components/icons/facebook.vue';
import InstagramIcon from '@/components/icons/instagram.vue';
import MenuIcon from '@/components/icons/menu.vue';
import CloseIcon from '@/components/icons/closeIcon.vue';
import { RouterLink } from 'vue-router';

    export default {
    name: 'NavigationMobile',
    components: {
        LogoHSC,
        FacebookIcon,
        InstagramIcon,
        MenuIcon,
        CloseIcon,
    },
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
    

</script>

<style scoped>

nav {
    display: flex;
    width: calc(100svw - var(--scrollbarWidth));
    padding: 0.75rem 1.5rem;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    background: #181818;
}

.Logo {
    width: 3rem;
    height: 3rem;
    flex-shrink: 0;
}

.Content {
    display: flex;
    padding: var(--space-100, 0.5rem) 0rem;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    flex: 1 0 0;
}


.Menu {
    width: var(--space-300, 1.5rem);
    height: var(--space-300, 1.5rem);
}

 /* Common styles for both icons */
 .menu-icon {
    cursor: pointer;
  }
  
  /* Hamburger Icon Styles */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  
  /* Close Icon Styles */
  .close-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  /* Sidebar Menu Styles */
  .sidebar {
    position: absolute;
    top: 4.5rem;
    left: 50svw;
    width: 50svw;
    display: none;
    background-color: #181818;
    transition: 0.5s ease-in;
    z-index: 1;
    overflow: hidden;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar li {
    font-family: Montserrat;
    padding: 1.2rem;
    color: #fff;
    cursor: pointer;
    
  }
  .nav-link {
    text-decoration: none;
    color: #FFF;
  }
  
  /* Active class for sliding in the menu */
  .sidebar.active {
    display: block;
  }

</style>