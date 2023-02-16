let basePrice = 2.49;
let glazingPrice = 0;
let sizePrice = 1;

function displayPrice() {
    let priceElement = document.querySelector('#item-price');
    console.log(priceElement);
    priceElement.innerHTML = '$' + (basePrice + glazingPrice) * sizePrice
  }

function glazingChange(element){
    let priceChange = parseFloat(element.value);
    glazingPrice = priceChange
    displayPrice()
}

function sizeChange(element){
    let priceChange = parseFloat(element.value);
    sizePrice = priceChange;
    displayPrice()
}