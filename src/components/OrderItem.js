import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

const OrderItem = ({ order }) => {
    const navigation = useNavigation();

    if (!order) {
        return (<ActivityIndicator size='large' style={{ flex: 1 }} />);
    }

    return (
        <Pressable onPress={() => navigation.navigate("Order", { id: order.id })}>
            <View style={{ flexDirection: 'row', margin: 10, marginHorizontal: 20 }}>
                <Image
                    source={{ uri: order.Restaurant.image }}
                    style={{ width: 75, height: 75, marginRight: 10, borderRadius: 3 }}
                />

                <View style={{ justifyContent: 'center' }}>
                    <Text style={[tw`font-600`, { fontSize: 18 }]}>
                        {order.Restaurant.name}
                    </Text>

                    <Text style={tw`text-gray-500 mt-1 mb-1`}>{order.Restaurant.address} &#8226; ${order.total.toFixed(2)}</Text>
                    <Text style={tw`text-gray-500`}>{order.createdAt} &#8226; {order.status}</Text>
                </View>
            </View>

            <View style={{ backgroundColor: 'lightgrey', height: 1, margin: 10, marginHorizontal: 20 }} />
        </Pressable>
    )
}

export default OrderItem

const styles = StyleSheet.create({})