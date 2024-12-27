const massive = ['Никита', 'Петя', 'Наташа'] // - массив
console.log(massive)
const massive2 = new Array('Никита', 'Петя', 'Наташа') // - другой способ записи массива (подробно разберем в лекции по классам)
console.log(massive2)
/* значение массива -1 - для поиска элементов которых нет, выдаст undefined (может пригодится в задачах когда нам нужно исключить возможность выбора несуществующего индекса) */
const info = ['Никита', 20] // в массив не обязательно записывать только однотипные данные, но чаще всего встречаем однотипные (для разныех типов используют классы)
console.log(info)
console.log(info[0]) // выведет Никита так как длина массива начинается с 0
console.log(info.at(0)) // альтернативная возможность вывести какой то элемент
console.log(info[info.length-1]) // выведет последний элемент (-1 так как счёт начинается с 0)
console.log(info.at(-1))// выведет последний элемент (-1 так как счёт начинается с 0)

const numbers = [2040 - 2022, '11' - 5, 3 > 5 ? 10 : 4] // так тоже можно писать, массив всё посчитает. if/else и т.д. нельзя но тернарный оператор можно
console.log(numbers)
console.log(numbers.length) // выведет 3

//Управление элементами массива
/* Базовое управление */

const users = ['Никита', 'Петя', 'Наташа']
users[3] = 'Андрей' // способ плох тем, что нам нужно знать и постоянно держать в голове длину массива
console.log(users) // добавит в массив Андрея
//Также сам массив обычно пишут константой(следовательно сам массив заменить нельзя)

const arrlength = users.push('Вика') // добавляет в конец новый элемент массива. По сути push и все дальнейшие методы являются функциями, то есть что то возвращают
console.log(users)
console.log(arrlength) // возвращает длину массива
users.unshift('Лох') // добавляет в начало новый элемент массива. вернет новую длину массива если передадим return в переменную.
console.log(users)
users.pop()
console.log(users) // удаляет последний элемент, если передадим return в переменную, выдаст нам удаленный элемент
users.shift()
console.log(users) // удаляет первый элемент, если передадим return в переменную, выдаст нам удаленный элемент

//Поиск элементов в массиве

const roles = ['user', 'admin', 'superuser']

console.log(roles.indexOf('admin')) // выводит индекс элемента, выведет 1. если в массиве несколько 'admin', выведет индекс самого первого
console.log(roles.indexOf('lox')) // если ищем элемент которого нет, выведет -1

console.log(roles.includes('admin')) // выведет true
console.log(roles.indexOf('lox')) // выведет false

if (roles.includes('admin')) {
    console.log(`Добро пожаловать: ${roles[1]}`)
}
if (roles.indexOf('admin') >= 1) {
    console.log('Добро пожаловать')
}

//Работа с целыми массивами.

const types = ['user', 'admin', 'superuser'];

const rez1 = types.slice(1,2) // slice создает новый массив (не меняя исходный). первое значение slice - с какого элемента начинать, второе значение - по какой элемент брать (не включая значение).
console.log(rez1) // создаст новый массив ['admin']
const rez2 = types.slice(-1) // -1 - последний элемент. аналогично записи types.at(-1), но есть ключевое различие. at возвращает строку, а э slice(-1) массив.
console.log(rez2) // создаст новый массив ['superuser']
const rez3 = types.slice(-1)[0] // из нового массива берем первый элемент(0), и в консоль выводится строка superuser
console.log(rez3)

const rez4 = types.splice(1,2) // splice создает новый массив МЕНЯЯ исходный. первое значение splice - с какого элемента начинать, второе значение - сколько всего элементов будет добавлено в новый массив
console.log(rez4) // ['admin', 'superuser']
console.log(types) // ['user']
const rez5 = types.splice(-2) // удалит из исходного массива два последних элемента и закинет их в новый массив. в исходном же останется только первый элемент(индекс 0)
console.log(rez5)

const roles1 = ['user', 'admin', 'superuser']
const rez6 = roles1.slice(1,2)
console.log(rez6)
const newArray = roles1.concat(rez6) // позволяет обьединить два массива в один
console.log(newArray)

//Из строки в массив и обратно

const types1 = ['user', 'admin', 'superuser'];

const types1String = types1.join() // позволяет преобразовать массив в строку (выведет user.admin,superuser). Внутрь join можно положить какой то символ, например '-', и тогда выведет user-admin-superuser
console.log(types1String) 

const stringg = 'user, admin, superuser'
const massiveStringg = stringg.split(',') // из строки в массив, внутри помещается элемент, по которому мы разбиваем исходную строку
console.log(massiveStringg)


//Задача 1
/* Дан список задач
const tasks = ['Задача 1']
Сделать функции:
-Добавление задачи в конец
-Удаление задачи по названию
-Перенос задачи в начало списка по названию
Всегда меняем исходный массив. */


/* const tasks = ['Задача 1'];

function Add (task) {
    tasks.push(task);
}

function Delete (taskName) {
   const index = tasks.indexOf(taskName);
   if (index === -1) {
        return;
   }
   tasks.splice(index, 1)
}

function Prioritize (taskName) {
    const nowLocation = tasks.indexOf(taskName);
    if (nowLocation === -1) {
        return;
   }
    const oldLoc = tasks[nowLocation] 
    if (nowLocation !== 0) {
        tasks.splice(nowLocation, 1)
        tasks.unshift(oldLoc)
    } else {
        return `Задача в начале списка. Индекс: ${nowLocation}`
    }
} */

/* Add('Задача 2')
Add('Задача 3')
Add('Задача 4')
Add('Задача 5')
console.log(tasks)
Delete('Задача 4')
console.log(tasks)
Prioritize('Задача 3')
console.log(tasks)
Prioritize('Задача 3')
console.log(tasks) */

// Принцип DRY = do not repeat yourself. Стараемся не повторяться. Исправим наш пример



const tasks = ['Задача 1'];

function Add (task) {
    tasks.push(task);
}

function Delete (taskName) {
   const index = tasks.indexOf(taskName);
   if (index === -1) {
        return;
   }
    return tasks.splice(index, 1)
}

function Prioritize (taskName) {
    const result = Delete(taskName);
    if(!result) {
        return;
    }
    tasks.unshift(result[0]);
}

Add('Задача 2')
Add('Задача 3')
Add('Задача 4')
Add('Задача 5')
console.log(tasks)
Delete('Задача 4')
console.log(tasks)
Prioritize('Задача 2')


//Деструктуризация

const information = ['Никита', 20, 'Дзержинск']

/* const name = information[0]
const age = information[1]
const town = information[2] */
/* console.log(name, age, town) */ // вместо этих четырех строк можно деструктурировать

/* const [name, age, town] = information
console.log(name, age, town) // то же самое что и выше */

/* const [name, age] = information
console.log(name, age) // спокойно можно что то выбросить */

const [name, _, town] = information
console.log(name, town) // если нужно опустить средний элемент, ставим на его место '_'. Можно оставить и пустое место но лучше '_'

//Rest
const numberss = [1, 2, 3, 4, 5, 6]
const [one, two, ...others] = numberss; // первые два - 1,2, а ...others группирует оставшиеся элементы в массив. Может идти только в конце, после него ничего не может быть (будет ошибка)
console.log(one, two, others)
console.log(others)

//Задача 2
/* Дан произвольный url - 
'https://purpleschool.ru/course/javascript'
Нужно сделать функцию, которая выводит в консоль:
-Протокол (https)
-Доменном имя (purpleschool.ru)
-Путь внутри сайта (/course/javascript) */
const url = 'https://purpleschool.ru/course/javascript'
function getUrl (url) {
    const [protokol, _, host, ...path] = url.split('/')
    if(protokol === 'https:' || protokol === 'http:') {
        if (!host.includes('.')) {
            return;
        }
        console.log(`Протокол: ${protokol.split(':')[0]}`)
        console.log(`Доменное имя: ${host}`)
        console.log(`Путь внутри сайта: /${path.join('/')}`)
    }
}

getUrl(url)