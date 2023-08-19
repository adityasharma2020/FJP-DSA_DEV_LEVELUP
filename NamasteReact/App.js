import React from "react";
import ReactDOM from "react-dom/client";

/**
      header
        -logo
        -nav items
        cart
      Body
        -Search bar
        -Restaurent list
        -RestaurentCard
          -image
          -name
          -rating
          -cusines
        footer
          -links
          -Copyright
       */

const Title = () => <h1>food villa</h1>;

const Header = () => {
  return (
    <div className="header">
      <img
        alt="logo"
        className="logo"
        src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/302275887_487537640050648_5998956273504369200_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Jr3E6g2KlUAX_h0qkC&_nc_ht=scontent.fdel29-1.fna&oh=00_AfD6xqrbRxGfBJu-tFEIQMt5XggfZOv_hHqC8vcs_08Y4g&oe=64B1FDEE"
      />
      <Title />
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "626064",
      name: "Consent Cakes",
      uuid: "90e633ab-7bf8-4ba1-9bee-7b3bf341be00",
      city: "4",
      area: "Munirka",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "jw54o70i36rvnggoijxd",
      cuisines: ["Bakery"],
      tags: [],
      costForTwo: 15900,
      costForTwoString: "₹159 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 29,
      maxDeliveryTime: 29,
      slaString: "29 MINS",
      lastMileTravel: 2.5999999046325684,
      slugs: {
        restaurant: "consent-cakes-south-campus-south-campus",
        city: "delhi",
      },
      cityState: "4",
      address:
        "1, near Anupam Restaurant, Munirka, New Delhi, Delhi 110067, India",
      locality: "",
      parentId: 244055,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "626064",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        lastMileTravel: 2.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "614582",
      name: "KFC",
      uuid: "f62ef098-88a5-4a1a-a5b1-cfcf0b28de80",
      city: "4",
      area: "Vasant Vihar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "kfc-basant-lok-south-campus",
        city: "delhi",
      },
      cityState: "4",
      address: "G-05,PVR Priya, 61 Basant lok,Vasant Vihar New Delhi -110057",
      locality: "Basant Lok",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "614582",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "197691",
      name: "Tobiko by ENOKI",
      uuid: "3d5356f4-e81e-4389-8664-9f0b362c0ddf",
      city: "4",
      area: "Munirka",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "z8gygg7aep75zh1a3a4d",
      cuisines: ["Asian", "Pan-Asian", "Japanese", "Chinese", "Thai"],
      tags: [],
      costForTwo: 80000,
      costForTwoString: "₹800 FOR TWO",
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: "24 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "tobiko-south-campus-south-campus",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Multi level Parking, Kapoor Wali Gali, Munirka, New Delhi, Delhi",
      locality: "",
      parentId: 8758,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "Closes soon",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7343263~p=4~eid=00000189-40d3-57a6-10c7-51c9005c0460~srvts=1689009739686",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "197691",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "5925",
      name: "Burger King",
      uuid: "388b1266-0f1e-41a3-987d-be747c775e47",
      city: "4",
      area: "Vasant Kunj",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 53,
      minDeliveryTime: 53,
      maxDeliveryTime: 53,
      slaString: "53 MINS",
      lastMileTravel: 2.9000000953674316,
      slugs: {
        restaurant: "burger-king-vasant-kunj",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Ambience Mall, 3rd floor Food court, Vasant Kunj, New Delhi-110070",
      locality: "Ambience Mall",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.9 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
        subHeader: "",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "5925",
        deliveryTime: 53,
        minDeliveryTime: 53,
        maxDeliveryTime: 53,
        lastMileTravel: 2.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "433301",
      name: "La Pino'z Pizza",
      uuid: "81a93579-dc90-46ec-9def-5fada9940ed5",
      city: "4",
      area: "Munirka",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zootnwpzzgoxpoxmx697",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 2.5,
      slugs: {
        restaurant: "la-pino'z-pizza-south-campus-south-campus",
        city: "delhi",
      },
      cityState: "4",
      address:
        "250 B/1, Nelson Mandela marg, opp Vasant Vihar bus depot, Munirka, New Delhi 110067",
      locality: "Nelson Mandela Marg",
      parentId: 4961,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
        discountTag: "",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "433301",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 2.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "570764",
      name: "Yours Truly Butter Chicken",
      uuid: "a2260104-c5c7-4686-b196-e2b7e9ef47be",
      city: "4",
      area: "Vasant Kunj",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "gbyoqqc2kok7rnqzfpz7",
      cuisines: ["North Indian", "Mughlai", "Kebabs"],
      tags: [],
      costForTwo: 140000,
      costForTwoString: "₹1400 FOR TWO",
      deliveryTime: 43,
      minDeliveryTime: 43,
      maxDeliveryTime: 43,
      slaString: "43 MINS",
      lastMileTravel: 3.5999999046325684,
      slugs: {
        restaurant: "yours-truly-butter-chicken-vasant-kunj-vasant-kunj-2",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Unit 1, Plot No. 1, Masoodpur Dairy Farm, Vasant Kunj, New Delhi 110070",
      locality: "Masoodpur",
      parentId: 10615,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 4400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 4400,
        message: "",
        title: "Delivery Charge",
        amount: "4400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID:
        "cid=7358560~p=7~eid=00000189-40d3-57a6-10c7-51ca005c070e~srvts=1689009739686",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.5 kms",
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "570764",
        deliveryTime: 43,
        minDeliveryTime: 43,
        maxDeliveryTime: 43,
        lastMileTravel: 3.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "254000",
      name: "McDonald's",
      uuid: "27fba42f-dc77-4a5d-ada2-c6933df31cc5",
      city: "4",
      area: "Vasant Kunj",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
      cuisines: ["American"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 60,
      minDeliveryTime: 60,
      maxDeliveryTime: 60,
      slaString: "60 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "mcdonalds-delhi-ambiance-vasant-kunj-vasant-kunj",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Delhi Ambience Vasant Kunj, T-310. Ambience Mall, Plot No-2, Shopping Complex, Phase-II, Nebon Mandela Road. Vasant Kunj. New Delhi- 110070",
      locality: "Ambience Mall",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "254000",
        deliveryTime: 60,
        minDeliveryTime: 60,
        maxDeliveryTime: 60,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "25455",
      name: "Domino's Pizza",
      uuid: "f80512f4-1e20-4731-9f42-5956f3517451",
      city: "4",
      area: "Vasant Vihar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "gtguufxxmsmxr6alh99j",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0,
      slugs: {
        restaurant: "dominos-pizza-vasant-vihar-vasant-kunj",
        city: "delhi",
      },
      cityState: "4",
      address:
        "Plot No-6, Community CenterBasant Lok,Vasant Vihar NEW DELHI PIN-110057",
      locality: "Basant Lok Market",
      parentId: 2456,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3600,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3600,
        message: "",
        title: "Delivery Charge",
        amount: "3600",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      hasSurge: false,
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
        headerTypeV2: 0,
      },
      sla: {
        restaurantId: "25455",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

const BurgerKing = {
  name: "burgerKing",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/gbyoqqc2kok7rnqzfpz7",
  cusines: ["burger", "American"],
  rating: "4.2",
};

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>

      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<AppLayout />);
