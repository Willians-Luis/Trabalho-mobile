import { Image, SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";

const Details = ({route, navigation}) => {

    const card = route.params

    const TextContainer = ({text}) => {
        return (
            <View style={Styles.textContainer}>
                <Text style={Styles.text}>{text}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView style={Styles.scrollContainer}>
                <TextContainer text={card.name} />
                <View style={Styles.imageContainer}>
                    <Image 
                        style={Styles.image}
                        source={{uri: card.card_images[0].image_url}}
                    />
                </View>
                <TextContainer text={`Tipo: ${card.type}`} />
                <TextContainer text={`Descrição: ${card.desc}`} />
                <TextContainer text={`Raça: ${card.race}`} />
                {card.attribute ? <TextContainer text={`Atributo: ${card.attribute}`} /> : <></>}
                {card.level ? <TextContainer text={`Nível: ${card.level}`} /> : <></>}
                {card.atk ? <TextContainer text={`Ataque: ${card.atk}`} /> : <></>}
                {card.def ? <TextContainer text={`Defesa: ${card.def}`} /> : <></>}
            </ScrollView>
        </SafeAreaView>
        
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#184854',
        
    },
    scrollContainer: {
        paddingHorizontal: 24,
        marginTop: 12
    },
    textContainer: {
        borderWidth: 2,
        borderColor: '#41999c',
        borderRadius: 4,
        marginVertical: 8,
        padding: 8,
    },
    text: {
        fontSize: 18,
        color: '#ffffff',
        
    },
    imageContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#41999c',
    },
    image: {
        height: 500,
        width: 340,
    },
})

export default Details;