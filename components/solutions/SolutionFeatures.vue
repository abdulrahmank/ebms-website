<template>
  <div class="solution-features py-16 bg-gray-50">
    <div class="custom-container">
      <div class="section-header text-center mb-12">
        <h2 class="text-3xl font-bold text-secondary mb-3">{{ title }}</h2>
        <p v-if="subtitle" class="text-lg text-gray-600">{{ subtitle }}</p>
      </div>

      <div class="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
          <div class="p-6">
            <div class="flex items-start mb-4">
              <div class="feature-icon w-14 h-14 flex items-center justify-center mr-4">
                <img :src="feature.icon" :alt="feature.title" class="max-w-full max-h-full">
              </div>
              <h3 class="text-xl font-semibold text-secondary">{{ feature.title }}</h3>
            </div>
            <p class="text-gray-600">{{ feature.description }}</p>
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
  features: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.feature-card {
  border: 1px solid #eee;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
