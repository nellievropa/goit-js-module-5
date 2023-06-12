// функція- це об'єкт, але складний тип- ссилочний

// порівнюємо 2 масиви - по адесу вони не рівні
console.log('[] === []:', [] === []);
// порівнюємо 2 об'єкти, 2 різні ячейки пам'яті, вони не рівні
console.log('{} === {}:', {} === {});
// порівнюємо 2 функції, вони також не рівні
console.log(
    'function(){} === function() {}: ',
    function(){} === function() {},
);

// інший приклад
//  в функцію кладемо посилання на іншу функцію

const fnA = function () {
    console.log('hello');
};
// в функцію fnB кладется указатель на fnA, тому вони будуть рівні
const fnB = fnA;
console.log('fnB === fnA:', fnB === fnA);

// this - це локальна змінна, яка існує тільки в тілі об'єкту
// Контекст слова THIS отпределяется в МОМЕНТ визова функции (как ти ее візвал)

// как метод об'єкту і в контексті об'єкту

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };
// визов в контексті об'єкта user
// user.showTag();


// визов фукнції без контексту
// - в строгому режемі (type="module"в script)- undefined
// - не в строгому режимі - window

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

// как метод об'єкту, але об'явлена як зовнішня функція
// в контексті об'єкту

// const showTag = function () {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
// };

// showTag();
// видасть undefined, бо визвана не в контексті якогось об'єкту


// виоб'являю об'єкт user
// const user = {
//     tag: 'Mango',
// };
//в об'єкт  user.showUserTag записуємо ссилку на функцію showTag
// user.showUserTag = showTag;
// console.log('user', user);

// визваємо user.showUserTag - з'являється контекст і привласнюється якесь значення this

// user.showUserTag();

// ще один приклад
// об'єкт юзер, він  має властивіть ТЕГ і метод showTag
// const user = {
//     tag: 'Mango',
//     showTag () {
//         console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//     },
// };
// об'єкт юзер визвав функцію showTag
// user.showTag();

// зробимо зовнішню змінну і запишемо в неї ссилку на зовнішню функцію
// const outerShowTag = user.showTag;

// якщо викликати функцию без об'єкту, то отримаємо undefined 
// outerShowTag();


// контекст с callback function

// const user = {
//     tag: 'Mango',
//     showTag () {
//         console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();- this === user

// const xyz = user.showTag; - це запис ссилки на оригінальну функцію
// xyz();  this === unerfind в цьому випадку, тому що функція визивається без контексту


const invokeAction = function (action) {
    console.log(action);
// цей виклик функції без контексту, тому буде undefind(КОНТЕКСТ -це ХТО викликав)
    action();
};

// передаємо ссилку на функцію showTag
// invokeAction(user.showTag);

// user.invokeAction(); - в цьому випадку в об'єкті user будуть шукати властивість invokeAction і не знайдуть!!!


// ПРИКЛАДИ
// 1
const fn = function () {
console.log('fn -> this', this)
};

// fn();
//  при такому виклику буде undefined , тому що немає контексту(ХТО визиває)

// 2 ПРИКЛАД
// const book = {
//     showThis() {
//         console.log('showThis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     },
// };

// book.showThis(); 
// при такому виклику this буде посилатися на об'єкт, в нашому випадку - book 126 line

// book.showTitle(); -undefined

// робимо зовнішню змінну і записую в неї посилання на метод

// const outerShowThis = book.showThis;
// outerShowThis(); 
//буде  undefined, тому що ми вклали посилання, а об'єкт не визначили


// const outerShowTitle = book.showTitle;
// outerShowTitle(); 
// буде  undefined, тому що не визначили об'єкт, і не можна визначити титул невизначеного об'єкту


// 3 ПРИКЛАД

// const makeChangeColor = function () {
//     const changeColor = function(color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

    // changeColor();
    // this === undefined, тому що не заданий контекст (об'єкт, чий колір)

    // const sweater = {
    //     color: 'teal',
    // };
    // sweater.updateColor = changeColor;

    // sweater.updateColor('red');
    // this буде посилатися на sweater -бо це об'єкт, який її викликає

    // return sweater.updateColor;
    // це результат роботи makeChangeColor();
// };

// makeChangeColor();

// const swapColor = makeChangeColor();

// swapColor('blue');
// this === undefined, тому що swapColor('blue'); визиває посилання на makeChangeColor();


// 4 ПРИКЛАД

const makeChangeColor = function () {
    const changeColor = function(color) {
        console.log('changeColor -> this', this);
        this.color = color;
    };

    return changeColor;
};

const updateColor = makeChangeColor();
// updateColor('yellow');
// this === undefined, тому що updateColor('yellow');- якась випадкова змінна, яка викликається вне об'єкту


// const hat = {
//     color: 'blue',
//     updateColor,
    // в цій властивості updateColor зберігається посилання на функцію updateColor
    // по старому писалося так updateColor: updateColor;
// };

// якщо консоль проходить до оновлення, то отримуємо перший результат(колір)
// console.log(hat.updateColor);
// hat.updateColor('orange');
// // тут лежить ссилка на функцію
// console.log(hat);

// 5 ПРИКЛАД
// при передачі методів об'єкту як колбек функції контекст не зберігається
// const counter = {
//     value: 0,
//     increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
// },
// decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
// },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };

// counter.increment- це ссилка на об'єкт
// назавжди прив'язуємо посилання на counter
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// CALL and APPLY
// const showThis = function (a, b, c, d) - цей запис аналогічний наступному
const showThis = function (...arg) {
    console.log(arg);
    console.log('showThis -> this', this);
};
showThis();

// якщо ми хочемо, щоб howThis використовувало об'єкт А

// const objA = {
//     a: 5,
//     b: 1.
// };
// ми кажемо howThis визовиу себе метод call
// showThis.call(objA, 10, 20, 30, 55);
// синтаксис методу apply просить масив данних []
// showThis.apply(objA, [10, 20, 30, 55]);

// const objB = {
//     x: 789,
//     z: 254.
// };
// showThis.call(objB, 11, 22, 32, 255);
// showThis.apply(objB, [11, 22, 32, 255]);

// приклад : якщо метод повинен повторюватися в декількох місцях ,
// його мжна винести назовні і звернутися до нього через call or apply
const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};
// changeColor.call(hat, 'orange');
// console.log(hat);

const sweater = {
    color: 'green',
};

// changeColor.call(sweater, 'blue');
// console.log(sweater);

// метод bind робить копію з прив'язаним контекстом
// в цьому випадку ссилка постійно прив'язана до об'єкту hat

const chageHatColor = changeColor.bind(hat);
const chageSweaterColor = changeColor.bind(sweater);
chageHatColor('yellow');
console.log(hat);
chageSweaterColor('rose');
console.log(sweater);


// приклад Репети
const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += 1;
},
decrement(value) {
    console.log('decrement -> this', this);
    this.value -= 1;
},
};
const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.addEventListener('click', function () {
    console.log('Кликнули на декремннт');

    counter.decrement();
    console.log(counter);

    valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
    console.log('Кликнули на інкремннт');

      counter.increment();
    console.log(counter);

        valueEl.textContent = counter.value;
});
// decrementBtn.textContent = 'qwwewreetryr';



// із автоперевірки
const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};

// historyService.getOrdersByEmail("solomon@topmail.net");- це не визов! не працює
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());