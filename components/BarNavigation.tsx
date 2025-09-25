// Bar.js
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

export default function BarNavigation() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('home' as never)}>
                <Image source={require('@/assets/images/home-image.png')}
                    style={[styles.image, route.name === "home" && {backgroundColor : "black" ,tintColor : "white"}]} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('register-product' as never)}>
                <Image  source={require('@/assets/images/clipboard-image.png')}
                    style={[styles.image, route.name === "register-product" && {backgroundColor : "black" ,tintColor : "white"}]} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate('profile' as never)}>
                <Image source={require('@/assets/images/profile-image.png')}
                    style={[styles.image, route.name === "profile" && {backgroundColor : "black" ,tintColor : "white"}]} />
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
        width: 66,
        height: 66,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 30,
        resizeMode: 'cover',
        
    },
});
