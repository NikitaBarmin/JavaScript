// Объекты это тип данных, хранящий какие то данные в формате "имя-значение" (мб потом чуть по другому называться будет но пока я понимаю что +- так). Объекты могут хранить как простые типы данных так например и другие обьекты в себе.

const obj = {
    name: 'Никита',
    surname: 'Бармин',
    age: 20,
    1: 1, // "имя может быть и числом тоже"
    skills: [
        'Спортсмен',
        'Начинающий программист'
    ],
    eduBase: 'Гимназия 38',
    eduPRO: 'HSE'
}

console.log(obj)


// Обращение к элементам

console.log(obj.surname) // используем когда имя свойства является известным и мы берем его из обьекта (в большинстве случаев)
console.log(obj['surname']) // когда нужно каким то образом вычислить переменную/ получить не из объекта
// В чем разница между ними? Смотри пример ниже


const base = 'Base';
console.log(obj['edu' + base]) // выведет "Гимназия 38". через точку ясен фиг не сможем такое провернуть.

obj['city'] = 'Дзержинск'
obj.city = 'Дзержинск' // спокойно можем добавлять новые элементы в объект. и прикол знаешь в чем никита бармин? в том что это значение и вот на верхнем консоле сохранится. То есть тогда впервый раз мы выводили, city никакого не было, а щас он в консоле появится. Обьект это ссылочный тип данных. То есть переменная хранит не сам обьект, а ссылку на него. Поэтому при его изменении, ссылка содержит уже новый обьект. Вроде это так работает, но подробнее потом обьяснят.
console.log(obj.city) // но если мы захотим вывести перед первым обьектом эту строку будет undefined, так как к тому моменту в коде/ в обьекте нет этого элемента.
console.log(obj)
obj.age = 30
console.log(obj) // можем менять и уже существующий элемент


//Задача 1
//Отсортировать пользователей по возрасту
const users = [
    { name: 'Никита', age: 20},
    { name: 'Виталик', age: 22},
    { name: 'Ксюша', age: 9},
    { name: 'Петр', age: 38}
]

users.sort((a, b) => {
    if (a['age'] > b['age']) {
        return 1
    }
    if (a['age'] < b['age']) {
        return -1
    }
})
console.log(users)

//Задача 2
/* Преобразовать объект к виду:
{ fullname: 'Никита Бармин', skills: 2} */

const nBnA = [
    {
        name: 'Никита',
        surname: 'Бармин',
        age: 20,
        skills: ['Спортсмен', 'Огромный хуй', 'Чут чут программист']
    },
    {
        name: 'Никита',
        surname: 'Адагамов',
        age: 20,
        skills: ['Чуть хуже спортсмен', 'Чуть меньше хуй']
    }
]

const newNbNa = nBnA.map((obj) => {
    return {
        fullname: `${obj.name} ${obj.surname}`,
        skills: obj['skills'].length
    }
})
console.log(newNbNa)


//Методы объектов

const info = {
    name: 'Никита',
    surname: 'Бармин',
    age: 20,
    unite: function () {
        return `${info.name} ${info.surname}` // функцию также можно делать элементом обьекта, и область видимости у нее работает и вне обьекта. Но, если мы сделаем так как в этом примере, то если у нас будет например обьект не с именем info, а с именем info2, нам везде надо будет менять. Для этого есть метод получше.
    }
}
console.log(info.unite())


const info2 = {
    name: 'Никита',
    surname: 'Бармин',
    age: 20,
    unite: function () {
        console.log(this) // выведет нам обьект info2
        return `${this.name} ${this.surname}` // this это по сути ЭТО, ЭТОТ обьект`. И то есть эта функция говорит мол, возвращай нам имя ЭТОГО обьекта + фамилию ЭТОГО обьекта
    }
}
console.log(info2.unite())


//Задача 3
/* Реализовать методы увеличения и уменьшения баланса, при котором каждая операция сохраняется в массив operations в виде {reason: 'Оплата налогов', sum: -100}.
Возвращается true, если успешно и false, если не хватает баланса. Так же реализовать метод вывода числа операций по кошельку. */

const wallet = {
    balance: 0,
    operations: [],
    increaseBalance: function (sum, reason) {
        this.balance += sum;
        this.operations.push({
            reason: reason, // когда у нас случаются вот такие случаи, что ключ совпадает со значением, мы можем отбросить значение (и результат не поменяется, в коде будет просто reason, но в консоли мы увидим reason: '......')
            sum: sum // тут также
        })
        return true;        
    },
    decreaseBalance: function (sum, reason) {
        if (this.balance < sum) {
            console.log('Недостаточно денег')
            return false
        }
        this.balance -= sum;
        this.operations.push( {
            reason: reason, // тут также
            sum: -sum //а вот тут уже нельзя (-sum != sum)
        })
        return wallet        
    }
}
console.log(wallet.increaseBalance(1000, 'Зарплата'))
console.log(wallet.increaseBalance(1200, 'Зарплата(бонус)'))
console.log(wallet.decreaseBalance(2000, 'Кредит'))
console.log(wallet)


//Пример когда ключ совпадает со значением и можем сократить немного код. Ремарка! Не жертвовать смыслом ради сокращения кода, называть переменную полностью и если что просто per1 : per2,

const balance = 7;
const wallet1 = {
    balance,
    operations: [],
}
console.log(wallet1) // выдаст обьект, в котором balance: 7


//Итерирование по объекту

//ОБЫЧНЫЕ ОБЪЕКТЫ ПО УМОЛЧАНИЮ НЕ ЯВЛЯЮТСЯ ИТЕРИРУЕМЫМ. ТО ЕСТЬ ЕСЛИ МЫ ЗАХОТИМ ОБЫЧНЫМ СПОСОБОМ ИТЕРИРОВАТЬСЯ ПО ЗНАЧЕНИЯМ ОБЬЕКТА C ПОМОЩЬЮ FOR OF, МЫ ЭТОГО СДЕЛАТЬ С ОБЫЧНЫМ ОБЬЕКТОМ НЕ СМОЖЕМ. НО ЕСЛИ МЫ ИСПОЛЬЗУЕМ МЕТОД Object.keys(profile), КОТОРЫЙ СОЗДАЕТ МАССИВ СОСТОЯЩИЙ ИЗ ЭЛЕМЕНТОВ ОБЬЕКТА, МЫ СМОЖЕМ ИСПОЛЬЗОВАТЬ FOR OF.

const profile = {
    personOne: {
        name: 'Никита',
        age: 20    
    },
    personTwo: {
        name: 'Петя',
        age: 31
    }
}

console.log(Object.keys(profile)) // метод, который создает отдельный массив, состоящий из элементое обьекта (в данном случае personOne и personTwo)
const objKeys = Object.keys(profile);
console.log(profile[objKeys[0]].age) // нужно понять одну непростую вещь. Object.keys() создает массив СОСТОЯЩИЙ ИЗ КЛЮЧЕЙ ОБЬЕКТА В ВИДЕ МАССИВА, НО ЭТИ КЛЮЧИ ПРЕВРАЩАЮТСЯ В СТРОКИ. ОНИ НЕ СОДЕРЖАТ В СЕБЕ НИКАКИХ ЭЛЕМЕНТОВ В КОНТЕКСТЕ Object.keys(). НО, МЫ МОЖЕМ СПОКОЙНО ИСПОЛЬЗОВАТЬ ЭТОТ МАССИВ ПРИ ЦИКЛЕ for of (позволит обращаться к ключам по одному), но ЛОГИКУ МЫ ДОЛЖНЫ ПИСАТЬ КАСАТЕЛЬНО ОБЬЕКТА profile (потому что в нем ключи содержат какие то значения)
let sumAge1 = 0;
let amountOfNumbers = Object.keys(profile).length;

for (const element of Object.keys(profile)) { // тут по сути мы обьект представляем как массив, состоящий из элементов personOne и personTwo
    sumAge1 += profile[element].age
}
console.log(sumAge1/amountOfNumbers)

let sumAge = 0;
let amountOfPersons = 0;

for (const key in profile) { // ЧТО НУЖНО УЯСНИТЬ. FOR IN БЕЖИТ ПО КЛЮЧАМ ОБЬЕКТОВ(КЛЮЧ ОБЬЕКТА В НАШЕМ СЛУЧАЕ ПЕРСОНУАН И ПЕРСОНТУ). МАССИВ ЭТО ТОЖЕ ОБЬЕКТ, ПРОСТО ЕГО КЛЮЧАМИ ЯВЛЯЮТСЯ ИНДЕКСЫ ЕГО ЭЛЕМЕНТОВ. В ДАННОМ СЛУЧАЕ МЫ БЕЖИМ ПО КЛЮЧАМ ОБЬЕКТА, ЗАКИДЫВАЕМ ЗНАЧЕНИЕ AGE В СУММУ И УВЕЛИЧИВАЕМ КОЛИЧЕСТВО ПЕРСОН ЧТОБЫ ПОТОМ НАЙТИ СРЕДНИЙ ВОЗРАСТ.
    sumAge += profile[key].age;
    amountOfPersons++
}
console.log(sumAge / amountOfPersons)



//Деструктуризация и rest для объектов

let userInDatingCite = {
    name: 'Никита',
    age: 20,
    purpose: 'Свободные отношения'
}

const {name, ...userWithoutName} = userInDatingCite; // можем спокойно деструктурировать объект, вынеся значение name в отдельную переменную, а из других ключ-значений создать новый объект, при этом исходный объект никак не модифицируется (остается прежним). '...' - это оператор Rest, который как раз таки закидывает все элементы в отдельный объект, которые не были указаны при деструктуризации (name указан)
userWithoutName.hobby = 'Спорт и программирование' // несмотря на то что создается константа, мы все равно можем добавлять туда новое значение так как меняем не переменную userWithouName, а работаем с ссылкой на этот объект, который хранил две переменные, а щас эта ссылка хранит три переменные (дальше обьяснят подробнее)
console.log(userWithoutName)
console.log(name) // переменная теперь содержит обычную строку
console.log(userInDatingCite)

//Если происходит ситуация, когда у нас есть один обьект, и есть второй обьект, элементы которого ВСЕГДА должны закидываться в исходный (первый обьект), мы можем провернуть такую штуку.

const newInfoForUser = {
    amountOfRelationsBefore: 3
}

/* userInDatingCite.amountOfNumbers = newInfoForUser.amountOfRelationsBefore;
console.log(userInDatingCite) // как мы делали не имея новых знаний */

userInDatingCite = {
    ...userInDatingCite,
    ...newInfoForUser
}
console.log(userInDatingCite) // меняем исходный массив на массив, состоящий из двух rest массивов. НО ДЛЯ ЭТОГО СПОСОБА ИСХОДНИК ДОЛЖЕН БЫТЬ LET, ТАК КАК ТУТ МЫ РАБОТАЕМ КОНКРЕТНО С ПЕРЕМЕННОЙ.



//Optional chaining

const weather = {
    msk: {
        degree: 20,
        let: {
            letValue: 10
        }
    },
    sp: {
        degree: 10,
    }
}

//допустим нам нужно работать со значением let. для этого на помощь приходит оператор Optional chaining (?.), который позволяет обращаться к вложенности, и если такая вложенность существует, просто выведет значение ключа (нужного нам). Он проверяет, существует ли вложенность на каждом уровне. Если на каком то уровне свойство равно null или undefined, то вернет undefined. Как раз таки и нужен он для того, чтобы избегать ошибок + может служить проверкой. Без этого свойства будем получать ошибки если вложенность будет выше двух.

console.log(weather.sp.let) // вернет undefined, так как у sp не существует элемента с ключем let.
/* console.log(weather.sp.let.letValue) */ // вернет ошибку, так как тут он пытается найти вложенность от undefined (приведет к ошибке)

console.log(weather.sp?.let?.letValue) // а вот тут снова вернет undefined, он как бы проверят есть ли вложенность? если нет то сразу undefined получаем

const city = 'krs'
if (weather[city] != undefined && weather[city].let != undefined) { // тут по сути можно и без !=undefined написать так как это условие уже подразумевает что элемент не равен undefined (но я написал для более подробного понимания)
    console.log(weather[city].let.letValue) //и без optional chaining нам придется вот такие проверки делать
}

if (weather[city]?.let?.letValue) {
    console.log(weather[city].let.letValue)   // тоже самое но с помощью optional chaining
}


//Задача 4

/* Сделать объект склад с методами добавления на склад, поиска по складку товара и расчёт веса. */

const warehouse = {
    goods: [],
    findGoodById: function (id) {
       return this.goods.find((g) => g.id === id)
    },
    addGood: function (good) {
        const alreadyHaveGood = this.findGoodById(good.id)
        if (alreadyHaveGood) {
            console.log('Товар уже присутствует')
            return;
        }
        this.goods.push(good)
        return this.goods 
    },
    getWeightKG: function (good) {
        if (good?.weight?.kg === undefined) {
            return `У товара нет веса`                
        }
        return good.weight.kg // так как мы в функцию передаем сам товар а не его идентификатор (а ТОВАР В ДАННОМ СЛУЧАЕ ОБЬЕКТ), то возвращать мы должны значение вложенности объекта. 
    },
    getWeightKG: function () {
        return this.goods.reduce((acc, currentValue) => {
            return acc +=currentValue?.weight?.kg ? currentValue.weight.kg : 0
        }, 0)
    },
    deleteGood: function (good) {
        const isItemAtList = this.findGoodById(good.id);
        if (isItemAtList === undefined) {
            return `Товара нет в списке`
        }
        const index = this.goods.indexOf(good)
        this.goods.splice(index, 1)
        return this.goods
    } 
};


/* товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
}
const paper = {
    id: 3,
    color: 'red'
}

console.log('--------------------------------------------------------')
//Задача 4
/* Система управления задачами (Todo List)

Создайте объект todoList, который будет представлять список задач. Объект должен иметь следующие методы:

addTask(task): Добавляет новую задачу в список. Задача должна быть объектом со свойствами id, text, completed (по умолчанию false).
removeTask(id): Удаляет задачу из списка по её id.
markAsCompleted(id): Помечает задачу как выполненную (completed: true) по её id.
getTasks(): Возвращает массив всех задач.
getCompletedTasks(): Возвращает массив только выполненных задач.
getUncompletedTasks(): Возвращает массив только невыполненных задач. */

const toDoList = {
    tasksList : [],
    addTask: function (task) {
        const hasAlreadyDone = this.tasksList.find((element) => {
            return element.id === task.id
        })
        if (hasAlreadyDone) {
            console.log('Задача уже в списке')
            return;
        }
        return this.tasksList.push(task)
    },
    removeTask: function (id) {
        const taskToDoAnyOperations = this.tasksList.find((element) => element.id === id);
        if (!taskToDoAnyOperations) {
            console.log('Задачи нет в списке')
            return;
        }
        const index = this.tasksList.indexOf(taskToDoAnyOperations)       
        this.tasksList.splice(index, 1)
        return this.tasksList;       
    },
    markAsCompleted: function (id) {
        const task = this.tasksList.find((element) => element.id === id);;
        if (!task) {
            return 'Задачи с таким id нет'
        }
        if (task?.completed === undefined) {
            return 'Задача не имеет выполнения'
        }
        task.completed = true;
        return 'Задача помечена как завершенная'
    },
    getTasks: function () {
        return this.tasksList;
    },
    getCompletedTasks: function () {
        let completedTasks = [];
        for (const element of Object.keys(this.tasksList)) {
            if (this.tasksList[element].completed === false || this.tasksList[element]?.completed === undefined) {
                continue;
            }
            completedTasks.push(this.tasksList[element])
        }
        return completedTasks;
    },
    getUncompletedTasks: function () {
        return this.tasksList.filter((element) => !element.completed)
    },
}

const learnProgramming = {
    id: 1,
    text: {
        taskOne: 'Попрактиковаться с объектами',
        taskTwo: 'JS под капотом'
    },
    completed: false,
}

const workOut = {
    id: 2,
    text: 'Сходить в зал',
    completed: false,
}

const goShopping = {
    id: 3,
    text: 'Сходить за покупками'
}
/* console.log(goShopping?.completed) */

toDoList.addTask(learnProgramming);
toDoList.addTask(workOut);
toDoList.addTask(goShopping);
console.log(toDoList.tasksList)
/* toDoList.removeTask(1) */
toDoList.markAsCompleted(1)
/* console.log(toDoList.markAsCompleted(2)) */
console.log(toDoList.tasksList)
console.log(toDoList.getCompletedTasks())
console.log(toDoList.getUncompletedTasks())


// Задача 5: Библиотека книг

/* Создайте объект library, представляющий библиотеку книг. Объект должен иметь следующие методы:

addBook(book): Добавляет новую книгу в библиотеку. Книга должна быть объектом со свойствами id, title, author, genre.
removeBook(id): Удаляет книгу из библиотеки по её id.
findBookByTitle(title): Возвращает книгу по её названию.
getBooksByAuthor(author): Возвращает массив всех книг указанного автора.
getBooksByGenre(genre): Возвращает массив всех книг указанного жанра.
getAllBooks(): Возвращает массив всех книг. */
console.log('-----------------')

const library = {
    books: [],
    addBook: function (newBook) {
       if (typeof newBook !== 'object' || newBook === null) {
        console.log('Книга либо пуста либо не объект')
       }
       this.books.push(newBook)
    },
    removeBook: function (id) {
        const bookForRemoving = this.books.find((element) => element.id === id);
        const index = this.books.indexOf(bookForRemoving)
        this.books.splice(index, 1)
    },
    findBookByTitle: function (title) {
        const bookForFinding = this.books.find((element) => element.title === title)
        return bookForFinding === undefined ? 'Такой книги нет, попробуйте заново' : bookForFinding                        
    },
    getBookByAuthor: function (author) {
        const massiveAuthor = this.books.filter((element) => {
            if (element.author === author) {
                return true;
            }
        });
        return massiveAuthor
    },
    getBooksByGenre: function () {},
    getAllBooks: function () {},
}
library.addBook({id:1, title: 'Гарри Поттер и философский камень', author: 'Джоан Роулинг', genre: 'Fantasy'})
library.addBook({id:2, title: 'Гарри Поттер и Дары смерти: часть 1', author: 'Джоан Роулинг', genre: 'Fantasy'})
library.addBook({id:3, title: 'Гарри Поттер и Дары смерти: часть 2', author: 'Джоан Роулинг', genre: 'Fantasy'})
console.log(library.books)
library.removeBook(1)
console.log(library.books)
console.log(library.findBookByTitle())

console.log(library.getBookByAuthor('Джоан Роу'))












