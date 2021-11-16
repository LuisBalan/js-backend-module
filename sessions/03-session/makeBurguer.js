/* Step to cook a burger

1. Get the ingredients (we're gonna assume it's a beef burger)
2. Cook the beef
3. Get burger buns
4. Put the cooked beef between the buns
5. Serve the burger
*/

//Synchronous form

const makeBurger = () => {
    const beef = getBeef();
    const patty = cookBeef(beef);
    const buns = getBuns();
    const burger = putBeefBetweenBuns(buns, beef);
    return burger;
}

const burger = makeBurger();
serve(burger);