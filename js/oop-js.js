// Основи ООП: клас, екземляр (об'ект), інтерфейс

// інтерфейс в js -це набір властовостей обєкту
// той список, що розвертається в прототипі обєкту

// функція- конструктор(класи):
// відповідає на питання ЩО? (машина), а не що зробити
// записується з Великої літери

// const Car = function (brand, model, price) {
//     console.log(this);
//     // додаєм йому властивостей
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

// };

// це ж саме краще записати через конфиг- тобто передавати будемо об'єкт
// const Car = function (config = {}) {
//     console.log(config);
    
//     this.brand = config.brand;
//     this.model = config.model;
//     this.price = config.price;

// };
// ДЕСТРУКТУРЕЗУЄМО об'єкт (приберемо повторювані This та Config)
// const Car = function (config = {}) {
//     const {brand, model, price} = config;
    
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

// };

// і запишемо зовсім правильно і красиво
const Car = function ({brand, model, price} = {}) {
    //  якщо ніяких переметрів не прийде - то використається пустий масив {}
    this.brand = brand;
    this.model = model;
    this.price = price;

    // додамо метод, щоб змінити ціну

    Car.prototype.changePrice = function (newPrice) {
        this.price = newPrice;
    };
// У властивість this.__prototype__ записується ссилка на об'єкт Car.prototype
// тобто Car.prototype - це прототип майбутнього об'єкта (екземпляра)

};
// додамо властивість Car
Car.prototype.sayHi = function () {
    console.log('Car.prototype.sayHi -> this', this);
    console.log('Hello :)');
};

console.log(Car.prototype);
//  з усієї інформації, що вище, уходять копії в myCar, myCar2, myCar3


//оператор  new значить створи новий екземпляр
//1. если функция визивається через new -значить створився новий пустий об'єкт
// 2. Функція визивається в контексті створеного обєкту,
// тобто в this записується посилання на нього Car

// всі конструктори приймають об'єкти
const myCar = new Car({
    brand: 'Audi', 
    model: 'Q3', 
    price: 35000});
console.log(myCar);

myCar.sayHi();
myCar.changePrice(10000);
// визиваємо об'єкт, який є екземпларом класу Car

// const myCar2 = new Car({
//     brand: 'BMW', 
//     model: 'X6', 
//     price: 55000});
// console.log(myCar2);
// myCar2.sayHi();

// const myCar3 = new Car({
//     brand: 'Audi', 
//     model: 'A6', 
//     price: 70000});
// console.log(myCar3);
// myCar3.sayHi();

// створимо User

const User = function ({email, password} = {}) {

this.email = email;
this.password = password;
}
 User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
 }
const mango = new User({ email: 'mango@mail.com', password: 11111111 });

mango.changeEmail('my-new-email@mail.com');
console.log(mango);

// статичні властивості і статичні методи
// в статичних методах є this але він посилається на власні методи, тому майже непотрібний


console.log(Math.round(5.1));
console.log(Math.PI);

User.logInfo = function (obj) {
    console.log('User.logInfo ->', obj);
    console.log('Пошта: ', obj.email);
    console.log('Пароль: ', obj.password);
};
console.dir(User);
User.message = 'я статична властивість і мене немає на екземплярах або в прототипі'
User.logInfo(mango);
// User.logInfo не буде доступна в Proto!!!

// приклади методів на об'єкті
// Object.keys();
// Object.values();


class StringBuilder {
    constructor(value = []) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
      padEnd(str) {
       this.value.push(str);
     }
  
}


// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


