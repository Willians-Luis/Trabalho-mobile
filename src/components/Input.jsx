import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({onChangeText, value, placeholder, senha = false, showMessage = false, message}) => {

    return (
        <View>
            <TextInput
                style={style.container}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#000'
                secureTextEntry = {senha}
            />
            {
                showMessage ? (
                    <View style={{paddingLeft: 8}}>
                        <Text style={{color: 'red'}}>{message}</Text>
                    </View>
                ): <></>
            }
        </View>
        
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: 350,
        height: 50,
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 8,
        padding: 10,
        color: '#000'
    },
    text: {
        color: '#41999c',
        padding: 8
    }
})

export default Input;