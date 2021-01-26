const express = require('express')
const userRouter = require('./routes/user.routes')
const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/api', userRouter)


app.listen(port, () => {
    console.log(`Server is up listen on ${port}`);
})