import server from "./src/Server/Server.js";
import { config } from "dotenv";
import connect from "./src/DataBase/Conf.js";

config()
connect()

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));