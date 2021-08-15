import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import cookieSession from "cookie-session";

// import bodyParser from "body-parser";

const app = express();
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["fdsfds"] }));
app.use(router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
