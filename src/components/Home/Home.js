import React from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_1._CB412400102_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            title="The Monk Who Sold His Ferrari Paperback – 25 September 2003"
            price={150.0}
            image="https://m.media-amazon.com/images/I/410BqHSamiL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
            price={4499.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61qIcidztUL._SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Shift IZI Nano Drone 3D-Sensing Controller Quadcopter"
            price={15990.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61UEVtYiVpL._SL1500_.jpg"
          />
          <Product
            title="Fossil Gen 4(45mm, Smoke grey) Touchscreen Men's Smartwatch with Heart Rate, GPS, Music storage and Smartphone Notifications - FTW4012"
            price={22995.5}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vrKhjj9hL._UL1500_.jpg"
          />
          <Product
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 1TB) - Space Grey (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
            price={134900.0}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={153900.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
