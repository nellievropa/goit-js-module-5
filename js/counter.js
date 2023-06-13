// Плагін - це готова бібліотека чи інструмент для вирішення якоїсь задачі, який закриває в собі її вирішення, можливо з невеликою адаптацією

const CounterPlugin = function ({
    rootSelector, 
    initialValue = 0, 
    step = 1,
    // стрілочна функція, яка поверне 0
    onUpdate = () => null,
} = {}) {
    
    this._value = initialValue;
    this._step = step;

    this._refs = this._getRefs(rootSelector);

    // тут записуємо посилання на функцію а потім нижче зможемо її викликати
    this.onUpdate = onUpdate;

    this._bindEvents();
    this.updateValueUI();
};

// він буде повертати об'єкт посилань на всі елементи мого плагіну
CounterPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    // робимо підключення кнопок
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    // селектор атрибута записується в таких дужках []
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]');

    console.log(refs.incrementBtn);
    return refs;

};
// зробимо щоб реагувало на кліки по кнопках -прив'язати подію(собитие)
CounterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype._bindEvents -> this', this);
        this.increment();
        this.updateValueUI();
        // ми написали: при кліку на кнопку виклич метод this.increment();
    });
    this._refs.decrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype._bindEvents -> this', this);
        this.decrement();
        this.updateValueUI();
        // ми написали: при кліку на кнопку виклич метод this.increment();
    });
};
// зробимо метод щоб на місці 0 змінювалося значення
CounterPlugin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value;

    this.onUpdate();
};


CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};
const counter1 = new CounterPlugin({ rootSelector: '#counter-1', step: 10, initialValue: 100,
onUpdate: () => console.log('Це мій кастомниц колбек для onUpdate')});

console.log('counter1: ', counter1);

const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 2 });
console.log('counter2: ', counter2);
