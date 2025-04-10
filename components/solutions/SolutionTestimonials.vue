<template>
  <div class="testimonials-section py-16" :class="bgClass">
    <div class="custom-container">
      <div class="section-header text-center mb-12">
        <h2 class="text-3xl font-bold text-secondary mb-3">{{ title }}</h2>
        <p v-if="subtitle" class="text-lg text-gray-600">{{ subtitle }}</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div class="p-8">
            <div v-if="testimonial.logo" class="mb-6 flex justify-center">
              <img :src="testimonial.logo" :alt="testimonial.company" class="h-16 max-w-full object-contain">
            </div>

            <h3 class="text-xl font-semibold text-secondary mb-3">{{ testimonial.company }}</h3>

            <div class="mb-6">
              <div v-for="(paragraph, pIndex) in testimonial.content" :key="pIndex" class="mb-4">
                <p class="text-gray-600 italic">{{ paragraph }}</p>
              </div>
            </div>

            <div class="flex items-center border-t border-gray-100 pt-4">
              <h4 class="font-semibold text-primary">{{ testimonial.author.name }}</h4>
              <span class="mx-2 text-gray-300">|</span>
              <span class="text-gray-600 text-sm">{{ testimonial.author.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  testimonials: {
    type: Array,
    required: true
  },
  bgClass: {
    type: String,
    default: 'bg-gray-50'
  }
})
</script>

<style scoped>
.testimonial-card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-5px);
}
</style>
