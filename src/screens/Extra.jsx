import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Btn from "../components/Btn";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Extra = () => {
    const [joke, setJoke] = useState()
    const [category, setCategory] = useState("All")
    const [categories, setCategories] = useState([])
    const [showList, setShowList] = useState(false)

    const fecthCategories = async () => {
        try {
            const { data } = await axios.get("https://api.chucknorris.io/jokes/categories")
            setCategories(data)
        } catch (error) {
            console.log(error)
        }
    }

    const fecthJoke = async () => {
        try {
            if (category !== "All") {
                const { data } = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
                setJoke(data.value)
            } else {
                const { data } = await axios.get(`https://api.chucknorris.io/jokes/random`)
                setJoke(data.value)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const Item = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                setCategory(item)
                setShowList(!showList)
                fecthJoke()
            }}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    useEffect(() => {
        fecthCategories()
        fecthJoke()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title="Piadas de Chuck Norris"
                bgColor="#fff"
                textColor="#000"
            />
            <View style={styles.sudContainer}>
                <View>
                    <Text style={styles.label}>Escolha a categoria</Text>
                    <Btn
                        title={category}
                        bgColor="#fff"
                        borderColor="#fff"
                        textColor="#000"
                        onPress={() => setShowList(!showList)}

                    />
                </View>
                {showList ?
                    <View style={styles.listContainer}>
                        <FlatList
                            data={categories}
                            renderItem={({ item }) => <Item item={item} />}
                        />
                    </View>
                    : <></>
                }

            </View>

            <View style={styles.sudContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{joke}</Text>
                </View>
                <Btn
                    title="Buscar nova piada"
                    bgColor="#fff"
                    borderColor="#fff"
                    textColor="#000"
                    onPress={fecthJoke} />
            </View>

            <Footer bgColor="#000" />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    sudContainer: {
        width: 300,
    },
    listContainer: {
        height: 200
    },
    textContainer: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
        padding: 8,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    label: {
        alignItems: 'flex-start',
        paddingLeft: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Extra;