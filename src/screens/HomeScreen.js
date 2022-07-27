import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RestrauntItem from '../components/RestaurantItem';
import { DataStore } from 'aws-amplify';
import { Restaurant } from '../models';

export default function HomeScreen() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        DataStore.query(Restaurant).then(setRestaurants);
    }, []);

    return (
        <View style={styles.container}>

            <FlatList
                data={restaurants}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <RestrauntItem restaurant={item} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    }
})
