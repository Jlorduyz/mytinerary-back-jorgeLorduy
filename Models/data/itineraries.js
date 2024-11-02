import "dotenv/config.js";
import "../../Config/dataBase.js";
import Itinerary from "../Itinerary.js";

let itineraries = [
  {
    travelAgent: {
      name: "John Doe",
      photo: "https://robohash.org/john-doe.png",
    },
    price: 3,
    duration: "3 hours",
    likes: 0,
    hashtags: "#adventure #travel #fun",
    city: "67174abf9e88efed2d227497",
  },
  {
    travelAgent: {
      name: "Jane Smith",
      photo: "https://robohash.org/jane-smith.png",
    },
    price: 1,
    duration: "2 hours",
    likes: 0,
    hashtags: "#nature #travel #relax",
    city: "67174abf9e88efed2d227497",
  },
  {
    travelAgent: {
      name: "Emily Johnson",
      photo: "https://robohash.org/emily-johnson.png",
    },
    price: 2,
    duration: "5 hours",
    likes: 0,
    hashtags: "#explore #holiday #adventure",
    city: "67174abf9e88efed2d227498",
  },
  {
    travelAgent: {
      name: "Alex Brown",
      photo: "https://robohash.org/alex-brown.png",
    },
    price: 5,
    duration: "4 hours",
    likes: 0,
    hashtags: "#citytour #travel #wanderlust",
    city: "67174abf9e88efed2d227498",
  },
  {
    travelAgent: {
      name: "Michael Green",
      photo: "https://robohash.org/michael-green.png",
    },
    price: 4,
    duration: "2 hours",
    likes: 0,
    hashtags: "#sunset #adventure #nature",
    city: "67174abf9e88efed2d22749a",
  },
  {
    travelAgent: {
      name: "Sophia White",
      photo: "https://robohash.org/sophia-white.png",
    },
    price: 2,
    duration: "3 hours",
    likes: 0,
    hashtags: "#culture #travel #citylife",
    city: "67174abf9e88efed2d227498",
  },
  {
    travelAgent: {
      name: "Liam Blue",
      photo: "https://robohash.org/liam-blue.png",
    },
    price: 4,
    duration: "2 hours",
    likes: 0,
    hashtags: "#foodie #travel #adventure",
    city: "67174abf9e88efed2d227498",
  },
  {
    travelAgent: {
      name: "Olivia Black",
      photo: "https://robohash.org/olivia-black.png",
    },
    price: 1,
    duration: "4 hours",
    likes: 0,
    hashtags: "#exploration #fun #sightseeing",
    city: "67174abf9e88efed2d227498",
  },
  {
    travelAgent: {
      name: "Noah Gray",
      photo: "https://robohash.org/noah-gray.png",
    },
    price: 3,
    duration: "5 hours",
    likes: 0,
    hashtags: "#adventure #travel #experience",
    city: "67174abf9e88efed2d227498",
  },
  {
    travelAgent: {
      name: "Emma Pink",
      photo: "https://robohash.org/emma-pink.png",
    },
    price: 2,
    duration: "4 hours",
    likes: 0,
    hashtags: "#romance #travel #europe",
    city: "67174abf9e88efed2d22749b",
  },
  {
    travelAgent: {
      name: "William Orange",
      photo: "https://robohash.org/william-orange.png",
    },
    price: 3,
    duration: "5 hours",
    likes: 0,
    hashtags: "#sightseeing #culture #travel",
    city: "67174abf9e88efed2d22749b",
  },
  {
    travelAgent: {
      name: "Ava Green",
      photo: "https://robohash.org/ava-green.png",
    },
    price: 5,
    duration: "6 hours",
    likes: 0,
    hashtags: "#technology #culture #adventure",
    city: "67174abf9e88efed2d22749d",
  },
  {
    travelAgent: {
      name: "James Yellow",
      photo: "https://robohash.org/james-yellow.png",
    },
    price: 1,
    duration: "4 hours",
    likes: 0,
    hashtags: "#food #exploration #travel",
    city: "67174abf9e88efed2d22749d",
  },
  {
    travelAgent: {
      name: "Mia Red",
      photo: "https://robohash.org/mia-red.png",
    },
    price: 3,
    duration: "5 hours",
    likes: 0,
    hashtags: "#history #culture #adventure",
    city: "67174abf9e88efed2d22749d",
  },
  {
    travelAgent: {
      name: "Ethan Purple",
      photo: "https://robohash.org/ethan-purple.png",
    },
    price: 5,
    duration: "3 hours",
    likes: 0,
    hashtags: "#food #culture #travel",
    city: "67174abf9e88efed2d22749e",
  },
  {
    travelAgent: {
      name: "Isabella Teal",
      photo: "https://robohash.org/isabella-teal.png",
    },
    price: 4,
    duration: "4 hours",
    likes: 0,
    hashtags: "#adventure #exploration #art",
    city: "67174abf9e88efed2d22749e",
  },
  {
    travelAgent: {
      name: "Oliver Aqua",
      photo: "https://robohash.org/oliver-aqua.png",
    },
    price: 2,
    duration: "2 hours",
    likes: 0,
    hashtags: "#citylife #exploration #travel",
    city: "67174abf9e88efed2d22749e",
  },
  {
    travelAgent: {
      name: "Sophia Gray",
      photo: "https://robohash.org/sophia-gray.png",
    },
    price: 1,
    duration: "5 hours",
    likes: 0,
    hashtags: "#heritage #culture #adventure",
    city: "67174abf9e88efed2d22749e",
  },
  {
    travelAgent: {
      name: "Lucas Cyan",
      photo: "https://robohash.org/lucas-cyan.png",
    },
    price: 5,
    duration: "5 hours",
    likes: 0,
    hashtags: "#citytour #exploration #nightlife",
    city: "67174abf9e88efed2d22749f",
  },
  {
    travelAgent: {
      name: "Charlotte Coral",
      photo: "https://robohash.org/charlotte-coral.png",
    },
    price: 2,
    duration: "6 hours",
    likes: 0,
    hashtags: "#adventure #culture #art",
    city: "67174abf9e88efed2d22749f",
  },
  {
    travelAgent: {
      name: "Henry Indigo",
      photo: "https://robohash.org/henry-indigo.png",
    },
    price: 4,
    duration: "4 hours",
    likes: 0,
    hashtags: "#foodie #travel #sightseeing",
    city: "67174abf9e88efed2d22749f",
  },
  {
    travelAgent: {
      name: "Amelia Lavender",
      photo: "https://robohash.org/amelia-lavender.png",
    },
    price: 1,
    duration: "5 hours",
    likes: 0,
    hashtags: "#beach #adventure #sightseeing",
    city: "67174abf9e88efed2d2274a1",
  },
  {
    travelAgent: {
      name: "Benjamin Gold",
      photo: "https://robohash.org/benjamin-gold.png",
    },
    price: 4,
    duration: "4 hours",
    likes: 0,
    hashtags: "#nature #exploration #travel",
    city: "67174abf9e88efed2d2274a1",
  },
  {
    travelAgent: {
      name: "Charlotte Rose",
      photo: "https://robohash.org/charlotte-rose.png",
    },
    price: 3,
    duration: "3 hours",
    likes: 0,
    hashtags: "#adventure #culture #experience",
    city: "67174abf9e88efed2d2274a1",
  },
  {
    travelAgent: {
      name: "Liam Blue",
      photo: "https://robohash.org/liam-blue.png",
    },
    price: 4,
    duration: "4 hours",
    likes: 0,
    hashtags: "#biking #culture #exploration",
    city: "67174abf9e88efed2d2274a3",
  },
  {
    travelAgent: {
      name: "Zoe Mint",
      photo: "https://robohash.org/zoe-mint.png",
    },
    price: 2,
    duration: "5 hours",
    likes: 0,
    hashtags: "#art #canals #travel",
    city: "67174abf9e88efed2d2274a3",
  },
  {
    travelAgent: {
      name: "Jacob Magenta",
      photo: "https://robohash.org/jacob-magenta.png",
    },
    price: 1,
    duration: "3 hours",
    likes: 0,
    hashtags: "#food #sightseeing #adventure",
    city: "67174abf9e88efed2d2274a3",
  },
  {
    travelAgent: {
      name: "Sofia Coral",
      photo: "https://robohash.org/sofia-coral.png",
    },
    price: 5,
    duration: "6 hours",
    likes: 0,
    hashtags: "#beach #carnival #adventure",
    city: "67174abf9e88efed2d2274a5",
  },
  {
    travelAgent: {
      name: "Mason Teal",
      photo: "https://robohash.org/mason-teal.png",
    },
    price: 5,
    duration: "5 hours",
    likes: 0,
    hashtags: "#nature #exploration #fun",
    city: "67174abf9e88efed2d2274a5",
  },
  {
    travelAgent: {
      name: "Ella Peach",
      photo: "https://robohash.org/ella-peach.png",
    },
    price: 3,
    duration: "4 hours",
    likes: 0,
    hashtags: "#culture #sightseeing #adventure",
    city: "67174abf9e88efed2d2274a5",
  },
  {
    travelAgent: {
      name: "Oliver Blue",
      photo: "https://robohash.org/oliver-blue.png",
    },
    price: 4,
    duration: "5 hours",
    likes: 0,
    hashtags: "#luxury #adventure #culture",
    city: "67174abf9e88efed2d2274a8",
  },
  {
    travelAgent: {
      name: "Luna Silver",
      photo: "https://robohash.org/luna-silver.png",
    },
    price: 1,
    duration: "7 hours",
    likes: 0,
    hashtags: "#shopping #sightseeing #experience",
    city: "67174abf9e88efed2d2274a8",
  },
  {
    travelAgent: {
      name: "James Gold",
      photo: "https://robohash.org/james-gold.png",
    },
    price: 5,
    duration: "6 hours",
    likes: 0,
    hashtags: "#adventure #culture #desert",
    city: "67174abf9e88efed2d2274a8",
  },
  {
    travelAgent: {
      name: "Ella Pink",
      photo: "https://robohash.org/ella-pink.png",
    },
    price: 2,
    duration: "5 hours",
    likes: 0,
    hashtags: "#kfood #culture #adventure",
    city: "67174abf9e88efed2d2274aa",
  },
  {
    travelAgent: {
      name: "Noah Orange",
      photo: "https://robohash.org/noah-orange.png",
    },
    price: 5,
    duration: "6 hours",
    likes: 0,
    hashtags: "#technology #exploration #sightseeing",
    city: "67174abf9e88efed2d2274aa",
  },
  {
    travelAgent: {
      name: "Ava Red",
      photo: "https://robohash.org/ava-red.png",
    },
    price: 1,
    duration: "4 hours",
    likes: 0,
    hashtags: "#history #culture #art",
    city: "67174abf9e88efed2d2274aa",
  },
];

Itinerary.insertMany(itineraries);
