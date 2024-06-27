<template>
    <div id="app">
      <!-- Hamburger Icon -->
      <div class="menu-icon" @click="toggleMenu">
        <div v-if="!isMenuOpen" class="hamburger">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div v-else class="close-icon">
          &#10005; <!-- X icon -->
        </div>
      </div>
  
      <!-- Sidebar Menu -->
      <div class="sidebar" :class="{ 'active': isMenuOpen }">
        <ul>
          <li @click="toggleMenu">Menu Item 1</li>
          <li @click="toggleMenu">Menu Item 2</li>
          <li @click="toggleMenu">Menu Item 3</li>
          <!-- Add more menu items here -->
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
  /* Common styles for both icons */
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }
  
  /* Hamburger Icon Styles */
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
  
  .bar {
    width: 20px;
    height: 3px;
    background-color: #333;
    margin: 3px 0;
    transition: 0.4s;
  }
  
  /* Close Icon Styles */
  .close-icon {
    font-size: 30px;
    color: #333;
  }
  
  /* Sidebar Menu Styles */
  .sidebar {
    position: fixed;
    top: 0;
    right: -250px; /* Start the menu off screen */
    width: 250px;
    height: 100%;
    background-color: #333;
    transition: 0.4s;
    z-index: 999;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .sidebar li {
    padding: 20px;
    color: #fff;
    cursor: pointer;
  }
  
  /* Active class for sliding in the menu */
  .sidebar.active {
    right: 0;
  }
  </style>
  