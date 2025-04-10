<template>
  <div v-if="data">
    <PageBanner :title="data.title" :customClass="data.banner || 'shipping'" />

    <div class="custom-container">
      <Breadcrumb
          homeName="Home"
          parentPath="/shipping"
          parentName="Shipping"
          :currentName="data.title"
      />

      <div class="page-header mt-6 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-secondary">{{ data.title }}</h1>
        <h2 v-if="data.description" class="text-xl font-semibold mb-4 text-primary">
          {{ data.description }}
        </h2>
        <ContentRenderer v-if="data.body" :value="data" class="prose max-w-none" />
      </div>

      <div v-if="data.image" class="solution-image mb-12">
        <img
            :src="data.image"
            :alt="data.title"
            class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div v-if="data.benefits && data.benefits.length" class="solution-benefits mb-16">
        <h2 class="text-2xl font-bold text-secondary mb-6">Business Benefits</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
              v-for="(benefit, index) in data.benefits"
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

    <div v-if="data.impactStats && data.impactStats.length" class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="custom-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-secondary mb-6">Digital Transformation for {{ data.title }}</h2>
            <div v-if="digitalTransformationContent" class="prose max-w-none text-gray-700">
              <ContentRenderer :value="digitalTransformationContent" />
            </div>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-primary mb-5">eBMS {{ data.title }} Impact</h3>
            <div class="space-y-4">
              <div v-for="(stat, index) in data.impactStats" :key="index" class="flex items-start">
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
        v-if="data.features && data.features.length"
        :title="`${data.title} Enterprise Solutions`"
        subtitle="Our comprehensive solutions include:"
        :features="data.features"
    />

    <div v-if="dcrmContent" class="py-16 bg-white">
      <div class="custom-container">
        <div class="bg-primary-light bg-opacity-10 rounded-lg p-8 md:p-12">
          <div class="prose max-w-none">
            <ContentRenderer :value="dcrmContent" />
          </div>
        </div>
      </div>
    </div>

    <ClientsSection
        v-if="data.clients && data.clients.length"
        :title="`Clients Using Our ${data.title}`"
        :clients="data.clients"
    />

    <SolutionTestimonials
        v-if="data.testimonials && data.testimonials.length"
        title="What Our Clients Say"
        :subtitle="`Success stories from our ${data.title} clients`"
        :testimonials="data.testimonials"
        bgClass="bg-white"
    />

    <div v-if="data.whyChooseUs && data.whyChooseUs.length" class="py-16 bg-gray-50">
      <div class="custom-container">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-10 flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-secondary mb-4">Ready to Transform Your {{ data.title.includes('Solution') ? data.title.replace(' Solution', '') : data.title }} Operations?</h2>
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
              <h3 class="text-xl font-semibold mb-6">Why Choose eBMS for {{ data.title.includes('Solution') ? data.title.replace(' Solution', '') : data.title }}?</h3>
              <ul class="space-y-4">
                <li v-for="(reason, index) in data.whyChooseUs" :key="index" class="flex">
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
import PageBanner from '~/components/PageBanner.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import SolutionFeatures from '~/components/solutions/SolutionFeatures.vue'
import ClientsSection from '~/components/solutions/ClientsSection.vue'
import SolutionTestimonials from '~/components/solutions/SolutionTestimonials.vue'
import DemoSection from '@/components/home/DemoSection.vue'

// Get the route parameters
const route = useRoute()
const { slug } = route.params

// Fetch the content from the content directory
const { data } = await useAsyncData(`shipping-${slug}`, () => queryContent(`/${slug}`).findOne())

// Function to extract specific sections from markdown content based on headings
const extractSection = (body, sectionTitle) => {
  if (!body) return null;

  // Find the index of the section heading
  const sectionHeadingIndex = body.children.findIndex(child =>
      child.tag === 'h2' &&
      child.children.some(text =>
          text.value && text.value.toLowerCase().includes(sectionTitle.toLowerCase())
      )
  );

  if (sectionHeadingIndex === -1) return null;

  // Find the end of this section (next h2 or end of content)
  const nextHeadingIndex = body.children.findIndex((child, index) =>
      index > sectionHeadingIndex && child.tag === 'h2'
  );

  // Extract the section content
  const sectionEnd = nextHeadingIndex === -1 ? body.children.length : nextHeadingIndex;

  // Create a new content object with just this section
  return {
    _id: `${body._id}-${sectionTitle}`,
    body: {
      ...body,
      children: [
        body.children[sectionHeadingIndex],
        ...body.children.slice(sectionHeadingIndex + 1, sectionEnd)
      ]
    }
  };
};

// Extract specific sections for component parts
const digitalTransformationContent = computed(() => {
  return data.value?.body ? extractSection(data.value.body, 'Digital Transformation') : null;
});

const dcrmContent = computed(() => {
  return data.value?.body ? extractSection(data.value.body, 'Demand & Customer') : null;
});

// Set meta information for the page
useHead(() => ({
  title: data.value ? `${data.value.title} - eBMS` : 'eBMS',
  meta: [
    {
      name: 'description',
      content: data.value?.description || 'eBMS Shipping Solutions'
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
