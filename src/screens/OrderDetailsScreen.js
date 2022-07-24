import React from 'react'
import { FlatList, View } from 'react-native'

import orders from '../../assets/data/orders.json'
import restaurants from '../../assets/data/restaurants.json'
import CartItem from '../components/CartItem'
import OrderDetailsHeader from './OrderDetailsScreen/header'

const order = orders[0]
const restaurant = restaurants[0]

const OrderDetailsScreen = () => {
    return (
        <View>
            <FlatList
                data={restaurant.dishes}
                ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (<CartItem dish={item} />)} />
        </View>
    )
}

export default OrderDetailsScreen
