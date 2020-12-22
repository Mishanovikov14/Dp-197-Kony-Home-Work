import {task1} from './src/task1.js';
import {task2} from './src/task2.js';
import {task3} from './src/task3.js';
import {task4} from './src/task4.js';
import {task5} from './src/task5.js';
import {task6} from './src/task6.js';
import {task7} from './src/task7.js';

const listeners = [
    { selector : '.btn--task1', func() {task1()}},
    { selector : '.btn--task2', func() {task2()}},
    { selector : '.btn--task3', func() {task3()}},
    { selector : '.btn--task4', func() {task4()}},
    { selector : '.btn--task5', func() {task5()}},
    { selector : '.btn--task6', func() {task6()}},
    { selector : '.btn--task7', func() {task7()}},
 ];

 listeners.forEach(({ selector, func }) => document.querySelector(selector).addEventListener('click', () => func()));

// //Task1 ---------------------------------------------
// console.log(chessBoard(8, 9, '#'));
// console.log(chessBoard(-1, 9, '#'));
// console.log(chessBoard(0, 9, '#'));


// //Task2 -----------------------------------------------
//{"a": 2, "b": 3} {"c": 9, "d": 4}
//{"a": 0, "b": 3} {"c": 9, "d": 4}
//{"p": 2, "b": 3} {"c": 9, "d": 4}
//{"a": "sdf", "b": 3} {"c": 9, "d": 4}

// //Task3 -----------------------------------------------
//[{"vertices": "ABC", "a": 10, "b": 20, "c": 22.36}, {"vertices": "LMN", "l": 20, "m": 30, "n": 22.36}, {"vertices": "OPQ", "o": 30, "p": 40, "q": 30}]

//[{"vertices": 123, "a": 10, "b": 20, "c": 22.36}, {"vertices": "LMN", "l": 20, "m": 30, "n": 22.36}, {"vertices": "OPQ", "o": 30, "p":20, "q": 30}]

//[{"vertices": "NBC", "n": 10, "b": 20, "c": 22.36}, {"vertices": "LMN", "l": 20, "m": 30, "n": 22.36}, {"vertices": "OPQ", "o": 30, "q": 30}]

//[{"vertices": "ABC", "a": 10, "b": 20, "c": 22.36}, {"vertices": "LMN", "l": 20, "m": 30, "n": 22.36}, {"vertices": "OPQ", "d": 30, "p": 40, "q": 30}]

//[{"vertices": "ABC", "a": 10, "b": 20, "c": 22.36}, {"vertices": "ABC", "a": 20, "b": 30, "c": 22.36}, {"vertices": "OPQ", "o": 30, "p": 40, "q": 30}]

// //Task4 -----------------------------------------------

//1234437
//12321
//1234.4321
//"1231"
//-1211213

// //Task5 -----------------------------------------------
// {"max": 123459, "min": -123456}
// {"max": 123459, "min": 3000}
// {"max": 123459}
// {"max": 123459, "min": "3000"}
// {"max": 123459, "min": "3000", "wesd": 123123}
// {"max": 459, "min": 123}
// {"max": 459, "min": 559}
// {"max": 123459, "min": 0}

// //Task6 -----------------------------------------------

// console.log(naturalNumber(0, 40));
// console.log(naturalNumber(10, 11000));
// console.log(naturalNumber(20, 0));

// //Task7 ---------------------------------------------------
// {"length": 1}
// {"min": -1, "max": 1}
// {"min": 0, "max": 110, "length": 7}
// {"min": 0}
