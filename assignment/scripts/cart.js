console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5; //stretch goal

// stretch goal (isFull function)
function isFull(curItems){
    if(curItems.length < 5){
        return true;
    }

    return false;
}

function addItem(item){
    
    if(isFull(basket)){
        basket.push(item);
        return true;
    }
    
    return false;
}

function listItems(cart){
    for(let i = 0; i<cart.length; i++){
        console.log(cart[i]);
    }
}

function empty(){
    basket = [];
    return console.log(`Your basket has been emptied`)
}

// stretch goal (arrow function (remove item))
const removeItem = item => {
    let index = basket.indexOf(item);
    if(index < 0){
        return null
    }
    else{
        basket.splice(index, 1);
    }

    return(`${item} has been remove`)
}



// addItem 
console.log(`Adding chips, ${addItem("chips")}`);
console.log(`Adding paper towels, ${addItem("paper towels")}`);
console.log(`Adding apples, ${addItem("apples")}`);
console.log(`Adding peppers, ${addItem("peppers")}`);
console.log(`Adding chicken, ${addItem("chicken")}`);
console.log(`Adding salsa, ${addItem("salsa")}`);
console.log(`Adding beef, ${addItem("beef")}`);


// listItems
console.log('\n');
listItems(basket);

// remove item from basket
console.log('\n');
console.log(removeItem("chicken"))

// checking if item has been removed from basket
console.log('\n');
listItems(basket);

// empty
console.log('\n');
empty()


