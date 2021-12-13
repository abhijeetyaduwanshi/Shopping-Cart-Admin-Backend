const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send("Hello world from server");
})

app.listen(3000);
console.log("Server running on port 3000");