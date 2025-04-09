<template>
  <div class="page-banner" :class="customClass">
    <div class="custom-container">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.page-banner {
  padding: 4rem 0;
  background-color: #2c3e50;
  color: #fff;
  position: relative;
}

.page-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-bg.jpg');
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.page-banner h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.page-banner p {
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
}

.page-banner.customers::before {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/customers-banner.jpg');
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .page-banner {
    padding: 3rem 0;
  }

  .page-banner h1 {
    font-size: 2rem;
  }

  .page-banner p {
    font-size: 1.1rem;
  }
}
</style>
