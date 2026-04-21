"use strict";
class Student {
    rollNo;
    name;
    eng;
    maths;
    science;
    constructor(r, n, e, m, s) {
        this.rollNo = r;
        this.name = n;
        this.eng = e;
        this.maths = m;
        this.science = s;
    }
    total() {
        return this.eng + this.maths + this.science;
    }
    percentage() {
        return this.total() / 3;
    }
    display() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Total Marks:", this.total());
        console.log("Percentage:", this.percentage() + "%");
    }
}
// Usage
let stud = new Student(1, "Giriraj", 80, 90, 85);
stud.display();
