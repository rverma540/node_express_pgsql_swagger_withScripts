const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const usersRoutes = require("./routes/testing.routes");
require("./config/db.config");

app.use(
  express.json(),
  express.urlencoded({ extended: false }),
  express.static("assests"),
  bodyParser.json()
);
/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "Testing API",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/users", usersRoutes);

app.get("/",  (req, res) => {
    res.send("Hello world from the server");
  });
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`));
