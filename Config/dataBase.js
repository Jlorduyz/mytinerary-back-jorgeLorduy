import mongoose from "mongoose";

async function dataBaseConection() {
  try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("DataBase Connect");
  } catch (error) {
    console.log(error);
  }
}

dataBaseConection();
