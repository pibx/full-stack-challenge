"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeError = exports.decode = void 0;
var PathReporter_1 = require("io-ts/lib/PathReporter");
var Either_1 = require("fp-ts/lib/Either");
var decode = function (Codec, value) {
    return Either_1.getOrElse(function (errors) {
        throw new DecodeError(PathReporter_1.PathReporter.report(Either_1.left(errors)).join("\n"));
    })(Codec.decode(value));
};
exports.decode = decode;
var DecodeError = /** @class */ (function (_super) {
    __extends(DecodeError, _super);
    function DecodeError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "DecodeError";
        return _this;
    }
    return DecodeError;
}(Error));
exports.DecodeError = DecodeError;
