<template>
  <div class="testimonial-section">
    <div class="custom-container">
      <div class="section-header">
        <h2>Testimonials</h2>
        <p>What our clients say about us</p>
      </div>

      <TestimonialCarousel
          :testimonials="testimonials"
          :slidesToShow="slidesToShow"
          :autoplay="true"
          :autoplaySpeed="5000"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import TestimonialCarousel from './TestimonialCarousel.vue'
import testimonialData from '~/data/testimonials.json'

// Get testimonials from data file
const testimonials = ref(testimonialData)

// Responsive slidesToShow based on window width
const { width } = useWindowSize()
const slidesToShow = computed(() => {
  if (width.value < 768) return 1
  return 2
})
</script>

<style scoped>
.testimonial-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.section-header p {
  font-size: 1.25rem;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .testimonial-section {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header p {
    font-size: 1.1rem;
  }
}
</style>
