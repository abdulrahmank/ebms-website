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
          <div>
            <!-- Content will be manually loaded since we're not using ContentRenderer yet -->
            <p>
              For Agents acting as Port agents for Tramp operations, complex calculation of tariffs and its combinations make the difference between securing the business or losing it.
            </p>
            <p>
              eBMS Tramp agency solution enables agencies to quickly estimate and make Port Disbursement Accounts (DAs) and send quotations to principals. The sample DA is then updated until the end of the voyage to capture actual costs and remittances. Hours of coordination and reporting can be completed in minutes. The solution encompasses documentation, operations update and tracking with IGM EDI integration.
            </p>
          </div>
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
              <div>
                <p>Tramp shipping agencies face unique challenges with constantly changing vessels, varied port calls, and complex tariff structures. Our digital solutions streamline these processes, enabling agencies to respond faster and more accurately to principal requests.</p>
                <p>Our digital-first approach helps ship agencies overcome key challenges:</p>
                <ul>
                  <li>Complex port tariff calculations and combinations</li>
                  <li>Time-sensitive quotation requirements from principals</li>
                  <li>Tracking actual costs against estimated disbursement accounts</li>
                  <li>Managing documentation and compliance across multiple ports</li>
                  <li>Coordinating with port authorities and service providers</li>
                </ul>
              </div>
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
            <h2 class="text-2xl font-bold text-secondary mb-6">Demand & Customer Relationship Management for Ship Agencies</h2>
            <p class="text-gray-700 mb-6">
              Our DCRM solution enhances ship agency operations by streamlining principal relationships, improving response times, and enabling data-driven decision making.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-lg font-semibold text-primary mb-3">Principal Relationship Management</h3>
                <p class="text-gray-600 mb-4">Track all communications and history with shipping principals in one place.</p>
                <ul class="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Centralized record of all interactions and vessel calls</li>
                  <li>Historical data for quick reference when new requests come in</li>
                  <li>Performance analysis by principal, vessel type, and port</li>
                  <li>Principal-specific documentation templates and requirements</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-lg font-semibold text-primary mb-3">Quotation & DA Management</h3>
                <p class="text-gray-600 mb-4">Streamline the creation and management of quotes and disbursement accounts.</p>
                <ul class="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Automated tariff calculations based on vessel specifications</li>
                  <li>Quick generation of professional DA estimates and quotations</li>
                  <li>Tracking of actual vs. estimated costs</li>
                  <li>Comparison tools for historical voyage costs</li>
                </ul>
              </div>

              <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-lg font-semibold text-primary mb-3">Operations Coordination</h3>
                <p class="text-gray-600 mb-4">Manage complex operational workflows with automated task management.</p>
                <ul class="text-gray-600 space-y-2 list-disc pl-5">
                  <li>Task assignments for vessel calls with automated notifications</li>
                  <li>Service provider coordination and communication tracking</li>
                  <li>Port authority documentation workflows</li>
                  <li>Real-time status updates across all operations</li>
                </ul>
              </div>
            </div>
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
import { useAsyncData } from 'nuxt/app'
import PageBanner from '~/components/PageBanner.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import SolutionFeatures from '~/components/solutions/SolutionFeatures.vue'
import ClientsSection from '~/components/solutions/ClientsSection.vue'
import SolutionTestimonials from '~/components/solutions/SolutionTestimonials.vue'
import DemoSection from '@/components/home/DemoSection.vue'

// Get the route parameters
const route = useRoute()
const { slug } = route.params

// Hard-coded page data for now to get the page working
// This will be replaced with content module later when it's correctly set up
const page = ref({
  title: 'Ship Agency (Tramp) Solution',
  description: 'Tramp Shipping Agency solution enabling Tramp agency operations to quickly estimate, make Port DAs and send quotations to principals; including IGM EDI integration',
  image: '/images/shipping/ship-agency-solution.jpg',
  banner: 'shipping',
  benefits: [
    {
      title: 'Fast and Accurate Quotations',
      description: 'Quickly estimate and create Port DAs with complex tariff calculations automatically handled, improving response time to principals and increasing chances of securing business.',
      color: 'primary'
    },
    {
      title: 'Streamlined Operations',
      description: 'Reduce hours of coordination and reporting to minutes with automated workflows and updates that track the entire voyage from beginning to end.',
      color: 'accent-dark'
    },
    {
      title: 'Financial Clarity',
      description: 'Track actual costs against estimated DAs, manage remittances effectively, and maintain clear financial records for each voyage and principal.',
      color: 'secondary'
    },
    {
      title: 'Seamless Documentation',
      description: 'Automate documentation processes with IGM EDI integration, port authority connections, and comprehensive document management tailored for ship agency requirements.',
      color: 'accent'
    }
  ],
  features: [
    {
      title: 'Disbursement Account Management',
      description: 'Quickly create and manage Port Disbursement Accounts with automated calculations based on vessel particulars and port tariffs.',
      icon: '/images/icons/ship_agency.svg'
    },
    {
      title: 'Principal Communications',
      description: 'Streamline communications with principals through integrated messaging, documentation sharing, and approval workflows.',
      icon: '/images/icons/solution-2.svg'
    },
    {
      title: 'Vessel Call Management',
      description: 'Manage all aspects of vessel calls from pre-arrival notifications to departure clearance with comprehensive task tracking.',
      icon: '/images/icons/solution-3.svg'
    },
    {
      title: 'Documentation Automation',
      description: 'Automate the creation and submission of vessel documentation with IGM EDI integration and port authority connections.',
      icon: '/images/icons/solution-4.svg'
    },
    {
      title: 'Financial Tracking',
      description: 'Track actual costs against estimates, manage remittances, and provide detailed financial reporting to principals.',
      icon: '/images/icons/solution-1.svg'
    },
    {
      title: 'Service Provider Coordination',
      description: 'Coordinate with port service providers through digital workflows, appointment scheduling, and service confirmation.',
      icon: '/images/icons/solution-5.svg'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Gain insights into operational efficiency, cost trends, and performance metrics with comprehensive reporting tools.',
      icon: '/images/icons/solution-7.svg'
    },
    {
      title: 'Mobile Solutions',
      description: 'Access critical information and perform key tasks on the go with mobile applications for boarding officers and operations teams.',
      icon: '/images/icons/solution-6.svg'
    }
  ],
  clients: [
    {
      name: 'Ocean Master LLC',
      logo: '/images/clients/Ocean.jpg'
    },
    {
      name: 'Seabridge Maritime (Parekh Group)',
      logo: '/images/clients/Parekh.jpg'
    },
    {
      name: 'Prudential Shipping (Master Group)',
      logo: '/images/clients/prudential.jpg'
    },
    {
      name: 'James Makintosh Ltd.',
      logo: '/images/clients/James.jpg'
    }
  ],
  testimonials: [
    {
      company: "Ocean Master LLC",
      logo: "/images/clients/Ocean.jpg",
      content: [
        "eBMS Ship Agency solution has transformed the way we handle tramp operations at our ports.",
        "We can now create accurate port disbursement accounts in minutes instead of hours, giving us a competitive edge in securing business from principals.",
        "The tracking of actual costs against estimates has improved our financial clarity and principal relationships significantly."
      ],
      author: {
        name: "Operations Director",
        title: "Ocean Master LLC, Dubai"
      }
    },
    {
      company: "Seabridge Maritime",
      logo: "/images/clients/Parekh.jpg",
      content: [
        "As a busy ship agency with multiple tramp vessel calls, managing the complex tariff calculations and documentation was always challenging.",
        "With eBMS, we've streamlined our entire operation from quotation to final DA reconciliation, saving hours of coordination time and improving accuracy.",
        "The IGM EDI integration has been particularly valuable in ensuring compliance and reducing manual documentation work."
      ],
      author: {
        name: "Managing Director",
        title: "Seabridge Maritime, India"
      }
    }
  ],
  impactStats: [
    {
      percentage: "70%",
      title: "Faster Quotation Process",
      description: "Reduce time spent creating port disbursement accounts",
      color: "primary-light"
    },
    {
      percentage: "80%",
      title: "Documentation Efficiency",
      description: "Automate documentation with EDI integration",
      color: "accent"
    },
    {
      percentage: "90%",
      title: "Financial Accuracy",
      description: "Improved tracking of actual costs against estimates",
      color: "secondary-light"
    },
    {
      percentage: "50%",
      title: "Coordination Time",
      description: "Reduce time spent coordinating with service providers and authorities",
      color: "accent-dark"
    }
  ],
  whyChooseUs: [
    "Specialized solutions for tramp shipping agencies",
    "Comprehensive tariff database for major ports",
    "IGM EDI integration for streamlined compliance",
    "20+ years of experience in shipping and logistics",
    "Solutions in use across 51 countries"
  ]
})

// Set meta information for the page
useHead({
  title: `${page.value.title} - eBMS`,
  meta: [
    {
      name: 'description',
      content: page.value.description
    }
  ]
})
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
