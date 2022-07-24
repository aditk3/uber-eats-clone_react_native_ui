import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc'

const OrderItem = ({ order }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <Image
                    source={{ uri: order.Restaurant.image }}
                    style={{ width: 75, height: 75, marginRight: 10 }}
                />

                <View style={{ justifyContent: 'center' }}>
                    <Text style={[tw`font-600`, { fontSize: 18 }]}>
                        {order.Restaurant.name}
                    </Text>
                    <Text style={tw`text-gray-500 mt-1 mb-1`}>2 items &#8226; $35.85</Text>
                    <Text style={tw`text-gray-500`}>{order.createdAt} &#8226; {order.status}</Text>
                </View>
            </View>

            <View style={{ backgroundColor: 'lightgrey', height: 1, margin:10 }} />
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({})