let glazingPrice = 0;
let sizePrice = 1;

let allGlaze = [
    {
        glazing: 'Keep original',
        adaption: 0
    },
    {
        glazing: 'Sugar milk',
        adaption: 0
    },
    {
        glazing: 'Vanilla milk',
        adaption: 0.5
    },
    {
        glazing: 'Double chocolate',
        adaption: 1.5
    }
]

let allSize = [
    {
        size: '1',
        adaption: 1
    },
    {
        size: '3',
        adaption: 3
    },
    {
        size: '6',
        adaption: 5
    },
    {
        size: '12',
        adaption: 10
    },

]


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

let basePrice = rolls[rollType].basePrice;

console.log(document.querySelector('.item-img'));

document.querySelector('.item-img img').setAttribute('src', `products/${rolls[rollType].imageFile}`);
document.querySelector('.product-name').innerText = `${rollType} Cinnamon Roll`;
document.title = `${rollType} Cinnamon Roll`;
displayPrice()

//add to cart
class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

let selectGlazing = document.querySelector('#glazingOption');
let selectSize = document.querySelector('#sizeOption');

function addToCart() {
    let rollGlazing = allGlaze[selectGlazing.selectedIndex];
    let packSize = allSize[selectSize.selectedIndex];
    cart.push(new Roll(rollType, rollGlazing, packSize, basePrice));
    console.log(cart);
}

selectGlazing.addEventListener('change', onSelectValueChange)
selectSize.addEventListener('change', onSelectValueChange)

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('hi');
    addToCart();
  })


