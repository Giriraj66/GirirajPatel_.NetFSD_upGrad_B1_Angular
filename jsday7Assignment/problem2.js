let students = [
{ name: "Akhil", marks: 85 },
{ name: "Priya", marks: 72 },
{ name: "Ravi", marks: 90 },
{ name: "Meena", marks: 45 },
{ name: "Karan", marks: 30 }
];

// 1. Get list of passed students 
let passed = students.filter(student => student.marks >= 40);
console.log(passed);

// 2. Get distinction students
let distinction = students.filter(student => student.marks >= 85);
console.log(distinction);

// 3. Calculate class average
let average = students.reduce((sum, student) => sum + student.marks, 0) / students.length;
console.log(average);

// 4. Find topper
let topper = [...students].sort((a, b) => b.marks - a.marks)[0];
console.log(topper);

// 5. Count failed students
let failedCount = students.filter(student => student.marks < 40).length;
console.log(failedCount);

// 6. Convert marks to grades
let grades = students.map(student => {
  let grade;
  if (student.marks >= 85) grade = "A";
  else if (student.marks >= 70) grade = "B";
  else if (student.marks >= 40) grade = "C";
  else grade = "Fail";
  return { ...student, grade };
});
console.log(grades);

// Add rank to each student
let ranked = [...students]
  .sort((a, b) => b.marks - a.marks)
  .map((student, index) => ({ ...student, rank: index + 1 }));
console.log(ranked);

// Remove lowest scorer
let removedLowest = [...students].sort((a, b) => a.marks - b.marks).slice(1);
console.log(removedLowest);

// Create leaderboard sorted by marks
let leaderboard = [...students].sort((a, b) => b.marks - a.marks);
console.log(leaderboard);