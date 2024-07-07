// task 1
function array(...numbers) {
  let sum = 0;
  for (let item of numbers) {
    sum += item;
  }
  return sum;
}
let numSum = array(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(numSum);

//task 2

let getFullName = (user) =>
  user.isloggedin ? `${user.firstname} ${user.lastname}` : false;

let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};

console.log(getFullName(user));

// task 3

let maxNum = (...numArray) => {
  return Math.max(...numArray);
};

let numberArray = maxNum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(numberArray);

//task 4

let num = (a) => {
  if (a % 2 == 0) {
    return "This number is even";
  } else {
    return "This number is odd";
  }
};

let number = num(5);
console.log(number);

let number2 = num(4);
console.log(number2);

//task 5
let array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i < array.length && i >= 0; i--) {
  console.log(array[i]);
}

// task 6

let calculateAge = (birthYear, currentYear) => {
  const age = currentYear - birthYear;
  return age >= 18 ? "სრულწლოვანი" : "არასრულწლოვანი";
};

let ageChecking = calculateAge(2005, 2050);
console.log(ageChecking);
let ageChecking2 = calculateAge(2005, 2020);
console.log(ageChecking2);

// task 7

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i <= array2.length - 1; i++) {
  if (array2[i] === 5) {
    console.log("არის");
    break;
  }
}

//task 8

let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i <= array3.length - 1; i++) {
  sum = sum + array3[i];
}
console.log("array3-ის ციფრთა ჯამი არის" + " " + sum);

// task 9

let array4 = [1, 2, 3, 4, 5];

let average = 0;
let sum2 = 0;
for (let i = 0; i <= array4.length - 1; i++) {
  sum2 = sum2 + array4[i];
  average = sum2 / array4.length;
}

console.log("array4-ის ციფრთა საშუალო არითმეტიკული არის" + " " + average);

// task 10

let array5 = [1, 2, 3, 7, 6, 9];

for (let i = 0; i <= array5.length - 1; i++) {
  if (array5[i] == 7) {
    continue;
  }

  console.log(array5[i]);
}

// task 11

let array7 = [32, 14, null, "40", 50];

for (let i = 0; i <= array7.length - 1; i++) {
  if (array7[i] % 5 == 0) {
    console.log(array7[i]);
  }
}

// task 12

let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];

for (let i = 0; i <= array8.length - 1; i++) {
  for (let j = 0; j <= array8[i].length; j++) {
    if (array8[i][j] > 0) {
      console.log(array8[i][j]);
    }
  }
}
