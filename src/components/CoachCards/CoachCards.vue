<script setup>

defineProps({
  imgSrc: String,
  imgAlt: String,
  coachName: String,
  coachPosition: String,

})

</script>

<template>
<div class="coach-card">
    <div class="gallery-image">
        <div class="ratio-image">
            <img :src="imgSrc" alt="imgAlt">
        </div>
    </div>
    <div class="coach-info">
        <div class="coach-name">{{coachName}}</div>
        <div class="coach-position">{{coachPosition}}</div>
    </div>
</div>
</template>

<style scoped>

</style>