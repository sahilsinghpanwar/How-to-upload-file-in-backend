import express from "express"

import cors from "cors"
import cookieparser from 'cookie-parser'

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// data json ke form m h
app.use(express.json({limit: "20kb"}));

// url ko encode kr deta h or we use extended means object kai under object hoga toh  (ye data ko decode kr deta h)
app.use(express.urlencoded({extended: true, limit: "20kb"}));

// esmai saare assects hogne means images, pdf favicon  in public folder
app.use(express.static("public"));



app.use(cookieparser())

export default app;