import { Auth, DataStore } from 'aws-amplify';
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from '@react-navigation/native';

import { useAuthContext } from '../contexts/AuthContext';
import { User } from '../models';

const Profile = () => {
    const navigation = useNavigation();

    const { sub, dbUser, setDbUser } = useAuthContext();

    const [name, setName] = useState(dbUser?.name || '');
    const [address, setAddress] = useState(dbUser?.address || '');
    const [lat, setLat] = useState((dbUser?.lat + '') || '');
    const [lng, setLng] = useState((dbUser?.lng + '') || '');

    const onSave = async () => {
        if (dbUser) {  // if user exists
            await updateUser();
            navigation.goBack();
        }
        else {
            await createUser();
        }
    };

    const updateUser = async () => {
        try {
            const user = DataStore.save(
                User.copyOf(dbUser, (updated) => {
                    updated.name = name;
                    updated.address = address;
                    updated.lat = parseFloat(lat),
                        updated.lng = parseFloat(lng)
                })
            );

            setDbUser(user);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const createUser = async () => {
        try {
            const user = await DataStore.save(new User({
                name,
                address,
                lat: parseFloat(lat),
                lng: parseFloat(lng),
                sub
            }));

            setDbUser(user);
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    return (
        <SafeAreaView >
            <Text style={[tw`font-600 pt-6 pb-5`, { fontSize: 30, textAlign: 'center' }]}>Profile</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                style={styles.input}
            />

            <TextInput
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
                style={styles.input}
            />

            <TextInput
                value={lat}
                onChangeText={setLat}
                placeholder="Latitude"
                style={styles.input}
                keyboardType="numeric"
            />
            <TextInput
                value={lng}
                onChangeText={setLng}
                placeholder="Longitude"
                style={styles.input}
            />

            <Button onPress={onSave} title="Save" />

            <Text
                style={[tw`text-red-600`, { fontSize: 18, textAlign: 'center', margin: 10 }]}
                onPress={() => Auth.signOut()}
                suppressHighlighting={true}>
                Sign out
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    input: {
        margin: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
    },
});

export default Profile;
