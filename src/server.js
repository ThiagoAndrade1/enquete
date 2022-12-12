const express = require("express");
const routes = require("./routes");

//THIAGO LEMES ANDRADE 20201001217
//JUAN RAMOS ALVES 20201001271
//IGOR DOS SANTOS MOTTA 20201001044

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("server started on port 3333"));
