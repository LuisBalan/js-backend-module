function irACasa(callback){
    console.log('camino a casa...');
    console.log('llegué a casa...');
    callback();
}

function avisar(){
    console.log('ya llegué');
}

function dormir(){
    console.log('a mimir')
}

irACasa(avisar)
