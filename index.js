//Importaion
const express = require('express');
const sequelize = require('./database');
const JokesModel = require('./Models/jokes');
const bodyParser = require('body-parser');
const apiRoutes = require ('./route')


const app = express();
app.use(express.json());
app.use('/api', apiRoutes);
//Port
const port = 3000;

//Initialisation
const initApp = async () => {
    console.log("Test connexion database");

    try {
        await sequelize.authenticate();
        console.log("connexion établie");

        JokesModel.sync({ alter: true });

        app.listen(port, () => {
            console.log(`App running on http://localhost:${port}`)
        });
    }
    catch (error) {
        console.error("connexion non établi", error.original);
    }
};

initApp();



app.get('/', (req, res) => {
    res.send('Hello World !')
});







