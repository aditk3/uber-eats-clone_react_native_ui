import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import RestrauntItem from '../components/RestaurantItem';
import { Restaurant } from '../models';

export default function HomeScreen() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        DataStore.query(Restaurant).then(setRestaurants);
    }, []);

    if (!restaurants) {
        return (<ActivityIndicator size='large' style={{ flex: 1 }} />);
    }

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
