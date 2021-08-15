"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var csv = __importStar(require("fast-csv"));
var dir = "./";
var router = express_1.Router();
exports.router = router;
router.get("/Listings", function (req, res) {
    var listingArray = [];
    fs.createReadStream(path.resolve(dir, "redfin_2021-08-12-13-57-17.csv"))
        .pipe(csv.parse({ headers: true }))
        .on("error", function (error) { return console.error(error); })
        .on("data", function (row) { return listingArray.push(row); })
        .on("end", function (rowCount) {
        console.log(rowCount);
        res.status(201).send({
            status: "success",
            listingArray: listingArray,
        });
    });
    // .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));
    // console.log(listingArray, "listing array");
    // // return response
    // return res.status(200).json({
    //   message: listingArray,
    // });
});
router.get("/login", function (req, res) {
    res.send("\n    <form method=\"POST\">\n    <div>\n        <label> Email </label>\n\n        <input name=\"email\"/>\n    </div>\n\n    <div>\n        <label> Password </label>\n\n        <input name=\"password\" type=\"password\" />\n    </div>\n\n<button>Submit</button>\n    </form>\n    ");
});
