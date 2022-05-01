/*
Write a function that returns true or false for a given number.
We will reuse this function, so make it reusable.
*/

function isOdd(num){
    if(num % 2 === 0){
        return true
    }else{
        return false
    };
};

// console.log(isOdd(5));

// function callback(argument){
//     console.log(argument)
// };

const worldCups = [
    {
        year: 1930,
        country: 'Uruguay'
    },
    {
        year: 1934,
        country: 'Italy'
    },
    {
        year: 1938,
        country: 'France'
    },
    {
        year: 1950,
        country: 'Brazil'
    }
];


const printData = (time) => setTimeout(() => {
    console.log(worldCups)
}, time);

// printData(1000);

const fetchData = new Promise((resolve, reject) => {
    if(worldCups.length !== 0){
        resolve(printData(1000))
    }else{
        reject('There is not data.')
    };
});

fetchData.then(() => console.log(worldCups))

