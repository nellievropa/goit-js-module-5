// Наслідування - загальн івластивості виносятся в загалний клас

class Hero {
    constructor( {name = 'hero', xp = 0} = {} ) {
        this.name = name;
        this.xp = xp;
    }
    gainXp(amount) {
        console.log(`${this.name} отримує ${amount} досвіду`);
        this.xp += amount;
    }
}

// const mango = new Hero({ name: 'mango', xp: 1000 });

// console.log(mango);
// mango.gainXp(1000);

// щоб воїн наслідував Hero we are using EXTEND
class Warrior extends Hero {
constructor({weapon, ...restProps} = {}) {
        // super -це виклик constructor( name = 'hero', xp = 0 )
        super(restProps);
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакує використовуючи ${this.weapon}`);
    }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
console.log(mango);

mango.attack();
mango.gainXp(1000);

// якщо хочемо зробити героя, який наслідує воїна

class Bersek extends Warrior {
    constructor({warcry, ...restProps} = {}) {
        super(restProps);

        this.warcry = warcry;
    }
    babyRage() {
        console.log(this.warcry);
    }
}

// створюємо нового героя 
const ajax = new Bersek({name: 'ajax', 
xp: 550, 
weapon: 'axe', 
warcry: 'WAAAAAAAWWW'
});

console.log(ajax);
ajax.babyRage();
ajax.attack();
ajax.gainXp(230);




class Mage extends Hero {
    constructor({spells, ...restProps}) {
    // constructor(name, xp, spells = []) {
        super(restProps);

        this.spells = spells;
    }
    cast() {
        console.log(`${this.name} щось там кастує використовуючи ${this.spells}`);
    }
}

const poly = new Mage({name: 'poly', xp: 500, spells: ['fireball']});
console.log(poly);

// poly.attack(); -не працює, бо це є в героя, а не в мага
poly.gainXp(1200);
poly.cast();

// нижче записи ідентичні, другий- коректніше
console.log(mango.__proto__ === Warrior.prototype);
console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// наступний запис доповнює цепочку
console.log(Hero.prototype === Warrior.prototype.__proto__);
console.log(Hero.prototype.__proto__ === Object.prototype);

console.log('Warrior.prototype', Warrior.prototype);
console.log('Hero.prototype', Hero.prototype);

// із автоперевірки! дивись синтаксис!!!
class User1 {
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends (User1) {
    static AccessLevel = {
      BASIC: "basic", 
      SUPERUSER: "superuser"}
  }



//   І Знову дивимся на синтаксис!!!
  class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  
  class Admin extends User {
    // Change code below this line
    accessLevel;
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  constructor({ email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
  }
    
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"

// ще приклад з атоперевірки дивись: методи і синтаксис!
  class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line
    blacklistedEmails = [];
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }
    
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
    isBlacklisted(email) {
      if(this.blacklistedEmails.includes(email)) {
         return true;
      }
      return false;
    }
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  