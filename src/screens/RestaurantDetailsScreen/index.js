import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

import restaurants from '../../../assets/data/restaurants.json'
const restaurant = restaurants[0]


const RestaurantDetailsScreen = () => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image, }}
                style={styles.image} />
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>${restaurant.deliveryFee} {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
        </View>
    )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 4/3,
        // aspectRatio: 25 /12,
    },
})