import ArrowBack from "@/components/ArrowBack";
import BarNavigation from "@/components/BarNavigation";
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

            <ArrowBack />
            <Text style={styles.title}>Registrar Produto</Text>
            <Text style={styles.subtitle}>Adicione um novo produto e sua data de validade.</Text>

            <Text style={styles.textTitleInput}>Nome</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="words"
            />

            <Text style={styles.textTitleInput}>Descrição</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="sentences"
            />

            <Text style={styles.textTitleInput}>Data de Validade</Text>
            <DateTimePicker
                value={expirationDate}
                mode="date"
                display="default"
                onChange={onChangeDate}
                style={styles.datePicker}
            />


            <Pressable style={styles.button} onPress={() => router.push("/home")}>
                <Text style={styles.text}>Confirmar Registro</Text>
            </Pressable>

            <BarNavigation/>
        </View>
    );
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
    button: {
        marginTop: 110,
        backgroundColor: "#bb2005ff",
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '95%',
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    textTitleInput: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
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

    datePicker: {
        backgroundColor: '#949494ff',
        marginBottom: 20,
        width: '90%',}
        ,
});
