<template>
    <section>
        <div class="about-main-section">
            <v-container>
                <div class="about-heading mt-3">
                    <div class="common-heading">
                        <h3>WORLD BEST <span style="color: #ca1c26;">TRAVEL AGENCY</span><br>
                            COMPANY SINCE 2015.</h3>
                    </div>
                </div>

                <div class="about-content mt-4 mb-5">
                    <div class="image-section">
                        <img src="https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7img2.png&w=2048&q=75"
                            class="image1" />

                        <img src="https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7img1.png&w=2048&q=75"
                            class="image2" />
                    </div>

                    <div class="text-section">
                        <p class="about-description">
                            <span style="border: 2px solid #ca1c26;" class="me-2"></span> you're looking for a family holiday, a romantic escape, an adventure somewhere
                            extraordinary, or a special event, we can arrange it. Whether you're looking for a
                            family holiday, a romantic escape, an adventure somewhere extraordinary,
                        </p>

                        <div class="button-section ">
                            <button class="btns" v-for="(item, index) in buttonData" :key="index">
                                <VImg :src="item.img" width="40" height="40" />
                                <p class="m-0 text-uppercase">{{ item.title }}</p>
                            </button>
                        </div>

                    </div>
                </div>
            </v-container>
        </div>
    </section>
</template>

<script setup>
const buttonData = [
    {
        img: "https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7%2Ftravel.gif&w=2048&q=75",
        title: "WorldWide Tour Coverage",
    },
    {
        img: "https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7%2Finflation.gif&w=2048&q=75",
        title: "Competitive pricing",
    },
    {
        img: "https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7%2Ftour_guide.gif&w=2048&q=75",
        title: "Local Guided Tours",
    },
    {
        img: "https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7%2F247.gif&w=2048&q=75",
        title: "Best Support 27/7",
    },
    {
        img: "https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7%2Fschedule.gif&w=2048&q=75",
        title: "Fast Booking",
    },
    {
        img: "https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Fsection7%2Fdirection.gif&w=2048&q=75",
        title: "Ultimate tour flexibility",
    },
];
</script>


<style scoped>
.about-main-section {
    background-color: #02012d;
    background-image: url("https://tripgoeasy.com/Assets/Images/luggage.png");
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 20% auto;
}



.common-heading {
    border-left: 5px solid #ca1c26;
    padding-inline: 1vw;
    font-variant: small-caps;
    width: 50vw;
}

.common-heading h3 {
    font-size: 35px;
    font-weight: 600;
    color: #fff;
    line-height: 1.6;
}

.about-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 1rem;

}

.image-section {
    position: relative;
    width: 33%;
}

.image1 {
    height: 30rem;
    width: 100%;
    object-fit: contain;
}

.image2 {
    height: 12rem;
    position: absolute;
    bottom: 0;
    left: 19rem;

}

.text-section {
    width: 50%;
}

.about-description {
    font-size: 22px;
    color: #fff;
    line-height: 40px;
    text-transform: capitalize;
    font-family: Exo, sans-serif;
    position: relative;
    margin-bottom: 40px;
}

.button-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.btns {
    padding: 8.5px 15px;
    display: flex;
    align-items: center;
    font-size: 20.1px;
    font-weight: 400;
    gap: 6px;
    justify-content: left;
    color: #fff;
    background-color: hsla(0, 0%, 100%, .5);
    text-transform: uppercase;
    border-radius: 3px;
}

.btns p {
    text-align: left;
}
</style>
