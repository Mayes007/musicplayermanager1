const { MongoClient } = require('mongodb');
async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = "mongodb+srv://samanthatmayes_db_user:DanandPhil*07@cluster0.cvql1if.mongodb.net/?appName=Cluster0";
  const client = new MongoClient(uri);
  try {
    const database = client.db('MusicPlayerManagerDB');
    const songs= database.collection('songs');
    // Queries for a song that has a title value of 'If I can Fly'
    const query = { title: 'If I can Fly' };
    const song = await songs.findOne(query);
    console.log(song);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);