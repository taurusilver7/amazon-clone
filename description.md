# Amazon Clone ₹

> A mobile responsive amazon clone application using react js.

- The application is hosted using firebase.
- The firebase configuration are stored in _firebase.js_

- The application contains Header, Home

* the header logo is placed here [logo](http://pngimg.com/uploads/amazon/amazon_PNG11.png)
* The login logo is placed here [logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazoon_logo.svg.png)
* The header is customized and material-ui package is imported from `npm install @material-ui/core` & `npm install @material-ui/icons`
* The SearchIcon & ShoppingCartIcon are imported and customized.

* The home banner image is here [banner_1](https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg)
* [banner_2](https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Herotator/HeroPC_1500x600_1._CB412400102_.jpg)
* [banner-3](https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2020/img/Kitchen/XCM_Manual_1291819_1499443_IN_1489217_in_sa_cookingdays_hero2_in_en_3563168_1500x600_1X_en_IN._CB415777590_.jpg)
* [banner-4](https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M02/Teaser/Rv4_dualcamera/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_DesktopTallHero_1500x600_1._CB661026283_.jpg)

* The home contains several products components with each customized separately.
* the product component has a product's title, it's price, a rating and an image of it.
  [product-1](https://m.media-amazon.com/images/I/410BqHSamiL._AC_SY200_.jpg)
  [product-2](https://images-na.ssl-images-amazon.com/images/I/61qIcidztUL._SL1000_.jpg)
  [product-3](https://images-na.ssl-images-amazon.com/images/I/61UEVtYiVpL._SL1500_.jpg)
  [product-4](https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg)
  [product-5](https://images-na.ssl-images-amazon.com/images/I/71vrKhjj9hL._UL1500_.jpg)
  [product-6](https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._SL1500_.jpg)

- The checkout component is connected the main page through react-router. `npm install react-router-dom`.

* The checkout ad image is [here](https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg)
* guarantee image is [here](https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png)

- The logo & cart icons are routed to '/' & '/checkout' routes respectively.

- the subtotal component consists of the products marked by the user. An additional package is added to it. `npm install react-currency-format`.
- The subtotal is calculated using a function getCartTotal which is in the reducer.js & customized to amazon default style.

- the stateprovider is initiated to makeup data layer, with reducer comprising of actions.

- The checkout component consists of amazon offer banner, guarnatee image, subtotal component, checkout products list.

- The footer component is designed from the official amazon website & is made static.

- The login authentication using firebase configuration is placed in the firebase.js file in src directory.

- the payment page is route to '/payment' and is customized to the official amazon website.
- The payment window is provided by stripe.js. The databse management, cloud server are provided by firebase.
