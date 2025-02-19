require("dotenv").config();
const morgan = require("morgan");
const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5005;

server.use(cors());
server.use(middlewares);
server.use(morgan("dev"));
server.use("/api", router); 

server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
