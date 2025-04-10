<template>
  <div class="banner-carousel">
    <div class="carousel-container">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index" :class="{ active: currentSlide === index }">
        <div class="home-banner-wrap" :class="'slide-' + (index + 1)">
          <div class="custom-container">
            <div class="banner-wrapper">
              <div class="banner-badge" v-if="slide.badge">{{ slide.badge }}</div>
              <h1 class="banner-title">
                <span>{{ slide.title }}</span>
              </h1>
              <p class="banner-desc">
                {{ slide.description }}
              </p>
              <ul class="banner-features" v-if="slide.features && slide.features.length">
                <li v-for="(feature, i) in slide.features" :key="i">
                  <span class="feature-icon">✓</span>
                  {{ feature }}
                </li>
              </ul>
              <div class="banner-btn-wrap">
                <NuxtLink :to="slide.primaryLink.url" class="ebms-btn primary-btn">{{ slide.primaryLink.text }}</NuxtLink>
                <NuxtLink :to="slide.secondaryLink.url" class="ebms-btn secondary-btn">{{ slide.secondaryLink.text }}</NuxtLink>
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
    title: 'Transform Your Logistics Operations',
    badge: 'DIGITAL TRANSFORMATION',
    description: 'Streamline operations, reduce costs, and improve customer experience with our end-to-end digital solutions',
    features: [
      'Increase operational efficiency by up to 40%',
      'Reduce manual data entry by 70%',
      'Real-time tracking and visibility'
    ],
    primaryLink: {
      text: 'EXPLORE SOLUTIONS',
      url: '/shipping/container-line'
    },
    secondaryLink: {
      text: 'GET A DEMO',
      url: '/demo'
    }
  },
  {
    title: 'Smart Technology For Modern Logistics',
    badge: 'INNOVATION',
    description: 'Harness the power of AI, IoT, and automation to stay ahead in the rapidly evolving logistics industry',
    features: [
      'Predictive analytics for smart decision making',
      'IoT integration for real-time tracking',
      'AI-powered process automation'
    ],
    primaryLink: {
      text: 'SEE THE TECHNOLOGY',
      url: '/ai'
    },
    secondaryLink: {
      text: 'CONTACT US',
      url: '/contact'
    }
  },
  {
    title: 'Trusted By Industry Leaders',
    badge: 'PROVEN SUCCESS',
    description: 'Join the growing list of shipping and logistics companies that rely on eBMS solutions to drive their digital transformation',
    features: [
      '15+ years of industry experience',
      '50+ successful implementations worldwide',
      'Dedicated support and training'
    ],
    primaryLink: {
      text: 'VIEW SUCCESS STORIES',
      url: '/customers'
    },
    secondaryLink: {
      text: 'REQUEST DEMO',
      url: '/demo'
    }
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
  slideInterval = setInterval(nextSlide, 6000)
}

onMounted(() => {
  // Start automatic slideshow
  slideInterval = setInterval(nextSlide, 6000)
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
  height: 600px;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-1.png');
}

.slide-2 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-2.png');
}

.slide-3 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-3.png');
}

.banner-wrapper {
  max-width: 650px;
}

.banner-badge {
  display: inline-block;
  background-color: rgba(243, 156, 18, 0.9);
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.35rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.banner-title {
  font-size: 3.25rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.banner-title span {
  display: inline;
  padding: 0.5rem 1rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.banner-desc {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.banner-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.banner-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 1.15rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.feature-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: rgba(0, 102, 204, 0.9);
  border-radius: 50%;
  margin-right: 0.75rem;
  font-weight: bold;
}

.banner-btn-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.ebms-btn {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.primary-btn {
  background-color: #0066cc;
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 102, 204, 0.3);
}

.primary-btn:hover {
  background-color: #004c99;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 102, 204, 0.4);
}

.secondary-btn {
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.secondary-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.carousel-dots {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 3;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.carousel-dot.active {
  background-color: #fff;
  transform: scale(1.2);
}

.carousel-dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* Mobile responsiveness */
@media (max-width: 992px) {
  .carousel-container {
    height: 550px;
  }

  .banner-title {
    font-size: 2.75rem;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    height: 500px;
  }

  .banner-title {
    font-size: 2.25rem;
  }

  .banner-desc {
    font-size: 1.2rem;
  }

  .banner-features li {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .carousel-container {
    height: 550px;
  }

  .banner-wrapper {
    text-align: center;
    padding: 0 1rem;
  }

  .banner-title {
    font-size: 1.9rem;
  }

  .banner-desc {
    font-size: 1.1rem;
  }

  .banner-features {
    display: inline-block;
    text-align: left;
  }

  .banner-btn-wrap {
    justify-content: center;
  }

  .ebms-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
