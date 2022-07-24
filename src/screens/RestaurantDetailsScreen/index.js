import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, View } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import MenuItem from '../../components/MenuItem'
import RestaurantHeader from './header'
import styles from './styles'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant}/>}
                data={restaurant.dishes}
                renderItem={({ item }) => (
                    <MenuItem dish={item} />
                )}
            />

            <Ionicons
                name='arrow-back-circle'
                size={45}
                color='white'
                style={{
                    position: 'absolute',
                    top: 40,
                    left: 10,
                }} />
        </View>
    )
}

export default RestaurantDetailsScreen
