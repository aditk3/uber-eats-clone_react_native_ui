// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { Order, OrderItem, Dish, Cart, CartItem, User, Restaurant } = initSchema(schema);

export {
  Order,
  OrderItem,
  Dish,
  Cart,
  CartItem,
  User,
  Restaurant,
  OrderStatus
};