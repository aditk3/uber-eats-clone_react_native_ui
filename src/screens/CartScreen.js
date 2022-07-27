import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import CartItem from '../components/CartItem';
import { useCartContext } from '../contexts/CartContext';
import { useOrderContext } from '../contexts/OrderContext';


const CartScreen = () => {
    const navigation = useNavigation();

    const { restaurant, cartItems, subtotal, total, deliveryFee } = useCartContext();
    const { createOrder } = useOrderContext();

    const onCreateOrder = async () => {
        await createOrder();
        navigation.goBack();
    };

    if (!restaurant) {
        return (<ActivityIndicator size='large' style={{ flex: 1 }} />);
    }

    return (
        <View style={{ flex: 2 }}>
            <View style={styles.page}>
                <Ionicons
                    name="arrow-back"
                    size={30}
                    color="black"
                    suppressHighlighting={true}
                    onPress={() => navigation.goBack()}
                    style={{ paddingVertical: 20 }} />

                <Text style={styles.name}>{restaurant.name}</Text>

                <Text style={[styles.yourItemsText, { paddingVertical: 10 }]}>Your items</Text>

                <FlatList
                    data={cartItems}
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 2, marginHorizontal: -20 }}
                    renderItem={({ item }) => (<CartItem dish={item} />)} />
            </View>

            <View style={{ backgroundColor: 'lightgrey', height: 1, margin: 15 }} />

            <View style={styles.totalsRow}>
                <Text style={styles.totalsText}>Sub total:</Text>
                <Text style={{ marginLeft: 'auto', fontSize: 16 }}>${subtotal.toFixed(2)}</Text>
            </View>

            <View style={styles.totalsRow}>
                <Text style={styles.totalsText}>Delivery fee:</Text>
                <Text style={{ marginLeft: 'auto', fontSize: 16 }}>${deliveryFee.toFixed(2)}</Text>
            </View>

            <View style={styles.totalsRow}>
                <Text style={styles.totalsText}>Total:</Text>
                <Text style={{ marginLeft: 'auto', fontSize: 16 }}>
                    ${total.toFixed(2)}
                </Text>
            </View>

            <Pressable onPress={onCreateOrder} style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>
                    Next &#8226; ${total.toFixed(2)}
                </Text>
            </Pressable>
        </View>
    )
}

export default CartScreen

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
        marginVertical: 10
    },
    yourItemsText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#4d4d4d',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    quantityContainer: {
        backgroundColor: 'rgb(228,228,228)',
        paddingHorizontal: 10,
        marginRight: 10,
        borderRadius: 5,
        paddingVertical: 5,
    },
    totalsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    totalsText: {
        fontSize: 16,
        color: '#4d4d4d',
    },
    confirmButton: {
        backgroundColor: 'black',
        marginTop: 'auto',
        alignItems: 'center',
        padding: 20,
        marginTop: 10
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
})
