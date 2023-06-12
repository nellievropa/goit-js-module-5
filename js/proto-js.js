// починаємо створювати з кінця!

const objC = {
    z: 5,
};
// в прототипах зберізаються !посилання! на об'єкти 
const objB = Object.create(objC);
// Object.create создает пустой об'єкт і потом в нього можна записувати щось
objB.y = 2;
//  це власне значення objB

console.log(objC);

console.log(objB);

console.log(objB.y);
console.log(objB.z);

const objA = Object.create(objB);
objA.x = 1;

console.log('objA', objA.z);
//ми можемо перезаписати властивість z для objA, у objC властивість z не зміниться
objA.z = 1000;

console.log('objA', objA);

// перевіримо власні властивості

console.log(objA.hasOwnProperty('y'));

// undefind отримуємо коли цієї властивості взагалі немає у всьому ланцюгу об'єктів


// приклад

const dummyObj = {
    message: 'Це власна властивість обєкту',
};
dummyObj.message = 'Це власна властивість обєкту';
console.log('dummyObj', dummyObj);


const dummyObj1 = Object.create({
    message: 'Це власна властивість прототипу',
});

console.log(dummyObj1.message);

// алгорітм пошук свойства в цепочке прототипу:
// 1 Поиск начинается в собственных свойствах
// 2 Если свойства не в собственных свойствах, поиск переходит к цепочке прототипу
// 3 Поиск прекращается при первом совпадении (свойство нашлось)
// 4 возвращается значение свойства



