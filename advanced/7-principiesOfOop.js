// Абстракция и инкапсуляция
/* Разберем эти штуки на примере. Допустим мы делаем библиотеку фильмов, и пишем класс для какого то определенного фильма. У фильма есть куча свойств */
// Название, дата, режиссер, длительность, рейтинг, трейлер, и так далее. Но нам по сути (если мы не пишем какой то аналог кинопоиска), не нужны все эти свойства.
class Film {
    #name;
    #author;
    #length;
    rating;

    constructor (name, author, length) {
        this.#name = name
        this.#author = author
        this.#length = length // пока что они все равно не доступны даже для чтения
    }

    get name () {
        return this.#name
    } // чтобы обращаться закидываем в геттер

    get author () {
        return this.#author
    }

    get length () {
        return this.#length
    }
}
// Допустим мы выделили вот эти четыре свойства (ну трейлер и так далее нам нахуй не надо)
/* Этап абстракции мы прошли, далее наступает этап инкапсуляции, когда нам нужно определить, какие свойства будут приватными а какие публичными. И тут легко помыслить, что name, author и length не будут меняться (ну мы же не будем менять название длительность и режиссера на другие названия). Следовательно эти три свойства не имеет смысла делать публичными (будут приватными).А вот рейтинг может измениться.  */
const film = new Film ('Аватар', 'какой то автор', 240)
console.log(film.name)
film.rating = 15
console.log(film.rating) // рейтинг мы можем устанавливать/менять, а приватные свойства установили ну и больше ничего делать не можем
console.log(film.__proto__.constructor)

// Наследование с использованием конструктор-функции (грубо говоря под капотная)
console.log('Лекция 2 --------------')
/* Сразу же стоит отметить, что наследовать стоит только тогда, когда класс является частным случаем своего "родителя". С наследованием аккуратно. Прекрасный пример это класс книга (ну прототип у него обьект), и от него частные случаи: электронная книга и аудио книга. Идеально подходит для наследования. Что мы должны сделать? Мы должны добиться того, чтобы в нашем примере у электр книги и аудио прототипом являлась класс книга. Логика такая же как и в Object.create(proto) (это в блоке 6 классы если что) */

/* const Book = function (title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.buy = function () {
    console.log('Buy')
}

const AudioBook = function (title, author, lenMin) {
    this.title = title
    this.author = author
    this.lenMin = lenMin
}

AudioBook.prototype.log = function () {
    console.log(`${this.title} : ${this.lenMin} минут`)
} */
// Вот тут мы как бы создали аудиокнигу, но мы нарушаем принцип DRY (do not repeat yourself)
// И как же работает наследование?
const Book = function (title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.buy = function () {
    console.log('Buy')
}

const AudioBook = function (title, author, lenMin) {
    Book.call(this, title, author) // привязываем с помощью метода call функции Book контекст аудио книги 
    this.lenMin = lenMin
}

AudioBook.prototype.log = function () {
    console.log(`${this.title} : ${this.lenMin} минут`)
}
AudioBook.prototype = Object.create(Book.prototype) // но если мы теперь выведем в консоль конструктор аудиокниги, он укажет на конструктор Book (а должен на сам обьект аудиобуук)
AudioBook.prototype.constructor = AudioBook // теперь наследование реализовано полностью
const book = new AudioBook('Аватар', 'автор', 20 * 60)
console.log(book) // все вывелось, контекст привязался. но это еще далеко не всё
/* book.buy() */// ошибочкаа, хотя по сути мы должны иметь доступ к методам прототипа. Дело в том что Book еще не стал нашим прототипом, мы просто с помощью метода привязываем контекст (поэтому имеем доступ к внутрянке Book). Мы не наследовались, а просто переиспользовали класс Book грубо говоря.

/* AudioBook.prototype = Object.create(Book.prototype) */ // Object.create создает пустой объект, и мы фактически прототип аудиокниги привязываем к прототипу книги
book.buy() // Ошибка возникает из-за порядка действий. Ты сначала создаешь объект book, а потом устанавливаешь прототип для AudioBook. В результате, book не “знает” о новом прототипе, который ты установил. Поэтому на этом моменте я переношу строку с Object.create до создания обьекта
/* Механизм прототипного наследования: экземпляры “смотрят” на prototype своего конструктора.
Object.create(Book.prototype) - создание нового прототипа для AudioBook
Теперь, самое важное: Object.create(Book.prototype) делает следующее:
Создает новый пустой объект: Он создает совершенно новый объект, у которого нет собственных свойств.
Устанавливает Book.prototype в качестве прототипа: Самое главное! Он устанавливает Book.prototype в качестве прототипа для этого нового объекта. Это означает, что новый объект наследует все свойства и методы из Book.prototype. */

//Наследование в es6 классах
console.log('Лекция 3 ---------------')
//Перепишем тоже самое но на классах

class Book2 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    buy () {
        console.log('Buy')
    }
}

class AudioBook2 extends Book2 { // привязывает прототип (аналогия Object.create)
    constructor(title, author, lenMin) {
        super(title, author) // привязывает контекст (аналогия метода call). первым делом при конструкторе делаем super
        this.lenMin = lenMin;
    }
    
    log() {
        console.log(`${this.title} : ${this.lenMin} минут`)
    } 
}

const newBook = new AudioBook2('Аватар', 'автор', 60*40)
newBook.buy()
newBook.log()

// Override методов
console.log('Лекция 4 ----------------')
/* Override методов - это переопределение метода у наследуваемого класса. Не всегда же у "ребенка" должны быть точь-в-точь все методы как у прототипа. 
Зачем нужно переопределение?
Изменение поведения: Подкласс может захотеть изменить поведение, унаследованное от суперкласса, чтобы оно лучше соответствовало потребностям подкласса.
Расширение функциональности: Подкласс может добавить дополнительную функциональность к методу, унаследованному от суперкласса, не изменяя исходную реализацию суперкласса.
Специализация: Подкласс может специализировать общий метод, определенный в суперклассе, для решения конкретной задачи, которая актуальна только для этого подкласса. */

class Book3 {
    constructor(title, author) {
        this.title = title
        this.author = author
    }

    log() {
        console.log(`${this.title} - ${this.author}`)
    }
}

class EBook3 extends Book3 {
    constructor(title, author, pages) {
        super(title, author);
        this.pages = pages;
    }

    log () {
        console.log(`${this.title} - ${this.author} - ${this.pages}`)        
    }
}
const ebook = new EBook3('Аватар', 'автор', 824)
ebook.log() // "расширили" метод log для класса EBook3

//Упражение
console.log('Лекция 5 Упражнение ----------------')
/* Сделать класс врага со здоровьем и методом получения урона
Сделать класс меча, который имеет силу и метод нанесения урона
Сделать класс орка, который получает урон только в 50% случаев */

class Enemy {
    health;

    constructor (health) {
        this.health = health;
    }

    takeDamage (damage) {
        this.health = this.health - damage;
        console.log(this.health)
    }
}

class Sword {
    #strength;
    constructor (strength) {
        this.#strength = strength;
    }

    doDamage (enemy) {
        enemy.takeDamage(this.#strength) // полиморфизм во всей красе, метод doDamage может ебашить любого врага, у которого есть метод takeDamage
    }

}

class Orc extends Enemy {
    constructor (health) {
        super(health)
    }

    takeDamage (damage) {
        const chance = Math.round(Math.random());
        console.log(chance)
        if (chance) {
            this.health = this.health - damage
        } 
        console.log(this.health) // по приватному свойству наследоваться нельзя (инкапсуляция). делаем health на этом моменте неприватным. Если создам новый #health в качестве приватного свойства у орка, ниче не получится. Создание нового приватного поля в подклассе: Подкласс может объявить свое собственное приватное поле с тем же именем (например, #health в Orc). Но это будет другое приватное поле, не связанное с приватным полем суперкласса. Они будут существовать независимо друг от друга. Подытожим: если в наследуемом классе мы хотим менять какоето свойство батька, это свойство должно быть публичным. Если нет то необязательно.
    }
}

class Troll extends Enemy {

}

const enemy = new Enemy (10);
const sword = new Sword (3);
const orc = new Orc (15);
sword.doDamage(enemy)
sword.doDamage(orc)

// Полиморфизм
console.log('Лекция 6 ----------------')
/* Полиморфизм (Polymorphism) - это способность объектов разных классов обрабатываться единообразно. “Поли” - много, “морфизм” - форм. То есть, один и тот же метод может вести себя по-разному в зависимости от того, какой объект его вызывает. Полиморфизм это даже то что обьект консоль лог выдает один и тот же результат (как бы один и тот же) при '2', 2, {a: 2}
В контексте нашего примера: у меча есть функция, которой по сути без разницы, по кому она будет хуярить мечом. 
*/
const troll = new Enemy (20)
sword.doDamage(troll) // 17хп
sword.doDamage(troll) //14хп
sword.doDamage(troll)// 11хп . Несмотря на то, что класс пустой, он наследуется от врага, следовательно по нему всегда идет урон в качестве дамага меча в 100% случаев. 

// Паттерн builder и chaining
console.log('Лекция 7 --------')
class Builder {
    house = [];

    addRoof () {
        this.house.roof = 'Roof';
        return this;
    }
    addFloor() {
        this.house.floor = 'Floor';
        return this;        
    }
    takeBack () {
        console.log(this.house)
    }
}

const newHouse = new Builder ();
/* newHouse.addRoof().addFloor().takeBack() */ // если хотим строить такие цепочки методов, нужно в каждом методе возвращать this (без this будет ошибка). This ссылается на контекст, то есть на сам объект.
const abc = newHouse.addRoof()
console.log(abc) // с this выдает сам объект, без this что логично undefined. Поэтому при цепочке: мы добавили addRoof, изменение грубо говоря запротоколировалось, и так далее добавляя-меняем

