<template>
  <div class="bg-image">
    <!-- Overlay -->
    <div class="overlay"></div>

    <!-- Main Content -->
    <div class="image-main-heading">
      <h2 class="travel-dreams mt-5">Empowering Your Travel Dreams</h2>
    </div>

    <div class="animation-container mb-4">
        <transition name="slide-fade" mode="out-in">
          <p class="animation-text" :key="currentText">{{ currentText }}</p>
        </transition>
    </div>

    <p class="text-center travel-exp">
      Curating Unparalleled Travel Experiences, One Journey at a Time
    </p>

    <!-- Buttons -->
    <div class="d-flex align-center justify-center text-uppercase py-3 px-3">
      <div class="px-4 py-1 bg-light rounded-pill">
        <p class="text-dark m-0 font-weight-regular btn-option">Tour</p>
      </div>

      <div class="px-4 py-1 hover-btn">
        <p class="text-light m-0 font-weight-regular btn-option">Activitis</p>
      </div>

      <div class="px-4 py-1 hover-btn">
        <p class="text-light m-0 font-weight-regular btn-option">Flight</p>
      </div>

      <div class="px-4 py-1 hover-btn">
        <p class="text-light m-0 font-weight-regular btn-option">Railway</p>
      </div>
    </div>

    <!-- Search Box -->
    <div class="d-flex align-center justify-center">
      <input type="text" class="bg-light rounded-pill input-box" placeholder="Search for Himachal">
      <div class="search-icon">
        <i class="fas fa-search"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const texts = ref(["Explore", "Connect", "Thrive", "Memories"]);

const currentIndex = ref(0);
// Get current text based on the index
const currentText = computed(() => texts.value[currentIndex.value]);

// Change text every 6 seconds
onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.value.length;
  }, 6000);
});
</script>

<style scoped>
.bg-image {
  background-image: url("https://tripgoeasy.com/Assets/Images/hero_banner.jpg");
  height: 532px;
  position: relative;
  top: 76px;
  overflow: hidden;
}

/* Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Content Above Overlay */
.bg-image > *:not(.overlay) {
  position: relative;
  z-index: 2;
}

.image-main-heading {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.travel-dreams {
  line-height: 48px;
  font-weight: 600;
  font-size: 50px;
}

/* Animation for text */
.animation-container {
  text-align: center;
  overflow: hidden;
  height: 100px;
  padding-bottom: 120px;
}

.slide-fade-enter-active {
  animation: slideIn 2s ease-out forwards;
}

.slide-fade-leave-active {
  animation: slideOut 2s ease-in forwards;
}

@keyframes slideIn {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

.animation-text {
  font-size: 93px;
  font-weight: 700;
  color: white;
  text-align: center;
}

.travel-exp {
  color: white;
  font-size: 1.2rem;
  text-decoration: underline;
  text-decoration-color: rgba(202, 28, 38, 1);
  text-underline-offset: 10px;
}

.btn-option {
  font-size: 20px;
}

.input-box {
  width: 60%;
  margin-top: 30px;
  padding: 18px;
  text-align: center;
  background-color: #f8f9fa;
  color: black;
}

.search-icon {
  position: absolute;
  right: 22%;
  top: 67%;
  transform: translateY(-50%);
  color: gray;
  font-size: 18px;
}

/* Hover Effect */
.hover-btn:hover {
  background-color: #ffffff;
  border-radius: 50px;
}

.hover-btn:hover .btn-option {
  color: black !important;
}
</style>
