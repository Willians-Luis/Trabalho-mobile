import { StyleSheet, Text, View } from "react-native";

const Header = ({title, bgColor = '#3e4369', textColor = '#fff'}) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: bgColor,
            width: '100%',
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 30,
            color: textColor,
            fontWeight: 'bold',
    
        }
    })


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default Header;