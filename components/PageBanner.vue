<template>
  <div class="client-card">
    <div class="client-logo">
      <img :src="client.logo" :alt="client.name">
    </div>
    <p class="client-name">{{ client.name }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  client: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.client-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.client-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.client-logo {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.client-logo img {
  max-width: 80%;
  max-height: 80px;
  object-fit: contain;
}

.client-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .client-card {
    padding: 1.5rem 1rem;
  }

  .client-logo {
    height: 80px;
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .client-logo {
    height: 60px;
  }

  .client-name {
    font-size: 0.9rem;
  }
}
</style>
