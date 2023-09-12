import { SafeAreaView, View, StyleSheet } from "react-native";
import Input from "../components/Input";
import Submit from "../components/Submit";
import { useEffect, useState } from "react";

const Login = ({navigation}) => {
    const [userInput, setUserInput] = useState()
    const [passwordInput, setPasswordInput] = useState()
    const [showMessageUser, setShowMessageUser] = useState(false)
    const [showMessagePassword, setShowMessagePassword] = useState(false)

    const changeUser = (text) => {
        setUserInput(text)
        if (text?.length < 2) { 
            setShowMessageUser(true)
        } else {
            setShowMessageUser(false)
        }
    }

    const changePassword = (text) => {
        setPasswordInput(text)
        if (text?.length < 6) {
            setShowMessagePassword(true)
        } else {
            setShowMessagePassword(false)
        }
    }

    const comfirmLogin = () => {
        if (userInput?.length >= 2 && passwordInput?.length >= 6) {
            navigation.navigate("Home")
        } else {
            changeUser(userInput)
            changePassword(passwordInput)
        }
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Input 
                    placeholder="E-mail ou Usúario"
                    onChangeText={changeUser}
                    showMessage={showMessageUser}
                    message="Usuário deve conter no mínimo 2 caracteres"
                />
                <Input 
                    placeholder="Senha" 
                    senha = {true}
                    onChangeText={changePassword}
                    showMessage={showMessagePassword}
                    message="Senha deve conter no mínimo 6 caracteres"
                />
                <Submit onPress={comfirmLogin} />
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#072433',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
        gap: 24
    }
  });

export default Login;