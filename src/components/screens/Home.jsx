import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    containerSafeArea: {
        backgroundColor: '#412'
    },
    body: {
        backgroundColor: '#412',
        height: '100%',
        alignItems: 'center'
    },
    containerBody: {
        shadowColor: "#d49b96",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.50,
        padding: 16,
        margin: 10,
        backgroundColor: '#d49b96',
        alignItems: 'center'
    },
    text: {
        color: '#412'
    }
})

const CountriesItem = ({country, flagUrl}) => {
    return (
        <View style={styles.containerBody}>
            <Text style={styles.text}>Nome do Pais: {country.name.common}</Text>
            <Text style={styles.text}>Capital: {country.capital}</Text>
            <Image source={{uri: flagUrl}}/>
        </View>
    )
}

const Home = () => {

    const [countries, setCountries] = useState()
    // const [flagUrl, setFlagUrl] = useState()

    const fetchCountries = async () => {
        try {
            const {data} = await axios.get(`https://restcountries.com/v3.1/all`)
            setCountries(data)
        } catch (error) {
            console.log(error)
        }
    }

    // const fetchFlagUrls = async () => {
    //     try {
    //         const response = await axios.get(`https://restcountries.com/data/all.json`)
    //         const flagData = response.data.reduce((acc, country) => {
    //             if(country.flags && country.flags.png) {
    //                 acc[country.cca3] = country.flags.png;
    //             }
    //             return acc
    //         }, {});
    //         setFlagUrl(flagData);
    //     } catch (error) {
    //         console.log(error)
    //         return null;
    //     }
    // }

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <FlatList
                data={countries}
                renderItem={({item}) => (
                    <CountriesItem country={item}/>   
                )}
                keyExtractor={(item) => item.cca3}
            />
        </SafeAreaView>
    );
}

export default Home;