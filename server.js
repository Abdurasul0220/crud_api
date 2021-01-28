const express = require('express')
const userRouter = require('./routes/user.routes')
const cardRouter = require('./routes/cardRoutes')
const jwt = require('jsonwebtoken')
const redis = require('redis')
const app = express()
app.use(express.json())


const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
  });


client.set("token", "", redis.print);
client.get("token", redis.print);





const port = process.env.PORT || 5000

app.use('/api', userRouter)
app.use('/api', cardRouter)



app.listen(port, () => {
    console.log(`Server is up listen on ${port}`);
})