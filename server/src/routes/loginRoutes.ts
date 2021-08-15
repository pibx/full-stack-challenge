import express, { Router, Request, Response } from "express";

import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";

const dir = "./";

const router = Router();

router.get("/Listings", (req: Request, res: Response) => {
  let listingArray: any[] = [];

  fs.createReadStream(path.resolve(dir, "redfin_2021-08-12-13-57-17.csv"))
    .pipe(csv.parse({ headers: true }))
    .on("error", (error) => console.error(error))
    .on("data", (row: any) => listingArray.push(row))
    .on("end", (rowCount: number) => {
      console.log(rowCount);
      res.status(201).send({
        status: "success",
        listingArray,
      });
    });
  // .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
  // console.log(listingArray, "listing array");
  // // return response
  // return res.status(200).json({
  //   message: listingArray,
  // });
});

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
