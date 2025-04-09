<template>
  <div class="banner-carousel">
    <div class="carousel-container">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index" :class="{ active: currentSlide === index }">
        <div class="home-banner-wrap" :class="'slide-' + (index + 1)">
          <div class="custom-container">
            <div class="banner-wrapper">
              <h1 class="banner-title">
                <span>{{ slide.title }}</span>
              </h1>
              <p class="banner-desc">
                {{ slide.description }}
              </p>
              <div class="banner-btn-wrap">
                <NuxtLink :to="slide.exploreLink" class="ebms-btn secondary-btn">EXPLORE NOW</NuxtLink>
                <NuxtLink to="/demo" class="ebms-btn primary-btn">REQUEST DEMO</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation dots -->
      <div class="carousel-dots">
        <button
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
            :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    title: 'Digital Quotient',
    description: 'Readiness for the $15 Trillion Transportation and Logistics market by 2030',
    exploreLink: '/shipping/container-line'
  },
  {
    title: 'IOT/ AI/ ML',
    description: 'Merging human and technical capabilities for the new transport and logistics models',
    exploreLink: '/iot'
  },
  {
    title: 'Going Digital',
    description: 'Not a question of if...but when and how for transport and logistics organizations',
    exploreLink: '/ai'
  }
]

const currentSlide = ref(0)
let slideInterval

// Function to go to a specific slide
const goToSlide = (index) => {
  currentSlide.value = index
  resetSlideInterval()
}

// Function to go to the next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

// Reset slide interval to prevent quick transitions when manually changing slides
const resetSlideInterval = () => {
  clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, 5000)
}

onMounted(() => {
  // Start automatic slideshow
  slideInterval = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
  // Clear interval when component is destroyed
  clearInterval(slideInterval)
})
</script>

<style scoped>
.banner-carousel {
  position: relative;
  overflow: hidden;
}

.carousel-container {
  position: relative;
  height: 550px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 1;
}

.carousel-slide.active {
  opacity: 1;
  z-index: 2;
}

.home-banner-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  color: #fff;
}

.slide-1 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner-1.jpg');
}

.slide-2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner-2.jpg');
}

.slide-3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner-3.jpg');
}

.banner-wrapper {
  max-width: 600px;
}

.banner-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.banner-title span {
  display: inline-block;
  background-color: rgba(0, 102, 204, 0.8);
  padding: 0.5rem 1rem;
}

.banner-desc {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.banner-btn-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.ebms-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.primary-btn {
  background-color: #0066cc;
  color: #fff;
}

.primary-btn:hover {
  background-color: #004c99;
}

.secondary-btn {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.secondary-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.carousel-dots {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 3;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-dot.active {
  background-color: #fff;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .carousel-container {
    height: 450px;
  }

  .banner-title {
    font-size: 2rem;
  }

  .banner-desc {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 400px;
  }

  .banner-wrapper {
    text-align: center;
  }

  .banner-btn-wrap {
    justify-content: center;
  }
}
</style>
