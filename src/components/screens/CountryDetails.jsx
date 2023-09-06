import axios from "axios";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";

const DetailsItem = ({details}) => {
    <View>
        <Image source={{uri: details.flags.png}} style={{width: 240, height: 144}}/>
    </View>
}

const CountryDetails = () => {

    const [detailsCountries, setDetailsCountries] = useState()

    const fetchDetails = async () => {
        try {
            const {data} = await axios.get(`https://restcountries.com/v3.1/all`)
            setDetailsCountries(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [])
 
    return (
        <SafeAreaView>
            <FlatList
                data={detailsCountries}
                renderItem={({item}) => (
                    <DetailsItem details={item}/>
                )}
                keyExtractor={(item) => item.cca3}
            />
        </SafeAreaView>
    );
}

export default CountryDetails;