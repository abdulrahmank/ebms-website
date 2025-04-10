<template>
  <div>
    <PageBanner title="Agency House Solution" customClass="shipping"/>

    <div class="custom-container">
      <Breadcrumb
          homeName="Home"
          parentPath="/shipping"
          parentName="Shipping"
          currentName="Agency House Solution"
      />

      <div class="page-header mt-6 mb-10">
        <h1 class="text-3xl font-bold mb-6 text-secondary">Agency House Solutions</h1>
        <h2 class="text-xl font-semibold mb-4 text-primary">
          Tackling your complex activities with advanced automation
        </h2>
        <p class="text-gray-600 mb-6">
          Automating multiple shipping line principal's requirements, making complex data interchange easily manageable
          with experience of integration with over 20+ shipping lines and understanding of principals' expectations gives
          eBMS the knowledge bank to fine tune our solution to help you expand business with more principals.
        </p>
      </div>

      <div class="solution-image mb-12">
        <img
            src="/images/shipping/agency-house.png"
            alt="Agency House Operations"
            class="w-full rounded-lg shadow-lg"
        />
      </div>

      <div class="solution-benefits mb-16">
        <h2 class="text-2xl font-bold text-secondary mb-6">Business Benefits</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
            <h3 class="text-lg font-semibold text-primary mb-3">Principal Integration</h3>
            <p class="text-gray-600">
              Our solution streamlines integration with multiple shipping line principals, eliminating duplicate work between
              local requirements and principal systems while providing seamless data exchange that meets principal's expectations.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent-dark">
            <h3 class="text-lg font-semibold text-accent-dark mb-3">Operational Efficiency</h3>
            <p class="text-gray-600">
              Remove redundancies due to manual recording of operations, reduce data entry by up to 70%, and improve
              cross-departmental information sharing for more efficient agency operations.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
            <h3 class="text-lg font-semibold text-secondary mb-3">Financial Management</h3>
            <p class="text-gray-600">
              Improve financial control with real-time invoicing, receivables management, and automated reconciliation of
              principal accounts, reducing revenue leakage and improving cash flow.
            </p>
          </div>

          <div class="benefit-card bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
            <h3 class="text-lg font-semibold text-accent mb-3">Customer Experience</h3>
            <p class="text-gray-600">
              Empower customers with self-service solutions for documentation, approvals, tracking, and account management,
              enhancing customer satisfaction and reducing service response times.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div class="custom-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-secondary mb-6">Digital Transformation for Agency Operations</h2>
            <p class="text-gray-700 mb-4">
              In today's competitive shipping market, agency houses need digital solutions to manage complex operations
              spanning multiple principals and service lines. eBMS provides the tools needed to modernize and automate
              these complex processes.
            </p>
            <p class="text-gray-700 mb-4">
              Our digital solutions help agency businesses overcome key challenges:
            </p>
            <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Managing multiple principal relationships and requirements</li>
              <li>Handling complex data interchange between systems</li>
              <li>Eliminating duplicate work between local and principal systems</li>
              <li>Improving information flow across all functions</li>
              <li>Enhancing financial management with real-time insights</li>
            </ul>
            <p class="text-gray-700">
              With our Demand and Customer Relationship Management solution, agency houses can convert sales opportunities into demand forecasting,
              respond faster to customer inquiries, and deliver enhanced customer experiences from the first touchpoint.
            </p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold text-primary mb-5">eBMS Agency House Solution Impact</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">40%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Sales Cycle Reduction</h4>
                  <p class="text-gray-600">Reduce sales cycle time with streamlined workflows and customer response</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">78%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Customer Conversion</h4>
                  <p class="text-gray-600">Customers buy from companies that respond to their inquiries first</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">95%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Quotation Automation</h4>
                  <p class="text-gray-600">Automated quotation process with charges, terms, and emails</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-12 h-12 bg-accent-dark rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <span class="text-white font-bold">25%</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800">Cross-Selling Increase</h4>
                  <p class="text-gray-600">Improved cross-selling capabilities through opportunity management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SolutionFeatures
        title="Agency House Enterprise Solutions"
        subtitle="Our comprehensive solutions for Agency Houses include:"
        :features="features"
    />

    <div class="py-16 bg-white">
      <div class="custom-container">
        <div class="bg-primary-light bg-opacity-10 rounded-lg p-8 md:p-12">
          <h2 class="text-2xl font-bold text-secondary mb-6">eBMS Demand & Customer Relationship Management</h2>
          <p class="text-gray-700 mb-6">
            Our integrated DCRM solution helps Agency Houses transform their sales process into a customer-centric experience
            from the first touchpoint, increasing efficiency and driving revenue growth.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Enquiry Management</h3>
              <p class="text-gray-600 mb-4">Capture and respond to all customer inquiries efficiently, converting leads into sales.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>AI-enabled email and messaging integration to capture all inquiries automatically</li>
                <li>Prevent lost inquiries - research shows 25% of inquiries are never responded to</li>
                <li>Analyze inquiry patterns to identify market trends and opportunities</li>
                <li>Route inquiries to the right team members for faster response</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Pricing & Quotation</h3>
              <p class="text-gray-600 mb-4">Accelerate your quotation process and win more business.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Reduce quotation response time from days to hours</li>
                <li>Automated RFP processes and centralized pricing databases</li>
                <li>Automatic calculation of charges for various services and terms</li>
                <li>Multi-channel quote delivery via email, chat, and portals</li>
                <li>Margin tracking and approval workflows for optimal pricing</li>
              </ul>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-primary mb-3">Sales Activities Management</h3>
              <p class="text-gray-600 mb-4">Convert sales efforts into strategic investments with comprehensive activity tracking.</p>
              <ul class="text-gray-600 space-y-2 list-disc pl-5">
                <li>Efficient planning with data insights and AI-based suggestions</li>
                <li>Quick updates increase time spent meeting with customers</li>
                <li>Track every sales touchpoint with leads, prospects, and customers</li>
                <li>Dashboard views for managers to monitor and optimize performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ClientsSection
        title="Clients Using Our Agency House Solutions"
        :clients="clients"
    />

    <SolutionTestimonials
        title="What Our Clients Say"
        subtitle="Success stories from our agency house solution clients"
        :testimonials="testimonials"
        bgClass="bg-white"
    />

    <div class="py-16 bg-gray-50">
      <div class="custom-container">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="p-10 flex items-center">
              <div>
                <h2 class="text-2xl font-bold text-secondary mb-4">Ready to Transform Your Agency Operations?</h2>
                <p class="text-gray-600 mb-6">
                  Join leading shipping agencies who have already adopted eBMS solutions to automate complex operations,
                  enhance principal relationships, and deliver superior customer experiences. Our expert team will guide
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
              <h3 class="text-xl font-semibold mb-6">Why Choose eBMS for Agency Houses?</h3>
              <ul class="space-y-4">
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Experience with 20+ shipping line integrations</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Supporting agency businesses across 51 countries</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Successful implementations with major shipping agencies</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Comprehensive DCRM and operations solution suite</span>
                </li>
                <li class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 flex-shrink-0" fill="none"
                       viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Average client relationship of 12+ years</span>
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
  title: 'Agency House Solutions - eBMS',
  meta: [
    {
      name: 'description',
      content: 'eBMS Agency House Solutions tackle complex activities with advanced automation, integrating with 20+ shipping lines and optimizing operations for shipping agents.'
    }
  ]
})

// Define features
const features = [
  {
    title: 'Multi-Principal Management',
    description: 'Manage multiple shipping line principals from a single platform, with tailored workflows for each principal\'s requirements and data formats.',
    icon: '/images/icons/Agency_house.svg'
  },
  {
    title: 'EDI & API Integration',
    description: 'Seamless data exchange with principal systems through EDI and API integration, eliminating duplicate data entry and ensuring accuracy.',
    icon: '/images/icons/solution-2.svg'
  },
  {
    title: 'Operations Management',
    description: 'Streamline vessel operations, container management, documentation, and customer service with integrated workflows and automated processes.',
    icon: '/images/icons/solution-3.svg'
  },
  {
    title: 'Documentation Automation',
    description: 'Automate document preparation, approvals, and transmission to customers, customs, and principals, reducing manual effort and errors.',
    icon: '/images/icons/solution-4.svg'
  },
  {
    title: 'Financial Management',
    description: 'Comprehensive AR/AP management with principal-specific accounting, SOA reconciliation, and financial reporting for improved cash flow.',
    icon: '/images/icons/solution-1.svg'
  },
  {
    title: 'Customer Portal Integration',
    description: 'Empower customers with self-service capabilities including online bookings, documentation, approvals, and shipment tracking.',
    icon: '/images/icons/solution-5.svg'
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain insights into operations, costs, revenue, and customer trends with detailed reporting and analytics dashboards.',
    icon: '/images/icons/solution-7.svg'
  },
  {
    title: 'Mobile Solutions',
    description: 'Access critical information and perform key tasks on the go with mobile applications for sales, operations, and management teams.',
    icon: '/images/icons/solution-6.svg'
  }
]

// Define clients
const clients = [
  {
    name: 'Alireza Shipping',
    logo: '/images/clients/alireza.jpg'
  },
  {
    name: 'Hamburg Sud India',
    logo: '/images/clients/Hamburg.jpg'
  },
  {
    name: 'Ceekay Shipping',
    logo: '/images/clients/Ceekay.jpg'
  },
  {
    name: 'K Line India',
    logo: '/images/clients/kline.jpg'
  },
  {
    name: 'Transworld',
    logo: '/images/clients/transworld.jpg'
  }
]

// Define testimonials
const testimonials = [
  {
    company: "Alireza Shipping",
    logo: "/images/clients/alireza.jpg",
    content: [
      "Digital Transformation is crucial to our core growth strategy as an agency house.",
      "eBMS has helped us manage complex operations across multiple principals with their integrated enterprise system.",
      "The automation capabilities and principal integration features have significantly improved our efficiency and allowed us to scale our business."
    ],
    author: {
      name: "Operations Director",
      title: "Alireza Shipping, Saudi Arabia"
    }
  },
  {
    company: "Hamburg Sud India",
    logo: "/images/clients/Hamburg.jpg",
    content: [
      "We are delighted to collaborate with eBMS, a company that understands the complex requirements of shipping agency operations.",
      "Their solution has helped us eliminate redundant work between our local operations and principal systems, streamlining our processes and improving information flow across all functions.",
      "The customer self-service solutions have also enhanced our client relationships and service quality."
    ],
    author: {
      name: "Managing Director",
      title: "Hamburg Sud India"
    }
  }
]
</script>
