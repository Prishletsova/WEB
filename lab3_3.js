/* Лабораторная работа 3. Функции в JavaScript

Задание 3.  Напишите функцию, которая
возвращает массив чисел от 1 до n. */

function arr(n) {
    let array = [];
    for (i = 1; i <= n; i++) {
        array.push(i);
    };
    return array;
}

console.log(arr(5));