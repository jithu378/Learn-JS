// 3.A supermarket stores item prices in an array.

// [150,250,100,300,200]

// Write a function to
// Find the total bill.
// Find the highest-priced item.
// Find the lowest-priced item.

let price = [150,250,100,300,200];

function bill(Price){
    let total = 0;
    for(let value of Price){
        total += value;
    }
    return total;
}

function highestPrice(Price){
    let high = Price[0];
    for(let value of Price){
        if(value > high){
        high = value;
        }
    }
    return high;
}

function lowestPrice(Price){
    let low = Price[0];
    for(let value of Price){
        if(value < low){
        low = value;
        }
    }
    return low;
}

let Bill = bill(price);
let HighPrice = highestPrice(price)
let LowPrice = lowestPrice(price)
console.log(`Total price of items is ${Bill}`)
console.log(`Highest priced item is  ${HighPrice}`)
console.log(`Lowest priced item is  ${LowPrice}`)