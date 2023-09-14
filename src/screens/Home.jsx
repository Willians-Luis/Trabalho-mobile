import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios"
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Home = ({navigation}) => {
    const [data, setdata] = useState()
    const [numPage, setNumPage] = useState(0)

    const fetchCards = async () => {
        try {
            const response = await axios.get(
                `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=${numPage * 10}`
            )
            setdata(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const details = (card) => {
        navigation.navigate('Details', card)
    }

    useEffect(() => {
        fetchCards()
    }, [])

    useEffect(() => {
        fetchCards()
    }, [numPage])


    const Item = ({item}) => (
        <View style={styles.list}>
            <Card
                name={item.name}
                type={item.type}
                image={item.card_images[0].image_url}
                onPress={() => details(item)}
            />
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            {data?.length > 0 ?
                <View>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <Item item={item} />}
                        ListFooterComponent={<Pagination numPage={numPage} setNumPage={setNumPage} />}
                    />
                </View>
                : <View><Text>Carregando...</Text></View>  
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: '#0b3233'
    },
    list: {
        marginVertical: 12,
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default Home;