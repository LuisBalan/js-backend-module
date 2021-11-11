const arreglo = [2, 3, 4, 5, 5, 0, -2 , 100, 1.1];
const texto = ['a', 'b', 'c']

// Si el callback retorna verdadero, añade el valor al array del resultado
// Si el callback retorna falso, ignora el valor

// function for even numbers
function evenCriteria(elemento){
    if (elemento % 2 == 0){
        return true;
    }else{
        return false;
    }
}



function filter(arr, callback){
    const resultado = [];

    for(let index = 0 ; index < arr.length; index++){
        if(callback(arr[index]) == true){
            resultado.push(arr[index])
        }
    }
    return resultado;

}

console.log(filter(arreglo, evenCriteria))