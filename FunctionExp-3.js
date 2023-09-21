const item1 = {
    name: "Mobile Phone",
    price: 35000,
    discount: "13%"
}

const item2 = {
    name: "Smart TV",
    price: 45000,
    discount: "24%"
}

function purches(itemsDetails) {
    return `
    Item Name  : ${itemsDetails.name} 
    Item Price : ${itemsDetails.price} 
    Discount   : ${itemsDetails.discount}`
}

console.log(purches(item1));

console.log(purches(item2));

console.log(purches({
    name: "Smart Watch",
    price: 6500,
    discount: "44%"
}));