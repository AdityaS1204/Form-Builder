import express from 'express';
import appConfig from './config/appConfig.js';
import router from './Router/Routes.js'

const {PORT,GOOGLE_PRIVATE_KEY,GOOGLE_SHEET_CLIENT_EMAIL} = appConfig
const app = express();

app.use(express.json());

app.use('/',router)

app.listen(PORT,()=>{
    console.info(`server running at port ${PORT}`);
})