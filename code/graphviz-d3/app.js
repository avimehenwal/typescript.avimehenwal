"use strict";
// app.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(name) {
        this.name = name;
    }
    Hero.prototype.myName = function () {
        return this.name;
    };
    return Hero;
}());
exports.Hero = Hero;
var hero = new Hero('krunal');
console.log(hero.myName());
//# sourceMappingURL=app.js.map