import express from 'express';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/task.routes.js'

console.log("Listo");

const app = express();


app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);

console.log(`Corriendo en ${PORT}`);