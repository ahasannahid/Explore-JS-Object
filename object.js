//1. create object using object literals
const player= {};

player.name = 'Ahasan Nahid';
player.speciality =  'programmer';
// object er vitor method ke function bole
player.bat = function(){
    console.log('swing your bat')
}
// console.log(player);
// player.bat();

const student = {
    name: 'pandey',
    job: 'batting',
    ball: function(){
        console.log('through the ball');
    },
    salary: 20000
};

//2. object constructor . ekhane new chara call korleu hoy. 
const persons = new Object();
// console.log(person);

// 3. creating object with object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name);

// 4. class

class person{
    name = 'abul';
    addres = 'mirpur';
    constructor(age){
        this.age = age;
    }
}

const person1 = new person(100);
// console.log(person1);

// 5. function

function car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new car('elon', 32)
console.log(tesla);