// do not use this method to compare object and array
const first = {a: 5};
const second = {a: 5};
const third = second;
const firstString = JSON.stringify(first);
const secontString = JSON.stringify(second);

// if(firstString === secontString){
//     console.log('same');
// }
// else{
//     console.log('different')
// }

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);

    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}



console.log(compareObject(first, second));