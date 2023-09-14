import { SafeAreaView, View, StyleSheet } from "react-native";
import Input from "../components/Input";
import Submit from "../components/Submit";
import { useState } from "react";

const Login = ({navigation}) => {
    const [userValue, setUserValue] = useState()
    const [passwordValue, setPasswordValue] = useState()
    const [showMessageUser, setShowMessageUser] = useState(false)
    const [showMessagePassword, setShowMessagePassword] = useState(false)

    const changeUser = (text) => {
        setUserValue(text)
        if (text?.length < 2) { 
            setShowMessageUser(true)
        } else {
            setShowMessageUser(false)
        }
    }

    const changePassword = (text) => {
        setPasswordValue(text)
        if (text?.length < 6) {
            setShowMessagePassword(true)
        } else {
            setShowMessagePassword(false)
        }
    }

    const comfirmLogin = () => {
        if (userValue?.length >= 2 && passwordValue?.length >= 6) {
            navigation.navigate("Home")
            setUserValue("")
            setPasswordValue("")
        } else {
            changeUser(userValue)
            changePassword(passwordValue)
        }
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Input 
                    onChangeText={changeUser}
                    value={userValue}
                    placeholder="E-mail ou Usúario"
                    showMessage={showMessageUser}
                    message="Usuário deve conter no mínimo 2 caracteres"
                />
                <Input 
                    onChangeText={changePassword}
                    value={passwordValue}
                    placeholder="Senha" 
                    senha = {true}
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