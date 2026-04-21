class Student {
    rollNo: number;
    name: string;
    eng: number;
    maths: number;
    science: number;

    constructor(r: number, n: string, e: number, m: number, s: number) {
        this.rollNo = r;
        this.name = n;
        this.eng = e;
        this.maths = m;
        this.science = s;
    }

    total(): number {
        return this.eng + this.maths + this.science;
    }

    percentage(): number {
        return this.total() / 3;
    }

    display(): void {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Total Marks:", this.total());
        console.log("Percentage:", this.percentage() + "%");
    }
}

// Usage
let stud = new Student(1, "Giriraj", 80, 90, 85);
stud.display();