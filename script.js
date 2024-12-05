class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Shopping {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    calculatePrice() {
        return this.product.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.cartItems = [];
    }

    addItem(item) {
        this.cartItems.push(item);
    }

    total() {
        return this.cartItems.reduce((total, item) => total + item.calculatePrice(), 0);
    }

    removeItem(Id) {
        const i = this.cartItems.findIndex(item => item.product.id === Id);
        if (i !== -1) {
            this.cartItems.splice(index, 1);
        } else {
            console.log("Item not found in the cart.");
        }
    }
    displayItems() {
        this.cartItems.forEach((elt,i)=>console.log((`${i+1}/${elt.product.name} | ${elt.product.price} - ${elt.quantity}`))); 
    }
}
// Créer des produits
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Smartphone", 700);
const product3 = new Product(3, "Headphones", 100);

// Créer des articles dans le panier
const shopping1 = new Shopping(product1, 2); // 2 Laptops
const shopping2 = new Shopping(product2, 1); // 1 Smartphone
const shopping3 = new Shopping(product3, 3); // 3 Headphones

// Créer un panier
const cart = new Cart();

// Ajouter des articles dans le panier
cart.addItem(shopping1);
cart.addItem(shopping2);
cart.addItem(shopping3);

// Afficher les articles dans le panier
console.log("Items in the cart:");
cart.displayItems();

// Calculer et afficher le total du panier
console.log(`Total price: ${cart.total()}`);

// Supprimer un article du panier
console.log("Removing item with ID 2 (Smartphone)");
cart.removeItem(2);

// Afficher les articles après suppression
console.log("Items in the cart after removal:");
cart.displayItems();

// Afficher le nouveau total
console.log(`Total price after removal: ${cart.total()}`);
