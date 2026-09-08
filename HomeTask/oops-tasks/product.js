// 3. Create a Product class with:
//  - Properties: id, name, price, stock
//  - Method: updatePrice(newPrice) - validates price > 0
//  - Method: updateStock(quantity) - adds or removes stock
//  - Method: isAvailable() - returns true if stock > 0
//  - Method: getValue() - returns total value (price * stock)

//  Create a product and perform operations:
//  1. Create a product (P101, "Laptop", 800, 10)
//  2. Update price to 750
//  3. Reduce stock by 3
//  4. Check if available
//  5. Display total value

//  Expected Output:
//  Price updated: 800 → 750
//  Stock: 7
//  Available: true
//  Total value: 5250

class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    updatePrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
            console.log(`Price updated : ${this.price}, for the product ${this.name}`)
        } else {
            console.log("Invalid price");
        }
    }

    updateStock(quantity) {
        this.stock += quantity;
        console.log(`Stock updated: ${this.stock}`);
    }

    isAvailable() {
        return this.stock > 0;
    }

    getValue() {
        return this.price * this.stock;
    }
}

let product1 = new Product("P101", "Laptop", 800, 10);
product1.updateStock(10);
product1.updatePrice(1000);
console.log(`Product available : ${product1.isAvailable()}`);
console.log(`Total value of the product : ${product1.getValue()}`);
