let employees = [
{ id:1, name:"Ravi", dept:"IT", salary:70000 },
{ id:2, name:"Anita", dept:"HR", salary:50000 },
{ id:3, name:"Karan", dept:"IT", salary:80000 },
{ id:4, name:"Meena", dept:"Finance", salary:60000 }
];

// 1. Calculate total salary expense.
let totalSalary = employees.reduce(function(total, emp){
  return total + emp.salary;
}, 0);
console.log(totalSalary);

// 2. Find highest and lowest paid employee.
let sortedBySalary = employees.slice().sort(function(a, b){
  return a.salary - b.salary;
});
let lowestPaid = sortedBySalary[0];
let highestPaid = sortedBySalary[sortedBySalary.length - 1];
console.log(highestPaid);
console.log(lowestPaid);

// 3. Increase IT department salary by 15%.
let increasedSalary = employees.map(function(emp){
  if(emp.dept === "IT"){
    return { id: emp.id, name: emp.name, dept: emp.dept, salary: emp.salary + (emp.salary * 0.15) };
  } else {
    return emp;
  }
});
console.log(increasedSalary);

// 4. Group employees by department.
let grouped = employees.reduce(function(result, emp){
  if(!result[emp.dept]){
    result[emp.dept] = [];
  }
  result[emp.dept].push(emp);
  return result;
}, {});
console.log(grouped);

// 5. Calculate department-wise average salary.
let deptAverage = employees.reduce(function(result, emp){
  if(!result[emp.dept]){
    result[emp.dept] = { total: 0, count: 0 };
  }
  result[emp.dept].total += emp.salary;
  result[emp.dept].count += 1;
  return result;
}, {});

for(let dept in deptAverage){
  deptAverage[dept] = deptAverage[dept].total / deptAverage[dept].count;
}
console.log(deptAverage);

// 6. Sort employees by salary descending.
let descending = employees.slice().sort(function(a, b){
  return b.salary - a.salary;
});
console.log(descending);

// Bonus

// Add tax deduction (10%).
let afterTax = employees.map(function(emp){
  return { id: emp.id, name: emp.name, dept: emp.dept, salary: emp.salary - (emp.salary * 0.10) };
});
console.log(afterTax);

// Find employees earning above average salary.
let avgSalary = totalSalary / employees.length;
let aboveAverage = employees.filter(function(emp){
  return emp.salary > avgSalary;
});
console.log(aboveAverage);

// Convert employee data into HTML table

let table = "<table border='1'>";
table += "<tr>";
table += "<th>ID</th>";
table += "<th>Name</th>";
table += "<th>Dept</th>";
table += "<th>Salary</th>";
table += "</tr>";

for(let i = 0; i < employees.length; i++){
  table += "<tr>";
  table += "<td>" + employees[i].id + "</td>";
  table += "<td>" + employees[i].name + "</td>";
  table += "<td>" + employees[i].dept + "</td>";
  table += "<td>" + employees[i].salary + "</td>";
  table += "</tr>";
}

table += "</table>";

// To display in browser
document.getElementById("output").innerHTML = table;