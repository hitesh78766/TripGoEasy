<template>
    <div>
        <v-row>
            <v-col cols="6" class="d-flex align-center r">
                <div class="d-flex">
                    <div class="border"></div>
                    <h3 class="heading ms-4">
                        Trending , Best Selling <br />
                        <span style="color: #ca1c26;">Tours</span> And Fun
                        <span style="color: #ca1c26;">Categories</span>
                    </h3>
                </div>
            </v-col>

            <v-col cols="6">
                <p class="text-body-1">
                    Unleash your wanderlust with our top-rated, best-selling tours! Dive into the heart of adventure with trips designed to thrill, inspire, and delight. From the sun-kissed beaches to the bustling High Serene mountain views, our tours promise unforgettable experiences at every turn.
                </p>
            </v-col>

            <v-col cols="12">
                <div class="destination-text mb-3">
                    Perfect for families, couples, and solo adventurers, our carefully curated packages include
                    exhilarating activities, guided explorations, and ample free time to soak in the local charm.
                    Picture yourself exploring ancient ruins, savoring exotic cuisines, and lounging in luxurious
                    accommodations – all part of the unbeatable experiences we offer.
                </div>

                <div class="destination-text">
                    Join the ranks of our satisfied travelers and see why these destinations are favorites worldwide.
                    Book your adventure today and create memories that will last a lifetime!
                </div>
            </v-col>

            <!-- Adventure Image Row -->
            <div class="adventure-imges-main-section">
                <div class="adventure-images mt-3 mb-3">
                    <div v-for="(item, index) in images" :key="index"
                        :class="index % 2 === 0 ? 'image-box' : 'image-second-box'">
                        <img :src="item.img" :alt="item.title" />
                        <h3 class="text-light text-center bg-light text-dark py-2">
                            {{ item.title }}
                        </h3>
                    </div>
                </div>
            </div>

        </v-row>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const images = ref([
      {
        img: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcategory_images%2Fbanner_images_main1724756118_66cdb096df425.jpg&w=1920&q=75",
        title: "Family Tour",
      },
      {
        img: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcategory_images%2Fbanner_images_main1724396740_66c834c4d70cd.jpg&w=1920&q=75",
        title: "Group Tour",
      },
      {
        img: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcategory_images%2Fbanner_images1724395899_66c8317b0e3971.jpg&w=1920&q=75",
        title: "Honeymoon Tour",
      },
      {
        img: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcategory_images%2Fbanner_images1724395731_66c830d38a2fa1.jpg&w=1920&q=75",
        title: "Customized Tour",
      },
      {
        img: "https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcategory_images%2Fbanner_images1724395637_66c83075a6e721.jpg&w=1920&q=75",
        title: "Adventure",
      },
    ]);

    return {
      images,
    };
  },
};
</script>




<style scoped>
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

/* adventure images css */
.adventure-imges-main-section {
    width: 100%;
    overflow: hidden;
}


.adventure-images{
    width: 160vw; 
    padding-block: 10px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 2vw;
    justify-content: space-between;
    align-items: start;
    animation: section4_translateCards__vHBun 35s linear infinite;
}

@keyframes section4_translateCards__vHBun {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(calc(-80vw)); 
    }
    100% {
        transform: translateX(0); 
    }
}

.element {
    animation: section4_translateCards__vHBun 35s linear infinite; 
}


.image-box {
    border-radius: 5px;
    overflow: hidden;
}

.image-box img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
}

.image-box h3 {
    box-shadow: 0 3.73px 3.73px 0 #00000012;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    font-weight: 600;
}

.image-second-box {
    margin-top: 60px;
}


.image-second-box img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
}

.image-second-box h3 {
    font-size: 18px;
    text-align: center;
    padding: 10px;
    box-shadow: 0 3.73px 3.73px 0 #00000012;
}
</style>