const student = {
    name: 'pandey',
    job: 'batting',
    ball: 'cricket',
    salary: 20000
};

const {name, ...rest} = student;
console.log(rest);


const numbers =  [10, 20, 30, 40, 50];
// const [a,b, ...rest] = numbers;

console.log(rest);