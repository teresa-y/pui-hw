function displayPrice() {
    let priceElement = document.querySelector('#item-price');
    priceElement.innerHTML = '$' + ((basePrice + glazingPrice) * sizePrice).toFixed(2)
  }

function glazingChange(element){
    let priceChange = parseFloat(element.value);
    glazingPrice = allGlaze[priceChange].adaption
    displayPrice()
}

function sizeChange(element){
    let priceChange = parseFloat(element.value);
    sizePrice = allSize[priceChange].adaption;
    displayPrice()
}

//url params

let cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

console.log(queryString)

let basePrice = rolls[rollType].basePrice;

console.log(document.querySelector('.item-img'));

document.querySelector('.item-img img').setAttribute('src', `products/${rolls[rollType].imageFile}`);
document.querySelector('.product-name').innerText = `${rollType} Cinnamon Roll`;
document.title = `${rollType} Cinnamon Roll`;
displayPrice()

//add to cart
let selectGlazing = document.querySelector('#glazingOption');
let selectSize = document.querySelector('#sizeOption');

function addToCart() {
    let rollGlazing = allGlaze[selectGlazing.selectedIndex];
    let packSize = allSize[selectSize.selectedIndex];
    cart.push(new Roll(rollType, rollGlazing.glazing, packSize.size));
    console.log(cart);
}

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    addToCart();
  })

