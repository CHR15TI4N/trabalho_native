import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, RefreshControl, SafeAreaView, StyleSheet, Text, TouchableOpacity, refreshControl } from "react-native";

const styles = StyleSheet.create({
    containerSafeArea: {
        backgroundColor: '#412',
    },
    body: {
        height: '100%',
        alignItems: 'center',
    },
    containerBody: {
        shadowColor: "#d49b96",
        shadowOffset: {
            width: 4,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.30,
        padding: 14,
        margin: 24,
        marginBottom: 8,
        backgroundColor: '#d49b96',
        borderRadius: 26,
        alignItems: 'center',
    },
    text: {
        color: '#412',
        fontSize: 18,
        fontWeight: 'bold',
        height: 34
    },
    flagContainer: {
        width: 290, 
        height: 166, 
        borderRadius: 12,
    }
})

const Home = ({navigation}) => {

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

    const CountriesItem = ({country}) => {

        const navigationDetails = (country) => {
            console.log('Details')
            navigation.navigate('Details', {id: country.name.common})
        }
    
    
        return (
            <TouchableOpacity style={styles.containerBody} onPress={() => navigationDetails(country)}>
                <Text style={styles.text}>Nome do Pais: {country.name.common}</Text>
                <Text style={styles.text}>Capital: {country.capital}</Text>
                <Image 
                    source={{uri: country.flags.png}} 
                    style={styles.flagContainer}
                />
            </TouchableOpacity>
        )
    }

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