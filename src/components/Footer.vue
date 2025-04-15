<template>
    <section>
      <div class="footer-main-section">
        <!-- Blur Overlay -->
        <div class="footer-blur-overlay"></div>
  
        <v-container>
          <div class="footer-main w-full h-full">
            <div class="footer-content-section">
              <div class="footer-logo-section">
                <img src="https://tripgoeasy.com/_next/image?url=%2FAssets%2FImages%2Flogo.png&w=2048&q=75" alt="Logo" class="footer-img w-100">
              </div>
  
              <div class="footer-image-content-section">
                <div class="footer-content">
                  <div class="about-tge">
                    <p class="heading">About Tge</p>
                    <a href="">About Us</a>
                    <a href="">Copyright Policies</a>
                    <a href="">Privacy</a>
                    <a href="">Contact Us</a>
                  </div>
  
                  <div class="about-tge">
                    <p class="heading">Important Links</p>
                    <a href="">Refund & Cancellations</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">Amendment Policy</a>
                    <a href="">Blog</a>
                    <a href="">Make Payment</a>
                  </div>
  
                  <div class="about-tge contact-section">
                    <p class="heading">
                      <span class="icon"><i class="fa-solid fa-phone"></i></span>
                      <a href="">+91 9015404151</a>
                    </p>
                    <p class="heading">
                      <a href="https://wa.me/your-number" target="_blank">
                        <span class="icon"><i class="fa-brands fa-whatsapp"></i></span>
                      </a>
                      <a href="">contact@tripgoeasy.com</a>
                    </p>
  
                    <p class="social-icons">
                      <a href="#">
                        <img alt="Facebook" src="https://tripgoeasy.com/_next/static/media/fb.c2573815.svg" />
                      </a>
                      <a href="#">
                        <img alt="Instagram" src="https://tripgoeasy.com/_next/static/media/insta.e407814a.svg" />
                      </a>
                    </p>
                  </div>
  
                  <div class="footer-image-section">
                      <p class="footer-images-heading">Travel Destinations</p>
                      <div class="images-secion">
                          <a v-for="(destination, index) in destinations" :key="index" href="" class="images-link">
                              <span class="position-relative">
                                  <img :src="destination.image" :alt="destination.name" class="images">
                                  <p class="image-heading">{{ destination.name }}</p>
                              </span>
                          </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-container>
      </div>
      <div class="d-flex align-center justify-center">
            <p class="imp-head">© 2024 TGE ALL RIGHTS RESERVED.</p>
          </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const destinations = ref([
        {
          name: 'Bangkok',
          image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724848009_66cf1789bd973.jpg&w=2048&q=75'
        },
        {
          name: 'Leh',
          image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1728297581_6703ba6d00277.jpg&w=2048&q=75'
        },
        {
          name: 'Manali',
          image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724847808_66cf16c089c36.jpg&w=2048&q=75'
        },
        {
          name: 'Shimla',
          image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724676955_66cc7b5b79944.JPG&w=2048&q=75'
        },
        {
          name: 'Goa',
          image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1724756532_66cdb2345db0b.png&w=2048&q=75'
        },
        {
          name: 'Munnar',
          image: 'https://tripgoeasy.com/_next/image?url=https%3A%2F%2Ftripgoeasy.trackitinerary.com%2Fsite%2Fimages%2Fcity_icon%2Fcity_icon_1728297654_6703bab6b5220.jpg&w=2048&q=75'
        },
      ]);
  
      return {
        destinations
      };
    }
  };
  </script>
  
  <style scoped>
  .footer-main-section {
    position: relative;
    background-image: url("https://tripgoeasy.com/_next/static/media/footerbg.e3fac0f3.png");
    background-size: 105vw 60vh;
    background-repeat: no-repeat;
    background-position: center top;
    background-color: #fff;
    margin-top: 100px;
    padding-bottom: 30px;
  }
  
  /* Blur css*/
  .footer-blur-overlay {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(4px);
    z-index: 1; 
  }
  
  .footer-main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    z-index: 2; 
  }
  

  .footer-content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 400px;
    border: 1px solid #ca1c2518;
    box-shadow: 0 4px 25px 0 #00000017;
  }
  
  .footer-logo-section {
    position: absolute;
    width: 7rem;
    height: 5rem;
    left: 50%;
    bottom: 380px;
    transform: translateX(-50%);
    z-index: 2;
  }
  
  .footer-image-content-section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;
    padding-top: 80px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 50px;
  }
  
  .about-tge {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    /* border-right: 1px solid #e3dada; */
  }
  
  .heading {
    font-weight: 600;
    font-size: 17.57px;
    text-transform: uppercase;
  }
  
  .about-tge a {
    font-size: 15.37px;
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    white-space: nowrap; 
    display: inline-block; 
  }
  
  .contact-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .contact-section p {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 17.57px;
  }
  
  .icon {
    color: white;
    background: #ca1c26;
    padding: 6px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
  
  .icon i {
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

  }
  
  .social-icons {
    display: flex;
    gap: 10px;
  }
  
  .social-icons a img {
    max-width: 30px;
  }
  
  .footer-images-heading {
    margin-bottom: 10px;
    color: rgba(89, 88, 88, 1);
    opacity: 1;
    font-weight: 600;
    font-size: 17.57px;
  }
  
  .images-secion {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.7rem;
    font-weight: 600;
  }
  
  .images-link {
    width: 5rem;
    height: 5rem;
    color: inherit;
    text-decoration: inherit;
  }
  
  .images {
    width: 167px;
    color: transparent;
    max-width: 114px;
    min-height: 117px;
    position: relative;
    overflow: hidden;
    height: 100%;
    display: block;
  }
  
  .image-heading {
    position: absolute;
    left: 26px;
    top: 50px;
    color: white;
    font-weight: 800;
    font-size: 15.37px;
    text-align: center;
  }

  .imp-head
  {
    color: rgba(131, 130, 130, 1);
    opacity: 1;
    font-weight: 600;
    background-color: rgba(255, 255, 255, 1);
  }
  </style>
  