<template>
    <section>
        <div class="best-deals-main-section">
            <div class="morph-banner">
                <div class="inner-morph">
                    <h3>ENJOY BEST DEALS</h3>
                    <h2>UP TO 40% DISCOUNT!</h2>
                    <p class="morph-pehra">
                        <span>Enjoy incredible savings on flights, accommodations, and tour packages without compromising on quality. From last-minute escapes to early bird specials, our discounted deals cater to every budget and travel style. Imagine sipping cocktails on a pristine beach, exploring ancient cities, or traveling through breathtaking landscapes – all at a fraction of the cost.</span>
                        <span>
                            Don’t miss out on these limited-time offers! Check out our best discounted travel deals now and start planning your next adventure today. Your dream vacation is just a click away, and at a price you'll love!
                        </span>
                    </p>
                    <button>Discover More</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.best-deals-main-section{
    background-image: url("https://tripgoeasy.com/Assets/Images/banner.jpg");
    min-height: 400px;
    margin: auto;
    padding: 30px 20px 20px 50px;
    width: 100%;
    object-fit: cover;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 10px;
}

.morph-banner
{
    max-width: 50rem;
    width: 100%;
    padding: 30px 20px;
    display: grid;
    place-items: center;
    backdrop-filter: blur(10px);
    background: hsla(0, 0%, 100%, .1);
    -webkit-backdrop-filter: blur(10px);
    color: #fff;
    border-radius: 5px;
}

.inner-morph
{
    display: flex;
    flex-direction: column;
    gap: .8rem;
}

.inner-morph h3
{
    font-size: 24.75px;
    font-weight: 400;
}

.inner-morph h2
{
    font-size: 31.97px;
    font-weight: 700;
}

.morph-pehra
{
    font-size: 17.53px;
    font-weight: 300;
    line-height: 26.3px;
    display: flex;
    flex-direction: column;
}

.inner-morph button
{
    background-color: #fff;
    color: #000;
    width: fit-content;
    padding: 15.47px 25.78px;
    font-size: 18.56px;
    border-radius: 5px;
}

</style>