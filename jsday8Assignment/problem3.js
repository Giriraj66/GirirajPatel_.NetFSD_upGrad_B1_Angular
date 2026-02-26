class Student {

    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    getAverage() {
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        return sum / this.marks.length;
    }

    getGrade() {
        let avg = this.getAverage();

        if (avg >= 90) {
            return "A";
        } else if (avg >= 75) {
            return "B";
        } else if (avg >= 50) {
            return "C";
        } else {
            return "Fail";
        }
    }
}
let s1 = new Student("Raja");

s1.addMark(75);
s1.addMark(50);
s1.addMark(40);

console.log("Average:", s1.getAverage());
console.log("Grade:", s1.getGrade());