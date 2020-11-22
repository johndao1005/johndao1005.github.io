//subscribe section
//* working with cart function
//adding item to cart
function addItem(param1, param2) {
    const itemName = param1;
    const itemPrice = param2;
    const newItem = document.createElement('li');
    const deleteItem = document.createElement('i');
    deleteItem.classList.add('deleteBtn')
    newItem.classList.add('item');
    newItem.innerHTML = `<strong>${itemName}</strong> <span>${formatMoney(itemPrice)}</span>` + deleteItem;
    cart.appendChild(newItem);
    calculateTotal(itemPrice);
    //need local storage to save the details
}
// money formating
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
//calculate total price
function calculateTotal(param1) {
    totalPrice += param1;
    totalPrices.innerHTML = `${formatMoney(totalPrice)}`;

}
//remove item from

//maybe add and minus button