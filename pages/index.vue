<template>
  <div>
    <BannerCarousel />
    <HomeSolutions />
    <GrowthBlock />
    <TestimonialSection />
    <LeadersBlock />
    <DemoSection />
  </div>
</template>

<script setup>
import BannerCarousel from '~/components/home/BannerCarousel.vue'
import HomeSolutions from '~/components/home/HomeSolutions.vue'
import GrowthBlock from '~/components/home/GrowthBlock.vue'
import TestimonialSection from '~/components/home/TestimonialSection.vue'
import LeadersBlock from '~/components/home/LeadersBlock.vue'
import DemoSection from '~/components/home/DemoSection.vue'

// Set meta information for the page
useHead({
  title: 'eBMS - Digital Solutions for Shipping and Logistics',
  meta: [
    { name: 'description', content: 'eBMS provides digital solutions for transportation and logistics organizations, helping increase efficiency and improve customer experience.' }
  ]
})
</script>
