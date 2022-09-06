const express = require("express");

const app = express();
const port = 3000

app.use(require("./routes/products.route.js"));
app.use(require("./routes/brands.route.js"));

app.listen(port, () => {
  console.log(`сервер успшно запушен ttp://localhost:${port}`);
})