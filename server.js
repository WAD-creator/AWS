const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("<h1>My AWS Web App is Running</h1>");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});