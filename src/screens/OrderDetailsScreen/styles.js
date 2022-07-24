import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 4,
    },
    // backIcon: {
    //     position: 'absolute',
    //     top: 40,
    //     left: 10,
    // },
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
        fontSize: 25,
        fontWeight: '600',
    }
})