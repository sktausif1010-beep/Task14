// JavaScript Loops Assignment

let number = 153;
let n = 10;
let sum = 0;
let temp = number;
let armstrongSum = 0;
let factors = [];
let isPrime = true;

let firstNSum = 0;

for(let i = 1; i <= n; i++){
    firstNSum += i;
}

console.log("Sum of first " + n + " numbers = " + firstNSum);

console.log("\nTable of " + n);
//-------------------------------------------------------
for(let i = 1; i <= 10; i++){
    console.log(n + " x " + i + " = " + (n * i));
}
// -----------------------------------------------------

if(number <= 1){
    isPrime = false;
}
else{
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
}

console.log("\nIs " + number + " Prime? " + (isPrime ? "Yes" : "No"));

// -----------------------------------------------------

for(let i = 1; i <= number; i++){
    if(number % i === 0){
        factors.push(i);
    }
}

console.log("\nFactors of " + number + ": " + factors.join(", "));

// -------------------------------------------------------

while(temp > 0){
    sum += temp % 10;
    temp = Math.floor(temp / 10);
}

console.log("\nSum of Digits = " + sum);
