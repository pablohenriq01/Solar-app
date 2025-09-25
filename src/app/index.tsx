import { Href, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/logoSolar.png')}/>
            <Text style={styles.title}>Faça login ou crie sua conta</Text>
            <Text style={styles.subtitle}>Organize a data de validade dos seus alimentos aqui!</Text>

            <Pressable style={styles.button} onPress={() => router.push("/login" as Href)}>
                <Text style={styles.textLogin}>✉️ Faça o login com o seu email</Text>
            </Pressable>

            <Text>Não tem uma conta?
                <Pressable onPress={() => router.push("/register" as Href)}> 
                    <Text style={styles.register}> Registre-se</Text> 
                </Pressable> 
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 
    image: {
        width: 350,
        height: 190,
        marginBottom: 40,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitle: {
        color: "#555",
        fontSize: 16,
        paddingHorizontal: 20,
        marginBottom: 50,
    },
    button: {
        backgroundColor: "#bb2005ff",
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    textLogin: {
        color: "#fff",
        fontSize: 18,
    },
    register: {
        color: "#bb2005ff",
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: "underline",
    }

});