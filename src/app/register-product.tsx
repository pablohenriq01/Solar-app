import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterProduct() {
    const router = useRouter();
    const [expirationDate, setExpirationDate] = React.useState(new Date());

    const onChangeDate = (event: any, selectedDate: Date | undefined) => {
        setExpirationDate(selectedDate || expirationDate);
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonBack} onPress={() => router.back()}>
                <Text style={styles.text}>Voltar</Text>
            </Pressable>

            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                autoCapitalize="words"
            />

            <TextInput
                style={styles.input}
                placeholder="Descrição do Produto"
                autoCapitalize="sentences"
            />

            <View style={styles.datePickerContainer}>
                <Text style={styles.text}>Data de Expiração</Text>
                <DateTimePicker
                    value={expirationDate}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                    style={styles.datePicker}
                />
            </View>

            <Pressable style={styles.button} onPress={() => router.push("/home")}>
                <Text style={styles.text}>Confirmar Registro</Text>
            </Pressable>
        </View>
    );
}

// Estilos...
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
    },
    datePickerContainer: {
        width: '70%',
        marginBottom: 10,
    },
    datePicker: {
        backgroundColor: '#949494ff',
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        marginTop: 10,
    },
});
