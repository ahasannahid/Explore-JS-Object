const bottle = {
    color: 'yellow',
    price : 50,
    isCleaned : true,
    capacity : 1
}
const keys = Object.keys(bottle);
// console.log(keys)
const values = Object.values(bottle);
// console.log(values)

const pairs = Object.entries(bottle)
// console.log(pairs);
// two dimensional array
const twoDimensionArray = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]  ]


console.log(bottle);


// seal property value(seal korle property er delete kaj korbena and new property set kora jay na but value upgrade or )
// Object.seal(bottle);

// freeze object(upgrade delete set kisui kora jayna)
Object.freeze(bottle)


// delete property from object
delete bottle.isCleaned;

bottle.price = 100;
bottle.height = 12;
console.log(bottle);