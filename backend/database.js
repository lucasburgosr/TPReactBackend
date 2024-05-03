import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'InstrumentosDB';

const client = new MongoClient(url);

export { client, dbName };
