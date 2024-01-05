import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {title: 'UTN Backend', version: "1.0.0", description: 'API for UTN Backend'},
    },
    apis: ['src/routes/users.js', 'src/routes/modules.js', 'src/routes/roles.js', 'src/routes/assignments_modules.js',
        'src/routes/events.js', 'src/routes/assignments_events.js', 'src/routes/classroom.js',
        'src/routes/assignments_class.js', 'src/routes/class_score.js', 'src/routes/auditing.js', 'src/routes/login.routes.js', 'src/routes/getmodules.routes.js', 'database.js'],
};

const swaggerSpecs = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    app.use('/utnbackend/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
    app.get('/utnbackend/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpecs);
    });
    console.log(`Swagger Docs running at http://localhost:${port}/utnbackend/v1/docs`);
};

export {swaggerDocs};

