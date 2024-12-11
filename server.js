const express = require("express");
const booksRoutes = require("./Routes/booksRoutes");
const app = express();

app.use(express.json());

app.use("/books", booksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
