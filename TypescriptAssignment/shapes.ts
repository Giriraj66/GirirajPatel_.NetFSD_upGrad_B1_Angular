class Shapes {

    area(length: number, breadth: number): number;

    area(side: number): number;

    area(radius: number, pi: number): number;

    area(base: number, height: number, type: string): number;

    area(a: number, b?: number, c?: any): number {
        if (b !== undefined && c === undefined) {
            return a * b; 
        } 
        else if (b === undefined) {
            return a * a; 
        } 
        else if (typeof c === "number") {
            return c * a * a; 
        } 
        else {
            return 0.5 * a * b!; 
        }
    }
}

let s = new Shapes();
console.log("Rectangle:", s.area(10, 5));
console.log("Square:", s.area(4));
console.log("Circle:", s.area(3, 3.14));
console.log("Triangle:", s.area(6, 4, "tri"));