import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';

import MenuItem from '../components/MenuItem';
import { useCartContext } from '../contexts/CartContext';
import { Dish, Restaurant } from '../models';
import RestaurantHeader from './RestaurantDetailsScreen/RestaurantHeader';

import styles from './RestaurantDetailsScreen/styles';

const RestaurantDetailsScreen = () => {
    const [restaurant, setRestaurant] = useState(null);
    const [dishes, setDishes] = useState([]);

    const route = useRoute();
    const id = route.params?.id;

    const navigation = useNavigation();

    const { setRestaurant: setCartRestaurant, cart, cartItems } = useCartContext();

    useEffect(() => {
        if (!id) return;

        setCartRestaurant(null);

        DataStore.query(Restaurant, id).then(setRestaurant);
        DataStore.query(
            Dish,
            (dish) => dish.restaurantID('eq', id)
        ).then(setDishes);
    }, [id]);

    useEffect(() => {
        setCartRestaurant(restaurant);
    }, [restaurant]);

    if (!restaurant) {
        return (<ActivityIndicator size='large' style={{ flex: 1 }} />);
    }

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                data={dishes}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <MenuItem dish={item} />
                )}
            />

            <Ionicons
                name='arrow-back-circle'
                size={45}
                color='white'
                suppressHighlighting={true}
                onPress={() => navigation.goBack()}
                style={styles.backIcon} />

            {cart && (
                <Pressable
                    onPress={() => navigation.navigate("Cart")}
                    style={styles.confirmButton}
                >
                    <Text style={styles.confirmButtonText}>
                        View Cart &#8226; {cartItems.length} item{cartItems.length > 1 ? 's' : ''}
                    </Text>
                </Pressable>
            )}

        </View>
    )
}

export default RestaurantDetailsScreen
