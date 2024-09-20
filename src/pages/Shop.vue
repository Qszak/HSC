<template>

<div>
 
    <h1>STRONA W BUDOWIE</h1>
</div>
    


</template>

<script>
import photo from '@/assets/w-budowie.jpg';

export default {
    name: 'Shop',

    data() {
        return {
            photo: photo,
        };
},
}

</script>

<style scoped>

div {
    width: calc(100svw - var(--scrollbarWidth));
    height: 89svh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/src/assets/w-budowie.jpg);
}

h1 {
    font-family: 'Montserrat';
}


</style>