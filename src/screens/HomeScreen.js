import { FlatList, View, StyleSheet } from 'react-native';
import RestrauntItem from '../components/RestaurantItem';

import restaurants from '../../assets/data/restaurants.json';

export default function HomeScreen() {
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
        marginHorizontal: 10,
        paddingTop:35
    }
})
