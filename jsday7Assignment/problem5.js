let numbers = [10, 20, 30, 10, 40, 20, 50, 60, 60];

// 1. Remove duplicates
let unique = [...new Set(numbers)];
console.log(unique);

// 2. Find second largest number
let sortedDesc = [...new Set(numbers)].sort(function(a, b){
  return b - a;
});
let secondLargest = sortedDesc[1];
console.log(secondLargest);

// 3. Find frequency of each element
let frequency = numbers.reduce(function(acc, num){
  if(acc[num]){
    acc[num] = acc[num] + 1;
  } else {
    acc[num] = 1;
  }
  return acc;
}, {});
console.log(frequency);

// 4. Find first non-repeating number
let firstNonRepeat = numbers.find(function(num){
  return frequency[num] === 1;
});
console.log(firstNonRepeat);

// 5. Rotate array by 2 positions
let rotateBy2 = numbers.slice(2).concat(numbers.slice(0,2));
console.log(rotateBy2);

// 6. Flatten nested array
let nested = [1,2,[3,4,[5]]];
let flat = nested.flat(2);
console.log(flat);

// 7. Find missing number 
let arr = [1,2,3,5,6];
let missing;
for(let i = 0; i < arr.length; i++){
  if(arr[i+1] !== arr[i] + 1){
    missing = arr[i] + 1;
    break;
  }
}
console.log(missing);