import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { FlatList, View } from 'react-native'
import restaurants from '../../assets/data/restaurants.json'
import MenuItem from '../components/MenuItem'
import RestaurantHeader from './RestaurantDetailsScreen/header'
import styles from './RestaurantDetailsScreen/styles'
import { Ionicons } from '@expo/vector-icons'

const restaurant = restaurants[0]

const RestaurantDetailsScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const id = route.params?.id

    console.log(id)

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                data={restaurant.dishes}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <MenuItem dish={item} />
                )}
            />

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

export default RestaurantDetailsScreen
