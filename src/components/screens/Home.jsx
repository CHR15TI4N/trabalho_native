import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    containerSafeArea: {
        backgroundColor: '#412'
    },
    body: {
        backgroundColor: '#412',
        height: '100%',
        alignItems: 'center',
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
        borderRadius: 16,
        alignItems: 'center'
    },
    text: {
        color: '#412',
        fontSize: 18,
        fontWeight: 'bold',
        height: 34
    }
})

const CountriesItem = ({country}) => {

    console.log(country)

    return (
        <TouchableOpacity style={styles.containerBody}>
            <Text style={styles.text}>Nome do Pais: {country.name.common}</Text>
            <Text style={styles.text}>Capital: {country.capital}</Text>
            <Image source={{uri: country.flags.png}} style={{width: 240, height: 144}}/>
        </TouchableOpacity>
    )
}

const Home = () => {

    const [countries, setCountries] = useState()

    const fetchCountries = async () => {
        try {
            const {data} = await axios.get(`https://restcountries.com/v3.1/all`)
            setCountries(data)
        } catch (error) {
            console.log(error)
        }
    }

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