import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Btn = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#41999c'
    },
    text: {
        fontSize: 18,
        color: '#41999c',
    }
})

export default Btn;