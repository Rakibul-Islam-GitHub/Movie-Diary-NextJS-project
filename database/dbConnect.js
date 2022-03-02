import { MongoClient } from "mongodb";

const client= MongoClient.connect(`mongodb+srv://rakibul:${process.env.DB_PASS}@cluster0.gpypc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

const db= client.db();
const dbClose= client.close();

export {db, dbClose, client};

