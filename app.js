const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("January is the first Mounth of the YEAR 2020! "));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
