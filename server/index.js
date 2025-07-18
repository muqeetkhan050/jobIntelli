const express=require('express')
const moongoose=require('mongoose')
const cors=require('cors')



const app=express()
app.use(cors())
app.use(express.json())