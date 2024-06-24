// JavaScript Code
const menu = {
    'Pizza': 40,
    'Pasta': 80,
    'Burger': 80,
    'Tea': 50,
    'Coffee': 70,
    'pizza': 40,
    'pasta': 80,
    'burger': 80,
    'tea': 50,
    'coffee': 70,
    'PIZZA': 40,
    'PASTA': 80,
    'BURGER': 80,
    'TEA': 50,
    'COFFEE': 70
};

function placeOrder() {
    let orderTotal = 0;
    
    const item1 = document.getElementById("item1").value.trim();
    
    if (menu.hasOwnProperty(item1)) {
        orderTotal += menu[item1];
        alert(`Your item ${item1} has been added to your order`);
    } else {
        alert(`Ordered item ${item1} is not available yet`);
    }
    
    const anotherOrder = document.getElementById("anotherOrder").value.trim().toLowerCase();
    
    if (anotherOrder == "yes") {
        const item2 = document.getElementById("item2").value.trim();
        if (menu.hasOwnProperty(item2)) {
            orderTotal += menu[item2];
            alert(`Item ${item2} has been added to your order`);
        } else {
            alert(`Ordered item ${item2} is not available!`);
        }
    }
    
    document.getElementById("totalAmount").innerText = `The total amount to pay is Rs${orderTotal}`;
}
