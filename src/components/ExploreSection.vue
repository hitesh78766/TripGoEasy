<template>
  <div class="bg-image">
    <div class="overlay"></div>

    <!-- Heading -->
    <div class="image-main-heading">
      <h2 class="travel-dreams mt-5">Empowering Your Travel Dreams</h2>
    </div>

    <!-- Animated Text -->
    <div class="animation-container mb-4">
      <transition name="slide-fade" mode="out-in">
        <p class="animation-text" :key="currentText">{{ currentText }}</p>
      </transition>
    </div>

    <p class="text-center travel-exp">
      Curating Unparalleled Travel Experiences, One Journey at a Time
    </p>

    <!-- Tabs -->
    <div class="d-flex align-center justify-center text-uppercase py-3 px-3">
      <div class="px-4 py-1 rounded-pill" :class="selectedTab === 'Tour' ? 'bg-light' : 'hover-btn'"
        @click="selectedTab = 'Tour'">
        <p :class="selectedTab === 'Tour' ? 'text-dark' : 'text-light'" class="m-0 font-weight-regular btn-option">Tour
        </p>
      </div>

      <div class="px-4 py-1 rounded-pill" :class="selectedTab === 'Activities' ? 'bg-light' : 'hover-btn'"
        @click="selectedTab = 'Activities'">
        <p :class="selectedTab === 'Activities' ? 'text-dark' : 'text-light'"
          class="m-0 font-weight-regular btn-option">Activities</p>
      </div>

      <div class="px-4 py-1 rounded-pill" :class="selectedTab === 'Flight' ? 'bg-light' : 'hover-btn'"
        @click="selectedTab = 'Flight'">
        <p :class="selectedTab === 'Flight' ? 'text-dark' : 'text-light'" class="m-0 font-weight-regular btn-option">
          Flight</p>
      </div>

      <div class="px-4 py-1 rounded-pill" :class="selectedTab === 'Railway' ? 'bg-light' : 'hover-btn'"
        @click="selectedTab = 'Railway'">
        <p :class="selectedTab === 'Railway' ? 'text-dark' : 'text-light'" class=" m-0 font-weight-regular btn-option">
          Railway</p>
      </div>
    </div>

    <!-- Diaplay the tabs by conditionally -->
    <div class="d-flex align-center justify-center">
      <template v-if="selectedTab === 'Tour'">
        <input type="text" class="bg-light rounded-pill input-box" placeholder="Search for Himachal" />
        <div class="search-icon">
          <i class="fas fa-search"></i>
        </div>
      </template>

      <template v-else-if="selectedTab === 'Activities'">
        <div class="d-flex align-center justify-content-between activity-section">

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/herolocation.svg" alt="">
              <div>
                <p class="m-0 tabs-text">Location</p>
                <div>
                  <input class="activity-input" type="text" placeholder="Where are you going">
                </div>
              </div>
            </div>
          </div>

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/HeroDate.svg" alt="">
              <div>
                <p class="m-0 ms-1 me-5 tabs-text">Date</p>
              </div>
            </div>
          </div>

          <div>
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/HeroBag.svg" alt="">
              <div>
                <p class="m-0 tabs-text">No. of Person</p>
                <div>
                  <p class="m-0 activity-input">1 Adult 1 Child</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="d-flex align-center">
              <button class="text-uppercase search-now-btn">Search Now</button>
            </div>
          </div>


        </div>
      </template>

      <template v-else-if="selectedTab === 'Flight'">

        <div class="d-flex align-center justify-content-between position-relative activity-section">

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/herolocation.svg" alt="">
              <div>
                <p class="m-0 tabs-text">From</p>
                <div>
                  <input class="activity-input" type="text" placeholder="Where you Start">
                </div>
              </div>
            </div>
          </div>

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/herolocation.svg" alt="">
              <div>
                <p class="m-0 tabs-text">TO</p>
                <div>
                  <input class="activity-input" type="text" placeholder="Where you going ?">
                </div>
              </div>
            </div>
          </div>

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/HeroDate.svg" alt="">
              <div>
                <p class="m-0 ms-1 me-3 tabs-text">Date</p>
              </div>
            </div>
          </div>

          <div>
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/HeroBag.svg" alt="">
              <div>
                <p class="m-0 tabs-text">No. of Person</p>
                <div>
                  <p class="m-0 activity-input">2 Adult 1 Child</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="d-flex align-center">
              <button class="text-uppercase search-now-btn">Search Now</button>
            </div>
          </div>

        </div>
        <p class="text-uppercase coming-soon-text">Coming Soon</p>
      </template>

      <template v-else-if="selectedTab === 'Railway'">
        <div class="d-flex align-center justify-content-between position-relative activity-section">

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/herolocation.svg" alt="">
              <div>
                <p class="m-0 tabs-text">From</p>
                <div>
                  <input class="activity-input" type="text" placeholder="Where you Start">
                </div>
              </div>
            </div>
          </div>

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/herolocation.svg" alt="">
              <div>
                <p class="m-0 tabs-text">TO</p>
                <div>
                  <input class="activity-input" type="text" placeholder="Where you going ?">
                </div>
              </div>
            </div>
          </div>

          <div style="border-right: 1px solid #01008036;">
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/HeroDate.svg" alt="">
              <div>
                <p class="m-0 ms-1 me-3 tabs-text">Date</p>
              </div>
            </div>
          </div>

          <div>
            <div class="d-flex align-center">
              <img src="https://tripgoeasy.com/Assets/Icons/HeroBag.svg" alt="">
              <div>
                <p class="m-0 tabs-text">No. of Person</p>
                <div>
                  <p class="m-0 activity-input">2 Adult 1 Child</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="d-flex align-center">
              <button class="text-uppercase search-now-btn">Search Now</button>
            </div>
          </div>

        </div>
        <p class="text-uppercase coming-soon-text">Coming Soon</p>
      </template>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const texts = ref(["Explore", "Connect", "Thrive", "Memories"]);
const currentIndex = ref(0);
const currentText = computed(() => texts.value[currentIndex.value]);

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.value.length;
  }, 6000);
});

// this is for to change the bg of tabs and also change the content
const selectedTab = ref('Tour');

</script>

<style scoped>
/* existing CSS from your design (no change) */

.bg-image {
  background-image: url("https://tripgoeasy.com/Assets/Images/hero_banner.jpg");
  height: 532px;
  position: relative;
  top: 76px;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.bg-image>*:not(.overlay) {
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

/* conditionally tabs css  */

.activity-section {
  background-color: rgba(246, 246, 246, 1);
  border-radius: .375rem;
  width: 60%;
  margin-top: 30px;
  padding: .75rem 1.25rem;

}

.activity-section img {
  width: 1.5rem;
  height: 1.5rem;
}

.activity-input {
  color: rgba(158, 158, 158, 1);
  font-size: 10px;
  padding-top: .25rem;
  padding-bottom: .25rem;
  border: 0 solid #e5e7eb;
}

.tabs-text {
  color: rgba(0, 0, 0, 1);
  opacity: 1;
  font-size: 12.5px;
  font-weight: 500;
}

.person-text {
  color: rgba(158, 158, 158, 1);
  font-size: 10px;
}

.search-now-btn {
  color: rgba(255, 255, 255, 1);
  opacity: 1;
  font-size: 12px;
  padding: 6px .75rem;
  background-color: rgba(202, 28, 38, 1);
  border-radius: .25rem;
}

.coming-soon-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  top: 30px;
  color: white;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  background-color: #00000080;
  padding: 1.1rem 1.25rem
}
</style>
