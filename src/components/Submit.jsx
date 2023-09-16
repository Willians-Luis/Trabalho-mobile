import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Submit = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <Text style={style.text}>Login</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        width: 350,
        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    }
})
export default Submit;