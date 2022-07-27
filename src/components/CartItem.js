import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CartItem = ({ dish }) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text>1</Text>
            </View>

            <Text style={[styles.name, { fontSize: 16 }]} numberOfLines={1}>
                {dish.name}
            </Text>

            <Text style={{ marginLeft: 'auto', fontSize: 16 }}>${dish.price.toFixed(2)}</Text>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 20
    },
    name: {
        fontSize: 18,
        fontWeight: '700',
        color: '#4d4d4d',
    },
    quantityContainer: {
        backgroundColor: 'rgb(228,228,228)',
        paddingHorizontal: 10,
        marginRight: 10,
        borderRadius: 5,
        paddingVertical: 5,
    }
})
