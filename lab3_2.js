/* Лабораторная работа 3. Функции в JavaScript

Задание 2. Напишите функцию, которая считает
сумму всех цифр числа. */

function sumOfNumbers(a) {
    let sum = 0;
    while (a > 0) {
        sum += a % 10; 
        a = Math.floor(a / 10); 
    }
    return sum;
}
    
console.log(sumOfNumbers(123));