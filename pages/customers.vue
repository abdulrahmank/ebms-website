<template>
  <div>
    <PageBanner :title="$t('customers.title')" customClass="customers" />

    <div class="custom-container">
      <Breadcrumb
          :homeName="$t('customers.breadcrumb.home')"
          :currentName="$t('customers.breadcrumb.customers')"
      />

      <SectionTitle :title="$t('customers.header')" />
    </div>

    <div class="clients-wrapper">
      <div class="custom-container">
        <div class="clients-grid">
          <ClientCard
              v-for="(client, index) in clients"
              :key="index"
              :client="client"
              :delay="index * 100"
          />
        </div>
      </div>
    </div>

    <TestimonialSection />
    <DemoSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageBanner from '~/components/PageBanner.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import TestimonialSection from '~/components/home/TestimonialSection.vue'
import DemoSection from '~/components/home/DemoSection.vue'
import ClientCard from '~/components/customers/ClientCard.vue'
import clientsData from '~/data/clients.json'

// Set meta information for the page
useHead({
  title: 'Our Customers - eBMS',
  meta: [
    { name: 'description', content: 'Major shipping and logistics business houses like JM Baxi, Alireza, Milaha, Gulf Warehousing Corporation, and many others trust eBMS Solutions.' }
  ]
})

const clients = ref(clientsData)
</script>

<style scoped>
.clients-wrapper {
  padding: 3rem 0;
  background-color: #f8f9fa;
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .clients-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .clients-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>
