import express from 'express'
import { Router } from 'express'
const router = express.Router();

router.get('/dashboard',(req,res)=>{
res.send('Dashboard Page')
})

router.get('/reports',(req,res)=>{
res.send('Reports Page')
})

export default router;