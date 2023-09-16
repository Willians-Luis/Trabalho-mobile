import {StyleSheet, View } from "react-native";
import BtnPages from "./BtnPages";

const Pagination = ({numPage, setNumPage, setData}) => {

    const pageOne = () => {
        setData(false)
        setNumPage(0)
    }
    const backOne = () => {
        setData(false)
        if(numPage > 0) setNumPage(numPage - 1)
    }
    const advanceOne = () => {
        setData(false)
        setNumPage(numPage + 1)
    }
    const advanceTen = () => {
        setData(false)
        setNumPage(numPage + 10)
    }
    
    return (
        <View style={styles.pagination}>
            <BtnPages 
                title={` 1 `}  
                disabled={numPage <= 0 ? true : false} 
                onPress={pageOne}
            />
            <BtnPages
                title="<< " 
                disabled={numPage <= 0 ? true : false}
                onPress={backOne}  
            />
            <BtnPages 
                title={` Página: ${numPage + 1} `} 
                borderWidth={0}
                disabled
            />
            <BtnPages 
                title=" >>"
                onPress={advanceOne}
            />
            <BtnPages 
                title=">>10"
                onPress={advanceTen}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pagination: {
        height: 48,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 8
    }
})

export default Pagination;