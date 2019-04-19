const app = require("express")();

const port = process.env.PORT || 8080;
const envName = process.env.TEMP_NAME;

app.get("/", (req, res) => {
  res.send(`welcome to home ${envName}`);
});

app.listen(port, () => {
  console.log("chingappan is listening on 8080");
});
