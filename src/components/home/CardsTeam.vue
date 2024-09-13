<template>

    <CoachCard
        name="Michał Kulej"
        position="Trener Personalny"
        image="/images/MKulej.png"
        profileUrl="/kadra/michal-kulej"/>

    <CoachCard
        name="Jakub Kulej"
        position="Trener Personalny"
        image="/images/MKulej.png"
        profileUrl="/kadra/jakub-kulej"/>
        
    <CoachCard
        name="Filip Krasiński"
        position="Trener Personalny"
        image="/images/MKulej.png"
        profileUrl="/kadra/filip-krasinski"/>
    
    <CoachCard
        name="Sandra Cieślik-Kulej"
        position="Trener Personalny"
        image="/images/MKulej.png"
        profileUrl="/kadra/sandra-cieslik-kulej"/>


</template>


<script>
import CoachCard from '../CoachCards/CoachCard.vue';

export default {
    name: 'CardsTeam',
    components: {
        CoachCard,
    }
}
</script>