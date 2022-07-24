import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

import orders from '../../assets/data/orders.json'
import OrderItem from '../components/OrderItem'

const OrdersScreen = () => {
    return (
        <View style={{ flex: 1, paddingTop: 70, width: '100%' }}>
            <Text style={[tw`font-600`, { fontSize: 30, textAlign:'center' }]}>Your Orders</Text>

            <FlatList
            style={tw`mt-5`}
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<OrderItem order={item} />)}
            />
        </View>
    )
}

export default OrdersScreen
