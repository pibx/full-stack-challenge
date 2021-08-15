import express, { Router, Request, Response } from "express";

import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";

const dir = "./";
const parse = require("node-csv");
const router = Router();

fs.createReadStream(path.resolve(dir, "redfin_2021-08-12-13-57-17.csv"))
  .pipe(csv.parse({ headers: true }))
  .on("error", (error) => console.error(error))
  .on("data", (row) => console.log(row))
  .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));

router.get("/login", (req: Request, res: Response) => {
  res.send(
    `
    <form method="POST">
    <div>
        <label> Email </label>

        <input name="email"/>
    </div>

    <div>
        <label> Password </label>

        <input name="password" type="password" />
    </div>

<button>Submit</button>
    </form>
    `
  );
});

export { router };
