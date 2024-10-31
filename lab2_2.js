/* Лабораторная работа 2 Массивы в JavaScript

Задание 2. Объединение двух массивов объектов по ключу. Объедините два массива
объектов, используя значения одного из ключей как идентификаторы.*/

const arr1 = [
    { id: 1, name: 'Ann' },
    { id: 2, name: 'Boris' }
];

const arr2 = [
    { id: 1, age: 75 },
    { id: 2, age: 34 }
];

const joinedArr = arr1.reduce((jo, obj1) => {
    const obj2 = arr2.find(obj => obj.id === obj1.id);
    jo.push({ ...obj1, ...obj2 });
    return jo;
}, []);

console.log(joinedArr);
