<template>
    <v-dialog v-model="internalModelValue" max-width="1000">
        <v-card class="bg-light">

            <v-card-text>
                <v-row>
                    <v-col cols="6" class="text-black">
                        <h2 class="heading-dialog-text-area">Discover Amazing Travel Deals</h2>

                        <v-btn class="explore-now-btn mt-5">Explore Now</v-btn>
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
                        <h2 class="rating">Hurry! Fill Form & Get Best Travel Deals</h2>
                        <div class="mt-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" id="name" class="bg-white text-black w-100 input-border"
                                placeholder="Enter Your Name">
                        </div>

                        <div class="mt-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" class="bg-white text-black w-100 input-border"
                                placeholder="Enter Your Email">
                        </div>

                        <div class="mt-3">
                            <label for="number" class="form-label">Phone No.</label>
                            <input type="number" id="number" class="bg-white text-black w-100 input-border"
                                placeholder="Phone Number">
                        </div>

                        <div class="mt-3">
                            <label for="travel" class="form-label">Travel Date</label>
                            <input type="date" id="travel" class="bg-white text-black w-100 input-border">
                        </div>

                        <div class="d-flex align-items-center justigy-conter-between mt-3">
                            <div class="mt-2 me-2">
                                <label for="destination" class="form-label">Destination </label>
                                <input type="text" id="destination" class="bg-white text-black w-100 input-border"
                                    placeholder="Enter desination">
                            </div>
                            <div class="mt-2">
                                <label for="person" class="form-label">No. Of Person</label>
                                <input type="text" id="person" class="bg-white text-black w-100 input-border"
                                    placeholder="No of travellers">
                            </div>
                        </div>

                        <div class="mt-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea id="message" class="bg-white text-black w-100 input-border"
                            placeholder="Your message"></textarea>
                        </div>

                        <div class="mt-3">
                            <v-btn  class="w-100 get-details-btn"><v-img src="https://tripgoeasy.com/Assets/Icons/map.svg"></v-img>Get Details</v-btn>
                        </div>

                        <div class="mt-3">
                            <p class="m-0 rating text-center">Get Instant Response From Expert's !!</p>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="internalModelValue = false">Close</v-btn>
            </v-card-actions>
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
}

.rating {
    font-size: 14px;
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
    padding: 3px 10px;
}

label {
    margin-bottom: 2px;
    font-size: 12px;
}

.get-details-btn{
    padding: 10px 20px;
    background-color: #ca1c26;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}
</style>