import { AntDesign, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import restaurants from '../../assets/data/restaurants.json'
import Separator from '../components/Separator';
import { FlatList } from 'react-native-web';


const CartItem = () => {

    return (

        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>

            <Text style={[styles.yourItemsText, { fontSize: 16 }]}>
                name
            </Text>

            <Text style={{ marginLeft: 'auto', fontSize: 16 }}>$12</Text>
        </View>
    )
}

export default CartItem

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
        // width: 25,
        // height: 25,
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