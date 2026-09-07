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
        } else {
            console.log("Invalid price");
        }
    }

    updateStock(quantity) {
        this.stock += quantity;
    }

    isAvailable() {
        return this.stock > 0;
    }

    getValue() {
        return this.price * this.stock;
    }
}

let product = new Product("P101", "Laptop", 800, 10);

console.log(`Price: ${product.price}`);

product.updatePrice(750);
console.log(`Price updated: ${product.price}`);

product.updateStock(-3);

console.log("Stock:", product.stock);
console.log("Available:", product.isAvailable());
console.log("Total value:", product.getValue());