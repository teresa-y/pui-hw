let basePrice = 2.49;
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

//url stuff

let cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

basePrice = roll.basPrice;

console.log(document.querySelector('.item-img'));

document.querySelector('.item-img img').setAttribute('src', `products/${rolls[rollType].imageFile}`);
document.querySelector('.product-name').innerText = `${rollType} Cinnamon Roll`;

