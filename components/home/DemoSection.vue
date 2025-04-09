<template>
  <div class="demo-wrap">
    <div class="custom-container">
      <div class="book-demo">
        <div class="text">
          You are one more step closer to sky-rocket your Shipping and Logistic business
        </div>
        <div class="btn-wrap">
          <NuxtLink class="demo-btn" to="/demo">BOOK A DEMO</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Demo section component
</script>

<style scoped>
.demo-wrap {
  padding: 3rem 0;
  background-color: #fff;
}

.custom-container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}

.book-demo {
  background-color: #0066cc;
  border-radius: 8px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.text {
  flex: 1;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;
}

.btn-wrap {
  flex-shrink: 0;
}

.demo-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #0066cc;
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
}

.demo-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .book-demo {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .text {
    font-size: 1.25rem;
  }
}
</style>
