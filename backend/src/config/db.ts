import { Collection, Db, MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const client = new MongoClient(process.env.MONGO_URI || "");
export const dbName: string = "PubPlus";
export const collectionName: string = "Users";

export const connectToDatabase = async (): Promise<Db> => {
  try {
    await client.connect();
    const db: Db = client.db(dbName);

    console.log("Connected to the database");
    return db;
  } catch (err) {
    console.error("Error connecting to the database", err);
    throw err;
  }
};

export const getCollection: () => Promise<Collection<any>> = async () => {
  try {
    const db: Db | undefined = await connectToDatabase();
    if (db) return db.collection(collectionName);
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
};
