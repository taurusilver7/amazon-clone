import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id={uuidv4}
            title="The Monk Who Sold His Ferrari Paperback – 25 September 2003"
            price={150.0}
            image="https://m.media-amazon.com/images/I/410BqHSamiL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id={uuidv4}
            title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
            price={4499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={uuidv4}
            title="Shift IZI Nano Drone 3D-Sensing Controller Quadcopter"
            price={15990.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61UEVtYiVpL._SL1500_.jpg"
          />
          <Product
            id={uuidv4}
            title="Fossil Gen 4(45mm, Smoke grey) Touchscreen Men's Smartwatch with Heart Rate, GPS, Music storage and Smartphone Notifications - FTW4012"
            price={22995.5}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vrKhjj9hL._UL1500_.jpg"
          />
          <Product
            id={uuidv4}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Space Grey (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
            price={134900.0}
            rating={5}
          />
        </div>

        <div className="home__row">
          <a className="home__movies" target="_blank" rel="noreferrer" href="https://www.primevideo.com/ref=atv_nb_logo">
            <img
              className="home__movies"
              src="https://lh3.googleusercontent.com/proxy/u1FRFf1asTFzjg-Z4N6Bsp0GJ_o3KSU9RX2ft2-kBT8wJTWJ_w3F1hy1fqaPs2QocyHgQN76Ym0jze3ap0F95pUUazH3iyxFpf17qXo"
              alt="movies"
            />
          </a>
          <Product
            id={uuidv4}
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={153900.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={uuidv4}
            title="Bildos 3 Ply CE,ISO & GMP Certified Face Masks with Adjustable Nose Clip and Ultrasonic sealed ear loop With Melt blown Layer to assure BFE>95% (100)"
            price={349.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81noEGxuqWL._UL1500_.jpg"
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/813gUaNgjyL._SL1500_.jpg"
            id={uuidv4}
            rating={3}
            price={399.0}
            title="Steelbird YS-47 7Wings Unisex Helmet Visor Face Shield, Static Full Face Protector For Each and Everyone (Pack of 1)"
          />
          <Product
            image="https://images-na.ssl-images-amazon.com/images/I/8196IP4I8cL._SL1500_.jpg"
            id={uuidv4}
            rating={2}
            price={289.0}
            title="Marcloire Reusable & Washable 5-Layered Outdoor Protection Face Mask with Improved Ear Loops for Men/Women (Multi-Color)"
          />
        </div>
        <div className="home__row">
          <Product
            id={uuidv4}
            title="Zebronics 600 va UPS-U725 for Desktop/Computers(Not for Routers)"
            price={1999.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81hxQATJMiL._SL1500_.jpg"
          />
          <Product
            id={uuidv4}
            title="Like Star 3.5mm Clip Microphone for YouTube | Collar Mike for Voice Recording | Lapel Mic Mobile, PC, Laptop, Android Smartphones, DSLR Camera Microphone Microphone"
            price={2499.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41M1i9RyK1L.jpg"
          />
          <Product
            id={uuidv4}
            title="Canon EOS 90D Digital SLR Camera with 18-135 is USM Lens with 16GB Card"
            price={119999.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81QKcQmJF7L._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
