//---------------------------- Exercise 1 -----------------------

const getMaxNumber = (array) => {
    let newArray = [];
    newArray.push(array[0]);

    if(array.length == 0){
        return 'No se puede obtener un número máximo de un arreglo vacío.'
    }else if(array.length == 1){
        return newArray[0];
    }else{
        for(let index = 1; index <= array.length ; index++){
            if(array[index] >= newArray[0]){
                newArray.unshift(array[index])
            }else {
                newArray.push(array[index])
            }
        }
    }
    return newArray[0]
}  
        

let a = Math.random();
let b = Math.random();
let c = Math.random()
console.log(a, b, c)

let testArray = [a, b, c];
console.log(testArray)
let testFunction = getMaxNumber(testArray);
console.log(testFunction)

//---------------------------- Exercise 2 -----------------------


const reverter = (oneString) => {
    let splittedString = oneString.split(''); 
    let revertedString = '';
    for(let index = splittedString.length -1; index >= 0; index--){
        revertedString += splittedString[index]
    }
    return revertedString
}

let ejemplo = reverter("mi casa")
console.log(ejemplo)


//---------------------------- Exercise 3 -----------------------
const divisor = (number1, number2) => {
    if(number2 == 0){
       return 'No se puede dividir entre cero'
    }else{
        return number1/number2
    }
}

// two next lines for testing
// let testDivisor = divisor(1, 10)
// console.log(testDivisor)