import ArrowBack from "@/components/ArrowBack";
import BarNavigation from "@/components/BarNavigation";
import { StyleSheet, Text, View } from "react-native";


export default function Profile() {
    return (
        <View style={styles.container}>
            <ArrowBack/>
            <Text>Em desenvolvimento</Text>
            <BarNavigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
    },
});