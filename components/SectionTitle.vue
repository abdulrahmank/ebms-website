<template>
  <div class="section-title" :class="{ 'with-subtitle': subtitle }">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
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
  }
})
</script>

<style scoped>
.section-title {
  margin-bottom: 2rem;
}

.section-title.with-subtitle {
  margin-bottom: 3rem;
}

.section-title h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.section-title p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .section-title h2 {
    font-size: 1.75rem;
  }

  .section-title p {
    font-size: 1rem;
  }
}
</style>
