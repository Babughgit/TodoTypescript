const express=require('express');
const app=express();
import bodyParser from 'body-parser';

import  todosRoutes from './routes/todos';
app.use(bodyParser.json());
app.use(todosRoutes);

app.listen(3000,function()
{
console.log("sever started");
})