import { createContext, useEffect, useState, useContext } from "react";
import { DataStore } from "aws-amplify";

import { Order, OrderItem, Cart } from "../models";
import { useAuthContext } from "./AuthContext";
import { useCartContext } from "./CartContext";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
    const { dbUser } = useAuthContext();
    const { restaurant, total, cartItems, cart } = useCartContext();

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        DataStore.query(Order, (o) => o.userID("eq", dbUser?.id)).then(setOrders);
    }, [dbUser]);

    const createOrder = async () => {
        // create the order
        const newOrder = await DataStore.save(new Order({
            userID: dbUser?.id,
            Restaurant: restaurant,
            status: 'NEW',
            total: total
        }))

        // add all the cart items to order
        await Promise.all(cartItems.map((cartItem) =>
            DataStore.save(
                new OrderItem({
                    quantity: cartItem.quantity,
                    orderID: newOrder.id,
                    Dish: cartItem.Dish
                })
            )
        ));

        // delete the cart
        await DataStore.delete(cart);

        setOrders([...orders, newOrder]);
    };

    const getOrder = async (id) => {
        const order = await DataStore.query(Order, id);
        const orderDishes = await DataStore.query(OrderItem, (oi) => oi.orderID('eq', id));

        return { ...order, dishes: orderDishes };
    };

    return (
        <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
