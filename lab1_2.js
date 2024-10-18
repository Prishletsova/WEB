/* Лабораторная работа 1. Логические структуры в JavaScript
Задание 2. Найти минимальное число в массиве: пользователь вводит массив чисел,
программа выводит минимальное число.*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите массив чисел через запятую: ', (arr) => {
    const numbers = arr.split(',').map(num => parseFloat(num.trim()));

    const minNumber = Math.min(...numbers);

    console.log('Минимальное число в массиве:', minNumber);

    readline.close();
});


