const express = require("express");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

const app = express();

const PORT = 3000;

// JSON middleware
app.use(express.json());

// Logger middleware
app.use(logger);

// User routes
app.use("/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
