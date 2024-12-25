/* && - и (когда оба удовл условию)
|| - или (хотя бы один)
!true (выдаст false, инверсия)
?? - или (работает как и ||, но есть подвох) */

/* const age= 0;
console.log(0 || 18); // выведет 18
const age= 0;
console.log('' || 18) // выведет 18

const age2= 0;
console.log(0 ?? 18); //выведет 0
const age2= 0;
console.log('' ?? 18); // выведет '' */

const isAdmin = true;
console.log(isAdmin && 'ready') // если isAdmin true, то выведет ready. если false, то выведет false (очевидно почему)

/* Также && и || по разному работают с переменными.  */
console.log('Вася' || false) // выведет Вася
console.log('Вася' && false) // выведет false
console.log(false || 'Вася') // выведет Вася
console.log(false && 'Вася') // выведет false
console.log('Вася' || 'Олег') // выведет Вася
console.log('Вася' && 'Олег') // выведет Олег

let a;
console.log(a || 'Никита') // Если а не задано то никитка, если задано то а

//Задача 1
/* Пользователь хочет приобрести игру в магазине. 
Он может это сделать только если:
- Его баланс больше 1000 (balance) или число бонусов больше 100
- Он не забанен
- Игра не куплена
- Игра в продаже
Напишите условия для покупки и выведите в консоль результаты. */
const balance = 2000;
const bonuse = 50;
const isBanned = false;
const isExist = false;
const isSailed = true;

if ((balance > 1000 || bonuse > 100) && !isBanned && !isExist && isSailed) {
    console.log('Пользователь может это сделать')
} else {
    console.log('К сожалению вы не можете купить игру')
}

const answer = (balance > 1000 || bonuse > 100) && isBanned && !isExist && isSailed;
console.log(`Могу купить игру: ${answer ? 'да' : 'нет'}`)