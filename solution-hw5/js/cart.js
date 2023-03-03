//cart display stuff
cart = [    
    new Roll('Original', 'Sugar milk', '1'),
    new Roll('Walnut', 'Vanilla milk', '12'),
    new Roll('Raisin', 'Sugar milk', '3'),
    new Roll('Apple', 'Keep original', '3')
]

let totalPrice = 0;

//displaying cart items
for (const item of cart) {
    console.log(item);
    createElement(item);
  }

function createElement(item) {
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    item.element = clone.querySelector('.cart-item-container');
    const itemListElement = document.querySelector('.cart-info');
    itemListElement.append(item.element)
    updateElement(item)
}


function updateElement(item){
    const itemImageElement = item.element.querySelector('.cart-img img');
	const itemNameElement = item.element.querySelector('.cart-item-name');
	const itemGlazeElement = item.element.querySelector('.cart-item-glazing');
    const itemSizeElement = item.element.querySelector('.cart-item-packsize');
	const itemPriceElement = item.element.querySelector('.cart-item-price');
    const removeButton = item.element.querySelector('.remove-item');

    itemImageElement.src = `products/${rolls[item.type].imageFile}`;
    console.log(itemImageElement.src)
    itemNameElement.innerText = `${item.type} Cinnamon Roll`;
    itemGlazeElement.innerText = `Glazing: ${item.glazing}`;
    itemSizeElement.innerText = `Pack size: ${item.size}`;
    itemPriceElement.innerText = '$' + item.totalPrice;
    removeButton.innerText = 'Remove';

    totalPrice += parseFloat(item.totalPrice);
    updateTotalPrice();

    //removing cart items

    removeButton.addEventListener('click', () => {
        deleteItem(item);
        totalPrice = (totalPrice - parseFloat(item.totalPrice)).toFixed(2)
        updateTotalPrice();
    });

}

function updateTotalPrice() {
    document.querySelector('.total-price').innerText = '$' + totalPrice;
}


  //item deletion function

  function deleteItem(item) {
    item.element.remove();
    cart = cart.filter(element => element !== item);
}


