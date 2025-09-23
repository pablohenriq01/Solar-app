import { Href, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => alert('Profile pressed!')}>
                <Image source={require('../../assets/images/profile-image.png')} 
                style={styles.profileImage}/>
            </Pressable>

            <Text style={styles.title}>Sem produtos registrados.</Text>
            
            <Pressable style={styles.button} onPress={() => router.push("/register-product" as Href)}>
                <Text style={styles.text}>Registrar produtos 🗒</Text>
            </Pressable>
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
    },
    button: {
        backgroundColor: "#0d8302ff",
        paddingVertical: 9,
        paddingHorizontal: 24,
        borderRadius: 8
    },
    text: {
        color: "#fff",
        fontSize: 16,}
});