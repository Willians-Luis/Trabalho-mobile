import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BtnPages = ({title, onPress, disabled = false, borderWidth = 2}) => {
    const btnStatus = 0
    const styles = StyleSheet.create({
        container: {
            borderWidth: borderWidth,
            borderRadius: 8,
            borderColor: disabled ? '#000' : '#fff',
            padding: 4,
        },
        text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: disabled ? '#000' : '#fff'
        }
    })
    
    return(
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BtnPages;