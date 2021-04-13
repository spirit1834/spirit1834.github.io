"use strict";

const colorOfTitle = 1;

const nick = "Spirit1834";

const obj = {
    a:10,
};

obj.a = 140;

console.log(obj);

{
    var res = 8;
}

console.log(res);

//Power calc
/*function pow(x, z){
    let res = x;
    
    for(let i = 1; i < z; i++){
        res *= x;
    }

    return res;
}

let x = prompt('Number');
let z = prompt('Power');

if(z < 1){
    alert('This power is not natural number');
} else{ 
    alert(pow(x, z));
}*/

const boole = true;

let unde;
console.log(unde);

const obje = {
    name: "Spirit",
    nickname: nick,
    age: 15,
    isMarried: false
};
console.log(obje['name']);

let arr = ['red', 'green', 'blue'];

for(let key in arr){
    console.log(key, arr[key]);
}

const resul = confirm('Are you gypsy?');

if(resul == true){
    console.log('Hi!');
}

const answers = [];

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your second name?', '');
answers[2] = prompt('What where are you livivng?', '');
answers[3] = prompt('What is your favourite city?', '');

document.write(answers);

const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Spirit';

alert(`Hi, ${user}!`);

console.log(5 - "6");

let incr = 10,
    decr = 10;

//Prefix
console.log(incr--, decr++);

//Postfix
console.log(--incr, ++decr);

//Оставшийся процент от деления
console.log(10%3);

console.log(2*8 === 16);

const isTrue = true,
    isFalse = false;

console.log(isTrue && !isFalse);

console.log(2 + 2 * 2 !== 8);