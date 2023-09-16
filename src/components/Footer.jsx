import { StyleSheet, View } from "react-native";

const Footer = ({bgColor = '#3e4369', children}) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: bgColor,
            width: '100%',
            minHeight: 30,
            padding: 8,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })


    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export default Footer;