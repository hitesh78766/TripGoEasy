<template>
    <section>
        <div>
            <!-- Banner Section -->
            <div class="bg-image">
                <div class="overlay"></div>
                <div class="image-content">
                    <h2 class="main-head">Bangkok & Pattaya Family Tour</h2>
                    <div class="positon-relative">
                        <button class="mt-3 position-absolute arrow-down">
                            <i class="fa-solid fa-arrow-down"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <v-container>
                    <div class="common-heading-section">
                        <div class="heading-area">
                            <p class="text-uppercase  m-0 ">Bangkok & Pattaya Family Tour</p>
                        </div>

                        <div class="d-flex align-items-center ">
                            <i class="fa-solid fa-star" style="color: yellow;"></i>
                            <i class="fa-solid fa-star" style="color: yellow;"></i>
                            <i class="fa-solid fa-star" style="color: yellow;"></i>
                            <i class="fa-solid fa-star" style="color: yellow;"></i>
                            <i class="fa-solid fa-star" style="color: yellow;"></i>
                            <p class="m-0">
                                <span><b>4.4 / 5</b></span>
                                <span style="color: #6d6d6d; font-size: 14px;">(354 reviews)</span>
                            </p>
                        </div>
                    </div>
                </v-container>
            </div>

            <!-- Tab Buttons Section -->
            <div class="tabs-btn">
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col v-for="(tab, index) in tabs" :key="index" cols="6" sm="3" class="text-center">
                            <span class="page-tab" @click="activeTab = index">
                                <img :src="tab.icon" alt="" class="tab-image">
                                <h3 class="text-subtitle m-0">{{ tab.title }}</h3>
                            </span>
                        </v-col>
                    </v-row>
                </v-container>
            </div>

            <div>
                <v-container class="mt-5">
                    <v-row>
                        
                        <v-col cols="7">
                            <div v-if="activeTab === 0">
                                <span class="mb-2 temp-text-icon">6 <i class="fa-solid fa-moon"></i>/ 5 <i class="fa-solid fa-sun"></i></span>
                                <!-- Overview Content -->
                                <h1 class="heading">OVERVIEW</h1>
                                <div class="mt-1">
                                    <p class="p-0 m-0" style="line-height: 1.6;">
                                        Explore the vibrant culture and stunning landscapes of Thailand with our Bangkok
                                        Pattaya package. This tour
                                        takes you on a journey through the bustling streets of Bangkok, where you'll
                                        visit iconic landmarks like the
                                        Grand Palace and Wat Arun, indulge in world-class shopping, and savor delicious
                                        street food. Then, escape to
                                        the seaside paradise of Pattaya, where you can relax on pristine beaches,
                                        experience thrilling water sports,
                                        and enjoy the vibrant nightlife. With a perfect blend of city excitement and
                                        coastal relaxation, this package
                                        offers an unforgettable Thai adventure.
                                    </p>
                                </div>
                                <div class="mt-3 mb-3" style="border: 1px solid #e5e7eb;"></div>
                                <h2 class="heading">Explore the Area</h2>

                                <!-- Bangkok Section -->
                                <div>
                                    <p><b><u>Bangkok:</u></b></p>
                                    <div v-for="(item, index) in bangkokItems" :key="'bangkok-' + index">
                                        <p :class="item.class">{{ item.text }}</p>
                                    </div>
                                </div>

                                <!-- Pattaya Section -->
                                <div>
                                    <p class="mt-1"><b><u>Pattaya:</u></b></p>
                                    <div v-for="(item, index) in pattayaItems" :key="'pattaya-' + index">
                                        <p :class="item.class">{{ item.text }}</p>
                                    </div>
                                </div>

                                <div>
                                    <div class="mt-3">
                                        <h2 class="mb-3 activites-heading">Popular Services</h2>
                                        <div class="mt-1 mb-1 services-heading">
                                            <div v-for="(service, index) in services" :key="index"
                                                class="d-flex align-items-center justify-items-left">
                                                <img :src="service.icon" alt="" class="me-2 image" />
                                                <h3 class="mb-0" style="font-size: 16px; font-weight: 500;">{{
                                                    service.title }}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-4">
                                        <h2 class="activites-heading">Activities</h2>
                                        <div class="d-flex align-items-center justify-items-left">
                                            <img src="https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Factivities%2Factivity_icon1724755530_66cdae4a85b4f.png&w=128&q=75"
                                                alt="" class="me-2 image">
                                            <h3 class="mb-0" style="font-size: 16px; font-weight: 500;">Shopping</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- ITINERARY Content -->
                            <div v-if="activeTab === 1">
                                <h1 class="heading">ITINERARY</h1>
                                <div>
                                    <v-expansion-panels v-model="panel">
                                        <v-expansion-panel v-for="(day, index) in itinerary" :key="index"
                                            style="background-color: transparent; color: #000;">
                                            <v-expansion-panel-title>
                                                <div class="mt-3 days-div">{{ day.title }}</div>
                                            </v-expansion-panel-title>
                                            <v-expansion-panel-text>
                                                <p>{{ day.description }}</p>
                                            </v-expansion-panel-text>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </div>

                            </div>

                            <!-- INCLUDED Content -->
                            <div v-if="activeTab === 2">
                                <h1 class="heading">INCLUDED</h1>
                                <div>
                                    <h1 class="heading">TOUR INCLUSIONS</h1>
                                    <ul style="list-style: none;" class="p-0">
                                        <li v-for="(item, index) in tourInclusions" :key="index"
                                            style="font-size: 18px; line-height: 2.2">
                                            <img src="https://tripgoeasy.com/_next/static/media/Star.9d494967.png"
                                                alt="" class="me-3" />
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h1 class="heading">TOUR EXCLUSIONS</h1>
                                    <ul style="list-style: none;" class="p-0">
                                        <li v-for="(item, index) in tourExclusions" :key="index"
                                            style="font-size: 18px; line-height: 2.2">
                                            <img src="https://tripgoeasy.com/_next/static/media/Star.9d494967.png"
                                                alt="" class="me-3" />
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <!-- POLICY Content -->
                            <div v-if="activeTab === 3">
                                <h1 class="heading"> Payment Policy</h1>
                                <p>50% of total tour cost as booking fees at the time of booking the tour 50% of total
                                    tour cost at the time of starting of your tour.</p>
                            </div>
                        </v-col>

                        <v-col cols="5">
                            <div class="page-text-container">
                                <div class="page-text-area">
                                    <div v-for="(info, index) in packageInfo" :key="index"
                                        class="d-flex align-items-center page-text">
                                        <img :src="info.icon" alt="" class="ms-3 me-3">
                                        <span>{{ info.text }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class=" mt-4 form-container">
                                <div class="form-section">
                                    <h2 class="text-uppercase text-center form-heading">Get Free Quotes</h2>
                                    <div>
                                        <form action="" class="form">
                                            <div class="d-flex flex-column">
                                                <label for="name" class="mb-1 fw-semibold">Name</label>
                                                <input type="text" id="name" class="input">
                                            </div>

                                            <div class="d-flex flex-column">
                                                <label for="name" class="mb-1 fw-semibold">Email id</label>
                                                <input type="text" id="name" class="input">
                                            </div>

                                            <div class="d-flex flex-column">
                                                <label for="name" class="mb-1 fw-semibold">Number</label>
                                                <input type="text" id="name" class="input">
                                            </div>

                                            <div class="d-flex flex-column">
                                                <label for="name" class="mb-1 fw-semibold">Number of Guest</label>
                                                <input type="text" id="name" class="input">
                                            </div>

                                            <div>
                                                <button class="text-center submit-btn">Submit</button>
                                            </div>

                                            <div>
                                                <ul>
                                                    <li style="font-size: 14px;">We assure the privacy of your contact
                                                        data. </li>
                                                    <li style="font-size: 14px;">This data will only be used by our team
                                                        to contact you and no other purposes.</li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </v-col>

                    </v-row>
                </v-container>
            </div>
        </div>

        <!-- Trending Tours -->
        <TrendingTours />
    </section>
</template>

<script setup>
import { ref } from 'vue'
// Active Tab Index
const activeTab = ref(0)
const panel = ref([0]) //this is for the pannel in itinerary


// Tab data using ref
const tabs = ref([
    {
        title: 'OVERVIEW',
        icon: 'https://tripgoeasy.com/Assets/Icons/Detailspage/overview.svg',
    },
    {
        title: 'ITINERARY',
        icon: 'https://tripgoeasy.com/Assets/Icons/earth.svg',
    },
    {
        title: 'INCLUDED',
        icon: 'https://tripgoeasy.com/Assets/Icons/coin.svg',
    },
    {
        title: 'POLICY',
        icon: 'https://tripgoeasy.com/Assets/Icons/policy.svg',
    },
])

// Bangkok Items
const bangkokItems = ref([
    { text: "Grand Palace & Wat Phra Kaew: Marvel at the opulent royal palace and the revered Emerald Buddha.", class: "mb-0" },
    { text: "Wat Arun (Temple of Dawn): Admire the stunning riverside temple with its iconic spires.", class: "mb-0" },
    { text: "Chatuchak Weekend Market: Discover one of the world's largest markets, offering everything from clothing to antiques.", class: "mb-0" },
    { text: "Jim Thompson House: Explore the beautiful traditional Thai house and museum dedicated to the famous American silk entrepreneur.", class: "mb-0" },
    { text: "Khao San Road: Experience the lively backpacker district known for its street food, bars, and night markets.", class: "" },
    { text: "Chao Phraya River Cruise: Enjoy a scenic boat ride with views of Bangkok’s historic landmarks.", class: "mb-0" },
    { text: "Siam Paragon & MBK Center: Shop at two of Bangkok’s most popular malls, offering luxury brands and affordable goods.", class: "mb-0" },
    { text: "Asiatique The Riverfront: Stroll through this open-air mall combining shopping, dining, and entertainment.", class: "mb-0" }
])

// Pattaya Items
const pattayaItems = ref([
    { text: "Pattaya Beach: Relax on the sandy shores or participate in exciting water sports. Sanctuary of Truth: Visit the awe-inspiring wooden temple showcasing traditional Thai architecture and craftsmanship.", class: "mb-0" },
    { text: "Coral Island (Koh Larn): Take a short boat ride to this beautiful island for snorkeling, swimming, and beach activities.", class: "mb-0" },
    { text: "Pattaya Floating Market: Explore the vibrant market with shops and eateries on water, showcasing Thai culture.", class: "mb-0" },
    { text: "Walking Street: Experience Pattaya’s famous nightlife with bars, clubs, and live entertainment.", class: "mb-0" },
    { text: "Nong Nooch Tropical Garden: Wander through beautifully landscaped gardens and watch traditional Thai cultural shows.", class: "" },
    { text: "Art in Paradise: Enjoy this interactive 3D art museum where you can become part of the artwork.", class: "mb-0" },
    { text: "Tiffany’s Show: Watch a spectacular cabaret performance featuring talented dancers and stunning costumes.", class: "mb-0" }
])

// services images and text
const services = [
    {
        title: "Hotel",
        icon: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485933_66c9912d78fe4.png&w=128&q=75",
    },
    {
        title: "Cab",
        icon: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485505_66c98f813b4c4.png&w=128&q=75",
    },
    {
        title: "Breakfast",
        icon: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485561_66c98fb902953.png&w=128&q=75",
    },
    {
        title: "Sightseeing",
        icon: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fservices%2Fservice_icon1724485789_66c9909d4235a.png&w=128&q=75",
    },
]

// the package info items in the col-5
const packageInfo = [
    {
        icon: 'https://tripgoeasy.com/_next/static/media/rupes.f9d81524.png',
        text: '17999/ Per Person',
    },
    {
        icon: 'https://tripgoeasy.com/_next/static/media/clock.a50c37b3.png',
        text: '6 Days & 5 Nights',
    },
    {
        icon: 'https://tripgoeasy.com/_next/static/media/hsHotel.91a9221d.png',
        text: '3 star',
    },
    {
        icon: 'https://tripgoeasy.com/_next/static/media/lcoation.89831372.png',
        text: 'Bangkok-Pattaya-Bangkok',
    }
];

// tour inclusion for the tab inclusion
const tourInclusions = ref([
    "3 night Hotel Stay in Pattaya",
    "2 Night hotel stay in Bangkok",
    "Breakfast on all days except day 1",
    "Inter hotel Transfer on Private basis",
    "Airport transfer on Private basis",
    "All Sightseeing on SIC basis as per itinarary",
    "GST"
])

const tourExclusions = ref([
    "Anything not mentioned in Inclusions",
    "Personal Nature Expenses Like Telephone / Laundry Bills/Shoppping Etc.",
    "Airfare",
    "Guide, Entrance fee to monuments and Sightseeing places & Activities",
    "Travel Insurance",
])


// itinerary tabs
const itinerary = ref([
    {
        title: "Day 1 (Bangkok arrival and transfer to Pattaya)",
        description:
            "A warm welcome awaits you as you land at Bangkok's Suvarnabhumi International Airport. From here, the agent’s representative will receive and escort you to Pattaya. The road journey along the coast offers some splendid views in itself. Once you reach, check-in to the hotel and relax. Rest of the day of your Thailand tour package is at leisure, you can relax at the hotel and retire to bed early for a sound sleep."
    },
    {
        title: "Day 2 (Coral Island Tour with Alcazar Show)",
        description:
            "After a delicious breakfast at the hotel, you will be taken to the Coral Island by a speedboat. Let the scenic splendor overtake you here as you enjoy the day as your heart desires. You can indulge in watersports like snorkeling and scuba diving or relax on the golden beaches. Later in the evening, attend the popular AlCazar show which takes you through the rich history, culture, and traditions of Thailand. After an exciting day, get back to the hotel for an overnight stay."
    },
    {
        title: "Day 3 (Nong Nooch Botanical Gardens)",
        description:
            "The third day of your Thailand package will begin with a hearty breakfast at the hotel after which you will be taken to the sprawling 500-acre botanical garden in the Nong Nooch Village. The garden features a lake, orchid nurseries, and waterfalls. There is also an eatery serving delicious food where you can satiate your hunger pangs on your own. Elephant shows, Thai boxing, sword fighting, and folk dances are some of the many shows that can be attended in the village. Rest of the evening can be spent around the city. Later in the evening, you will be transferred to the hotel for overnight stay."
    },
    {
        title: "Day 4 (Transfer to Bangkok, Madame Tussauds and SEA Life)",
        description:
            "After breakfast in the hotel at Pattaya, checkout from the hotel as you will be transferred to Bangkok. Enroute see attractions like Madame Tussauds and SEA Life. The SEA LIFE Ocean World is home to a variety of colorful and vibrant underwater species. You will witness a plethora of adventures and breathtaking sights. Next, you will move to Madame Tussaud’s and see wax statues of historical icons, movie legends, and Local Thai stars, and popular Singers. After exploring the city, get back to the hotel for an overnight stay."
    },
    {
        title: "Day 5 (Safari Park and Marine World)",
        description:
            "After a delicious breakfast, you will go to Safari World and Marine Park. Safari World is a well known tourist destination in Thailand and is the biggest open zoo. At the park, meet animals like crocodiles, elephants, giraffes, Koalas, and many more exotic animals. Also, get to see many entertaining shows performed by a sea lion, dolphins, at the Marine Park. After a fun-filled day, get back to the hotel for an overnight stay."
    },
    {
        title: "Day 6 (Drop to Bangkok Airport)",
        description:
            "Adios Thailand! Kickstart your day with a hearty breakfast and checkout from the hotel. Now, you will be transferred to the Bangkok International airport. From here, board your flight back home."
    }
]);

</script>
<style scoped>
.bg-image {
    background-image: url("https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fbanner_images%2Fbanner_images1724832110_66ced96ea2c47.jpg&w=2048&q=75");
    height: 532px;
    position: relative;
    top: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.bg-image>*:not(.overlay) {
    position: relative;
    z-index: 2;
}

.image-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.main-head {
    line-height: 48px;
    font-weight: 600;
    font-size: 50px;
    margin-bottom: 1rem;
}

.arrow-down {
    background-color: #ca1c26;
    padding: 20px 12px;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 1);
    top: 235px;
}

.common-heading-section {
    display: flex;
    justify-content: space-between;
    gap: 10vw;
    padding-top: 40px;
    padding-bottom: 20px;
}

.heading-area {
    border-left: 5px solid #ca1c26;
    padding-inline: 1vw;
}

.heading-area p {
    font-size: 40px;
    font-weight: 800;
    color: #ca1c26;
}

/* tabs css */

.temp-text-icon{
    display: flex;
    align-items: center;
    color: rgb(255, 255, 255);
    padding: 0px 0.5rem;
    border-radius: 0.25rem;
    background-color: red;
    gap: 0.25rem;
    font-size: 18px;
    width: 100px;
}

.temp-text-icon i{
    font-size: 13px;
}

.tabs-btn {
    box-shadow: 1.61px 2.01px 12px 0 #00000021;
    padding-block: 2vh;
}

.page-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
}

.text-subtitle {
    font-size: 1.2rem;
}

.tab-image {
    height: 40px;
    width: 40px;
}

.heading {
    font-size: 32.77px;
    font-weight: 400;
    color: #000;
}

.activites-heading {
    font-size: 20px;
    font-weight: 600;
}

.image {
    width: 35px;
    height: 35px;
}

.services-heading {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: .75rem;
    display: grid;
}

.page-text-container {
    border: 1px solid #01008036;
    border-radius: 5px;
    box-shadow: 1.61px 2.01px 12px 0 #00000021;
}

.page-text-area {
    background-color: rgb(254, 254, 254);
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
}

.page-text {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
    color: rgb(51, 51, 51);
}

.page-text img {
    width: 1.25rem;
    height: 1.25rem;
}


.page-text span {
    color: rgb(0, 123, 255);
    font-weight: bold;
    margin-left: 10px;
}

.form-container {
    border: 1px solid #01008036;
    border-radius: 5px;
}

.form-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 4px;
    padding: 20px 40px;
    box-shadow: 1.61px 2.01px 12px 0 #00000021;
    border-radius: 4px;
}

.form-heading {
    font-size: 2.076rem;
    font-weight: 700;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 1rem;
}

.input {
    border: 1px solid #ca1c265e;
    border-radius: 4px;
    padding-block: 4px;
    padding-inline: 10px;
    outline: none;
    color: black;
}

.submit-btn {
    width: 100%;
    background-color: #ca1c26;
    color: #fff;
    border-radius: 3px;
    padding: 4px 0;
    font-weight: 600;
}

/* tabs div css form tab 2 */

.days-div {
    color: rgba(255, 255, 255, 1);
    padding: 15px 20px;
    background-color: #ca1c26;
    border-radius: .75rem;
    cursor: pointer;
    width: 100%;
}
</style>