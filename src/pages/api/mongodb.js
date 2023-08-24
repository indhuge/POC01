//@ts-check
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function insertClient(clientObj) {
  try {
    let dbo = await client.connect();
    await dbo.db("indHUGE").collection("clients").insertOne(clientObj);
  } finally {
    await client.close();
  }
}
