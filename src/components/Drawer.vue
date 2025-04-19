<template>
    <div>
        <v-navigation-drawer v-if="isDrawerOpen" class="bg-light drawer-main text-dark p-3" v-model="drawer" app
            location="end" :class="{ 'drawer-open': drawer }">
            <div class="drawer-main-section">

                <div class="d-flex justify-content-end mb-5">
                    <div class="close-btn-div" @click="drawer = drawer = false">
                        <img src="https://tripgoeasy.com/_next/static/media/cross.0c3cfc3c.svg" alt="">
                    </div>
                </div>

                <div class="d-flex align-items-center justify-content-between">
                    <button class="drawer-btns" @click="destinationSelected = false">Prev</button>
                    <button class="drawer-btns">Next</button>
                </div>

                <div v-if="!destinationSelected" class="text-uppercase text-center mt-5 mb-5 drawer-heading">
                    <p>Where are <span style="color: #ca1c26;">You Planning</span> To Go ?</p>
                </div>

                <div v-if="!destinationSelected">
                    <div style="position: relative;">
                        <v-text-field v-model="search" placeholder="Pick Your destination" @focus="showDropdown = true">
                            <template #append-inner>
                                <img src="https://tripgoeasy.com/_next/static/media/search.87d80dba.svg" alt=""
                                    style="height: 1.5rem; width: 1.5rem;" />
                            </template>
                        </v-text-field>

                        <v-list v-if="showDropdown && filteredStates.length" class="border rounded bg-white"
                            max-height="200" style="overflow-y: auto; position: absolute; z-index: 10; width: 100%;">
                            <v-list-item v-for="(state, index) in filteredStates" :key="index"
                                @mousedown.prevent="selectState(state)">
                                <v-list-item-title>{{ state }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>

                <!--this will show when the input is not empty and any state will be selceted  -->
                <div v-else class="text-center mt-10 text-h5 font-weight-bold">
                    <p class="text-start  month-trevelling-pehra" style="font-weight: 600;">NOW PLANNING YOUR HOLIDAY TO
                    </p>
                    <!-- these will show the buttons at the top -->
                    <div class="d-flex">

                        <div style="border-bottom: 4px solid #ca1c26;">
                            <v-btn class="place-select-div mb-3 d-flex align-items-center justify-content-center">
                                <img src="https://tripgoeasy.com/_next/static/media/plane.45f49b8b.svg" alt=""
                                    class="me-2">
                                <span>{{ selectedState }}</span>
                            </v-btn>
                        </div>

                        <div style="border-bottom: 4px solid #ca1c26;" class="ms-3">
                            <v-btn v-if="showDatePicker || selectedDate"
                                class="place-select-div  d-flex align-items-center justify-content-center">
                                <img src="https://tripgoeasy.com/_next/static/media/calendericon.36b8eaa8.svg" alt=""
                                    class="me-2">
                                <span>{{ selectedMonth }}</span>
                            </v-btn>
                        </div>

                        <div style="border-bottom: 4px solid #ca1c26;" class="ms-3">
                            <v-btn v-if="isInput"
                                class="place-select-div  d-flex align-items-center justify-content-center">
                                <img src="https://tripgoeasy.com/_next/static/media/plane.45f49b8b.svg" alt=""
                                    class="me-2">
                                <span>{{ selectedLimitedState }}</span>
                            </v-btn>
                        </div>

                        <div style="border-bottom: 4px solid #ca1c26;" class="ms-3">
                            <v-btn v-if="selectNight"
                                class="place-select-div  d-flex align-items-center justify-content-center">
                                <img src="https://tripgoeasy.com/_next/static/media/nightsicon.42439a89.svg" alt=""
                                    class="me-2">
                                <span>{{ selectedLabel }}</span>
                            </v-btn>
                        </div>
                        
                        <!-- Button with selected family status -->
                        <div style="border-bottom: 4px solid #ca1c26;" class="ms-3">
                            <v-btn v-if="selectedFamilyStatus"
                                class="place-select-div d-flex align-items-center justify-content-center">
                                <img src="https://tripgoeasy.com/_next/static/media/pax.615c4271.svg" alt=""
                                    class="me-2" />
                                <span>{{ selectedFamilyStatus.label }}</span>
                            </v-btn>
                        </div>

                    </div>

                    <!-- show the months when select the input through dropdown -->
                    <div v-if="!showDatePicker && !selectedDate">
                        <p class="text-start month-trevelling-pehra mt-3">Which month are you travelling?</p>
                        <div class="month-container">
                            <div class="month-box" v-for="(month, index) in months" :key="index"
                                :style="{ backgroundColor: month.bgColor }" @click="selectMonth(month.name)">
                                <div class="months-div">
                                    <div class="w-100 d-flex flex-column justify-content-center">
                                        <p class="month-name">{{ month.name }}</p>
                                        <p class="month-name"><i :class="month.icon"></i> {{ month.temperature }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Calendar Section -->
                <div v-if="showDatePicker" class="text-center mt-10">
                    <p class="text-start font-weight-bold mb-4 month-trevelling-pehra mt-3">When is your departure date?
                    </p>
                    <div class="d-flex align-items-center justify-content-center mb-5">
                        <v-date-picker class="date_picker" v-model="selectedDate"
                            @update:model-value="onDateSelected" />
                    </div>
                </div>

                <!-- show the input after the selection of date -->
                <div v-else-if="selectedDate && !isInput" class="text-center mt-10">
                    <div>
                        <p class="text-start font-weight-bold mt-3 mb-4 month-trevelling-pehra">Where are you travelling
                            from?</p>
                        <v-text-field v-model="search" placeholder="Pick Your destination" @focus="showDropdown = true">
                            <template #append-inner>
                                <img src="https://tripgoeasy.com/_next/static/media/search.87d80dba.svg" alt=""
                                    style="height: 1.5rem; width: 1.5rem;" />
                            </template>
                        </v-text-field>

                        <v-list v-if="showDropdown && filteredLimitedStates.length" class="border rounded bg-white"
                            max-height="200" style="overflow-y: auto; position: absolute; z-index: 10; width: 100%;">
                            <v-list-item v-for="(state, index) in filteredLimitedStates" :key="index"
                                @mousedown.prevent="inputField(state)">
                                <v-list-item-title>{{ state }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>

                <!-- night code  -->
                <div v-else-if="isInput && !selectNight">
                    <p class="text-start font-weight-bold mt-3 mb-4 month-trevelling-pehra">
                        What is the duration of your holiday?
                    </p>

                    <div class="d-flex align-items-center justify-content-between" style="width: 630px;">
                        <div v-for="(item, index) in nights" :key="index" class="night  rounded"
                            :style="{ backgroundColor: item.color }" @click="selectNightItem(item.label)">
                            <p class="m-0">{{ item.label }}</p>
                            <img v-if="item.url" :src="item.url" alt="icon" width="30" height="30" />
                        </div>
                    </div>
                </div>

                <!-- how much night -->
                <div v-else-if="selectNight && !selectedFamilyStatus">
                    <p class="text-start font-weight-bold mt-3 mb-4 month-trevelling-pehra">
                        Who is travelling with you?
                    </p>

                    <div class="d-flex align-items-center justify-content-between" style="width: 630px;">
                        <div v-for="(item, index) in familyTypes" :key="index"
                            class="d-flex align-center justify-content-center family-status">
                            <div class="content-family-status" @click="selectFamilyStatus(item)">
                                <img :src="item.img" :alt="item.label" width="62" height="61" />
                                <p class="m-0" :style="'color: ' + item.color">{{ item.label }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- show the family status -->
                <div v-else-if="selectedFamilyStatus">
                    <p class="text-start font-weight-bold mt-3 mb-4 month-trevelling-pehra">
                        Enter your details to personalise your trip
                    </p>

                    <div class="input-main-div">
                        <div v-for="(input, index) in inputs" :key="index" class="relative d-flex align-center"
                            style="background-color: white; color: black;">
                            <v-text-field :placeholder="input.placeholder" hide-details dense solo
                                class="bg-white text-black rounded-lg">
                                <template #prepend-inner>
                                    <v-img :src="input.icon" width="20" height="20" class="mr-2" cover></v-img>
                                </template>
                            </v-text-field>
                        </div>

                        <div>
                            <v-btn class="text-uppercase text-white" style="background-color: rgba(202, 38, 38, 1);"
                                @click="dialog = true">Submit</v-btn>

                            <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="800">
                                <v-card class="p-6 bg-white text-black" style="max-height: 90vh; overflow-y: auto;">
                                    <h1 class="text-center mt-5 mb-5 font-weight-bold mb-4">
                                        THANK YOU FOR <br>
                                        <span style="color: #ca1c26;">YOUR INTEREST</span>
                                    </h1>

                                    <p class=" dialog-pehra text-center mt-3 mb-5">
                                        Thank you for your reservation. We’re dedicated to giving you the best
                                        experience possible. If
                                        you have any questions, feel free to get in touch.
                                    </p>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn text @click="dialog = false">Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                        </div>
                    </div>
                </div>
            </div>
        </v-navigation-drawer>
    </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue'
const props = defineProps({
    isDrawerOpen: {
        type: Boolean,
        default: false,
        required: true
    }
})

const emit = defineEmits(['update:isDrawerOpen'])

const drawer = ref(props.isDrawerOpen)

watch(() => props.isDrawerOpen, value => {
    drawer.value = value
})

watch(drawer, value => {
    emit('update:isDrawerOpen', value)
})


const search = ref('')
const showDropdown = ref(false)
const destinationSelected = ref(false)
const selectedState = ref('')
const selectedLimitedState = ref('')
const selectedMonth = ref('')
const showDatePicker = ref(false)
const selectedDate = ref(null)
const isInput = ref(null)
const selectNight = ref(false)
const selectedLabel = ref('')
// selected item (null by default)
const selectedFamilyStatus = ref(null)
const dialog = ref(false)


const allStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
]

const filteredStates = computed(() => {
    return search.value
        ? allStates.filter(state =>
            state.toLowerCase().includes(search.value.toLowerCase())
        )
        : allStates
})

const selectState = (state) => {
    search.value = state
    console.log("the state is :", state)
    selectedState.value = state
    showDropdown.value = false
    destinationSelected.value = true
}

const months = [
    { name: 'January', temperature: '15° -24°C', icon: 'fa-solid fa-sun', bgColor: 'rgba(217, 251, 249, 0.698)' },
    { name: 'February', temperature: '16° -26°C', icon: 'fa-solid fa-cloud-sun', bgColor: 'rgba(178, 255, 250, 0.56)' },
    { name: 'March', temperature: '20° -30°C', icon: 'fa-solid fa-sun', bgColor: 'rgba(255, 235, 255, 0.7)' },
    { name: 'April', temperature: '18° -28°C', icon: 'fa-solid fa-cloud-rain', bgColor: 'rgba(220, 230, 240, 0.8)' },
    { name: 'May', temperature: '22° -32°C', icon: 'fa-solid fa-sun', bgColor: 'rgba(255, 200, 180, 0.7)' },
    { name: 'June', temperature: '25° -35°C', icon: 'fa-solid fa-sun', bgColor: 'rgba(255, 240, 180, 0.7)' },
    { name: 'July', temperature: '27° -37°C', icon: 'fa-solid fa-sun', bgColor: 'rgba(255, 210, 160, 0.8)' },
    { name: 'August', temperature: '26° -36°C', icon: 'fa-solid fa-sun', bgColor: 'rgba(255, 220, 180, 0.75)' },
    { name: 'September', temperature: '22° -32°C', icon: 'fa-solid fa-cloud-rain', bgColor: 'rgba(230, 240, 255, 0.75)' },
    { name: 'October', temperature: '18° -28°C', icon: 'fa-solid fa-cloud-rain', bgColor: 'rgba(220, 230, 240, 0.8)' },
    { name: 'November', temperature: '12° -22°C', icon: 'fa-solid fa-cloud-sun', bgColor: 'rgba(200, 240, 255, 0.75)' },
    { name: 'December', temperature: '5° -15°C', icon: 'fa-solid fa-snowflake', bgColor: 'rgba(200, 220, 255, 0.8)' }
]

const selectMonth = (monthName) => {
    console.log("the month name is :", monthName)
    selectedMonth.value = monthName
    showDatePicker.value = true
}

// this will select the date form the calendar
const onDateSelected = (date) => {
    selectedDate.value = date
    showDatePicker.value = false
    console.log("Selected date is:", date)
}

const inputField = (state) => {
    search.value = state
    selectedLimitedState.value = state
    showDropdown.value = false
    isInput.value = true
}

const limitedState = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
]

const filteredLimitedStates = computed(() => {
    return search.value
        ? limitedState.filter(state =>
            state.toLowerCase().includes(search.value.toLowerCase())
        )
        : allStates
})

const nights = ref([
    { label: '3-4 Nights', color: 'rgba(255, 159, 165, 0.33)' },
    { label: '5-6 Nights', color: 'rgba(197, 196, 254, 0.21)', url: "https://tripgoeasy.com/_next/static/media/favourite.a204ed5b.svg" },
    { label: '7-8 Nights', color: 'rgba(255, 159, 165, 0.33)' },
    { label: '6-5 Nights', color: 'rgba(255, 229, 178, 0.33)', url: "https://tripgoeasy.com/_next/static/media/favourite.a204ed5b.svg" }
])

// Handle item selection
const selectNightItem = (label) => {
    selectedLabel.value = label
    selectNight.value = true
}

const familyTypes = [
    {
        label: 'Solo',
        img: 'https://tripgoeasy.com/_next/static/media/solo.78498e80.svg',
        color: 'rgb(1, 0, 128)',
    },
    {
        label: 'Couple',
        img: 'https://tripgoeasy.com/_next/static/media/couple.a654a41b.svg',
        color: 'rgb(202, 28, 38)',
    },
    {
        label: 'Family',
        img: 'https://tripgoeasy.com/_next/static/media/family.cc68877b.svg',
        color: 'rgb(224, 175, 0)',
    },
    {
        label: 'Group',
        img: 'https://tripgoeasy.com/_next/static/media/group.8249706e.svg',
        color: 'rgb(129, 69, 0)',
    },
]
// show the family status
const selectFamilyStatus = (item) => {
    selectedFamilyStatus.value = item
}

// items for input in family status

const inputs = [
    { placeholder: 'Name', icon: 'https://tripgoeasy.com/_next/static/media/usericon.0594d09f.svg' },
    { placeholder: 'Phone No.', icon: 'https://tripgoeasy.com/_next/static/media/phoneicon.9c043e71.svg' },
    { placeholder: 'Email', icon: 'https://tripgoeasy.com/_next/static/media/emailicon.adc86b0a.svg' }
];
</script>



<style>
/* css of the drawer section */

.drawer-open {
    width: 900px !important;
}

.drawer-main {
    background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .2), hsla(0, 0%, 100%, .2)), url("https://tripgoeasy.com/_next/static/media/boat.158d4c5a.png") !important;
    background-repeat: no-repeat;
    background-size: 65vw 100vh;
    background-position: 50%;
}

.close-btn-div {
    background-color: #fadddd;
    border-radius: 100%;
    padding: .25rem;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

}

.drawer-btns {
    padding: 5px 20px;
    border: 1px solid #ca1c26;
    border-radius: 4px;
    background: #ca1c26;
    color: #fff;
}

.drawer-heading {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
}

.month-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

.month-box {
    width: calc(100% / 5 - 20px);
    box-sizing: border-box;
}

.months-div {
    border: 1px solid rgba(178, 255, 250, 0.56);
    padding: 34px 7px;
    border-radius: 0.25rem;
}

.month-trevelling-pehra {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.75rem;
}

.month-name {
    font-size: 14px;
    font-weight: 500;
}

.place-select-div {
    padding: 10px;
    background-color: rgba(255, 255, 255, 1) !important;
    white-space: nowrap;
    border: 1px solid #ca1c2654;
    border-radius: .25rem;
}

.place-select-div img {
    width: 20px;
    height: 20px;
}

.place-select-div span {
    font-size: 14px;
    color: #000;
    font-weight: 500;
}


.date_picker .v-date-picker-header {
    display: none;
}

.date_picker .v-picker-title {
    display: none;
}

.date_picker .v-picker__body {
    background: white;
    color: black;
}

.night {
    background-color: rgba(255, 159, 165, 0.33);
    border: 1px solid rgba(202, 28, 38, 0.12);
    max-width: 140px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    border-radius: .25rem;
}

.night p {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.75rem;
}


.family-status {
    width: 130px;
    height: 140px;
    background-color: rgba(255, 255, 255, 1);
}

.content-family-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.content-family-status p {
    font-size: 14px;
    font-weight: 600;
}

.input-main-div {
    padding-top: 1.25rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.image-family-imput {
    position: absolute;
    left: 1.25rem;
    top: .5rem;
}

.dialog-pehra {
    font-size: 20px;
    font-weight: 400;
    line-height: 25.14px;
}
</style>