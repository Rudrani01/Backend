// to access these functions in the index

let addToCart=()=> {
    return "Add to Cart"
}

let changeQty=()=> {
    return 5;
}

// just for one --> default export
//  module.exports = addToCart

// named export
module.exports = {addToCart, changeQty}