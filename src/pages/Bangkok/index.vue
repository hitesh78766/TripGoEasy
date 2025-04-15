<template>
  <div>
    <div class="bg-image ">
      <div class="overlay"></div>
      <div class="image-content">
        <h2 class="main-head">Bangkok</h2>
        <p class="offer-text">
          <span class="offer-label me-1">Get upto</span>
          <span class="offer-amount">₹ 20 off</span>
        </p>

        <button class="expore-bangkok-btn">EXPLORE : Bangkok</button>

        <button class="mt-3 arrow-down"><i class="fa-solid fa-arrow-down"></i></button>
      </div>
    </div>

    <v-container>

      <div>
        <h3 class="explore-heading text-center">Explore</h3>
        <div class="explore-border"></div>

        <v-row class="mt-3">
          <v-col cols="4" v-for="(packageData, index) in holidayPackages" :key="index">
            <div class="holiday-content p-0 elevation-4">
              <div class="holiday-packages-section">
                <div>
                  <v-img height="200px" :src="packageData.image" cover class="rounded">

                    <div class="w-full p-3 d-flex justify-content-between temp-btns">
                      <p class="temp-content m-0">4 <span><i class="fa-solid fa-moon"></i></span>
                        icon/ 3<span><i class="fa-solid fa-sun"></i></span></p>
                      <p class="sale-content m-0">Best Sale!</p>
                    </div>
                  </v-img>
                </div>


                <div class="heading-seciton">
                  <h3 class="ms-2">{{ packageData.title }}</h3>
                </div>

                <div class="d-flex align-center justify-content-around included-options">
                  <div class="d-flex align-center ms-1 included-option-font"
                    v-for="(item, index) in packageData.options" :key="index">
                    <v-img :src="item.URL" width="24" height="24" class="me-2"></v-img>
                    {{ item.text }}
                  </div>
                </div>

                <div class="d-flex align-center justify-space-around mt-2">
                  <div class="d-flex align-center">
                    <span class="discount-price">{{ packageData.price }}</span>
                    <span class="main-price text-decoration-line-through ms-2">{{
                      packageData.mainPrice
                      }}</span>
                  </div>

                  <div class="d-flex align-center">
                    <i class="fa-solid fa-star me-1" style="font-size: 14px; color: yellow;"></i>
                    <p class="rating m-0" style="font-size: 14px; font-weight: 600;">{{
                      packageData.rating
                      }}
                    </p>
                    <p class="mb-0 review ms-1" style="font-size: 13px;">{{ packageData.reviews }}
                    </p>
                  </div>
                </div>

                <div class="d-flex align-center justify-content-between mt-4">
                  <!-- <div class="ms-2 mb-3 ">
                             <button class="text-uppercase explore-btn">Explore</button>
                       </div> -->

                  <router-link :to="'/destination/bangkok/' + formatTitle(packageData.title)">
                    <button class="text-uppercase ms-2 mb-3 explore-btn">Explore</button>
                  </router-link>


                  <div class="me-2 mb-3  explore-icons">
                    <i class="fa-solid fa-phone p-1"></i>
                    <i class="fa-brands fa-whatsapp p-1"></i>
                  </div>
                </div>
                
              </div>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- we call the trending Tour comonent in this -->
      <TrendingTours />

    </v-container>



  </div>
</template>

<script setup>

import TrendingTours from '@/components/TrendingTours.vue';

import { ref } from 'vue'

const holidayPackages = ref([
  {
    title: 'Baku with Absheron Tour 3N 4D',
    image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fbanner_images%2Fbanner_images1740827813_67c2eca50cedf.jpg&w=1920&q=75',
    price: '₹ 12000/-',
    mainPrice: '₹ 16900',
    rating: '4.5 / 5',
    reviews: '(354 reviews)',
    options: [
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
        text: " Hotel"
      },
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
        text: " Cab"
      },
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
        text: " Breakfast"
      },
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
        text: " Sightseeing"
      },
    ],
  },

  {
    title: 'Explore Andaman with Neil Day Trip',
    image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fbanner_images%2Fbanner_images1724845532_66cf0ddc5f3b0.jpg&w=1920&q=75',
    price: '₹ 35000/-',
    mainPrice: '₹ 16900',
    rating: '4.5 / 5',
    reviews: '(354 reviews)',
    options: [
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
        text: " Hotel"
      },
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
        text: " Cab"
      },
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
        text: " Breakfast"
      },
      {
        URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
        text: " Sightseeing"
      },
    ],
  },
])

// this is for the pehragraph
const paragraphs = [
  "Ready to explore the hottest spots of the year? Our trending and fun-filled destinations are waiting for you! Whether you crave the vibrant nightlife of Goa, the serene beauty of North East, or the cultural treasures of Himachal, we have the perfect destination to match your travel dreams.",
  "Dive into thrilling activities, enjoy mouth-watering local cuisines, and immerse yourself in unique cultural experiences. Our curated travel packages ensure you experience the best each destination has to offer, from must-see attractions to hidden gems off the beaten path.",
  "Don't miss out on the excitement! Check out our trending destinations and start planning your next fun-filled adventure today. Your perfect getaway is just a click away!"
]


// Method to format the package title for the URL
const formatTitle = (title) => {
  console.log(title, "ddjfkajd")
  return title.toLowerCase().replace(/\s+/g, '-');
};
</script>



<style scoped>
.bg-image {
  background-image: url("https://tripgoeasy.trackitinerary.com/site/images/city_icon/city_icon_1724843061_66cf0435b9cdb.jpeg");
  height: 532px;
  position: relative;
  top: 76px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 120px; */
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
.bg-image>*:not(.overlay) {
  position: relative;
  z-index: 2;
}

.image-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.main-head {
  line-height: 48px;
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 1rem;
}

.offer-label {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.offer-amount {
  font-weight: 700;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  background-color: #ca1c26b2;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.expore-bangkok-btn {
  padding: .5rem 1.25rem;
  background-color: rgba(185, 28, 28, 1);
  border-radius: .25rem;
  cursor: pointer;
  opacity: 1;
}

.arrow-down {
  background-color: #ca1c26;
  padding: 20px 12px;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 1);
}

/* second container css */

.explore-heading {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.explore-border {
  width: 110px;
  border: 2px solid #ca1c26;
  margin: auto;
  margin-top: 4px;
}

.pehra {
  font-size: 19.92px;
  line-height: 29.88px;
  font-weight: 400;
  color: rgba(73, 69, 69, 1);
}
</style>