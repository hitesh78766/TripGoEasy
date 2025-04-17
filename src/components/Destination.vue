<template>
    <div class="destination mt-5">
        <v-row>

            <v-col cols="6" class="d-flex align-center r">
                <div class="d-flex ">
                    <div class="border"></div>
                    <h3 class="heading ms-4">
                        Top Trending <br>
                        <span style="color: #ca1c26;">Destinations</span> For You
                    </h3>
                </div>
            </v-col>

            <v-col cols="6">
                <p class="text-body-1">
                    Ready to discover the most sought-after travel spots of the year?
                    Our top trending destination tour packages offer unparalleled experiences, curated to perfection for
                    the modern explorer.
                    From the pristine beaches of Bali to the vibrant streets of Tokyo, each package is designed to
                    immerse you in the unique culture, stunning landscapes, and unforgettable adventures these
                    destinations have to offer.
                </p>
            </v-col>


            <v-col cols="12">
                <div class="destination-text mb-3">
                    Whether you're craving a tropical getaway, a cultural escapade, or an urban adventure, our expertly
                    crafted itineraries cater to every traveler's dream. Enjoy luxury accommodations, guided tours, and
                    exclusive access to local attractions, ensuring a hassle-free and memorable journey.
                </div>

                <div class="destination-text">
                    Whether you're craving a tropical getaway, a cultural escapade, or an urban adventure, our expertly
                    crafted itineraries cater to every traveler's dream. Enjoy luxury accommodations, guided tours, and
                    exclusive access to local attractions, ensuring a hassle-free and memorable journey.
                </div>
            </v-col>

            <v-row>
                <v-col cols="6">
                    <v-col cols="12" v-for="item in data.slice(0,3)" :key="item.id" class="p-2">
                        <div class="images-section" :style="{ backgroundImage: `url(${item.main_image})` }">
                            <div class="overlay"></div>
                            <p class="image-text m-0">
                                {{ item.name }}
                            </p>
                        </div>
                    </v-col>
                </v-col>

                <v-col cols="6" style="overflow: hidden;">
                    <v-row>
                        <!-- Loop over columns for each set of images -->
                        <v-col v-for="(column, colIndex) in imageColumns" :key="colIndex" cols="4">
                            <!-- Loop through each image in the column -->
                            <div v-for="(image, index) in column" :key="index" class="mb-2"
                                :style="{ height: image.height }">
                                <img :src="image.src" :alt="image.alt" class="images w-100 h-100" />
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

        </v-row>
    </div>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue'
import { da } from 'vuetify/locale';



const data = ref([]);

const fetchCity = async () => {
    const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/package_category_with_city")
    // console.log("the city is :", response.data.data.data)
    data.value = response.data.data.data
    // console.log("the data is :", data.value)
}

fetchCity()


const imageColumns = ref([
    [
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1728297994_6703bc0a496ba.jpg&w=2048&q=75", alt: "Image 1", height: "26vh" },
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724676955_66cc7b5b79944.JPG&w=2048&q=75", alt: "Image 2", height: "33vh" },
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1728297994_6703bc0a496ba.jpg&w=2048&q=75", alt: "Image 1", height: "26vh" },
    ],
    [
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724676955_66cc7b5b79944.JPG&w=2048&q=75", alt: "Image 3", height: "33vh" },
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1728297994_6703bc0a496ba.jpg&w=2048&q=75", alt: "Image 4", height: "26vh" },
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724847808_66cf16c089c36.jpg&w=2048&q=75", alt: "Image 4", height: "26vh" },
    ],
    [
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1728297994_6703bc0a496ba.jpg&w=2048&q=75", alt: "Image 5", height: "26vh" },
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724847808_66cf16c089c36.jpg&w=2048&q=75", alt: "Image 6", height: "33vh" },
        { src: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724676955_66cc7b5b79944.JPG&w=2048&q=75", alt: "Image 5", height: "26vh" },
    ],
    
])


</script>

<style>
.heading {
    font-size: 35px;
    font-weight: 600;
    line-height: 1.6;
}

.border {
    width: 5px;
    background: #ca1c26;
}

.text-body-1 {
    font-size: 1.1rem !important;
}

.destination-text {
    font-size: 1.1rem;
}

.images-section {
    position: relative;
    background-image: url("https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724848009_66cf1789bd973.jpg&w=2048&q=75");
    height: 25.3vh;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    /* dark overlay */
}

.image-text {
    position: absolute;
    top: 82%;
    left: 14%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 22px;
    font-weight: 900;
    text-align: center;
}

.images {
    border-radius: 15px;
    object-fit: cover;
}
</style>
