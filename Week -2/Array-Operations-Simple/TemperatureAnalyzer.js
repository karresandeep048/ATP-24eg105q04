//Daily Temperature Analyzer
const temperatures = [32, 35, 28, 40, 38, 30, 42];
//filter() temperatures above 35
let r1 = temperatures.filter((temp) => temp > 35);
console.log(r1);
//map() to convert all temperatures from Celsius → Fahrenheit
let r2 = temperatures.map((temp) => (temp * 9) / 5 + 32);
console.log(r2);
//reduce() to calculate average temperature
let r3 = temperatures.reduce((acc, temp) => acc + temp) / temperatures.length;
console.log(r3);
//find() first temperature above 40
let r4 = temperatures.find((temp) => temp > 40);
console.log(r4);
//findIndex() of temperature 28
let r5=temperatures.findIndex((temp)=>temp==28);
console.log(r5);