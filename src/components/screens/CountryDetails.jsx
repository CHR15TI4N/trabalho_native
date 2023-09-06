import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 100, 
        height: 100,
    },      
})

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
                    <Text>Capital: {detailsCountry.capital}</Text>
                    <Text>Região: {detailsCountry.region}</Text>
                    <Text>População: {detailsCountry.population}</Text>
                    <Image
                        source={{uri: detailsCountry.coatOfArms.png}}
                        style={styles.image}
                    />
                </View>
                </>
            )}
        </SafeAreaView>
    );
}

export default CountryDetails;