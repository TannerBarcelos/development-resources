import express from 'express'
import { requireAuth } from '../middlewares/authCheck'
const router = express.Router()

import {
  login,
  createLogin,
  isLoggedIn,
  logout,
  getUserCredentials,
} from '../controllers/authController'

router.get('/', isLoggedIn)
router.get('/login', createLogin)
router.post('/login', login)
router.get('/logout', logout)
router.get('/dashboard', requireAuth, getUserCredentials)

export default router
