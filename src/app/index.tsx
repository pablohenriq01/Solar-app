import { Href, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Solar dos Unidos</Text>

            <TextInput
                style ={styles.input}
                placeholder="Digite seu email ou nome de usuario"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <TextInput
                style ={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Pressable style={styles.button} onPress={() => alert('Pressed Login')}>
                <Text style={styles.text}>Login</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.register]} onPress={() => router.push("/register" as Href)}>
                <Text style={styles.text}>Registre-se</Text>
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
    button: {
        backgroundColor: "#19c709ff",
        paddingVertical: 9,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 5,
    },
    register: {
        backgroundColor: "#0044ffff", 
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#ec7676ff',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '70%',
        textAlign: 'center',
    }
})