import "dotenv/config.js";
import "../../Config/dataBase.js";
import City from "../City.js";

let cities = [
  {
    name: "Bogotá",
    img: "https://www.cepal.org/sites/default/files/styles/1920x1080/public/regionaloffice/images/bogota.jpg?itok=6GS_dObY",
    country: "Colombia",
    language: "Spanish",
    currency: "COP",
    description:
      "The capital of Colombia, located over 2600 meters above sea level, with a rich cultural mix and significant historical heritage.",
  },
  {
    name: "Buenos Aires",
    img: "https://cdn.britannica.com/63/188963-050-2C94FEC2/Night-view-obelisk-Buenos-Aires.jpg",
    country: "Argentina",
    language: "Spanish",
    currency: "ARS",
    description:
      "The vibrant capital of Argentina, known for tango, its European architecture, and artistic culture.",
  },
  {
    name: "Madrid",
    img: "https://img.static-kl.com/images/media/65848EF5-2848-4EA7-BE113130180A0A55",
    country: "Spain",
    language: "Spanish",
    currency: "EUR",
    description:
      "Capital of Spain, famous for its museums, nightlife, and historic squares.",
  },
  {
    name: "Lima",
    img: "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2020/08/30162219/lima-peru-shutterstock_1047718252.jpg",
    country: "Peru",
    language: "Spanish",
    currency: "PEN",
    description:
      "The largest city in Peru, known for its exquisite cuisine and access to pre-Columbian history.",
  },
  {
    name: "Paris",
    img: "https://media.gq.com.mx/photos/6539624920335183f3244843/4:3/w_2664,h_1998,c_limit/Mejor_e%CC%81poca_para_viajar_a_Pari%CC%81s.jpg",
    country: "France",
    language: "French",
    currency: "EUR",
    description:
      "The capital of France, renowned for the Eiffel Tower, its art, and its cuisine.",
  },
  {
    name: "Rome",
    img: "https://images.ecestaticos.com/1klfjmk65opTVmToiwBJAUQ3dyM=/0x13:1494x854/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fdae%2F7b7%2F861%2Fdae7b7861c3285b03b9f6555878c8c53.jpg",
    country: "Italy",
    language: "Italian",
    currency: "EUR",
    description:
      "The Eternal City, known for its ancient monuments such as the Colosseum and the Vatican.",
  },
  {
    name: "Tokyo",
    img: "https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg",
    country: "Japan",
    language: "Japanese",
    currency: "JPY",
    description:
      "The capital of Japan, where futuristic technology blends with ancient traditions.",
  },
  {
    name: "Mexico City",
    img: "https://www.mexperience.com/wp-content/uploads/MexicoCity-AerialView-1200x795.jpg",
    country: "Mexico",
    language: "Spanish",
    currency: "MXN",
    description:
      "One of the largest cities in the world, famous for its pre-Hispanic and colonial history.",
  },
  {
    name: "New York",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
    country: "United States",
    language: "English",
    currency: "USD",
    description:
      "The city that never sleeps, home to the Statue of Liberty, Central Park, and Broadway.",
  },
  {
    name: "London",
    img: "https://media.glamourmagazine.co.uk/photos/6655ec77b02d44c4faede6b1/16:9/w_2580,c_limit/WHATS%20ON%20LONDON%20290524%20GettyImages-1400045121.jpg",
    country: "United Kingdom",
    language: "English",
    currency: "GBP",
    description:
      "Capital of the UK, known for Big Ben, Buckingham Palace, and the River Thames.",
  },
  {
    name: "Sydney",
    img: "https://nextgoalagency.com/wp-content/uploads/2023/06/f638a600-c20b-4a0a-b1ef-55293bd0d2bf.jpeg",
    country: "Australia",
    language: "English",
    currency: "AUD",
    description:
      "A cosmopolitan city famous for its iconic Opera House and spectacular harbor.",
  },
  {
    name: "Berlin",
    img: "https://eu-images.contentstack.com/v3/assets/blte218090c2a6fb1e2/blt14714d4ceede487c/61fb978b9387134a3b6cd277/berlin-brandenburger-tor-t-154041325.jpg?auto=webp&width=1440&quality=75",
    country: "Germany",
    language: "German",
    currency: "EUR",
    description:
      "The capital of Germany, known for its recent history, museums, and nightlife.",
  },
  {
    name: "Amsterdam",
    img: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/504000/504208-north-holland.jpg",
    country: "Netherlands",
    language: "Dutch",
    currency: "EUR",
    description: "Famous for its canals, museums, and relaxed atmosphere.",
  },
  {
    name: "Cairo",
    img: "https://touristjourney.com/wp-content/uploads/2020/03/cairo-1980350_1920-1-1024x783.jpg",
    country: "Egypt",
    language: "Arabic",
    currency: "EGP",
    description:
      "The largest city in Africa, home to the pyramids and the Nile River.",
  },
  {
    name: "Rio de Janeiro",
    img: "https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_801.jpeg",
    country: "Brazil",
    language: "Portuguese",
    currency: "BRL",
    description:
      "Known for its carnival, the Christ the Redeemer statue, and the beaches of Copacabana.",
  },
  {
    name: "Toronto",
    img: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/toronto/167_3_0900_jpeg_6507e740-9c05-46e9-933a-5d52f39f15a8.jpg",
    country: "Canada",
    language: "English",
    currency: "CAD",
    description:
      "The largest city in Canada, famous for its cultural diversity and the CN Tower.",
  },
  {
    name: "Moscow",
    img: "https://media.digitalnomads.world/wp-content/uploads/2021/08/20115631/moscow-digital-nomads.jpg",
    country: "Russia",
    language: "Russian",
    currency: "RUB",
    description:
      "The capital of Russia, known for Red Square, the Kremlin, and St. Basil's Cathedral.",
  },
  {
    name: "Dubai",
    img: "https://www.viajar-dubai.com/img/guia-viaje-dubai.jpg",
    country: "United Arab Emirates",
    language: "Arabic",
    currency: "AED",
    description:
      "Known for its impressive modern architecture, shopping malls, and skyscrapers.",
  },
  {
    name: "Istanbul",
    img: "https://www.civitatis.com/blog/wp-content/uploads/2024/03/shutterstock_291252509-scaled.jpg",
    country: "Turkey",
    language: "Turkish",
    currency: "TRY",
    description:
      "The only city on two continents, famous for its Ottoman history and mosques.",
  },
  {
    name: "Seoul",
    img: "https://citygame.com/wp-content/blogs.dir/1/files/sites/37/2023/03/City-Game-Seoul-scaled.jpg",
    country: "South Korea",
    language: "Korean",
    currency: "KRW",
    description:
      "A modern city with a rich cultural history, known for K-pop and advanced technology.",
  },
];

City.insertMany(cities);
