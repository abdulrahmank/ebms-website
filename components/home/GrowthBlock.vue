<template>
  <div class="growth-block-wrapper">
    <div class="custom-container">
      <div class="growth-block">
        <div class="section-header">
          <h2>Experience Sustainable Growth</h2>
          <h3>Drive Productivity</h3>
        </div>

        <div class="prod-drive-wrap">
          <div class="prod-drive">
            <div class="count-wrapper">
              <div v-for="(item, index) in features" :key="index" class="feature-card">
                <div class="count-item" :class="`item-${index+1}`">{{ item.count }}</div>
                <div class="prod-txt">{{ item.text }}</div>
              </div>
            </div>
          </div>
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
.growth-block-wrapper {
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f2f9 100%);
  position: relative;
  overflow: hidden;
}

.growth-block-wrapper::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, rgba(0, 102, 204, 0) 70%);
  border-radius: 50%;
}

.growth-block-wrapper::after {
  content: '';
  position: absolute;
  bottom: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 102, 204, 0.1) 0%, rgba(0, 102, 204, 0) 70%);
  border-radius: 50%;
}

.custom-container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
}

.growth-block {
  padding: 2rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-header::after {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #0066cc, #3399ff);
  border-radius: 2px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.8);
}

.section-header h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #0066cc;
  opacity: 0.9;
}

.prod-drive-wrap {
  max-width: 1200px;
  margin: 0 auto;
}

.prod-drive {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.count-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.count-item {
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  padding: 2rem 1rem;
  color: #fff;
  letter-spacing: -1px;
  position: relative;
  overflow: hidden;
}

.count-item::before {
  content: '';
  position: absolute;
  top: -10px;
  right: -10px;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.count-item::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: -15px;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
}

.item-1 { background: linear-gradient(45deg, #0066cc, #3399ff); }
.item-2 { background: linear-gradient(45deg, #e74c3c, #ff7675); }
.item-3 { background: linear-gradient(45deg, #2ecc71, #55efc4); }
.item-4 { background: linear-gradient(45deg, #f39c12, #fdcb6e); }
.item-5 { background: linear-gradient(45deg, #9b59b6, #a29bfe); }
.item-6 { background: linear-gradient(45deg, #3498db, #74b9ff); }

.prod-txt {
  padding: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  line-height: 1.4;
}

/* Mobile responsiveness */
@media (max-width: 992px) {
  .growth-block-wrapper {
    padding: 4rem 0;
  }

  .count-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .section-header h2 {
    font-size: 2.2rem;
  }

  .section-header h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .growth-block-wrapper {
    padding: 3rem 0;
  }

  .count-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.25rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .section-header h3 {
    font-size: 1.35rem;
  }

  .count-item {
    font-size: 2.5rem;
    padding: 1.5rem 1rem;
  }

  .prod-txt {
    padding: 1.25rem;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .count-wrapper {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: 0 auto;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }

  .section-header h3 {
    font-size: 1.2rem;
  }
}
</style>
