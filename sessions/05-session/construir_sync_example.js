// Construiremos el equivalente a callbacks usando promises
// Si el muro no cumple con la fase anterior haremos reject de la promise

function construir(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.construido = true;

            const error = muro.construido
                ? null
                : new Error('No se pudo construir');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}

function aplanar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.aplanado = true;

            const error = muro.construido && muro.aplanado
                ? null
                : new Error('No se pudo aplanar');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}

function pintar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.pintado = true;

            const error = muro.aplanado && muro.pintado
                ? null
                : new Error('No se pudo pintar');

            if (error)
                reject(error); // Se termina la ejecucion con reject

            resolve(muro);
        }, 1000);
    })
}


// const muro = {}; // es un objeto


async function ejecutarConstruccion(){
    const muro = {}

    try{
        const muroConstruido = await construir(muro);

        // muroConstruido.construido = false;

        const muroAplanado = await aplanar(muroConstruido);
        const muroPintado = await pintar(muroAplanado);
    } catch(error){
        console.log('ocurrió un error')
        console.log(error)
    }

    console.log('muro terminado');
    console.log(muroPintado)
}

ejecutarConstruccion()