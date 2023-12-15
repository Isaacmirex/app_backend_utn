import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

//Metadata info about API
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'UTN Backend',
            version: '1.0.0',
            description: 'API for UTN Backend'
        },
    },
    apis: ['src/routes/classroom.routes.js', 'src/routes/events.routes.js', 'src/routes/login.routes.js', 'src/routes/users.routes.js', 'src/database.js'],
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