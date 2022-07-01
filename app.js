import express from 'express'
import path from 'path'
import Router from "./router/router.js"
import 'dotenv/config'
import cors from 'cors';

const PORT = process.env.PORT || 3000

const app = express()
const __dirname = path.resolve(path.dirname(''));
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'frontend')))
app.use(express.json( { extended: true }));
app.use(express.urlencoded( {extended: false}))
app.get('/', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'frontend', 'products.html'))
    console.log('Сервер отправил статический документ')
})
app.use(Router);



app.listen(PORT, () => {
	console.log(`Server started at PORT ${PORT}`)
})