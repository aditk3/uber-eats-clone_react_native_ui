import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { useCartContext } from '../contexts/CartContext';
import { Dish } from '../models';

const MenuItemDetailedScreen = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const id = route.params?.id;

    const { addDishToCart } = useCartContext();

    const [dish, setDish] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!id) return;

        DataStore.query(Dish, id).then(setDish);
    }, [id]);

    if (!dish) {
        return (<ActivityIndicator size='large' style={{ flex: 1 }} />);
    }

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const onPlus = () => {
        setQuantity(quantity + 1);
    }

    const calculateTotal = () => {
        return quantity * dish.price;
    }

    const onAddToCart = async () => {
        await addDishToCart(dish, quantity);
        navigation.goBack();
    }

    return (
        <View style={{ flex: 2 }}>
            <View style={styles.page}>
                <Ionicons
                    name="arrow-back"
                    size={30}
                    color="black"
                    onPress={() => navigation.goBack()}
                    suppressHighlighting={true}
                    style={{ paddingVertical: 20 }} />

                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}>{dish.description}</Text>

                <View style={{ backgroundColor: 'lightgrey', height: 1, marginVertical: 20 }} />

                <View style={styles.row}>
                    <AntDesign name='minuscircleo' size={60} color='black' onPress={onMinus} suppressHighlighting={true} />
                    <Text style={styles.quantity}>{quantity}</Text>
                    <AntDesign name='pluscircleo' size={60} color='black' onPress={onPlus} suppressHighlighting={true} />
                </View>

            </View>

            <Pressable onPress={onAddToCart} style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>
                    Add {quantity} to basket &#8226; ${calculateTotal().toFixed(2)}
                </Text>
            </Pressable>
        </View>
    )
}

export default MenuItemDetailedScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        padding: 20
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 15
    },
    description: {
        color: 'grey',
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    confirmButton: {
        backgroundColor: 'black',
        marginTop: 'auto',
        alignItems: 'center',
        paddingVertical: 20,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
})
