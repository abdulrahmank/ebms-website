<template>
  <div>
    <PageBanner title="Liner Solution" customClass="shipping"/>

    <div class="custom-container">
      <Breadcrumb
          homeName="Home"
          parentPath="/shipping"
          parentName="Shipping"
          currentName="Liner Solution"
      />

      <div class="page-header mt-6 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-secondary">Container Liner Solutions</h1>
        <h2 class="text-xl font-semibold mb-4 text-primary">
          Digitizing core operations with integrated enterprise system
        </h2>
        <p class="text-gray-600 mb-6">
          The eBMS Commercial Module helps in estimating the vessel profitability before fixtures of vessels.
          With tariffs of numerous ports already available, it makes estimations much quicker and improves
          the response rate, eliminating most data entry through Excel uploads or EDI uploads.
          Vessel performance and berthing history are captured easily and can be used to track vessel performance.
          Alerts based on performance parameters enable timely course correction. Seamless integration with
          eBMS Accounts eliminates the need for duplicate data entry and reconciliation issues.
        </p>
      </div>

      <div class="solution-image mb-12">
        <img
            src="/images/shipping/container-line.png"
            alt="Container Liner Operations"
            class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="solution-benefits mb-16">
        <h2 class="text-2xl font-bold text-secondary mb-6">Business Benefits</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
            <h3 class="text-lg font-semibold text-primary mb-3">Revenue Management</h3>
            <p class="text-gray-600">
              Our solution includes 80+ revenue management features that help optimize pricing, improve yield
              management,
              and maximize your revenue potential. Enhanced with advanced analytics, you can make data-driven decisions
              quickly.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-dark">
            <h3 class="text-lg font-semibold text-accent-dark mb-3">Cost Control</h3>
            <p class="text-gray-600">
              With 53+ cost control features, our system helps you monitor expenses, reduce operational costs,
              and improve profitability through integrated AR/AP management and automated cost tracking.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <h3 class="text-lg font-semibold text-secondary mb-3">Operational Efficiency</h3>
            <p class="text-gray-600">
              Reduce manual data entry by up to 70% with our 51+ data entry reduction features. Our system
              streamlines operations, eliminates redundant tasks, and increases overall productivity.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <h3 class="text-lg font-semibold text-accent mb-3">Customer Experience</h3>
            <p class="text-gray-600">
              Our 37+ customer delight features help enhance service levels, improve response times, and build
              stronger relationships with your clients through better communications and service delivery.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="custom-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-secondary mb-6">Digital Transformation for Liner Operations</h2>
            <p class="text-gray-700 mb-4">
              In today's rapidly evolving shipping industry, digital transformation is not just an option—it's a
              necessity.
              With the global freight and logistics market expected to grow to $8.03 trillion by 2030, liner companies
              must
              adapt quickly to remain competitive.
            </p>
            <p class="text-gray-700 mb-4">
              Our digital-first approach helps container liner businesses overcome key challenges:
            </p>
            <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Revenue pressures in a competitive market</li>
              <li>Rising operational costs squeezing margins</li>
              <li>Changing customer behaviors and expectations</li>
              <li>Need for real-time data and analytics</li>
            </ul>
            <p class="text-gray-700">
              With eBMS solutions, your liner business can reduce up to 40% of sales cycle time, achieve nearly zero
              latency
              between field and office teams, and automate up to 95% of quotation processes—giving you a competitive
              edge
              in this dynamic industry.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-primary mb-5">eBMS Liner Solution Impact</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div
                    class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">40%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Operational Efficiency</h4>
                  <p class="text-gray-600">Increase operational efficiency with streamlined workflows</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">70%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Data Entry Reduction</h4>
                  <p class="text-gray-600">Reduce manual data entry through automation</p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                    class="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">90%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Sales Activities Visibility</h4>
                  <p class="text-gray-600">Complete visibility of sales activities and opportunities</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">10%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Increased Closing Rate</h4>
                  <p class="text-gray-600">Better closing rate with faster quotes and user-friendly response modes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SolutionFeatures
        title="Container Liner Enterprise Solutions"
        subtitle="Digital Technology Container Liner Enterprise integration solution which enhances:"
        :features="features"
    />

    <div class="py-16 bg-white">
      <div class="custom-container">
        <div class="bg-primary-light bg-opacity-10 rounded-lg p-8 md:p-12">
          <h2 class="text-2xl font-bold text-secondary mb-6">eBMS Demand & Customer Relationship Management</h2>
          <p class="text-gray-700 mb-6">
            Our integrated DCRM solution transforms your liner sales process into a customer experience from the first
            touchpoint.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Sales Activities Management</h3>
              <p class="text-gray-600 mb-4">Convert sales effort into "Sales investment" with our comprehensive sales
                activities management module.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Effective sales activities planning with data insights and AI-based suggestions</li>
                <li>Quick updates increase time spent meeting with customers</li>
                <li>Track every sales touchpoint with leads, prospects, and customers</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Opportunities Management</h3>
              <p class="text-gray-600 mb-4">Convert sales opportunity data to "Demand Forecasting" for better
                planning.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Cross-selling can increase conversion by up to 25%</li>
                <li>Opportunities converted to demand forecast</li>
                <li>Enables collaboration with all stakeholders</li>
                <li>Automated opportunity actioning</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Pricing & Quotation</h3>
              <p class="text-gray-600 mb-4">Enhance customer experience with swift pricing and quotation processes.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>78% of customers buy from the company that responds to their enquiry first</li>
                <li>Automated quotation charges eliminate revenue leakage</li>
                <li>Auto escalation for approvals when required</li>
                <li>Margin tracking and control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ClientsSection
        title="Clients Using Our Liner Solutions"
        :clients="clients"
    />

    <SolutionTestimonials
        title="What Our Clients Say"
        subtitle="Success stories from our liner solution clients"
        :testimonials="testimonials"
        bgClass="bg-white"
    />

    <div class="py-16 bg-gray-50">
      <div class="custom-container">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-10 flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-secondary mb-4">Ready to Transform Your Liner Operations?</h2>
                <p class="text-gray-600 mb-6">
                  Join leading shipping companies who have already adopted eBMS solutions to streamline their
                  operations,
                  reduce costs, and enhance customer experience. Our expert team will guide you through the
                  implementation
                  process and ensure a seamless transition.
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
              <h3 class="text-xl font-semibold mb-6">Why Choose eBMS for Liner Operations?</h3>
              <ul class="space-y-4">
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>20+ years of experience in shipping and logistics</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>95% successful implementation rate</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Solutions in use across 51 countries</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Average client relationship of 12+ years</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Supporting businesses from 25 to 650+ users</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DemoSection/>
  </div>
</template>

<script setup>
import PageBanner from '~/components/PageBanner.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import SolutionFeatures from '~/components/solutions/SolutionFeatures.vue'
import ClientsSection from '~/components/solutions/ClientsSection.vue'
import SolutionTestimonials from '~/components/solutions/SolutionTestimonials.vue'
import DemoSection from '@/components/home/DemoSection.vue'

// Set meta information for the page
useHead({
  title: 'Container Liner Solutions - eBMS',
  meta: [
    {
      name: 'description',
      content: 'eBMS Container Liner Solutions help digitize core operations with integrated enterprise systems for vessel operations, fleet management, and more.'
    }
  ]
})

// Define features
const features = [
  {
    title: 'Vessel Operations',
    description: 'Streamline vessel operations with real-time tracking, vessel performance monitoring, and optimal berthing management for improved efficiency.',
    icon: '/images/icons/solution-1.svg'
  },
  {
    title: 'Vessel Fleet Management',
    description: 'Comprehensive tools for managing your vessel fleet efficiently with integrated scheduling, maintenance tracking, and crew management systems.',
    icon: '/images/icons/solution-2.svg'
  },
  {
    title: 'Container Inventory Optimization',
    description: 'Optimize container inventory with advanced analytics, forecasting, and real-time tracking to reduce idle time and improve asset utilization.',
    icon: '/images/icons/solution-3.svg'
  },
  {
    title: 'Port Activities Tracking',
    description: 'Monitor and track port activities in real-time with seamless information flow to all stakeholders for better decision making and reduced port time.',
    icon: '/images/icons/solution-4.svg'
  },
  {
    title: 'Documentation Management',
    description: 'Streamline documentation processes with automated workflows, EDI integration, and digital document handling for faster, error-free operations.',
    icon: '/images/icons/solution-5.svg'
  },
  {
    title: 'Integrated AR/AP',
    description: 'Seamlessly integrate accounts receivable and payable functions to reduce revenue leakage, improve cash flow, and provide financial transparency.',
    icon: '/images/icons/solution-6.svg'
  },
  {
    title: 'Advanced Analytics & Insights',
    description: 'Enhanced with advanced analytics for rapid decision making, with AI-powered insights that transform data into actionable intelligence for better outcomes.',
    icon: '/images/icons/solution-7.svg'
  },
  {
    title: 'Customer Experience Management',
    description: 'Integrate with customer portals, provide real-time tracking, and enable digital communications to enhance customer satisfaction and loyalty.',
    icon: '/images/icons/Global_freight.svg'
  }
]

// Define clients
const clients = [
  {
    name: 'Asyad Line',
    logo: '/images/clients/asyad-line.jpg'
  },
  {
    name: 'Milaha Line',
    logo: '/images/clients/milaha.jpg'
  },
  {
    name: 'Djibouti Shipping Line (DSC)',
    logo: '/images/clients/djibouti.jpg'
  },
  {
    name: 'Sealead',
    logo: '/images/clients/sealead.jpg'
  }
]

// Define testimonials
const testimonials = [
  {
    company: "Milaha Group",
    logo: "/images/clients/milaha.jpg",
    content: [
      "Digital Transformation is crucial to our core growth strategy.",
      "eBMS, our highly qualified and reliable partner, has helped to enable our businesses with 'Digital Transformation'.",
      "We heartily recommend the eBMS Solution Suite. We look forward to an enduring association with them to achieve significant business impact."
    ],
    author: {
      name: "Operations Director",
      title: "Milaha Line, Qatar"
    }
  },
  {
    company: "Asyad Line",
    logo: "/images/clients/asyad-line.jpg",
    content: [
      "We are delighted to collaborate with eBMS, a company that is devoted to constantly exploring technology innovations for the global Shipping domain.",
      "The eBMS Shipping and Logistics solution suite helped us get 'end to end visibility' of activities, resulting in us being agile and responsive in dynamic market situations."
    ],
    author: {
      name: "IT Director",
      title: "Asyad Line"
    }
  }
]
</script>
