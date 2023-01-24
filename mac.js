document.getElementById('memory-plus').addEventListener('click', function() {
   
    const extraMemoryCost = document.getElementById('memory-cost');
    const memoryPrice = extraMemoryCost.innerText = 180;
    myFunction(total)
    
    
    
})
document.getElementById('memory-minus').addEventListener('click', function() {
   
    const extraMemoryCost = document.getElementById('memory-cost');
    const memoryPrice = extraMemoryCost.innerText = 0; 
    myFunction(total) 
   
})

document.getElementById('storage-minus').addEventListener('click', function () {
  
    const extraStorage = document.getElementById('storage-cost');
    const storagePrice = extraStorage.innerText = 0;
    // extraStorage.innerText = storagePrice + 100;
    myFunction(total)
})
document.getElementById('storage-plus').addEventListener('click', function () {
    const extraStorage = document.getElementById('storage-cost');
    const storagePrice = extraStorage.innerText = 100;
    // extraStorage.innerText = parseInt(storagePrice + (180));
    myFunction(total)
})
document.getElementById('storage-big').addEventListener('click', function () {
    const extraStorage = document.getElementById('storage-cost');
    const storagePrice = extraStorage.innerText = 180;
    // extraStorage.innerText = parseInt(storagePrice + (180));
    myFunction(total)
})



document.getElementById('delivery-free').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryPrice = deliveryCost.innerText = 0;
    // deliveryCost.innerText = dseliveryPrice + 20;
   myFunction(total)
})

document.getElementById('delivery-charge').addEventListener('click', function () {
    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryPrice = deliveryCost.innerText = 20;
    
    // totalPrice.innerText = memoryPrice + storagePrice + dseliveryPrice;
    myFunction(total)
})

function myFunction(total) {
    const memoryPrice = document.getElementById('memory-cost');
    const storagePrice = document.getElementById('storage-cost');
    const deliveryPrice = document.getElementById('delivery-cost');
    const totalPrice = memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = total;
     
}



