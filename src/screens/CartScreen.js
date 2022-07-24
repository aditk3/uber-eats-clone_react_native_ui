import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import restaurants from '../../assets/data/restaurants.json';
import CartItem from '../components/CartItem';
import Separator from '../components/Separator';

const restaurant = restaurants[1]

const CartScreen = () => {
    return (
        <View style={styles.page}>
            <Ionicons name="arrow-back" size={30} color="black" style={{ paddingVertical: 20 }} />

            <Text style={styles.name}>{restaurant.name}</Text>

            <Text style={[styles.yourItemsText, { paddingVertical: 10 }]}>Your items</Text>

            <FlatList
                data={restaurant.dishes}
                showsVerticalScrollIndicator={false}
                style={{ flex: 2 }}
                renderItem={({ item }) => (<CartItem dish={item} />)} />

            <Separator />

            <View style={styles.totalsRow}>
                <Text style={styles.totalsText}>Sub total:</Text>
                <Text style={{ marginLeft: 'auto', fontSize: 16 }}>$12.95</Text>
            </View>

            <View style={styles.totalsRow}>
                <Text style={styles.totalsText}>Total:</Text>
                <Text style={{ marginLeft: 'auto', fontSize: 16 }}>$12.95</Text>
            </View>

            <View style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>
                    Next &#8226; $12
                </Text>
            </View>

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
        paddingVertical: 7,
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
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
})
