import express from 'express';
import cors from 'cors';


const app = express();
app.use(express.json);
// app.use(cors({}))


//Routes import and handling
import router from './routes/router.js'

app.use('/api',router)
app.listen(6969);
console.log("App running")



//#TODO :
//  Project structure and routes::
//  Shopping list,
//  Finances
//  Window shutter controls
//  Lights control
//  Monitoring
//  Automations
//  Heating
//  CORS