import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const DEFAULT_IMAGE = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant3.jpeg';

const RestrauntItem = ({ restaurant }) => {

    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Restaurant', { id: restaurant.id });
    }

    return (
        <Pressable onPress={handlePress} style={styles.restaurantContainer}>
            <Image
                source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE }}
                style={styles.image}
            />

            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>

                    <Text style={styles.subtitle}>
                        ${restaurant.deliveryFee.toFixed(2)} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
                    </Text>
                </View>

                <View style={styles.rating}>
                    <Text style={{ color: 'white' }}>{restaurant.rating.toFixed(1)}</Text>
                </View>
            </View>

        </Pressable>
    )
}

export default RestrauntItem

const styles = StyleSheet.create({
    restaurantContainer: {
        width: '100%',
        marginVertical: 5,
        backgroundColor: '#9797972a',
        borderRadius: 10,
        padding: 6,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
    },
    subtitle: {
        color: 'grey',
        fontSize: 14,
    },
    rating: {
        marginLeft: 'auto',
        padding: 5,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#282828',
    },
})
