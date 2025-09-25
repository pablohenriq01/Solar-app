import ArrowBack from "@/components/ArrowBack";
import { Href, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <ArrowBack/>

            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Bem-vindo de volta! Por favor, logue com o email para entrar no aplicativo.</Text>

            <View>

                <Text style={styles.textTitleInput}>Email</Text>
                <TextInput
                    style ={styles.input}
                    placeholder="seuemail@email.com"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={styles.textTitleInput}>Senha</Text>
                <TextInput
                    style ={styles.input}  
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                

            </View>

            <Pressable style={styles.button} onPress={() => router.push("/home" as Href)}>
                <Text style={styles.text}>Login</Text>
            </Pressable>

        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    subtitle: {
        color: "#555",
        fontSize: 16,
        paddingBottom: 30,
    },
    textTitleInput: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        height: 40,
        color: '#080808ff',
        fontSize: 15,
        borderColor: '#ccc',
        backgroundColor: '#ffffffff',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 40,
        width: '95%',
    },
    button: {
        marginTop: 110,
        backgroundColor: "#bb2005ff",
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '95%',  
    },
})