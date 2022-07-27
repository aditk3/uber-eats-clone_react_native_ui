import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Auth } from 'aws-amplify';

import tw from "twrnc";

const Profile = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState("0");
    const [lng, setLng] = useState("0");

    const onSave = () => { };

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
