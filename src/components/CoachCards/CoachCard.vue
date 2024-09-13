<template>
    <div class="coach-card" @click="goToProfile">
      <div class="gallery-image">
        <div class="ratio-image">
          <img :src="image" :alt="name" />
        </div>
      </div>
      <div class="coach-info">
        <div class="coach-name">{{ name }}</div>
        <div class="coach-position">{{ position }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CoachCard',
    props: {
      name: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      profileURL: {
        type: String,
        required: true,
      },
    },
    methods: {
      goToProfile() {
        this.$router.push(this.profileURL);
      },
    },
  };
  </script>
  
  <style scoped>
  .coach-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--Surface-Secondary, #F5F5F5);
    cursor: pointer;
  }
  .gallery-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
  }
  .ratio-image {
    display: flex;
    max-width: 43.75rem;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .coach-info {
    display: flex;
    padding: var(--space-300, 1.5rem) 0rem;
    flex-direction: column;
    align-items: center;
    gap: var(--space-050, 0.25rem);
    align-self: stretch;
  }
  .coach-name {
    width: 18.75rem;
    color: var(--Text-Primary, #181818);
    text-align: center;
    font-family: Montserrat;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.75rem;
    letter-spacing: -0.00563rem;
  }
  .coach-position {
    width: 18.75rem;
    color: var(--Text-Tertiary, #747474);
    text-align: center;
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: -0.00438rem;
  }
  </style>
  