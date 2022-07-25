import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import OrdersScreen from '../screens/OrdersScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import MenuItemDetailedScreen from '../screens/MenuItemDetailedScreen';
import CartScreen from "../screens/CartScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
            />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: 'white' }} >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />
                }}
            />

            <Tab.Screen
                name="Orders"
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} />
                }}
            />

            <Tab.Screen
                name="Profile"
                component={OrdersScreen}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Restaurants" component={HomeScreen} />
            <HomeStack.Screen name="Restaurant" component={RestaurantDetailsScreen} />
            <HomeStack.Screen name="MenuItem" component={MenuItemDetailedScreen} />
            <HomeStack.Screen name="Cart" component={CartScreen} />
        </HomeStack.Navigator>
    )
}

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator screenOptions={{ headerShown: false }}>
            <OrdersStack.Screen name="Orders" component={OrdersScreen} />
            <OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
        </OrdersStack.Navigator>
    )
}

export default RootNavigator;