import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { useOrderContext } from "../contexts/OrderContext";
import CartItem from "../components/CartItem";

const OrderDetailsHeader = ({ order }) => {
    return (
        <View>
            <Image
                source={{ uri: order.Restaurant.image.startsWith('http') ? order.Restaurant.image : DEFAULT_IMAGE }}
                style={styles.image} resizeMode='cover' />

            <View style={{ padding: 20 }}>
                <Text style={styles.title}>{order.Restaurant.name}</Text>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>{order.status} &#8226; {order.createdAt} </Text>
                </View>

                <Text style={[styles.yourOrderText, { marginBottom: -10 }]}>Your Order</Text>
            </View>
        </View>
    );
};

const OrderDetails = () => {
    const navigation = useNavigation();
    const [order, setOrder] = useState();

    const { getOrder } = useOrderContext();

    const route = useRoute();
    const id = route.params?.id;

    useEffect(() => {
        getOrder(id).then(setOrder);
    }, []);

    if (!order) {
        return <ActivityIndicator size={"large"} />;
    }

    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
                data={order.dishes}
                renderItem={({ item }) => <CartItem dish={item} />}
            />

            <View style={{ backgroundColor: 'lightgrey', height: 1, marginHorizontal:15 }} />

            <View style={styles.totalsRow}>
                <Text style={styles.totalsText}>Total:</Text>
                <Text style={{ marginLeft: 'auto', fontSize: 16 }}>
                    ${order.total.toFixed(2)}
                </Text>
            </View>

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
    );
};

export default OrderDetails;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 4,
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        marginVertical: 10,
        fontSize: 16,
        color: '#686767',
        fontWeight: '600',
    },
    yourOrderText: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 0,
    },
    iconContainer: {
        position: "absolute",
        top: 40,
        left: 10,
    },
    totalsRow: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        // padding: 10,
        margin: 20
    },
    totalsText: {
        fontSize: 16,
        color: '#4d4d4d',
    },
});
