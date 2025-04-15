<template>
    <div>

        <v-container class="">
            <v-container class="p-0">
                <Discount class="mt-3"/>

                <v-row class="mt-4">
                    <v-col cols="4">
                        <VRow>
                            <v-col cols="12">
                                <div class="d-flex ">
                                    <div class="border"></div>
                                    <h3 class="heading ms-2">
                                        Trending <br>Best Selling <br>
                                        <span style="color: #ca1c26;">Tours And</span> Fun
                                        <span style="color: #ca1c26;">Categories</span>
                                    </h3>
                                </div>
                            </v-col>

                            <!-- we write the loop for the pehragraph -->
                            <v-row class="pb-6">
                                <v-col cols="12" v-for="(item, index) in paragraphs" :key="index">
                                    <p class="mb-0 pehra">{{ item }}</p>
                                </v-col>
                            </v-row>


                        </VRow>
                    </v-col>


                    <v-col cols="8">
                        <v-row>
                            <v-col cols="6" v-for="(packageData, index) in holidayPackages" :key="index">
                                <div class="holiday-content p-0 elevation-4">
                                    <div class="animated-container">
                                        <div class="holiday-packages-section">
                                        <div>
                                            <v-img height="200px" :src="packageData.image" cover class="rounded">

                                                <div class="w-full p-3 d-flex justify-content-between temp-btns">
                                                    <p class="temp-content m-0">4 <span><i
                                                                class="fa-solid fa-moon"></i></span>
                                                        icon/ 3<span><i class="fa-solid fa-sun"></i></span></p>
                                                    <p class="sale-content m-0">Best Sale!</p>
                                                </div>
                                            </v-img>
                                        </div>


                                        <div class="heading-seciton">
                                            <h3 class="ms-2">{{ packageData.title }}</h3>
                                        </div>

                                        <div class="d-flex align-center justify-content-evenly included-options">
                                            <div class="d-flex align-center ms-1 included-option-font"
                                                v-for="(item, index) in packageData.options" :key="index">
                                                <v-img :src="item.URL" width="24" height="24" class="me-2"></v-img>
                                                {{ item.text }}
                                            </div>
                                        </div>

                                        <div class="d-flex align-center justify-content-around mt-2">
                                            <div class="d-flex align-center">
                                                <span class="discount-price">{{ packageData.price }}</span>
                                                <span class="main-price text-decoration-line-through ms-2">{{
                                                    packageData.mainPrice
                                                    }}</span>
                                            </div>

                                            <div class="d-flex align-center">
                                                <i class="fa-solid fa-star me-1"
                                                    style="font-size: 14px; color: yellow;"></i>
                                                <p class="rating m-0" style="font-size: 14px; font-weight: 600;">{{
                                                    packageData.rating
                                                    }}
                                                </p>
                                                <p class="mb-0 review ms-1" style="font-size: 13px;">{{
                                                    packageData.reviews }}
                                                </p>
                                            </div>
                                        </div>

                                        <div class="d-flex align-center justify-content-between mt-4">
                                            <div class="ms-2 mb-3 ">
                                                <button class="text-uppercase explore-btn">Explore</button>
                                            </div>

                                            <div class="me-2 mb-3  explore-icons">
                                                <i class="fa-solid fa-phone p-1"></i>
                                                <i class="fa-brands fa-whatsapp p-1"></i>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>


                <div>
                    <v-row justify="end">

                        <v-col cols="6">
                            <p class="p-0 budget-pehra">Affordable <strong>adventures</strong>, our Pocket Friendly
                                Guarantee ensures <br> unforgettable <span style="color: #ca1c26;">budget-friendly
                                    tours.</span></p>
                        </v-col>
                        <v-col cols="6" class="d-flex justify-end">
                            <div class="d-flex align-center">
                                <div>
                                    <button class="ph-no">+91 9015404151</button>
                                </div>
                                <div>
                                    <button class="ms-5" style="height: 100%; padding: 10px 15px;">
                                        <i class="fa-brands fa-whatsapp whats-app-icon" style="font-size: 36px;"></i>
                                    </button>
                                </div>
                            </div>
                        </v-col>


                    </v-row>
                </div>

            </v-container>
        </v-container>



    </div>
</template>

<script setup>

import Discount from '@/components/Discount.vue';

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

</script>

<style scoped>
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

.budget-pehra {
    font-size: 23px;
    font-weight: 500;
    line-height: 30px;
}

.ph-no {
    background-color: #ca1c26;
    border-radius: .25rem;
    height: 100%;
    color: rgba(255, 255, 255, 1);
    padding: 14px 35px;
}

.whats-app-icon{
    width: 51px;
    height: 51px !important;
    background-color: rgba(100, 177, 97, 1);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .25rem;
}

</style>


