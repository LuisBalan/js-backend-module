// const data = [
//     {
//         id: 1,
//         title: 'Iron Man',
//         year: 2008
//     },
//     {
//         id: 2,
//         title: 'Spiderman Homecoming',
//         year: 2017
//     },
//     {
//         id: 3,
//         title: 'Avengers: Endgame',
//         year: 2019
//     }
// ];

const data = [];


// Primer ejemplo
// const getData = () => {
//     return data;
// };

// console.log(getData())


//Segundo ejemplo
// const getData = () => {
//     setTimeout(() => {
//         return data;
//     }, 1500);
// };
// console.log(getData());


// Ejemplo using promises

const getData = () => {
    return new Promise((resolve, reject) => {
        if(data.length === 0){
            reject(new Error('There is not data'))
        }else{
            setTimeout(() => {
                resolve(data)
            }, 1500);
        }
    });
};

// getData()
//     .then(data =>  console.log(data));

// async function fetchingData(){
//     const fetchedData = await getData();
//     console.log(fetchedData);
// }

// fetchingData();

async function fetchingData(){
    try{
        const fetchedData = await getData();
        console.log(fetchedData);
    }catch(err){
        console.log(err.message);
    };
};

fetchingData();