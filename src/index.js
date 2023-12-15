import express from 'express';
import {router} from './routes/classroom.routes.js';
import {router_users} from './routes/users.routes.js';
import {swaggerDocs as V1SwaggerDocs} from './routes/swagger.js';

const PORT = process.env.PORT || 3000;

const app = express()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//swagger
V1SwaggerDocs(app, PORT);
//routes
app.use("/", router);
app.use("/", router_users);
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
console.log("Server on port 3000")