// Express Intro
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

// installation
// npm install express --save
// npm install express --no-save (temporary installation of expressJs)

// Buildina a web server
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// Nodemon - Node monitor package
// npm i -g nodemon
// nodemon index.js

// Sample data
const courses = [
    { id: 1, name: "Course1" },
    { id: 2, name: "Course2" },
    { id: 3, name: "Course3" },
];

// Get request
app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

// Route parameters
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send("The course with the given ID was not found");
    res.send(course);
});

// Post request
app.post("/api/courses", (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };

    courses.push(course);
    res.send(course);
});

// Query parameters
app.get("/api/courses/:id", (req, res) => {
    res.send(req.query);
});

// Input validation
// install JOI - npm i joi
const Joi = require("joi");
// ref: https://www.digitalocean.com/community/tutorials/node-api-schema-validation-with-joi

// Update request
app.put("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send("The course with the given ID was not found");

    course.name = req.body.name;
    res.send(course);
});

// Delete request
app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
        return res.status(404).send("The course with the given ID was not found");

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(courses);
});

// Custom Middleware
app.use(function (req, res, next) {
    console.log("Logging....");

    // very important, otherwise the request wil be hanging.
    next();
});

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// read static files from public folder
app.use(express.static("public"));

// Third-party middlewares
// helmet(npm i helmet) - helps secure your apps by setting various HTTP headers
// morgan(npm i morgan) - Logs HTTP reuests

// Environment
const node_env = process.env.NODE_ENV;

// enable specific middlewares according to the environment
if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    console.log("Morgan Enabled");
}

// Configuration - for different environments
// 1. npm rc
// 2. npm config

// Debugging
// npm i debug
const startupDebugger = require("debug")("app:startup");
// set the enviroment variable
// export DEBUG=app:*

// Templating engine
// 1. pug( formerly called Jade)
// 2. mustache
// 3. EJS
app.set("view engine", "pug");
app.set("views", "./views");

// Database intregation
// npm install mongodb