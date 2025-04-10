<template>
  <div v-if="page">
    <PageBanner :title="page.title" :customClass="page.banner || 'shipping'" />

    <div class="custom-container">
      <Breadcrumb
          homeName="Home"
          parentPath="/shipping"
          parentName="Shipping"
          :currentName="page.title"
      />

      <div class="page-header mt-6 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-secondary">{{ page.title }}</h1>
        <div class="prose max-w-none">
          <ContentRenderer v-if="page" :value="page" />
        </div>
      </div>

      <div v-if="page.image" class="solution-image mb-12">
        <img
            :src="page.image"
            :alt="page.title"
            class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div v-if="page.benefits && page.benefits.length" class="solution-benefits mb-16">
        <h2 class="text-2xl font-bold text-secondary mb-6">Business Benefits</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
              v-for="(benefit, index) in page.benefits"
              :key="index"
              class="benefit-card bg-white p-6 rounded-lg shadow-md"
              :class="`border-l-4 border-${benefit.color}`"
          >
            <h3 class="text-lg font-semibold mb-3" :class="`text-${benefit.color}`">{{ benefit.title }}</h3>
            <p class="text-gray-600">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="page.impactStats && page.impactStats.length" class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="custom-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-secondary mb-6">Digital Transformation for {{ page.title }}</h2>
            <div class="prose max-w-none text-gray-700">
              <ContentRenderer v-if="page" :value="page" unwrap="p" :excerpt="true" />
            </div>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-primary mb-5">eBMS {{ page.title }} Impact</h3>
            <div class="space-y-4">
              <div v-for="(stat, index) in page.impactStats" :key="index" class="flex items-start">
                <div
                    class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                    :class="`bg-${stat.color || 'primary'}`"
                >
                  <span class="text-white font-bold">{{ stat.percentage }}</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">{{ stat.title }}</h4>
                  <p class="text-gray-600">{{ stat.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SolutionFeatures
        v-if="page.features && page.features.length"
        :title="`${page.title} Enterprise Solutions`"
        subtitle="Our comprehensive solutions include:"
        :features="page.features"
    />

    <div class="py-16 bg-white">
      <div class="custom-container">
        <div class="bg-primary-light bg-opacity-10 rounded-lg p-8 md:p-12">
          <div class="prose max-w-none">
            <!-- Replace ContentSlot with direct content rendering -->
            <ContentDoc :path="`/shipping/${slug}`" />
          </div>
        </div>
      </div>
    </div>

    <ClientsSection
        v-if="page.clients && page.clients.length"
        :title="`Clients Using Our ${page.title}`"
        :clients="page.clients"
    />

    <SolutionTestimonials
        v-if="page.testimonials && page.testimonials.length"
        title="What Our Clients Say"
        :subtitle="`Success stories from our ${page.title} clients`"
        :testimonials="page.testimonials"
        bgClass="bg-white"
    />

    <div v-if="page.whyChooseUs && page.whyChooseUs.length" class="py-16 bg-gray-50">
      <div class="custom-container">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-10 flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-secondary mb-4">Ready to Transform Your {{ page.title }}?</h2>
                <p class="text-gray-600 mb-6">
                  Join leading shipping companies who have already adopted eBMS solutions to streamline their
                  operations, reduce costs, and enhance customer experience. Our expert team will guide you through the
                  implementation process and ensure a seamless transition.
                </p>
                <div class="flex flex-wrap gap-4">
                  <NuxtLink to="/demo" class="btn-primary py-3 px-6">
                    Request a Demo
                  </NuxtLink>
                  <NuxtLink to="/contact" class="btn-outline py-3 px-6">
                    Contact Our Team
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="bg-primary p-10 text-white">
              <h3 class="text-xl font-semibold mb-6">Why Choose eBMS for {{ page.title }}?</h3>
              <ul class="space-y-4">
                <li v-for="(reason, index) in page.whyChooseUs" :key="index" class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>{{ reason }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DemoSection />
  </div>
  <div v-else class="custom-container py-16 text-center">
    <h2 class="text-2xl font-bold text-secondary mb-4">Loading content...</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAsyncData, queryContent } from '#imports'
import PageBanner from '~/components/PageBanner.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import SolutionFeatures from '~/components/solutions/SolutionFeatures.vue'
import ClientsSection from '~/components/solutions/ClientsSection.vue'
import SolutionTestimonials from '~/components/solutions/SolutionTestimonials.vue'
import DemoSection from '@/components/home/DemoSection.vue'

// Get the route parameters
const route = useRoute()
const { slug } = route.params

// Fetch content based on the slug
const { data: page } = await useAsyncData(`shipping-${slug}`, () =>
    queryContent('shipping', slug).findOne()
)

// Set meta information for the page
useHead(() => ({
  title: page.value ? `${page.value.title} - eBMS` : 'Loading - eBMS',
  meta: [
    {
      name: 'description',
      content: page.value?.description || `eBMS shipping and logistics solutions.`
    }
  ]
}))
</script>

<style scoped>
.prose :deep(h2) {
  @apply text-xl font-semibold mb-4 text-primary;
}

.prose :deep(h3) {
  @apply text-lg font-semibold mb-3 text-secondary;
}

.prose :deep(p) {
  @apply text-gray-600 mb-6;
}

.prose :deep(ul) {
  @apply list-disc pl-6 mb-6 space-y-2 text-gray-700;
}
</style>
