let set = new Set();
let min = -50;
let max = 50;
let count = 0;
let num = 0;
let position = 0;

while (set.size < 10) {
    num = Math.floor(Math.random() * (max - min +1)) + min;
    set.add(num);
}
let numbers = Array.from(set);
console.log(numbers);
// Bài 1
for (let n of numbers) {
    if (n >= 10) {
        count++;
    }
}
console.log(`có ${count} lớn hơn hoặc bằng 10.`);

// Bài 2
let maxNum = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
        position = i;
    }
}
console.log(`Max: ${maxNum} ở vị trí thứ ${position}`);

//Bài 3
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
        count = i;
    }
}
console.log(`Số có giá trị lớn nhất: ${maxNum}`);

let sumNum = 0;
for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
}
let avg = sumNum / numbers.length;
console.log(`Giá trị trung bình của các phần tử trong mảng: ${avg}`);

//Bài 4
// console.log(numbers.reverse());
let arr2 = [];
for (let i = numbers.length -1; i >= 0; i--) {
    arr2.push(numbers[i]);
}
console.log(arr2);

// Bài 5
let countMinus = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        maxNum = numbers[i];
        countMinus ++;
    }
}
console.log(`Có ${countMinus} số nguyên âm`);

// Bài 6
// let V = prompt("Số nguyên V:");
// let index = -1;
// for (let i = 0; i < numbers.length; i++) {
//     if (V == numbers[i]) {
//         index = i;
//     }
// }
// if (index > -1) {
//     console.log(`${V} có trong mảng.`);
// } else {
//     console.log(`${V} không có trong mảng.`);
// }

// Bài 7
// let V = prompt("Số nguyên V:");
// let index = -1;
// for (let i = 0; i < numbers.length; i++) {
//     if (V == numbers[i]) {
//         index = i;
//     }
// }
// console.log(`index: ${index}`);
// if (index > -1) {
//     for (let j = index; j < numbers.length; j++) {
//         numbers[j] = numbers[j+1];
//     }
//     numbers[numbers.length - 1] = 0;
// } else {
//     console.log(`${V} không có trong mảng.`);
// }
// console.log(numbers);

// Bài 8
// numbers.sort((a, b) => b - a);
// console.log(numbers);
let arr = [];
while (numbers.length > 0) {
    maxNum = numbers[0];
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > maxNum) {
            maxNum = numbers[j];
        }
    }
    arr.push(maxNum);
    numbers.splice(numbers.indexOf(maxNum), 1);
}
console.log(arr);


// Bài 9
// let set2 = new Set();
// let numbers2 = [];
// let numbers3 = [];
// while (set2.size < 10) {
//     num = Math.floor(Math.random() * (max - min +1)) + min;
//     set2.add(num);
// }
// numbers2 = Array.from(set2);
// console.log(numbers2);
//
// numbers3 = numbers.concat(numbers2);
// console.log(numbers3);