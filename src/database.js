import pkg from 'pg';
import fs from 'fs';
const { Client } = pkg;
const client = new Client({
    host: "serverutnback.postgres.database.azure.com",
    user: "backutn",
    password: "$erver2023",
    database: "back_utn_v1",
    port: 5432,
    ssl: {
        ca: fs.readFileSync('./src/DigiCertGlobalRootCA.crt.pem')
    }
});

client.connect()
    .then(() => console.log('Conecting successfull'))
    .catch(err => {
        console.error('Error with database ', err);
        client.end();
    });

export { client };