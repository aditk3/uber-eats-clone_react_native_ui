import { FontAwesome5, Foundation, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import MenuItemDetailedScreen from '../screens/MenuItemDetailedScreen';
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from "../screens/ProfileScreen";
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import { useAuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const { dbUser } = useAuthContext();

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            {dbUser ? (
                <Stack.Screen
                    name="HomeTabs"
                    component={HomeTabs}
                />) : (

                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                />)}
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black' }} >
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
                component={ProfileScreen}
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
            <HomeStack.Screen name="Restaurants" component={HomeScreen} options={{ headerShown: true }} />
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
            <OrdersStack.Screen name="Orders_Stack" component={OrdersScreen} />
            <OrdersStack.Screen name="Order" component={OrderDetailsScreen} />
        </OrdersStack.Navigator>
    )
}

export default RootNavigator;
