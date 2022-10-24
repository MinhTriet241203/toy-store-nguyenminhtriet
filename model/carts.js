let cart = null;


module.exports = class Cart{

    constructor(productID, quantity , name, image, price, total) {
        this.productID = productID;
        this.quantity = quantity;
        this.name = name;
        this.image = image;
        this.price = price;
        this.total = total;
    }

    static save(product){
        // Cart.foreach( cart.products => {
        //     console.log("122");
        // });

        // let getCart = await Cart.getCart({});


        if (cart === null) {
            cart = { products: [], totalPrice: 0 };
        }
            cart.totalPrice = 0;
            cart.products.push(product);
            //const strProduct = JSON.stringify(product);
            //console.log("find Product to add to cart: " + product);

            //JSON.stringify to show object array
            const str = JSON.stringify(cart);
            console.log("Products add cart: " + str);
        
            let counter = 0;
            for (let i = 0; i < cart.products.length; i++) {
                cart.totalPrice += cart.products[i].total;
                counter++;
            }

            console.log('Counter: ' + counter);
           
            console.log("total 1: " + cart.totalPrice);
            console.log("total 2: " + cart.products[0].total);
    }
    static getCart(){
        return cart;
    }
    static checkout(){

    }
}