//create express api rest with endpoint transaccions
const express = require('express');
const app = express();
const port = 3005;

app.get('/transaccions', (req, res) => {
    //print body and get params
    console.log("Body: ");
    console.log(req.body);
    //get params
    console.log("Params: ");
    console.log(req.params);
    //qeuery params
    console.log("Query: ");
    console.log(req.query);
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



