import React from 'react'
import { FlatList, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import orders from '../../assets/data/orders.json'
import restaurants from '../../assets/data/restaurants.json'
import CartItem from '../components/CartItem'
import OrderDetailsHeader from './OrderDetailsScreen/header'

const order = orders[0]
const restaurant = restaurants[0]

const OrderDetailsScreen = () => {
    const navigation = useNavigation()

    return (
        <View>
            <FlatList
                data={restaurant.dishes}
                ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (<CartItem dish={item} />)} />

            <Ionicons
                name='arrow-back-circle'
                size={45}
                color='white'
                suppressHighlighting={true}
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    top: 51,
                    left: 10,
                }} />
        </View>
    )
}

export default OrderDetailsScreen
