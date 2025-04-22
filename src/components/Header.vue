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
                    <span  @click="selectButton('activities')">Enquery</span>
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
                    <p class="text-decoration-underline" >Explore All</p>
                </button>
            </v-col>

            <v-col lg="1" class="p-0" v-for="(item) in cityStore.data" :key="item.id">
                <router-link :to="`/state/${item.name.toLowerCase()}`">
                    <button>
                        <img :src="item.main_image" alt="" class="image">
                        <p class="text-dark fw-normal place-name">{{ item.name }}</p>
                    </button>
                </router-link>
            </v-col>

            <v-col cols="12" md="2">
                <div class="multibleBtns">
                    <a href="" :class="{ active: selectedButton === 'tour' }"
                        @click="selectButton('tour')">Tour</a>
                    <button class="activities-btn" :class="{ active: selectedButton === 'activities' }"
                        @click="selectButton('activities')">Activities</button>
                </div>
            </v-col>

        </v-row>

        <Dialog v-model="showDialog" />

    </section>
</template>

<script setup>
import Dialog from './Dialog.vue';
import { ref , watch ,onMounted} from 'vue'
import { Store } from '@/store/CityStore';


const showDialog = ref(false)

const cityStore = Store();

onMounted(() => {
  cityStore.fetchHeaderCities();
});


const selectedButton = ref('tour') 
const selectButton = (buttonName) => {
  selectedButton.value = buttonName
  if (buttonName === 'activities') {
    showDialog.value = true
  }
}

// Reset to 'tour' when dialog is closed
watch(showDialog, (newVal) => {
    // console.log("the new value is :" , newVal)
  if (!newVal) {
    selectedButton.value = 'tour'
  }
})

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

.multibleBtns a,
.activities-btn {
  padding: 2px 8px;
  font-size: 18px;
  font-weight: 400;
  color: black;
  background-color: transparent;
  transition: all .3s linear;
  border-radius: 3px;
  text-decoration: none;
  border: none;
}

.multibleBtns .active {
  background-color: #ca1c26;
  color: white !important;
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
