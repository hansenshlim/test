if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const router = require("./routes");
const cors = require("cors");
const errHandler = require("./middleware/errHandler");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(errHandler);

app.listen(port, () => console.log(`app is running on port ${port}`));
