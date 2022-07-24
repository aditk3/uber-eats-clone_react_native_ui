import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import RestrauntItem from '../components/RestaurantItem';

import restaurants from '../../assets/data/restaurants.json';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={restaurants}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <RestrauntItem restaurant={item} />
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    }
})
