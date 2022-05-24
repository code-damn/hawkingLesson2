'use strict';

// Удалите дубли из массива
const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
const arrNotDuplicate = [new Set(arr)];

console.log(arrNotDuplicate);

// Объедините 2 массива в один

const obj1 = {id: 1, name: 'userName'};
const obj2 = {id: 1, password: 'qwerty'};

const obj3 = {...obj1, ...obj2};

console.log(obj3);


// Сократите объявление функции в одну строку

const add = (x, y) => x + y;

//Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
};

sleep(5000).then(() => console.log('Выполнилось через 5 секунд'));

//Ждем новую задачу





