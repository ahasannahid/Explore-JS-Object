// console.log(this);
const kodomAli = {
    name : 'kodom ali',
    money : 5000,
    study : 'Math',
    subjects : ['calculas', 'algebra', 'geometry'],
    exam : function(){
        console.log(this);
        return this.name + ' ' + 'is partiipating in an exam';
    },
    examArrow: () => {
        console.log(this);
    },
    examNested : () =>{
        const arrow = () => {
            console.log(this);
        }
        arrow();
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

kodomAli.exam();

const badamAli = {
    name: 'kacha badam',
    money: 8000
}

badamAli.exam = kodomAli.exam;

badamAli.exam();

function clickHandler(){
    console.log('inside click handler', this);
}

document.getElementById('btn-click-2').addEventListener('click', function(){
    console.log(this);
})