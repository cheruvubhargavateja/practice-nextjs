import mongoose from "mongoose";

export async function connection() {
  try {
    mongoose.connect(process.env.DB_URL!);

    const db = mongoose.connection;

    db.on("connected", () => {
      console.log("Connected to monogDB..");
    });

    db.on("error", (err) => {
      console.log("Failed to connect mongoDB");
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong");
    console.log(error);
  }
}
