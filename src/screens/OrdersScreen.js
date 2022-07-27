import React from 'react';
import { FlatList, Text, View } from 'react-native';
import tw from 'twrnc';

import { useOrderContext } from '../contexts/OrderContext';
import OrderItem from '../components/OrderItem';

const OrdersScreen = () => {
    const { orders } = useOrderContext();

    return (
        <View style={{ flex: 1, paddingTop: 70, width: '100%' }}>
            <Text style={[tw`font-600`, { fontSize: 30, textAlign: 'center' }]}>Your Orders</Text>

            <FlatList
                style={tw`mt-5`}
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<OrderItem order={item} />)}
            />
        </View>
    )
};

export default OrdersScreen;

