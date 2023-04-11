import { getShoppingCart } from "../utilities/fakedb";

const carProductsLoader = async ()=> {
const loadedProducts = await fetch('jobData.json');
const products = await loadedProducts.json();

//  if cart data is in database, you save
const storedCart = getShoppingCart();
const saveCart = [];
for ( const id in storedCart){
    const addedProduct = products.find(pd=>pd.id===id);
    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct)
    }
}

// if you need to send two things
// return [products,saveCart];
// return {products,cart: saveCart}

return saveCart;

}
export default carProductsLoader;