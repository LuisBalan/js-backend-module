let a = '2';
let b = 'b';
const c = 'mucho texto';
var d = true;

console.log(a, b, c, d);

for(index = 0 ; index < 10 ; index++){
    console.log(a, b, c, d);
}

if(d){
    console.log('true');
}else{
    console.log('nunca se imprimirá esto')
}

const myFunction = function(x){
    console.log(x)
    return x*x;

}

myFunction(5);
console.log(myFunction(5));

const anotherFunction = () => {
    console.log('esta es anotherFunction')
}

anotherFunction()