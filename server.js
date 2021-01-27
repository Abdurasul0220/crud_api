const express = require('express')
const userRouter = require('./routes/user.routes')
const cardRouter = require('./routes/cardRoutes')
const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api', userRouter)
app.use('/api', cardRouter)


app.listen(port, () => {
    console.log(`Server is up listen on ${port}`);
})