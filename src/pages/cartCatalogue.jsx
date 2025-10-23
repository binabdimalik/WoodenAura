import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import Button from "../components/button";


function CartCatalogue() {
    const [view, setView] = useState('catalogue'); //  controls which screen to show; 'catalogue' or 'cart'
    const [products, setProducts] = useState([]); // holds the list of furniture from the server
    const [cart, setCart] = useState([]);  // holds the items the user added

     // This section loads product data from the server
    useEffect(() => {
        fetch('https://localhost:3001/prodects')
        .then(res => res.json())
        .tehn(data => setProducts(data));
    }, []);   // this runs once when the page reloads.....it fetches products data from the db.json server

    // This section adds items to the cart
    const addToCart = (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));   // if the product is already in the cart, increase its quantity
        } else {
            setCart([...cart, {...product, quantity: 1 }]);
        } // if it's new , add it with quantity 1
    };

    //this section removes items from the cart
    const removeFromCart = (id  => {
        setCart(cart.filter(item => item.id !== id));
    });  // This removes an item from the cart by its id
    
    // This section calculates total cost
    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); // adds up the price of all items in the cart

    // this section shows the catalogue view
    const renderCatalogue = () => (
        <div>
            <h2>Furniture Catalogue</h2>
            {products.map(product => (
                <productCard key={product.id} {...product} onAddToCart={() => addToCart(product)} />
            ))} 
        </div> // this loops through all products and shows them using productCard and  each card has an "Add to cart" button
    );

    // this section shows the cart view
    const renderCart = () => (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? <p>No items in the cart.</p> : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} width="100" />
                            <p>{item.name} - KES {item.price} * {item.quantity}</p> {/** shows each item in the cart with quantity */}
                            <button label="Remove" onClick={() => removeFromCart(item.id)} />  {/** shows remove button */}
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: KES {totalCost}</h3> {/** shows total cost */}
            <button label="Checkout" onClick={() => alert('Proceeciding to payment...')} /> {/** shows checkout button */}
        </div>
    );
  return (
    <div>
        <Button label={view === 'catalogue' ? 'Go to Cart' : 'Back to Catalogue'} onClick={() => setView(view === 'catalogue' ? 'cart': 'catalogue')} />
        {view === 'catalogue' ? renderCatalogue() : renderCart()}
    </div>
  )
}


export default  CartCatalogue;