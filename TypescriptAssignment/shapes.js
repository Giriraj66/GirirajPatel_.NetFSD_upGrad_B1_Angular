"use strict";
class Shapes {
    // Implementation
    area(a, b, c) {
        if (b !== undefined && c === undefined) {
            return a * b; // Rectangle
        }
        else if (b === undefined) {
            return a * a; // Square
        }
        else if (typeof c === "number") {
            return c * a * a; // Circle
        }
        else {
            return 0.5 * a * b; // Triangle
        }
    }
}
// Usage
let s = new Shapes();
console.log("Rectangle:", s.area(10, 5));
console.log("Square:", s.area(4));
console.log("Circle:", s.area(3, 3.14));
console.log("Triangle:", s.area(6, 4, "tri"));
