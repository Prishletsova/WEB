/*  Лабораторная работа 2 Массивы в JavaScript

Задание 1. Поиск наибольшего элемента массива с помощью reduce(). Найдите
максимальный элемент массива, используя метод reduce().*/

let numbers = [56, 4, 777, 100, 43];

const max = numbers.reduce((max, num) => (max > num ? max : num));

console.log(max);