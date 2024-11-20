let cart = [];
let saveBoxAmount = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    alert(item + ' added to your cart.');
}

function saveToBox() {
    let amount = prompt("How much would you like to save?");
    if (amount) {
        saveBoxAmount += parseFloat(amount);
        alert('You have saved $' + saveBoxAmount);
    }
}

function startInstallment() {
    let total = cart.reduce((acc, curr) => acc + curr.price, 0);
    if (cart.length > 0) {
        alert('Total for installments: $' + total + '. Payment plan will be created.');
    } else {
        alert('Your cart is empty. Add items first.');
    }
}
