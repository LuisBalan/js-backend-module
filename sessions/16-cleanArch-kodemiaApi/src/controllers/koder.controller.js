const koder = require('../usecases/koder.usecase');

async function getKoder(request, response){
    try{
        const allKoders = await koder.getAllKoders()

        response.json({
            success: true,
            message: 'All Koders',
            data: {
                koders: allKoders,
            },
        })
    } catch(error){
        console.error(error)
        response.statusCode = 500
        response.json({
            success: false,
            message: 'Could not get Koders'.
            error,
        })
    }

}


async function deleteKoder(request, response){
    try{
        // Procesar request
        const id = request.params.id
        if(!id) throw new Error('Invalid ID')

        // Hacer el caso de uso
        const deleteKoder = await koder.deleteKoderById(id);

        if(!deletedKoder) throw new Error('Koder Not Found')

        // le respondes al cliente
        response.json({
            success: true,
            message: 'Koder deleted succesfully',
            data:{
                koder: deletedKoder,
            },
        })

    }catch(error){
        console.error(error)

        switch(error.message){
            case 'Invalid ID':
                response.statusCode = 400;
                break
            case 'Koder Not Found':
                response.statusCode = 404;
                break
            default:
                response.statusCode = 500;
                break
        }

        response.json({
            success: false,
            message: 'Could not delete Koder',
            error,
        })
    }
}




module.exports = {
    getKoder,
}