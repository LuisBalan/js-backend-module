// First Robin orders the pizza. The app registers the order by invoking a function like this:

// orderPizza('Veg', 'Cheese Barbeque');

//declaration of the function:

// function orderPizza(type, name){
//     console.log('Pizza ordered...');
//     console.log('Pizza is for preparation');
//     setTimeout(function(){
//         let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
//         console.log(`On the Pizzahub server ${msg}`);
//     }, 3000)
// }

// in the funtion above, the notification is on the side of server

// modification of orderPizza function in order to notify to Robin when the pizza is ready

function orderPizza(type, name, callback){
    console.log('Pizza ordered...');
    console.log('Pizza is for preparation...');
    setTimeout(function (){
        let msg = `Your ${type} ${name} Pizza is ready! The total bill is $13`;
        callback(msg)
    }, 3000);
}

// Now, let's make changes to the invocation of the orderPizza function:

orderPizza('Veg', 'Cheese Barbeque', function(message){
    console.log(message)
});