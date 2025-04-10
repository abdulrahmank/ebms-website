<template>
  <div>
    <PageBanner title="NVOCC Solution" customClass="shipping"/>

    <div class="custom-container">
      <Breadcrumb
          homeName="Home"
          parentPath="/shipping"
          parentName="Shipping"
          currentName="NVOCC Solution"
      />

      <div class="page-header mt-6 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-secondary">NVOCC Solutions</h1>
        <h2 class="text-xl font-semibold mb-4 text-primary">
          Integrating your network into a single operating digital platform
        </h2>
        <p class="text-gray-600 mb-6">
          Our NVOCC solutions optimize container inventory with advanced analytics and digital enablement from sales to AR/AP,
          port compliance, customer and payment gateway integration. Experience advanced automation of agent commercial
          and SOA management, eliminating days of manual data crunching and helping you manage your global network efficiently.
        </p>
      </div>

      <div class="solution-image mb-12">
        <img
            src="/images/shipping/nvocc-solution.jpg"
            alt="NVOCC Operations"
            class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="solution-benefits mb-16">
        <h2 class="text-2xl font-bold text-secondary mb-6">Business Benefits</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
            <h3 class="text-lg font-semibold text-primary mb-3">Inventory Optimization</h3>
            <p class="text-gray-600">
              Our solution helps track containers and manage inventory closely through innovative technology
              approaches, optimizing revenues and providing decision support for inventory repositioning.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-dark">
            <h3 class="text-lg font-semibold text-accent-dark mb-3">Agent Network Integration</h3>
            <p class="text-gray-600">
              Integrate your entire agent network with real-time load lists, manifests, and SOA/PDA processing,
              reducing transaction turnaround time and eliminating duplicate information processing.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <h3 class="text-lg font-semibold text-secondary mb-3">Financial Control</h3>
            <p class="text-gray-600">
              Improve financial management with real-time invoicing, receivables management, and better funds
              management of NVOCC principals with real-time SOA and tracking of remittances.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <h3 class="text-lg font-semibold text-accent mb-3">Operational Efficiency</h3>
            <p class="text-gray-600">
              Achieve efficient operations by planning in advance and sharing information across all functions
              that were previously siloed, establishing standard processes across all agent operations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="custom-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-secondary mb-6">Digital Transformation for NVOCC Operations</h2>
            <p class="text-gray-700 mb-4">
              The biggest challenge for an NVOCC operator is managing their container inventory and funds across a global network.
              NVOCC operations are typically spread across different countries, necessitating local regulatory compliances and
              working with different cultures and time zones.
            </p>
            <p class="text-gray-700 mb-4">
              In today's rapidly evolving logistics industry, digital transformation is essential for NVOCC operators
              looking to streamline operations, optimize inventory, and enhance customer service.
            </p>
            <p class="text-gray-700 mb-4">
              Our digital-first approach helps NVOCC businesses overcome key challenges:
            </p>
            <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Managing cross-border operations and regulatory compliance</li>
              <li>Tracking and controlling container inventory across locations</li>
              <li>Standardizing processes across agent operations</li>
              <li>Improving financial controls and funds management</li>
              <li>Enhancing customer service with real-time information</li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-primary mb-5">eBMS NVOCC Solution Impact</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div
                    class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">40%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Sales Cycle Reduction</h4>
                  <p class="text-gray-600">Reduce sales cycle time with automated pricing and quotation processes</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">50%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Processing Time Reduction</h4>
                  <p class="text-gray-600">Cut processing time for agent SOAs and operational documentation</p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                    class="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">30%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Inventory Optimization</h4>
                  <p class="text-gray-600">Improve container utilization with better inventory management</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">90%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Real-time Visibility</h4>
                  <p class="text-gray-600">End-to-end visibility across your global NVOCC operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SolutionFeatures
        title="NVOCC Enterprise Solutions"
        subtitle="Our comprehensive digital solutions for NVOCC operations include:"
        :features="features"
    />

    <div class="py-16 bg-white">
      <div class="custom-container">
        <div class="bg-primary-light bg-opacity-10 rounded-lg p-8 md:p-12">
          <h2 class="text-2xl font-bold text-secondary mb-6">NVOCC Operational Solutions</h2>
          <p class="text-gray-700 mb-6">
            Our NVOCC solutions provide end-to-end management of your operations, from container tracking to financial reconciliation,
            helping you optimize your business and deliver better service to your customers.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">NVOCC Agency Solution</h3>
              <p class="text-gray-600 mb-4">Optimize your agency operations with integrated workflows and real-time information sharing.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Rates management and integration to documentation</li>
                <li>Integrated inventory management eliminating separate inventory updates</li>
                <li>Excel upload features for common updates</li>
                <li>Integration to EDI files where required</li>
                <li>Real-time load list and manifest from load port to discharge port</li>
                <li>Real-time SOA/PDA once the vessel sails/arrives</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">NVOCC Owners Solution</h3>
              <p class="text-gray-600 mb-4">Manage your global NVOCC operations efficiently with advanced container tracking and inventory optimization.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Timely information for inventory control</li>
                <li>Decision support for inventory repositioning</li>
                <li>Cost planning and price management with quick cost computations</li>
                <li>Efficient operations with advanced planning and cross-functional information sharing</li>
                <li>Better financial management with real-time invoicing and receivables</li>
                <li>Standard processes across all agent operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-16 bg-gray-50">
      <div class="custom-container">
        <h2 class="text-2xl font-bold text-secondary mb-10 text-center">NVOCC Demand & Customer Relationship Management</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-semibold text-primary mb-4">Enhance Sales Management</h3>
            <p class="text-gray-700 mb-6">
              With our Demand and Customer Relationship Management solution, transform your sales process and boost customer engagement:
            </p>
            <ul class="text-gray-600 space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>AI-enabled enquiry management capturing communications from email and messaging platforms</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Automated rate management and quotation processes to respond faster to customer inquiries</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Convert sales opportunities into demand forecasting for better service planning</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Track customer interactions and improve response times with analytics-driven insights</span>
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-semibold text-primary mb-4">Digital Customer Experience</h3>
            <p class="text-gray-700 mb-6">
              Enhance your customer experience with digital tools and self-service capabilities:
            </p>
            <ul class="text-gray-600 space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Customer portals for bookings, documentation, and shipment tracking</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Multi-channel communication through email, chat, and mobile applications</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Real-time status updates and notifications for improved customer service</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Integration with payment gateways for streamlined financial transactions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ClientsSection
        title="Clients Using Our NVOCC Solutions"
        :clients="clients"
    />

    <SolutionTestimonials
        title="What Our Clients Say"
        subtitle="Success stories from our NVOCC solution clients"
        :testimonials="testimonials"
        bgClass="bg-white"
    />

    <div class="py-16 bg-gray-50">
      <div class="custom-container">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-10 flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-secondary mb-4">Ready to Transform Your NVOCC Operations?</h2>
                <p class="text-gray-600 mb-6">
                  Join leading NVOCC companies who have already adopted eBMS solutions to streamline their
                  operations, optimize container inventory, and enhance customer experience. Our expert team will guide
                  you through the implementation process and ensure a seamless transition.
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
              <h3 class="text-xl font-semibold mb-6">Why Choose eBMS for NVOCC Operations?</h3>
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
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Successful implementation rate of 95%</span>
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
  title: 'NVOCC Solutions - eBMS',
  meta: [
    {
      name: 'description',
      content: 'eBMS NVOCC Solutions integrate your network into a single operating digital platform, optimizing container inventory with advanced analytics and automating agent SOA management.'
    }
  ]
})

// Define features
const features = [
  {
    title: 'Rates & Documentation Management',
    description: 'Streamline rates management with direct integration to documentation processes, eliminating duplicate data entry and ensuring accuracy across operations.',
    icon: '/images/icons/solution-1.svg'
  },
  {
    title: 'Integrated Inventory Management',
    description: 'Optimize container inventory with real-time tracking and analytics, eliminating the need for separate inventory updates and improving asset utilization.',
    icon: '/images/icons/solution-2.svg'
  },
  {
    title: 'EDI Integration & Excel Uploads',
    description: 'Simplify data exchange with EDI integration capabilities and convenient Excel upload features for common updates, reducing manual data entry.',
    icon: '/images/icons/solution-3.svg'
  },
  {
    title: 'Real-time Manifests & Load Lists',
    description: 'Access real-time load lists and manifests from load port to discharge port, improving visibility and coordination across your network.',
    icon: '/images/icons/solution-4.svg'
  },
  {
    title: 'Automated SOA/PDA Processing',
    description: 'Generate real-time SOA/PDA once vessels sail or arrive, eliminating days of manual data crunching and improving financial control.',
    icon: '/images/icons/solution-5.svg'
  },
  {
    title: 'Agent Network Management',
    description: 'Dramatically reduce transaction turnaround time by eliminating duplicate information processing activities across your agent network.',
    icon: '/images/icons/solution-6.svg'
  },
  {
    title: 'Financial Management & Tracking',
    description: 'Improve funds management with real-time SOA tracking, remittance monitoring, and integrated financial reporting for better control.',
    icon: '/images/icons/solution-7.svg'
  },
  {
    title: 'Decision Support Analytics',
    description: 'Make informed decisions with advanced analytics for inventory repositioning, cost planning, and price management in competitive market conditions.',
    icon: '/images/icons/NVOCC.svg'
  }
]

// Define clients
const clients = [
  {
    name: 'Ceekay Shipping LLC',
    logo: '/images/clients/Ceekay.jpg'
  },
  {
    name: 'Volta Container Line',
    logo: '/images/clients/volta.jpg'
  },
  {
    name: 'Vasco Goodrich Maritime',
    logo: '/images/clients/vasco.jpg'
  },
  {
    name: 'Goodrich Maritime',
    logo: '/images/clients/goodrich.jpg'
  },
  {
    name: 'Lancer Container Line',
    logo: '/images/clients/lancer.jpg'
  },
  {
    name: 'Qatar Navigation',
    logo: '/images/clients/qatar.jpg'
  },
  {
    name: 'Alligator Shipping',
    logo: '/images/clients/Alligator.jpg'
  }
]

// Define testimonials
const testimonials = [
  {
    company: "Ceekay Shipping LLC",
    logo: "/images/clients/Ceekay.jpg",
    content: [
      "Digital Transformation has been crucial to our growth strategy as an NVOCC operator.",
      "eBMS has helped us integrate our network into a single operating digital platform, optimizing our container inventory with advanced analytics.",
      "The automation of agent commercial and SOA management has eliminated days of manual data crunching, allowing us to focus on strategic growth."
    ],
    author: {
      name: "Operations Director",
      title: "Ceekay Shipping LLC, Dubai"
    }
  },
  {
    company: "Vasco Goodrich Maritime",
    logo: "/images/clients/vasco.jpg",
    content: [
      "We've been working with eBMS since 2004, and their NVOCC solutions have transformed our operations.",
      "The integrated inventory management and real-time SOA/PDA processing have significantly improved our financial control and operational efficiency.",
      "With eBMS, we've been able to standardize processes across our agent operations and deliver better service to our customers."
    ],
    author: {
      name: "Managing Director",
      title: "Vasco Goodrich Maritime, Singapore"
    }
  }
]
</script>
