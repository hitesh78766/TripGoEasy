<template>
  <v-app class="v-application">
    <v-main>

      <v-container>
        <Header />
      </v-container> 

      <!-- router view code  -->
      <router-view /> 

      <Footer />

    </v-main>
  </v-app>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
.v-application {
    background-color: white;
    color: #000;
}
</style>
