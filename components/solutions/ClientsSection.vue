<template>
  <div class="clients-section py-16 bg-white">
    <div class="custom-container">
      <div class="section-header text-center mb-12">
        <h2 class="text-3xl font-bold text-secondary mb-3">{{ title }}</h2>
        <p v-if="subtitle" class="text-lg text-gray-600">{{ subtitle }}</p>
      </div>

      <div class="clients-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
            v-for="(client, index) in clients"
            :key="index"
            class="client-card bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md"
        >
          <div class="client-logo h-24 flex items-center justify-center mb-4">
            <img :src="client.logo" :alt="client.name" class="max-h-full">
          </div>
          <h3 class="text-lg font-semibold text-secondary">{{ client.name }}</h3>
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
  clients: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.client-card {
  border: 1px solid #eee;
  transition: transform 0.3s, box-shadow 0.3s;
}

.client-card:hover {
  transform: translateY(-5px);
}

.client-logo img {
  max-width: 100%;
  object-fit: contain;
}
</style>
