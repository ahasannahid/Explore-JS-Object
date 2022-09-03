const numbers = [12, 14, 17, 65, 47];
// for(const number of numbers){
//     console.log(number);
// }

// for of loop can not be used with object
const bottle = {
    color: 'yellow',
    price : 50,
    isCleaned : true,
    capacity : 1
}


// first option looop through an object
const keys = Object.keys(bottle)
// console.log(keys);

/**
 * 3 ways to read object properties
 * 1. bottle.color
 * 2.bottle.['color]
 * 3.bottle[key]
 */
for (const key of keys){
    // console.log(key);
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    // console.log(key);
    // console.log(key, bottle[key]);
}

// advance
const pair = Object.entries(bottle);
// console.log(pair)

// advance
for(const[key, value] of Object.entries(bottle)){
    console.log(key, value);
}