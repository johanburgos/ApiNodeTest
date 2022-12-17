//create express api rest with endpoint transaccions
const express = require('express');
const app = express();
const port = 3005;
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/transaccions/:idProduct', (req, res) => {
    res.send({
        message: 'Hello World!',
        body: req.body,
        params: req.params,
        query: req.query
    });
}
);

// index route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



