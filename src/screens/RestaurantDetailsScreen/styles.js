import { StyleSheet } from "react-native";

export default StyleSheet.create({
    page: {
        flex: 1
    },
    image: {
        width: '100%',
        aspectRatio: 25 / 12,
    }, 
    backIcon: {
        position: 'absolute',
        top: 51,
        left: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        paddingBottom: 7,
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#686767',
        fontWeight: '600',
    },
    menuText: {
        paddingTop: 20,
        paddingHorizontal: 20,
        fontWeight: '600',
        fontSize: 18,
        color: '#686767'
    },
    confirmButton: {
        backgroundColor: 'black',
        marginTop: 'auto',
        alignItems: 'center',
        padding: 20,
    },
    confirmButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
})