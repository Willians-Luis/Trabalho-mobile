import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../components/Card";
import BtnPages from "../components/BtnPages";

const Home = () => {
    const [data, setdata] = useState()
    const [numPage, setNumPage] = useState(0)

    const fetchApi = async () => {
        try {
            const response = await axios.get(
                `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=${numPage * 10}`
            )
            setdata(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    useEffect(() => {
        fetchApi()
    }, [numPage])


    const Item = ({item}) => (
        <View style={styles.list}>
            <Card
                name={item.name}
                type={item.type}
                image={item.card_images[0].image_url}
            />
        </View>
    );

    const Pagination = () => {
        return (
            <View style={styles.pagination}>
                <BtnPages 
                    title={` 1 `}  
                    btnStatus={numPage <= 0 ? false : true} 
                    onPress={() => {setNumPage(0)}}
                />
                <BtnPages 
                    title="<< " 
                    btnStatus={numPage <= 0 ? false : true}
                    onPress={() => {if(numPage > 0) setNumPage(numPage - 1)}}  
                />
                <BtnPages title={` Page: ${numPage + 1} `}/>
                <BtnPages 
                    title=" >>"
                    btnStatus={true}
                    onPress={() => {setNumPage(numPage + 1)}}
                />
                <BtnPages 
                    title=">>10"
                    btnStatus={true}
                    onPress={() => {setNumPage(numPage + 10)}}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {data?.length > 0 ?
                <View>
                    <FlatList
                        data={data}
                        renderItem={({item}) => <Item item={item} />}
                        ListFooterComponent={<Pagination />}
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
    },
    pagination: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 8
    }
})
export default Home;