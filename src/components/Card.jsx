import React from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Btn from './Btn';

const Card = ({name, type, image, onPress}) => {
    return (
        <View style={Styles.container}>
            <View>
                <View>
                    <View style={Styles.textContainer}>
                        <Text style={Styles.text}>{name}</Text>
                    </View>
                    <View style={Styles.textContainer}>
                        <Text style={Styles.text}>Type: {type}</Text>
                    </View> 
                </View>
                <View style={Styles.imageContainer}>
                    <Image 
                        style={Styles.image}
                        source={{uri: image}}
                    />
                </View>
                <Btn title="Exibir Detalhes" onPress={onPress} />
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: '#41999c',
        borderRadius: 12,
        padding: 20,
        backgroundColor: '#184854'
    },
    textContainer: {
        width: 275,
        borderWidth: 2,
        borderColor: '#41999c',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
        padding: 8,
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center',
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: '#41999c',
        marginBottom: 16,
        alignItems: 'center',
    },
    image: {
        height: 400,
        width: 270,
    },
})

export default Card;