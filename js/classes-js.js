// Класи - це новий спосіб записати конструктор з уже готовим прототипом
// - объявление класу
// - конструктор класу
// - методы
// - static
// - приватні властивості
// - синтаксит публичних свойств
//  ГЕТТЕР і СЕТТЕРи!



// синтаксис методу class
class Car1 {
    static BBBB = 'BBBB';
    static description = 'опис машини';
    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj)
    }
            // щоб об'явити приватну властивість ставимо # і їх можна тільки !!! використовувати в методах об'єкта
            #test = 'test';
            // публічні властивості записуються тут так і записуються у екземпляр НЕ! в прототип!!!
            mySuperPublicFields = 555;


    // все, що йде на екземпляр , живе в constructor
    // запис методу класу перший варіант
constructor({brand, model, price} = {}) {
        console.log('виконується constructor автоматично');
        console.log(this);

        this.brand = brand; 
        this.model = model;
        this.price = price;
// і трансформується в таке 

this. mySuperPublicFields = 666;

    }
// все, що йде в прототип, записується в методах

    // ще один запис методу класу
    changePrice(newPrice) {
        this.price = newPrice;
    }
    updateModel(newModel) {
        this.model = newModel;
    }
}

console.dir(Car1);
// статичні властивості можуть бути об'явлені просто під об'єктом або - і це краще - перед конструктором зверху і об'являються словом static
Car1.AAA = 'AAA';

// подивиться на статичні властивості можна звичайним способом
console.log(Car1.description);


const carInstance = new Car1({
    brand: 'BMW', 
    model: 'X6', 
    price: 55000});

// метод щоб подивитися Proto
    console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);
console.log(carInstance);
// визвати статичний метод
Car1.logInfo(carInstance);
