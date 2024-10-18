/* Лабораторная работа 1. Логические структуры в JavaScript

Задание 1. Найти количество четных чисел в массиве: программа вычисляет
количество четных чисел в массиве. */

const numbers = [1, 2, 3, 4, 6, 8, 10, 12, 14, 5];

function countevennumbers(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(`Количество четных чисел: ${countevennumbers(numbers)}`);
