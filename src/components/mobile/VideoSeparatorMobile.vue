<template>
<div class="VideoAsset">
  <video width="100%" height="15.625rem" autoplay>
    <source src="/LOGO/VideoSeparator.mp4" type="video/mp4">
  </video>
</div>
</template>

<script>
    export default {
      name: 'VideoSeparatorMobile',
    }
</script>

<style scoped>

.VideoAsset {
  width: calc(100svw - var(--scrollbarWidth));
  height: 15.625rem;
  flex-shrink: 0;
  background-color: grey
}


</style>