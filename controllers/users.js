import express from 'express'
import User from '../models/user.js'
import { InvalidData, Unauthorized } from '../utils/errors.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/tokens.js'

const router = express.Router()

router.post('/sign-up', async (req, res, next) =>{

})

router.post('/sign-in', async (req, res, next) =>{
    const {identifier, password} = req.body
    try {
        const foundUser = await User.findOne
    } catch (error) {
        next(error)
    }
})

export default router