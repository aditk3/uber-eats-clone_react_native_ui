import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const RestaurantHeader = ({ restaurant }) => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image, }} style={styles.image} resizeMode='cover' />

            <View style={{ padding: 20 }}>
                <Text style={styles.title}>{restaurant.name}</Text>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>$ &#8226; </Text>

                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <Entypo name="star" size={16} color="#rgb(253, 197, 56)" />
                        <Text style={styles.subtitle}>{restaurant.rating}</Text>
                    </View>
                </View>

            </View>

            <View style={{ backgroundColor: '#b1aeae', height: 1.5 }} />

            <Text style={styles.menuText}>Menu</Text>
        </View>
    )
}

export default RestaurantHeader
