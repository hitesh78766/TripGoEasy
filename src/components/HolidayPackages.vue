<template>
    <div class="destination mt-2">
        <v-row>
            <v-col cols="6" class="d-flex align-center r">
                <div class="d-flex ">
                    <div class="border"></div>
                    <h3 class="heading ms-4">
                        Explore Our <br>
                        Best <span style="color: #ca1c26;">National Holiday</span> <br>
                        <span style="color: #ca1c26;">Packages</span>
                    </h3>
                </div>
            </v-col>

            <v-col cols="6">
                <p class="text-body-1">
                    Looking for your next unforgettable getaway? Look no further! Our best-selling holiday packages
                    offer everything you need for a perfect vacation. From the stunning beaches of the Maldives to the
                    cultural wonders of Europe, our top-rated packages are crafted to deliver exceptional experiences
                    and unparalleled value.
                </p>
            </v-col>

            <v-col cols="12">
                <div class="destination-text mb-3">
                    Indulge in luxury accommodations, savor exquisite cuisines, and enjoy expertly guided tours that
                    bring each destination to life. Whether you're planning a romantic escape, a family adventure, or a
                    solo exploration, our best-selling packages are designed to cater to your every need.
                </div>

                <div class="destination-text">
                    Don't miss out on these popular picks! Check out our best-selling holiday packages now and book the
                    vacation of your dreams. Your perfect holiday is just a click away!
                </div>
            </v-col>


            <v-col cols="4" v-for="(packageData) in holidayPackages.slice(0,9)" :key="packageData.key">
                <div class="holiday-content p-0 elevation-4">
                    <div class="holiday-packages-section">
                        <div>
                            <v-img height="200px" :src="packageData.pdf_image" cover class="rounded">

                                <div class="w-full p-3 d-flex justify-content-between temp-btns">
                                    <p class="temp-content m-0">4 <span><i class="fa-solid fa-moon"></i></span> icon/ 3<span><i class="fa-solid fa-sun"></i></span></p>
                                    <p class="sale-content m-0">Best Sale!</p>
                                </div>
                            </v-img>
                        </div>


                        <div class="heading-seciton">
                            <h3 class="ms-2">{{ packageData.package_name }}</h3>
                        </div>

                        <div class="d-flex flex-wrap align-center justify-content-evenly included-options">
                            <div class="d-flex align-center ms-1 included-option-font"
                                v-for="(item) in packageData.servies" :key="item.id">
                                <v-img :src="item.icon" width="24" height="24" class="me-2"></v-img>
                                {{ item.service }}
                            </div>
                        </div>

                        <div class="d-flex align-center justify-content-around mt-2">
                            <div class="d-flex align-center">
                                <span class="discount-price">₹ {{ packageData.discount }}</span>
                                <span class="main-price text-decoration-line-through ms-2">{{ packageData.starting_cost
                                    }}</span>
                            </div>

                            <div class="d-flex align-center">
                                <i class="fa-solid fa-star me-1" style="font-size: 14px; color: yellow;"></i>
                                <p class="rating m-0" style="font-size: 14px; font-weight: 600;">{{ packageData.rating
                                    }}
                                </p>
                                <p class="mb-0 review ms-1" style="font-size: 13px;">(354 reviews)</p>
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
            </v-col>


        </v-row>

    </div>
</template>

<script setup>

import { ref  } from 'vue'
import axios from 'axios';

// const holidayPackages = ref([
//     {
//         title: 'Baku with Absheron Tour 3N 4D',
//         image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fbanner_images%2Fbanner_images1740827813_67c2eca50cedf.jpg&w=1920&q=75',
//         price: '₹ 12000/-',
//         mainPrice: '₹ 16900',
//         rating: '4.5 / 5',
//         reviews: '(354 reviews)',
//         options: [
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
//                 text: " Hotel"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
//                 text: " Cab"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
//                 text: " Breakfast"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
//                 text: " Sightseeing"
//             },
//         ],
//     },

//     {
//         title: 'Shimla Manali Special by Volvo Ex Delhi 5N 6D',
//         image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fstatic_images%2F1.jpg&w=1920&q=75',
//         price: '₹ 13500/-',
//         mainPrice: '₹ 28500',
//         rating: '4.5 / 5',
//         reviews: '(354 reviews)',
//         options: [
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
//                 text: " Hotel"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
//                 text: " Cab"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
//                 text: " Breakfast"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
//                 text: " Sightseeing"
//             },
//         ],
//     },

//     {
//         title: 'Shimla Manali ex Delhi 5N 6D',
//         image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fbanner_images%2Fbanner_images1724684506_66cc98da13428.jpg&w=1920&q=75',
//         price: '₹ 13900/-',
//         mainPrice: '₹ 19900',
//         rating: '4.5 / 5',
//         reviews: '(354 reviews)',
//         options: [
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
//                 text: " Hotel"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
//                 text: " Cab"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
//                 text: " Breakfast"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
//                 text: " Sightseeing"
//             },
//         ],
//     },


//     {
//         title: 'All Himachal with Amritsar Ex-Delhi',
//         image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fbanner_images%2Fbanner_images1724744342_66cd8296cdd7d.jpg&w=1920&q=75',
//         price: '₹ 25900/-',
//         mainPrice: '₹ 30600',
//         rating: '4.5 / 5',
//         reviews: '(354 reviews)',
//         options: [
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
//                 text: " Hotel"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
//                 text: " Cab"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
//                 text: " Breakfast"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
//                 text: " Sightseeing"
//             },
//         ],
//     },

//     {
//         title: 'Shimla Manali With Kasol',
//         image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fbanner_images%2Fbanner_images1724758068_66cdb8340655a.jpg&w=1920&q=75',
//         price: '₹ 14900/-',
//         mainPrice: '₹ 18500',
//         rating: '4.5 / 5',
//         reviews: '(354 reviews)',
//         options: [
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
//                 text: " Hotel"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
//                 text: " Cab"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
//                 text: " Breakfast"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
//                 text: " Sightseeing"
//             },
//         ],
//     },


//     {
//         title: 'Manali Special by Volvo Ex Delhi',
//         image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fstatic_images%2F4.jpg&w=1920&q=75',
//         price: '₹ 10500/-',
//         mainPrice: '₹ 18500',
//         rating: '4.5 / 5',
//         reviews: '(354 reviews)',
//         options: [
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=1920&q=75",
//                 text: " Hotel"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=1920&q=75",
//                 text: " Cab"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=1920&q=75",
//                 text: " Breakfast"
//             },
//             {
//                 URL: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=1920&q=75",
//                 text: " Sightseeing"
//             },
//         ],
//     },
// ])

const reviews = ref([
    {
        reviews: '(354 reviews)',
    }
])

const holidayPackages = ref([]);

const fetchPackages = async () =>{
    try {
        const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/")
        // console.log("the response is : " , response)
         holidayPackages.value = response.data.data.data
        // console.log("the holiday value is :" , holidayPackages.value)

    } catch (error) {
        console.log("The error is : " , error)
    }
}

fetchPackages()

</script>


<style>
.holiday-content {
    background-color: white;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 100%
}


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

.heading-seciton {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-left: 3px solid rgba(202, 28, 38, 1) !important;
    border-right: 3px solid rgba(202, 28, 38, 1) !important;
}

.holiday-packages-section h3 {
    text-transform: capitalize;
    font-size: 24px !important;
    font-weight: 700 !important;
    line-height: 1.5;
}

.included-options {
    border-bottom: 1px solid #0100804f;
    padding-bottom: 10px;
}

.included-options img {
    width: 1.5rem;
    height: 1.5rem;
}

.included-option-font {
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1rem;
}

.discount-price {
    font-weight: 700;
    font-size: 1.25rem;
}

.main-price {
    font-size: 0.875rem;
}

.rating {
    font-size: 0.875rem;
    font-weight: 600;
}

.review {
    font-size: 0.8125rem;
    color: rgba(150, 145, 145, 1);
}

.explore-btn {
    background-color: #ca1c26;
    padding: 8px 40px;
    border-radius: .25rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 600;
}

.explore-icons {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    padding: 5px 20px;
    border-radius: .25rem;
    font-weight: 600;
    border: 2px solid #ca1c26
}

/* Style for both icons */
.explore-icons i {
    font-size: 18px;
    padding: 0 5px;
}

/* Border between icons */
.explore-icons i:first-child {
    border-right: 1px solid #ca1c26;
    height: 100%;
}

.fa-phone {
    color: #ca1c26;
    width: 26px;
    height: 26px;
}

.fa-whatsapp {
    color: green;
    width: 26px;
    height: 26px;
}

.degree-text-images {
    background-color: rgba(0, 0, 0, 1);
    font-size: 12px;
    padding: 5px 12px;
}

.temp-section {
    position: absolute;
    top: 10px;
}

.icon-code {
    display: flex;
    gap: .25rem;
}

.best-sale {
    font-weight: bold;
    font-size: 16px;
    background: linear-gradient(90deg, #010080, #bc000b);
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 5px;
}

.temp-content{
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border-radius: .25rem;
    opacity: 1;
    gap: .25rem;
    display: flex;
    align-items: center;
    padding: 0.3rem 0.5rem;
    font-size: 10px;
}

.sale-content{
    background: linear-gradient(0.25turn, #010080, #bc000b) !important;
    color: white;
    border-radius: .25rem;
    opacity: 1;
    padding: 0.3rem 0.5rem;
    font-size: 12px;
}
</style>