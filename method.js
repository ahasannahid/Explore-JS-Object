const student = {
    name : 'kodom ali',
    money : 5000,
    study : 'Math',
    subjects : ['calculas', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.money)
        // console.log(this.name, 'is partiipating in an exam')
        // return `${this.name} 'is partiipating in an exam'`;
        return this.name + ' ' + 'is partiipating in an exam';
    },
    improveExam : function(subject){
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDey : function (amount, tips){
        this.money = this.money - (amount + tips);
        return this.money;
    }
}
const output = student.exam();
// console.log(output)

const reExam = student.improveExam('chemistry');

// console.log(reExam);

const remaining = student.treatDey(900, 100);
console.log(remaining);

const afterRemaining = student.treatDey(500, 100);
console.log(afterRemaining);