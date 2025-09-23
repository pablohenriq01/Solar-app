import { Href, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
    const router = useRouter();

    return (

        <View style={styles.container}>
            <Pressable onPress={() => router.back()}>
                <Text style={styles.arrowBack}>←</Text>
            </Pressable>
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

    },
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
    textTitleInput: {
        paddingLeft: 20,
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
    },
    button: {
        marginTop: 30,
        backgroundColor: "#bb2005ff",
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginLeft: 20,
        width: '90%',  
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
        marginBottom: 20,
        width: '90%',
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    }
});