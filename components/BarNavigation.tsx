// Bar.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export default function BarNavigation() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('home' as never)}>
                <Image source={require('@/assets/images/home-image.png')}
                    style={styles.image} />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('register-product' as never)}>
                <Image source={require('@/assets/images/prancheta-image.png')}
                    style={styles.image} />
            </Pressable>
            <Pressable> 
                <Image source={require('@/assets/images/profile-image.png')}
                    style={styles.image} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: '105.5%',
        borderColor: '#535353ff',
        borderWidth: 2,
        height: 70,
        borderRadius: 35,
        position: "absolute",
        bottom: 10,
        zIndex: 100,
    },
    image: {
        width: 60,
        height: 60,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 50,
        resizeMode: 'cover',
    },
});
