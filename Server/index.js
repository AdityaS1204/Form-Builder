import express from 'express';
import cors from 'cors'
import appConfig from './config/appConfig.js';
import router from './Router/Routes.js'

const {PORT} = appConfig
const app = express();

app.use(express.json());
app.use(cors());
app.use('/',router)

app.listen(PORT,()=>{
    console.info(`server running at port ${PORT}`);
})