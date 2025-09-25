import BarNavigation from "@/components/BarNavigation";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Home() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Sem produtos registrados.</Text>
            
            <BarNavigation/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    button: {
        marginTop: 110,
        backgroundColor: "#bb2005ff",
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '90%',
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 16
    },
});