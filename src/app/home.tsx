import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => alert('Profile pressed!')}>
                <Image source={require('../../assets/images/profile-image.png')} 
                style={styles.profileImage}/>
            </Pressable>

            <Text style={styles.title}>Tela em desenvolvimento.</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    profileImage: {
        top: "-450%",
        right: "-40%",
        width: 50,
        height: 50,
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 50,
        marginBottom: 20,
        resizeMode: 'cover',
    }
});