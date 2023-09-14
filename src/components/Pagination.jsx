import {StyleSheet, View } from "react-native";
import BtnPages from "./BtnPages";

const Pagination = ({numPage, setNumPage}) => {
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
            <BtnPages title={` Página: ${numPage + 1} `}/>
            <BtnPages 
                title=" >>"
                onPress={() => {setNumPage(numPage + 1)}}
            />
            <BtnPages 
                title=">>10"
                onPress={() => {setNumPage(numPage + 10)}}
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