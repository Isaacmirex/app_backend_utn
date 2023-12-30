import express from "express";
import session from "express-session";
import cors from "cors";
import passport from "passport";
import {loginRouter} from "./routes/microsoft.js";
import {usersRouter} from "./routes/users.js";
import {rolesRouter} from "./routes/roles.js";
import {modulesRouter} from "./routes/modules.js";
import {assignments_modulesRouter} from "./routes/assignments_modules.js";
import {eventsRouter} from "./routes/events.js";
import {assignments_eventsRouter} from "./routes/assignments_events.js";
import {classroomRouter} from "./routes/classroom.js";
import {assignments_classRouter} from "./routes/assignments_class.js";
import {class_scoreRouter} from "./routes/class_score.js";
import {auditingRouter} from "./routes/auditing.js";
import "./middlewares/microsoft.js";
import {authorize} from "./middlewares/verifyAccess.js";
import {swaggerDocs as V1SwaggerDocs} from "./routes/swagger.js";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use(
    session({
        secret: '$serverbackutn',
        resave: true,
        saveUninitialized: true,
        cookie: {
            secure: false, // Cambiar a true si estás usando HTTPS
            maxAge: 24 * 60 * 60 * 1000, // Tiempo de vida de la sesión en milisegundos
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", loginRouter);

//Hola mundo en el servidor de bienvenida 
app.get('/', (req, res) => {
    res.send(`Hola mundo es una API de Login`);
});

//swagger
V1SwaggerDocs(app, port);

app.use('/utnbackend/v1/users', usersRouter);
app.use('/utnbackend/v1/roles', rolesRouter);
app.use('/utnbackend/v1/modules', modulesRouter);
app.use('/utnbackend/v1/assignments_modules', assignments_modulesRouter);
app.use('/utnbackend/v1/events', eventsRouter);
app.use('/utnbackend/v1/assignments_events', assignments_eventsRouter);
app.use('/utnbackend/v1/classroom', classroomRouter);
app.use('/utnbackend/v1/assignments_class', assignments_classRouter);
app.use('/utnbackend/v1/class_score', class_scoreRouter);
app.use('/utnbackend/v1/auditing', auditingRouter);
//app.use('/utnbackend/v1/assignments_modules', authorize(['Administrador'], ['Assignments_Modules']), assignments_modulesRouter);

app.listen(port, () => {
    console.log(`Escuchando en el puerto: http://localhost:${port}`);

});


