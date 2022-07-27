import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";

import { Cart, CartItem } from "../models";
import { useAuthContext } from "./AuthContext";

const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
    const { dbUser } = useAuthContext();

    const [restaurant, setRestaurant] = useState(null);
    const [cart, setCart] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const deliveryFee = restaurant?.deliveryFee;
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.Dish.price * item.quantity, 0
    );
    const total = subtotal + deliveryFee;

    useEffect(() => {
        DataStore.query(Cart, b =>
            b.restaurantID('eq', restaurant?.id
            ).userID('eq', dbUser?.id)
        ).then((cart) => setCart(cart[0]));
    }, [dbUser, restaurant]);

    useEffect(() => {
        if (cart) {
            DataStore.query(CartItem, ci => ci.cartID('eq', cart.id)).then(setCartItems);
        }
    }, [cart]);

    const addDishToCart = async (dish, quantity) => {
        // Get the Cart from the database or create a new one
        let theCart = cart || await createNewCart();

        // Create a CartItem and save to the DataStore
        const newDish = await DataStore.save(
            new CartItem({
                quantity,
                Dish: dish,
                cartID: theCart.id
            })
        );

        // Update the cartItems array
        setCartItems([...cartItems, newDish])
    };

    const createNewCart = async () => {
        const newCart = await DataStore.save(
            new Cart({
                restaurantID: restaurant.id,
                userID: dbUser.id,
            })
        );

        setCart(newCart);
        return newCart;
    };

    return (
        <CartContext.Provider value={{
            addDishToCart,
            setRestaurant,
            cart,
            cartItems,
            restaurant,
            subtotal,
            total,
            deliveryFee
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

export const useCartContext = () => useContext(CartContext);
