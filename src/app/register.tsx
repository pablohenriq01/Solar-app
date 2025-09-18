import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Register() {
    const router = useRouter();

    return (

        <View style={styles.container}>
            <Pressable style={styles.buttonBack} onPress={() => router.back()}>
                <Text style={styles.text}>Voltar</Text>
            </Pressable>

            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                autoCapitalize="words"

            />

            <TextInput
                style={styles.input}
                placeholder="Nome de Usuario"
                autoCapitalize="words"
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"

            />

            <TextInput
                style={styles.input}
                placeholder="Confirme seu Email"
                keyboardType="email-address"

            />

            <TextInput
                style={styles.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Confirme sua Senha"
                secureTextEntry
            />



            <Pressable style={styles.button} onPress={() => alert('Pressed Confirmar Registro')}>
                <Text style={styles.text}>Confirmar Registro</Text>
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
    button: {
        backgroundColor: "#19c709ff",
        paddingVertical: 9,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 5,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        backgroundColor: '#949494ff',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '70%',
        textAlign: 'center',
    },
    
    buttonBack: {
        backgroundColor: "#000000ff",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 20,
        position: 'absolute',
        top: "0%",
        left: "0%",
    }

});