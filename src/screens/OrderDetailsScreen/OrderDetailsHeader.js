import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const OrderDetailsHeader = ({ order }) => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: order.Restaurant.image, }} style={styles.image} resizeMode='cover' />

            <View style={{ padding: 20 }}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>{order.status} &#8226; {order.createdAt} </Text>
                </View>

                <Text style={styles.yourOrderText}>Your Order</Text>
            </View>
        </View>
    )
}

export default OrderDetailsHeader
