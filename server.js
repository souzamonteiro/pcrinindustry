const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// Parse requests of content-type - application/json.
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded.
app.use(express.urlencoded({extended: true}));
// Setup database connection.
const db = require("./app/models");
db.sequelize.sync();
// Simple route.
app.get("/", (req, res) => {
    res.json({ message: "Welcome to PCR in Industry application." });
});
require("./app/routes/resultado_pcr.routes")(app);
// Set port, listen for requests.
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});