<template>
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
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HolidayPackagesCard',
  props: {
    holidayPackages: {
      type: Array,
      default: () => []
    }
  }
})
</script>

