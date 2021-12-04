const express = require('express');

const koder = require('../usecases/koder.usecase');

const router = express.Router();

router.get('/', controller.getKoder);
router.post('/', controller.saveKoder);
router.delete('/:id', controller.deleteKoder);

module.exports = router

// router.get('/', async (request, response) => {
//     try{
//         const allKoders = await koder.getAllKoders();

//         response.json({
//             success: true,
//             message: 'All Koders',
//             data: {
//                 koders: allKoders,
//             },
//         })
//     }catch(error){
//         console.error(error)
//         response.statusCode = 500 // Server error
//         response.json({
//             success: false,
//             message: 'Could not get Koders',
//             error,
//         })
//     }
// })

// module.exports = router;
