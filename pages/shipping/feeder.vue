<template>
  <div>
    <PageBanner title="Feeder Solution" customClass="shipping"/>

    <div class="custom-container">
      <Breadcrumb
          homeName="Home"
          parentPath="/shipping"
          parentName="Shipping"
          currentName="Feeder Solution"
      />

      <div class="page-header mt-6 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-secondary">Feeder Solutions</h1>
        <h2 class="text-xl font-semibold mb-4 text-primary">
          Optimizing vessel port time with Digital technology & seamless information flow to all stakeholders
        </h2>
        <p class="text-gray-600 mb-6">
          Our feeder solutions empower vessel operations with automated workflows, digital integration,
          and real-time monitoring. With vessel capacity optimization and seamless agency network integration,
          you can achieve greater efficiency and reduce port times. Our digital solutions support pricing,
          direct price publishing to customers, and comprehensive port integration with various formats
          including UNEDI, XML, JSON, CSV, TXT, and Excel.
        </p>
      </div>

      <div class="solution-image mb-12">
        <img
            src="/images/shipping/feeder-solution.jpg"
            alt="Feeder Operations"
            class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="solution-benefits mb-16">
        <h2 class="text-2xl font-bold text-secondary mb-6">Business Benefits</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
            <h3 class="text-lg font-semibold text-primary mb-3">Operational Efficiency</h3>
            <p class="text-gray-600">
              Remove redundancies due to manual recording of operations. Automate vessel schedules,
              berthing reports, and cargo manifests for streamlined processes and reduced human error.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-dark">
            <h3 class="text-lg font-semibold text-accent-dark mb-3">Enhanced Coordination</h3>
            <p class="text-gray-600">
              Efficient operations by planning in advance, sharing information across all functions
              that were siloed earlier. Break down departmental barriers and enable seamless collaboration.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <h3 class="text-lg font-semibold text-secondary mb-3">Financial Management</h3>
            <p class="text-gray-600">
              Better financial management due to real-time invoicing and receivables management.
              Reduce billing cycles, minimize disputes, and improve cash flow through automated financial processes.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <h3 class="text-lg font-semibold text-accent mb-3">Stakeholder Communication</h3>
            <p class="text-gray-600">
              Improve relationships with ports, terminals, agents, and customers through transparent,
              real-time sharing of critical operational information, schedules, and updates.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="custom-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-secondary mb-6">Digital Transformation for Feeder Operations</h2>
            <p class="text-gray-700 mb-4">
              In the rapidly evolving shipping industry, digital transformation is essential for feeder operators
              looking to optimize vessel operations, reduce port times, and improve stakeholder communication.
            </p>
            <p class="text-gray-700 mb-4">
              Our vessel operations solution takes care of the commercial operations and performance analysis
              for small to medium vessel fleet owners. The commercial module helps estimate vessel profitability
              before fixtures of vessels, with tariffs for numerous ports already available to make estimations
              quicker and improve response rates.
            </p>
            <p class="text-gray-700 mb-4">
              With minimal data entry requirements through Excel uploads or EDI integration, vessel performance
              and berthing information is captured easily and can be used to track performance metrics. Alerts
              based on performance parameters enable timely course correction, while seamless integration with
              eBMS Accounts ensures no duplicate data entry or reconciliation issues.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-primary mb-5">eBMS Feeder Solution Impact</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div
                    class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">30%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Reduced Port Time</h4>
                  <p class="text-gray-600">Decrease vessel turnaround time through optimized scheduling and operations</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">60%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Paperwork Reduction</h4>
                  <p class="text-gray-600">Minimize manual documentation through digital workflows</p>
                </div>
              </div>
              <div class="flex items-start">
                <div
                    class="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">40%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Improved Coordination</h4>
                  <p class="text-gray-600">Better coordination with port authorities and customers</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">20%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Cost Savings</h4>
                  <p class="text-gray-600">Reduce operational costs through optimized vessel utilization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SolutionFeatures
        title="Feeder Operations Enterprise Solutions"
        subtitle="Digital Technology Feeder Solutions that enhance:"
        :features="features"
    />

    <div class="py-16 bg-white">
      <div class="custom-container">
        <div class="bg-primary-light bg-opacity-10 rounded-lg p-8 md:p-12">
          <h2 class="text-2xl font-bold text-secondary mb-6">Commercial Operations & Vessel Management</h2>
          <p class="text-gray-700 mb-6">
            Our integrated feeder solutions provide comprehensive tools for managing commercial operations
            and optimizing vessel performance.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Voyage Planning & Management</h3>
              <p class="text-gray-600 mb-4">Streamline voyage planning with integrated scheduling, cost estimation, and performance monitoring tools.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Pre-voyage profitability estimation</li>
                <li>Schedule optimization and management</li>
                <li>Route planning and optimization</li>
                <li>Real-time performance tracking</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Port & Terminal Operations</h3>
              <p class="text-gray-600 mb-4">Optimize port operations with digital integration and real-time coordination.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>EDI integration with port systems</li>
                <li>Automated berthing reports</li>
                <li>Streamlined cargo operations</li>
                <li>Terminal coordination and updates</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Commercial Management</h3>
              <p class="text-gray-600 mb-4">Enhance commercial operations with integrated pricing, quotation, and contract management.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Automated tariff management</li>
                <li>Direct price publishing to customers</li>
                <li>Slot/space allocation management</li>
                <li>Integrated invoicing and financial management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-16 bg-gray-50">
      <div class="custom-container">
        <h2 class="text-2xl font-bold text-secondary mb-10 text-center">Demand & Customer Relationship Management</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-semibold text-primary mb-4">Transform Sales Effort into Investment</h3>
            <p class="text-gray-700 mb-6">
              With our Sales Activities Management Module, transform your sales process from a cost center to an investment:
            </p>
            <ul class="text-gray-600 space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Effective sales activities planning with data insights and AI-based suggestions</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Enable sales teams to plan, track, update, and review in minutes</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Record every sales touch point with leads, prospects, and repeat customers</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Enhance sales review effectiveness with dashboards and target tracking</span>
              </li>
            </ul>
          </div>
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-xl font-semibold text-primary mb-4">Convert Sales Opportunities to Demand Forecasting</h3>
            <p class="text-gray-700 mb-6">
              Our Opportunities Management Module transforms sales data into actionable forecasts:
            </p>
            <ul class="text-gray-600 space-y-3">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Cross-selling opportunities can increase conversion by up to 25%</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Convert opportunities into demand forecasts for better service planning</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Enable collaboration with all stakeholders through shared insights</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Automate opportunity actioning with dashboards for all stakeholders</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <ClientsSection
        title="Clients Using Our Feeder Solutions"
        :clients="clients"
    />

    <SolutionTestimonials
        title="What Our Clients Say"
        subtitle="Success stories from our feeder solution clients"
        :testimonials="testimonials"
        bgClass="bg-white"
    />

    <div class="py-16 bg-gray-50">
      <div class="custom-container">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-10 flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-secondary mb-4">Ready to Optimize Your Feeder Operations?</h2>
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
              <h3 class="text-xl font-semibold mb-6">Why Choose eBMS for Feeder Operations?</h3>
              <ul class="space-y-4">
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Successfully implemented for feeder operators in the Middle East region</span>
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
                  <span>Comprehensive port integration with various formats including UNEDI, XML, JSON</span>
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
  title: 'Feeder Solutions - eBMS',
  meta: [
    {
      name: 'description',
      content: 'eBMS Feeder Solutions optimize vessel port time with digital technology & seamless information flow to all stakeholders, improving efficiency and reducing operational costs.'
    }
  ]
})

// Define features
const features = [
  {
    title: 'Vessel Capacity Optimization',
    description: 'Maximize vessel utilization with advanced capacity planning tools, optimizing load factors and reducing empty slots for improved profitability.',
    icon: '/images/icons/solution-1.svg'
  },
  {
    title: 'Port Integration',
    description: 'Seamless integration with port systems through multiple formats including EDI, XML, JSON, CSV, and more for streamlined operations and reduced turnaround times.',
    icon: '/images/icons/solution-2.svg'
  },
  {
    title: 'Agency Network Integration',
    description: 'Connect your entire agency network with integrated workflows that enable real-time information sharing and collaboration across locations.',
    icon: '/images/icons/solution-3.svg'
  },
  {
    title: 'Pricing & Customer Portal',
    description: 'Streamline pricing management with direct publishing to customers or through integrated customer portals, improving transparency and response times.',
    icon: '/images/icons/solution-4.svg'
  },
  {
    title: 'Real-time Performance Monitoring',
    description: 'Track vessel performance metrics in real-time with automated alerts that enable timely interventions and continuous improvement.',
    icon: '/images/icons/solution-5.svg'
  },
  {
    title: 'Integrated Financial Management',
    description: 'Seamless integration with eBMS Accounts ensures no duplicate data entry and eliminates reconciliation issues for improved financial control.',
    icon: '/images/icons/solution-6.svg'
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Leverage advanced analytics and reporting tools to gain insights into operational performance, identify trends, and make data-driven decisions.',
    icon: '/images/icons/solution-7.svg'
  },
  {
    title: 'Mobile Accessibility',
    description: 'Access critical information and perform key operations on-the-go with mobile-optimized interfaces for improved response times and flexibility.',
    icon: '/images/icons/Global_freight.svg'
  }
]

// Define clients
const clients = [
  {
    name: 'Safeen',
    logo: '/images/clients/safeen.jpg'
  },
  {
    name: 'Milaha Line',
    logo: '/images/clients/milaha.jpg'
  },
  {
    name: 'Asyad Line',
    logo: '/images/clients/asyad-line.jpg'
  },
  {
    name: 'Sealead',
    logo: '/images/clients/sealead.jpg'
  }
]

// Define testimonials
const testimonials = [
  {
    company: "Safeen Feeder",
    logo: "/images/clients/safeen.jpg",
    content: [
      "The eBMS Feeder Solution has significantly improved our vessel operations and port coordination.",
      "With digital integration and real-time performance tracking, we've reduced port times and improved overall efficiency.",
      "The comprehensive vessel management tools have allowed us to optimize our operations and deliver better service to our customers."
    ],
    author: {
      name: "Operations Director",
      title: "Safeen Feeder, Abu Dhabi"
    }
  },
  {
    company: "Milaha Line",
    logo: "/images/clients/milaha.jpg",
    content: [
      "We have been working with eBMS for several years now, and their feeder solutions have transformed our operations.",
      "The integration capabilities with port systems and our agency network have streamlined our workflows and reduced manual interventions.",
      "We particularly value the commercial management tools that have helped us optimize our pricing and improve customer satisfaction."
    ],
    author: {
      name: "Head of Commercial",
      title: "Milaha Line, Qatar"
    }
  }
]
</script>
