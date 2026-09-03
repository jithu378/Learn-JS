// 4. Create two classes:
//  1. Item class: id, name, price, quantity
//  2. ShoppingCart class:
//     - Properties: items (array), totalAmount
//     - Methods:
//       * addItem(item)
//       * removeItem(id)
//       * updateQuantity(id, newQuantity)
//       * calculateTotal()
//       * displayCart()
//       * applyDiscount(percentage)

//  Perform operations:
//  1. Create 3 items
//  2. Add them to cart
//  3. Update quantity of one item
//  4. Remove one item
//  5. Calculate total with 10% discount
//  6. Display final cart


class Item{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class ShoppingCart{
    constructor(items,totalPrice){
        this.items = [];
        this.totalPrice = totalPrice
    }

    addCart(item){
        
    }
}