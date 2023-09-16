import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Btn = ({title, onPress, bgColor = '#fff', borderColor = '#41999c',  textColor = '#41999c'}) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            backgroundColor: bgColor,
            padding: 8,
            borderRadius: 8,
            borderWidth: 2,
            borderColor: borderColor
        },
        text: {
            fontSize: 20,
            color: textColor,
            fontWeight: 'bold',
        }
    })

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}



export default Btn;