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


            <!-- pass the data thorough the props -->
            <HolidayPackagesCard :holiday-packages="cityStore.holidayPackages" />
        </v-row>

    </div>
</template>

<script setup>

import { ref , onMounted } from 'vue'
import axios from 'axios';
import { Store } from '@/store/CityStore';
import HolidayPackagesCard from './HolidayPackagesCard.vue'

const reviews = ref([
    {
        reviews: '(354 reviews)',
    }
])

const cityStore = Store()

onMounted(() =>{
    cityStore.fetchHolidayPackages()
})

// const holidayPackages = ref([]);

// const fetchPackages = async () => {
//     try {
//         const response = await axios.get("https://tripgoeasy.trackitinerary.com/apis/packages/")
//         // console.log("the response is : " , response)
//         holidayPackages.value = response.data.data.data
//         // console.log("the holiday value is :" , holidayPackages.value)

//     } catch (error) {
//         console.log("The error is : ", error)
//     }
// }

// fetchPackages()



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

.temp-content {
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

.sale-content {
    background: linear-gradient(0.25turn, #010080, #bc000b) !important;
    color: white;
    border-radius: .25rem;
    opacity: 1;
    padding: 0.3rem 0.5rem;
    font-size: 12px;
}
</style>