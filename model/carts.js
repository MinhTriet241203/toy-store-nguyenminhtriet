let cart = null;


module.exports = class Cart{

    constructor(productID, quantity , name, image, price) {
        this.productID = productID;
        this.quantity = quantity;
        this.name = name;
        this.image = image;
        this.price = price;
    }

    static save(product){
        if (cart === null) {
            cart = { products: [], totalPrice: 0 };
        }
            cart.products.push(product);
            //const strProduct = JSON.stringify(product);
            //console.log("find Product to add to cart: " + product);

            //JSON.stringify to show object array
            const str = JSON.stringify(cart);
            console.log("Products add cart: " + str);
        

        // cart.totalPrice += product.price;
    }
    static getCart(){
        return cart;
    }
    static checkout(){

    }
}