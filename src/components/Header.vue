<template>
    <section class="header-section">

        <v-row>
            <v-col xs="12" sm="6" md="2" lg="2" class="header-text">
                <router-link to="/">
                    <img src="https://tripgoeasy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.3499e12d.png&w=1920&q=75"
                    alt="" class="tripGoEasyImage">
                </router-link>
            </v-col>

            <v-col xs="12" sm="6" md="8" lg="8" class="header-text d-flex justify-content-start align-items-center">
                <div class="d-flex align-items-center justify-content-center">
                    <h5 class="newLaunchText m-0"> NEW LAUNCHES: &nbsp;</h5>
                    <p class="launch-text m-0 "> JODHPUR, RISHIKESH, JAIPUR, MCLEODGANJ & AMRITSAR </p>
                </div>
            </v-col>


            <v-col xs="12" sm="12" md="2" lg="2" class="header-text d-flex align-items-center justify-content-end ">
                <button class="enquery-btn">
                    <span>Enquery</span>
                    <span>
                        <img src="https://tripgoeasy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdownarrow.9ed52b8d.gif&w=750&q=75"
                            alt="" class="enquery-btn-image ">
                    </span>
                </button>
            </v-col>
        </v-row>

        <v-row class="explore-btns">

            <v-col lg="1" class="p-0">
                <button>
                    <img src="https://tripgoeasy.com/Assets/Icons/places/explore.svg" alt="" class="image">
                    <p class="text-decoration-underline">Explore All</p>
                </button>
            </v-col>

            <v-col lg="1" class="p-0" v-for="(item) in data" :key="item.id">
                <router-link :to="`/state/${item.name.toLowerCase()}`">
                    <button>
                        <img :src="item.main_image" alt="" class="image">
                        <p class="text-dark fw-normal place-name">{{ item.name }}</p>
                    </button>
                </router-link>
            </v-col>

            <v-col cols="12" md="2">
                <div class="multibleBtns">
                    <a href="">Tour</a>
                    <button class="activities-btn">Activities</button>
                </div>
            </v-col>

        </v-row>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios';

// const data = ref(
//     [

//         {
//             id: 1,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724843025_66cf041115373.png&w=256&q=75",
//             text: "Bangkok"
//         },

//         {
//             id: 2,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724481008_66c97df04a1b0.png&w=256&q=75",
//             text: "Andaman"
//         },

//         {
//             id: 3,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724488009_66c9994919144.png&w=256&q=75",
//             text: "Kashmir"
//         },

//         {
//             id: 4,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724843801_66cf07193cdf4.png&w=256&q=75",
//             text: "Bali"
//         },

//         {
//             id: 5,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724480959_66c97dbf00ca4.png&w=256&q=75",
//             text: "Himachal"
//         },

//         {
//             id: 6,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724426323_66c8a853f3b01.png&w=256&q=75",
//             text: "Uttrakhand"
//         },

//         {
//             id: 7,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724481322_66c97f2a688b7.png&w=256&q=75",
//             text: "Kerala"
//         },

//         {
//             id: 8,
//             URL: "https://tripgoeasy.trackitinerary.com/site/images/city_images/city_image_1724412028_66c8707cdfe0d.svg",
//             text: "Goa"
//         },
//         {
//             id: 9,
//             URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_images%2Fcity_image_1724481679_66c9808f9bb57.png&w=256&q=75",
//             text: "Rajasthan"
//         },


//     ]
// )

const data = ref([]);

const fetchHeaderCities = async() =>{
    const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/package_category_with_city_tge")
    // console.log("the header  response is :" , response.data.data)
    data.value = response.data.data
    // console.log("the data value is :" , data.value)
}

fetchHeaderCities()
</script>

<style>
.header-section {
    height: 85px;
    border-bottom: 1px solid rgba(16, 25, 53, .1);
    align-items: center;
}

.tripGoEasyImage {
    height: 70px;
    width: auto;
}


.newLaunchText {
    color: #ca1c26;
    font-size: 19px;
}

.launch-text {
    color: black;
    font-weight: 500;
}

.enquery-btn {
    padding: 5px 30px;
    color: black;
    border: 1px solid #aba7a7;
    ;
    border-radius: 5px;
    display: flex;
    gap: 10px;

}

.enquery-btn-image {
    height: 25px;
    width: 25px;
    mix-blend-mode: luminosity;
    border: 1px dotted #000;
    border-radius: 100%;
}

/* css of the second header */

.explore-btns {
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
}

.image {
    width: 35px;
    height: 35px;
}

.explore-btns button {
    font-size: 17px;
    font-weight: 500;
    color: #ca1c26;
    cursor: pointer;
}

.multibleBtns {
    padding: 5px 6px;
    display: flex;
    gap: 10px;
    align-items: center !important;
    border: 1px solid #aba7a7;
    border-radius: 2px;
}

.multibleBtns a {
    padding: 2px 8px;
    font-size: 18px;
    font-weight: 400;
    background-color: #ca1c26;
    color: #fff;
    transition: all .3s linear;
    border-radius: 3px;
    text-decoration: none;
}

.activities-btn {
    font-size: 18px !important;
    color: black;
}

.place-name {
    font-size: 15px;
}

.place-name:hover {
    text-decoration: underline;
    color: #ca1c26 !important;
}
</style>
