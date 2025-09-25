import ArrowBack from "@/components/ArrowBack";
import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
    const router = useRouter();

    return (

        <View style={styles.container}>

            <ArrowBack/>

            <Text style={styles.title}>Registre-se</Text>
            <Text style={styles.subtitle}>Crie sua conta para começar a organizar a data de validade dos seus alimentos.</Text>

            <View>
                <Text style={styles.textTitleInput}>Nome Completo</Text>
                <TextInput
                style={styles.input}
                autoCapitalize="words"

                />

                <Text style={styles.textTitleInput}>Email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"

                />

                <Text style={styles.textTitleInput}>Confirme seu email</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"

                />

                <Text style={styles.textTitleInput}>Senha</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                />

                <Text style={styles.textTitleInput}>Confirmar sua senha</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                />


            </View>

            <Pressable style={styles.button} onPress={() => router.push("/home" as Href)}>
                <Text style={styles.text}>Confirmar Registro</Text>
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
        marginBottom: 5,
    },
    button: {
        marginTop: 30,
        backgroundColor: "#bb2005ff",
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '95%',  
    },
    input: {
        height: 40,
        color: '#080808ff',
        fontSize: 15,
        borderColor: '#ccc',
        backgroundColor: '#ffffffff',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '95%',
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    }
});