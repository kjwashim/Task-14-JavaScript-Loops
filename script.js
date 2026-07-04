let number = 153;


let temp = number;
let digitSum = 0;

while (temp > 0) {
    digitSum += temp % 10;
    temp = Math.floor(temp / 10);
}


temp = number;
let armstrongSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}

let armstrong = armstrongSum === number ? "Yes" : "No";


let prime = "Yes";

if (number <= 1) {
    prime = "No";
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = "No";
            break;
        }
    }
}


let factors = "";

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        factors += i;

        if (i !== number) {
            factors += ", ";
        }
    }
}



console.log("Ex - Number :- " + number);
console.log("Sum of its digits: " + digitSum);
console.log("Is it an Armstrong number? " + armstrong);
console.log("Is it a prime number? " + prime);
console.log("Factors: " + factors);