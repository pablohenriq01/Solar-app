import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';


export default function ArrowBack() {
    const router = useRouter();
    return (
        <Pressable onPress={() => router.back()}>
            <Text style={styles.arrowBack}>←</Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    arrowBack: {
        fontSize: 50,
        marginBottom: 20,
        fontFamily: "Inter",
        fontWeight: "bold",
    }
});