import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BtnPages = ({title, onPress, btnStatus = true}) => {

    const styles = StyleSheet.create({
        container: {
            borderWidth: 2,
            borderRadius: 8,
            borderColor: btnStatus ? '#fff' : '#000',
            padding: 4,
        },
        text: {
            fontSize: 20,
            color: btnStatus ? '#fff' : '#000'
        }
    })
    
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={btnStatus ? 0 : 1 }>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BtnPages;