const arr=['giraffe','tiger','lion'];
const arr2=[1,2,3,4];
arr.push('cheetah');
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits=['banana','orange'];
fruits.unshift('apple');
console.log(fruits);
fruits.findIndex(findFruit);

function findFruit(fruit){
    return fruit="banana";
}

const ages=[2,3,4];
ages.findIndex(checkAge);

ages.sort();//ascending
ages.reverse();//descending after ascending in the previous line

function checkAge(age){
    return age>3;
}

const cars=["bmw","mercedes"];

const car={type:"fiat",model:"400",color:"white"};
//name:value pairs
//use this while matching the data to the documents of mongo