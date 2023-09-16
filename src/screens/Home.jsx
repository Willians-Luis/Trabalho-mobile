import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios"
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = ({ navigation }) => {
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


    const Item = ({ item }) => (
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

            <Header title="Yu-Gi-Oh!" bgColor="#000" />

            {data?.length > 0 ?
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Item item={item} />}
                        ListFooterComponent={
                            <Pagination
                                numPage={numPage}
                                setNumPage={setNumPage}
                                setData={setdata}
                            />
                        }
                    />
                </View>
                : <View style={styles.listContainer}>
                    <Text style={{ color: '#fff' }}>Carregando...</Text>
                </View>
            }

            <Footer bgColor="#000">
                <Btn
                    title="IR PARA TELA EXTRA"
                    bgColor="#fff"
                    textColor="#000"
                    borderColor="#fff"
                    onPress={() => navigation.navigate("Extra")}
                />
            </Footer>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: '#0b3233',

    },
    listContainer: {
        flex: 1,
        marginTop: 8,
        marginBottom: 2
    },
    list: {
        marginVertical: 12,
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default Home;