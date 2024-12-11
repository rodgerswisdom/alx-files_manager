import { MongoClient } from "mongodb";

class DBClient{
    constructor(){
    const connectionString = process.env.ATLAS_URI || "";
    const client = new MongoClient(connectionString);
    let conn;
    try {
      conn = await client.connect();
    } catch(e) {
    console.error(e);
    }
    let db = conn.db("sample_training");
    export default db;
    }

    isAlive(){
        return this.client.isconnected;
    }

    async nbUsers(){
        const userCollection = this.getCollection('user');
        const numberofUsers = await userCollection.countDocuments();
        return numberofUSers;
    }

    async nbFiles(){
        const userFiles = this.getCollection('files');
        const numberofFiles = await userFiles.countDocument();
        return numberofFiles;
    }

    async close(){
        return this.client.close()
    }
}

dbClient = new DBClient();
export default dbClient;
