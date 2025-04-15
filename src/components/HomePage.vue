<template>
    <ExploreSection />

    <v-container class="mt-5">   
      <Destination  />
      <Discount class="mt-5" />
      <ActivityCategory class="mt-5" />
      <HolidayPackages class="mt-3" /> 
      <InternationalPackage class="mt-5" />    
      <BestDeals class="mt-5" />      
    </v-container>

    <AboutSection class="mt-5" />

  </template>
  
  <script setup>
  import ExploreSection from '@/components/ExploreSection.vue'
  import Destination from '@/components/Destination.vue'
  import Discount from '@/components/Discount.vue'
  import ActivityCategory from '@/components/ActivityCategory.vue'
  import HolidayPackages from '@/components/HolidayPackages.vue'
  import InternationalPackage from '@/components/InternationalPackage.vue'
  import BestDeals from '@/components/BestDeals.vue'
  import AboutSection from '@/components/AboutSection.vue'
  </script>
  