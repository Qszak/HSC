<template>
 <Navigation/>
 <RouterView/>

</template>

<script>
import { RouterView } from 'vue-router';
import Navigation from './components/desktop/1Navigation.vue';







export default {
  name: 'App',
  components: {
    Navigation,
  }

    
    

  }

</script>