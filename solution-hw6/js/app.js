//glaze and size choice options

let glazingPrice = 0;
let sizePrice = 1;

let allGlaze = [
    {
        glazing:'Keep original',
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

class Roll {

    constructor(rollType, rollGlazing, packSize) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rolls[rollType].basePrice;

        const glazeObj = allGlaze.find(element => element.glazing == this.glazing);
        const sizeObj = allSize.find(element => element.size == this.size);    

        this.element = null;
        this.totalPrice = ((this.basePrice + glazeObj.adaption) * sizeObj.adaption).toFixed(2)
    }
}

let cart = [];
function saveToLocalStorage() {
    const cartString = JSON.stringify(cart);

    localStorage.setItem('storedItems', cartString);
  
    console.log(cartString)
  }

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedItems');
    const cartArray = JSON.parse(cartArrayString);
    console.log(cartArray);

    for (const item of cartArray) {
        const roll = new Roll(item.type, item.glazing, item.size)   
        cart.push(roll);
    
      }    

  }
  

if (localStorage.getItem('storeItems') != null) {
    retrieveFromLocalStorage();
  }



