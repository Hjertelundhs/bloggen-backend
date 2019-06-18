import { MongoClient } from 'mongodb';

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true
    });
    const db = client.db('bloggen');

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: 'Error connecting to db', error });
  }
};

export default withDB;
