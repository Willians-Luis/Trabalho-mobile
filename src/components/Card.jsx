import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({name, type, image}) => {
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
        borderWidth: 2,
        borderColor: '#41999c',
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 4,
        padding: 8,
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        width: 150,
        textAlign: 'center',
    },
    imageContainer: {
        borderWidth: 2,
        borderColor: '#41999c',
    },
    image: {
        height: 400,
        width: 270,
    },
})

export default Card;