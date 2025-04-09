<template>
  <div class="testimonial-carousel">
    <div class="carousel-container">
      <div class="carousel-slide" v-for="(testimonial, index) in visibleTestimonials" :key="testimonial.id">
        <div class="testimonial-card">
          <div class="testi-img" v-if="testimonial.logo">
            <img :src="testimonial.logo" :alt="testimonial.company" />
          </div>
          <div class="testi-content">
            <h6>{{ testimonial.company }}</h6>
            <p v-for="(paragraph, pIndex) in testimonial.content" :key="pIndex">
              {{ paragraph }}
            </p>
          </div>
          <div class="testi-user">
            <h6>{{ testimonial.author.name }}</h6>
            <p>{{ testimonial.author.title }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button class="carousel-control prev" @click="prevSlide" aria-label="Previous testimonial">
        <span class="control-icon">&lsaquo;</span>
      </button>
      <button class="carousel-control next" @click="nextSlide" aria-label="Next testimonial">
        <span class="control-icon">&rsaquo;</span>
      </button>

      <!-- Navigation dots -->
      <div class="carousel-dots">
        <button
            v-for="(_, index) in totalSlides"
            :key="index"
            class="carousel-dot"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
            :aria-label="`Go to testimonial group ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  testimonials: {
    type: Array,
    required: true
  },
  slidesToShow: {
    type: Number,
    default: 2
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  autoplaySpeed: {
    type: Number,
    default: 5000
  }
})

const currentSlide = ref(0)
let slideInterval = null

// Calculate total number of slides
const totalSlides = computed(() => {
  return Math.ceil(props.testimonials.length / props.slidesToShow)
})

// Calculate visible testimonials based on current slide
const visibleTestimonials = computed(() => {
  const startIndex = currentSlide.value * props.slidesToShow
  return props.testimonials.slice(startIndex, startIndex + props.slidesToShow)
})

// Functions to control slides
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  resetSlideInterval()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
  resetSlideInterval()
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetSlideInterval()
}

// Reset slide interval to prevent quick transitions when manually changing slides
const resetSlideInterval = () => {
  if (props.autoplay) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, props.autoplaySpeed)
  }
}

onMounted(() => {
  // Start autoplay if enabled
  if (props.autoplay) {
    slideInterval = setInterval(nextSlide, props.autoplaySpeed)
  }
})

onBeforeUnmount(() => {
  // Clear interval when component is destroyed
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

<style scoped>
.testimonial-carousel {
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
}

.carousel-container {
  display: flex;
  justify-content: center;
  position: relative;
}

.carousel-slide {
  flex: 0 0 calc(100% / v-bind('props.slidesToShow'));
  padding: 0 1rem;
}

.testimonial-card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.testi-img {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.testi-img img {
  max-height: 80px;
  max-width: 180px;
  object-fit: contain;
}

.testi-content {
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.testi-content h6 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.testi-content p {
  color: #7f8c8d;
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.testi-user {
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.testi-user h6 {
  font-size: 1rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.25rem;
}

.testi-user p {
  color: #7f8c8d;
  font-size: 0.875rem;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: all 0.3s;
}

.carousel-control:hover {
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.control-icon {
  font-size: 1.5rem;
  color: #2c3e50;
  line-height: 1;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 2rem;
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-dot.active {
  background-color: #0066cc;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .carousel-slide {
    flex: 0 0 100%;
  }

  .carousel-control {
    width: 36px;
    height: 36px;
  }
}
</style>
