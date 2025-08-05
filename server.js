import express from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import mongoose from 'mongoose'


import userRouter from './controllers/users.js'

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(morgan('dev'))

app.use('/api/auth', userRouter)

const startServers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('🔒 Database connected')
        app.listen(port, () => console.log(`🚀 Server running on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
startServers()