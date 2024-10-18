/* Лабораторная работа 1. Логические структуры в JavaScript
Задание 3. Вывести все делители числа: пользователь вводит число, программа
выводит все его делители.*/ 

readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Введите число: ', (num) => {
    let i = 1;
    let arr = [];
    while (i <= num) {
        if (num % i === 0) {
          arr.push(i);
          i++;
          continue;  
        }
        i++;
    }
    console.log(`Делители числа ${num}: ${arr}`);
    readline.close();
});