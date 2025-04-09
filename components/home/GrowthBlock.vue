<template>
  <div class="custom-container">
    <div class="growth-block">
      <div class="section-header">
        <h2>Experience Sustainable Growth</h2>
        <h3>Drive Productivity</h3>
      </div>

      <div class="prod-drive-wrap">
        <div class="prod-drive">
          <ul class="count-wrapper">
            <li v-for="(item, index) in features" :key="index">
              <div class="count-item" :class="`item-${index+1}`">{{ item.count }}</div>
            </li>
          </ul>

          <ul class="prod-txt-wrap">
            <li class="prod-txt" v-for="(item, index) in features" :key="index">
              <span>{{ item.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { count: '80+', text: 'Revenue Management Features' },
  { count: '53+', text: 'Cost Control Features' },
  { count: '110+', text: 'User Memory Freed Not Depended Features' },
  { count: '67+', text: 'Productivity Features' },
  { count: '51+', text: 'Data Entry Reduction Feature' },
  { count: '37+', text: 'Customer Delight Features' }
]
</script>

<style scoped>
.custom-container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
}

.growth-block {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.section-header h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #0066cc;
}

.prod-drive-wrap {
  max-width: 900px;
  margin: 0 auto;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.prod-drive {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.count-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.count-item {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem 0;
  border-radius: 8px;
  color: #fff;
}

.item-1 { background-color: #0066cc; }
.item-2 { background-color: #e74c3c; }
.item-3 { background-color: #2ecc71; }
.item-4 { background-color: #f39c12; }
.item-5 { background-color: #9b59b6; }
.item-6 { background-color: #3498db; }

.prod-txt-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.prod-txt {
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prod-txt span {
  display: block;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .growth-block {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header h3 {
    font-size: 1.5rem;
  }

  .count-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }

  .prod-txt-wrap {
    grid-template-columns: repeat(2, 1fr);
  }

  .count-item {
    font-size: 2rem;
    padding: 1rem 0;
  }
}

@media (max-width: 480px) {
  .count-wrapper,
  .prod-txt-wrap {
    grid-template-columns: 1fr;
  }
}
</style>
