<template>
    <v-dialog v-model="internalModelValue" max-width="1000">
        <v-card class="bg-light">

            <v-card-text>
                <v-row>
                    <v-col cols="6" class="text-black">
                        <h2 class="heading-dialog-text-area">Discover Amazing Travel Deals</h2>

                        <div style="height: 200px; object-fit: cover;" class="position-relative">
                            <v-carousel hide-delimiters cycle class="carousel-main-div">
                                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                    cover></v-carousel-item>

                                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                                    cover></v-carousel-item>

                                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                    cover></v-carousel-item>
                            </v-carousel>
                            <v-btn class="explore-now-btn ">Explore Now</v-btn>
                        </div>


                        <v-row class="mt-5">
                            <v-col v-for="(item, index) in features" :key="index" cols="4" class="text-center">
                                <i class="fa-solid icon" :class="item.icon"></i>
                                <p class="m-0">
                                    <span class="fw-bold rating">{{ item.number }}</span><br />
                                    <span style="font-size: 12px;">{{ item.text }}</span>
                                </p>
                            </v-col>
                        </v-row>

                        <h2 class="mt-5 text-center discover">Discover Amazing Travel Deals</h2>
                        <p class="contact-us text-center">Contact With Us: For Latest Travel Deals and Offers</p>
                        <p class="contact-us text-center ">+91 9015404151</p>
                        <p class="contact-us d-flex align-items-center justify-content-center"><i
                                class="fa-solid fa-message me-2"></i> contact@tripgoeasy.com</p>
                    </v-col>

                    <v-col cols="6" class="input-section-main">
                        <div class="d-flex align-items-center justify-content-between">
                            <h2 class="rating">Hurry! Fill Form & Get Best Travel Deals</h2>
                            <v-btn class="close-dialog-btn" @click="internalModelValue = false"><v-img
                                    src="https://tripgoeasy.com/Assets/Icons/cross.svg" width="12"
                                    height="12"></v-img></v-btn>
                        </div>

                        <v-form @submit.prevent="handleSubmit">
                            <div class="mt-3">
                                <v-text-field v-model="name" label="Name" placeholder="Enter Your Name"
                                    class="input-field bg-white text-black w-100" @input="clearError('name')"/>
                                <small class="text-error">{{ error.name }}</small>
                            </div>

                            <div class="mt-3">
                                <v-text-field label="Email" type="email" placeholder="Enter Your Email"
                                    class="bg-white text-black w-100" v-model="email" @input="clearError('email')" />
                                    <small class="text-error">{{ error.email }}</small>
                            </div>

                            <div class="mt-3">
                                <v-text-field label="Phone No." type="tel" placeholder="Phone Number"
                                    class="bg-white text-black w-100 " v-model="phoneNo" @input="clearError('phoneNo')" />
                                    <small class="text-error">{{ error.phoneNo }}</small>
                            </div>

                            <div class="mt-3">
                                <v-text-field label="Travel Date" type="date" class="bg-white text-black w-100 " v-model="travelDate" @input="clearError('travelDate')"/>
                                <small class="text-error">{{ error.travelDate }}</small>
                            </div>

                            <div class="d-flex align-items-center justify-content-between mt-3">
                                <div class="mt-2 me-2" style="width: 48%;">
                                    <v-text-field label="Destination" placeholder="Enter destination"
                                    class="bg-white text-black w-100" v-model="destination" @input="clearError('destination')"/>
                                        <small class="text-error">{{ error.destination }}</small>
                                </div>
                                <div class="mt-2" style="width: 48%;">
                                    <v-text-field label="No. Of Person" placeholder="No of travellers"
                                        class="bg-white text-black w-100 " v-model="noOfPersons" @input="clearError('noOfPersons')" />
                                        <small class="text-error">{{ error.noOfPersons }}</small>
                                </div>
                            </div>

                            <div class="mt-3">
                                <v-textarea label="Message" placeholder="Your message"
                                    class="bg-white text-black w-100 "  v-model="message" @input="clearError('message')"/>
                                    <small class="text-error">{{ error.message }}</small>
                            </div>

                            <div class="mt-3">
                                <v-btn type="submit" class="w-100 get-details-btn">
                                    <v-img src="https://tripgoeasy.com/Assets/Icons/map.svg"></v-img>
                                    Get Details
                                </v-btn>

                            </div>
                        </v-form>

                        <div class="mt-3">
                            <p class="m-0 rating text-center">Get Instant Response From Expert's !!</p>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>

        </v-card>
    </v-dialog>
</template>



<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const internalModelValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
    internalModelValue.value = newVal
})

watch(internalModelValue, (newVal) => {
    emit('update:modelValue', newVal)
})


const features = [
    {
        icon: 'fa-user',
        number: '5000+',
        text: 'Exciting Destinations'
    },
    {
        icon: 'fa-solid fa-briefcase',
        number: 'Top Rated',
        text: '4.8* Rating with 10K+ Reviews'
    },
    {
        icon: 'fa-solid fa-envelope-open-text',
        number: 'Exclusive Offers',
        text: 'Special Deals and Discounts'
    },
    {
        icon: 'fa-solid fa-briefcase',
        number: '24/7 Support',
        text: 'Assistance Anytime, Anywhere'
    },
    {
        icon: 'fa-solid fa-envelope-open-text',
        number: 'Secure Booking',
        text: 'Safe and Reliable Transactions'
    }
]

const name = ref("");
const email = ref("");
const phoneNo = ref("");
const travelDate = ref("");
const destination = ref("");
const noOfPersons = ref("");
const message = ref("");

const error = ref({});

const handleSubmit = () => {
    console.log("Form submitted");
    error.value = {};

    if (!name.value) {
        error.value.name = "Name is required";
    }
    if (!email.value) {
        error.value.email = "Email is required";
    }
    if (!phoneNo.value) {
        error.value.phoneNo = "Phone Number is required";
    }
    if (!travelDate.value) {
        error.value.travelDate = "Travel Date is required";
    }
    if (!destination.value) {
        error.value.destination = "Destination is required";
    }
    if (!noOfPersons.value) {
        error.value.noOfPersons = "Number of person is required it can't be empty";
    }
    if (!message.value) {
        error.value.message = "Message can't be empty";
    }

}

const clearError = (field) => {
    if (error.value[field]) {
        delete error.value[field];
    }
}


</script>

<style scoped>
.heading-dialog-text-area {
    font-size: 18px;
    border-bottom: 1px solid #01008036;
    color: #02013d;
    font-weight: 700;
    padding-bottom: 10px;
}

.icon {
    width: 20px;
    height: 20px;
    color: rgba(202, 28, 28, 1);
}

.explore-now-btn {
    background-color: #ca1c26;
    color: #fff;
    padding: 7px 14px;
    border-radius: 50px;
    position: absolute;
    top: 143px;
    left: 20px;
}

.rating {
    font-size: 14px;
}

.close-dialog-btn {
    border-radius: 100%;
    width: 30px;
    min-width: 30px;
    height: 30px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fadddd;
}

.discover {
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #01008036;
    padding-bottom: 10px;
}

.contact-us {
    font-size: 15px;
    font-weight: 700;
    color: #323465;
}

.input-section-main {
    background-color: #02013d;
    color: #fff;
}

.input-border {
    border: 1px solid #b6b0b0;
    border-radius: 5px;
    outline: none;
    color: #323465;
    padding: 8px 10px;
}

label {
    margin-bottom: 2px;
    font-size: 12px;
}

.get-details-btn {
    padding: 10px 20px;
    background-color: #ca1c26;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.carousel-main-div {
    height: 200px !important;
}

.v-carousel__controls {
    background-color: none !important;
}

.error {
    color: red;
    font-size: 14px;
}
</style>