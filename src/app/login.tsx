import { Href, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()}>
                <Text style={styles.arrowBack}>←</Text>
            </Pressable>
            <Text style={styles.title}>Entrar</Text>
            <Text style={styles.subtitle}>Bem-vindo de volta! Por favor, logue com o email para entrar no aplicativo.</Text>

            <View style={styles.inputContainer}>

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
    arrowBack: {
        fontSize: 50,
        paddingLeft: 20,
        marginBottom: 20,
        fontFamily: "Inter",
        fontWeight: "bold",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingBottom: 20,
    },
    subtitle: {
        color: "#555",
        fontSize: 16,
        paddingLeft: 20,
        paddingBottom: 30,
    },
    container: {
        flex: 1,
    },

    inputContainer: {
        
    },
    
    textTitleInput: {
        paddingLeft: 20,
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
        marginLeft: 20,
        color: '#080808ff',
        fontSize: 15,
        borderColor: '#ccc',
        backgroundColor: '#ffffffff',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 40,
        width: '90%',
    },
    button: {
        marginTop: 110,
        backgroundColor: "#bb2005ff",
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginLeft: 20,
        width: '90%',  
    },
})