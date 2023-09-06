import axios from "axios";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native";

const CountryDetails = ({route}) => {

    const [detailsCountry, setDetailsCountry] = useState(null)
    const {id} = route.params;

    const fetchDetails = async () => {
        try {
            const {data} = await axios.get(`https://restcountries.com/v3.1/name/${id}`)
            setDetailsCountry(data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [id])
 
    return (
        <SafeAreaView>
            {detailsCountry && (
                <>
                <View>
                    <Text>Capital:{detailsCountry.name.common}</Text>
                </View>
                </>
            )}
        </SafeAreaView>
    );
}

export default CountryDetails;