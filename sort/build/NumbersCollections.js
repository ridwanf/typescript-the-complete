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
exports.NumberCollections = void 0;
var Sorter_1 = require("./Sorter");
var NumberCollections = /** @class */ (function (_super) {
    __extends(NumberCollections, _super);
    function NumberCollections(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(NumberCollections.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumberCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumberCollections.prototype.swap = function (leftIndex, rightIndex) {
        if (this.compare(leftIndex, rightIndex)) {
            var temp = this.data[leftIndex];
            this.data[leftIndex] = this.data[rightIndex];
            this.data[rightIndex] = temp;
        }
        else {
            return;
        }
    };
    return NumberCollections;
}(Sorter_1.Sorter));
exports.NumberCollections = NumberCollections;
