<template>
  <div>
    <PageBanner title="eBMS Shipping Solutions" customClass="shipping" />

    <div class="custom-container">
      <Breadcrumb
          homeName="Home"
          currentName="Shipping Solutions"
      />

      <div class="page-header mt-6 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-secondary">eBMS Shipping Solutions</h1>
        <p class="text-lg text-gray-600 mb-6">
          Discover our comprehensive range of digital solutions designed specifically for the shipping industry.
          From container liners to NVOCC operations, we provide tailored enterprise systems that optimize your
          operations, enhance customer experience, and drive sustainable growth.
        </p>
      </div>

      <div class="solutions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="solution in solutions" :key="solution.slug" class="solution-card">
          <NuxtLink :to="`/shipping/${solution.slug}`" class="block bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div class="relative h-48 overflow-hidden">
              <img
                  :src="solution.image"
                  :alt="solution.title"
                  class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <span class="text-white font-semibold px-4 py-2 rounded-full border-2 border-white">
                  View Solution
                </span>
              </div>
            </div>
            <div class="p-6">
              <h2 class="text-xl font-bold text-secondary mb-2">{{ solution.title }}</h2>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ solution.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-primary font-semibold">Learn More</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="custom-container">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-secondary mb-4">Why Choose eBMS for Shipping?</h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            With over 20 years of experience in shipping and logistics, our solutions are trusted
            by industry leaders across 51 countries.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl font-bold">20+</span>
            </div>
            <h3 class="text-lg font-semibold text-secondary mb-2">Years of Experience</h3>
            <p class="text-gray-600">Deep industry knowledge and expertise</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl font-bold">51</span>
            </div>
            <h3 class="text-lg font-semibold text-secondary mb-2">Countries</h3>
            <p class="text-gray-600">Global reach and local expertise</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl font-bold">95%</span>
            </div>
            <h3 class="text-lg font-semibold text-secondary mb-2">Implementation Success</h3>
            <p class="text-gray-600">Proven track record of successful deployments</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-accent-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl font-bold">12+</span>
            </div>
            <h3 class="text-lg font-semibold text-secondary mb-2">Years Client Relationship</h3>
            <p class="text-gray-600">Long-term partnerships built on trust</p>
          </div>
        </div>
      </div>
    </div>

    <DemoSection />
  </div>
</template>

<script setup>
import PageBanner from '~/components/PageBanner.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import DemoSection from '@/components/home/DemoSection.vue'

// Fetch all shipping solutions from the content directory
const { data: shippingContent } = await useAsyncData('shipping-solutions', () =>
    queryContent('/shipping').find()
)

// Process the content data to get the required fields
const solutions = computed(() => {
  if (!shippingContent.value) return [];

  return shippingContent.value.map(item => ({
    title: item.title,
    description: item.description,
    slug: item._path.split('/').pop(),
    image: item.image || '/images/shipping/default-solution.jpg'
  }));
})

// Set meta information for the page
useHead({
  title: 'Shipping Solutions - eBMS',
  meta: [
    {
      name: 'description',
      content: 'Explore eBMS digital solutions for shipping operations including container lines, feeder operations, agency houses, NVOCC, and more.'
    }
  ]
})
</script>

<style scoped>
.solution-card {
  height: 100%;
  display: flex;
}

.solution-card a {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  flex: 1;
}
</style>
