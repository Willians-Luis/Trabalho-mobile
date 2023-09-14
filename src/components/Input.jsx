import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({onChangeText, value, placeholder, senha = false, showMessage = false, message}) => {

    return (
        <View>
            <TextInput
                style={style.container}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#fff'
                secureTextEntry = {senha}
            />
            {
                showMessage ? (
                    <View>
                        <Text style={style.text}>{message}</Text>
                    </View>
                ): <></>
            }
        </View>
        
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#072433',
        width: 350,
        height: 50,
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        padding: 10,
        color: '#fff'
    },
    text: {
        color: 'red',
        padding: 8
    }
})

export default Input;