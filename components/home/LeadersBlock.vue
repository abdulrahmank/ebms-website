<template>
  <div class="leaders-wrap">
    <div class="custom-container">
      <div class="leaders-block">
        <div class="section-header">
          <h2>Shipping and Logistic Leaders Choose eBMS</h2>
        </div>

        <div class="leaders-grid">
          <div class="grid" v-for="(leader, index) in leaders" :key="index">
            <img :alt="`Leader ${index + 1}`" :src="leader">
          </div>
        </div>
      </div>

      <div class="grid-btn-wrap">
        <NuxtLink to="/customers" class="trans-btn">VIEW MORE</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Array of leader image paths
const leaders = [
  '/images/Leader-1.png',
  '/images/Leader-2.png',
  '/images/Leader-3.png',
  '/images/Leader-4.png',
  '/images/Leader-5.png',
  '/images/Leader-6.png',
  '/images/Leader-7.png',
  '/images/Leader-8.png',
  '/images/Leader-9.png',
  '/images/Leader-10.png',
  '/images/Leader-11.png',
  '/images/Leader-12.png'
]
</script>

<style scoped>
.leaders-wrap {
  background-color: #f8f9fa;
  padding: 4rem 0;
}

.custom-container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}

.leaders-block {
  margin-bottom: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

.grid {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.grid:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.grid img {
  max-width: 80%;
  max-height: 80px;
  object-fit: contain;
}

.grid-btn-wrap {
  text-align: center;
}

.trans-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 2px solid #0066cc;
  border-radius: 4px;
  color: #0066cc;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.trans-btn:hover {
  background-color: #0066cc;
  color: #fff;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .leaders-wrap {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .leaders-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  .grid {
    height: 100px;
  }
}

@media (max-width: 480px) {
  .leaders-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .grid {
    height: 80px;
    padding: 1rem;
  }
}
</style>
