import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    containerSafeArea: {
        backgroundColor: '#412',
    },
    body: {
        height: '100%',
        alignItems: 'center',
    },
    cardBody: {
        shadowColor: "#fccc9f",
        shadowOffset: {
            width: 6,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.80,
        padding: 14,
        margin: 24,
        marginBottom: 8,
        backgroundColor: '#fccc9f',
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
        width: 280,
        height: 130,
        resizeMode: 'contain',
        shadowColor: "#412",
        shadowOffset: {
            width: 4,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    loadingContainer: {
        alignItems: 'center',
        paddingVertical: 380,
      },
})

const Home = ({ navigation }) => {

    const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const countriesPerPage = 10;

    const fetchCountries = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
            const startIndex = (page - 1) * countriesPerPage;
            const endIndex = startIndex + countriesPerPage;
            const pageCountries = data.slice(startIndex, endIndex);
            setCountries([...countries, ...pageCountries]);
            setPage(page + 1);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#fccc9f" />
            </View>
        );
    };

    useEffect(() => {
        fetchCountries()
    }, [])

    const CountriesItem = ({ country }) => {

        const navigationDetails = (country) => {
            console.log('Details')
            navigation.navigate('Detalhes', { id: country.name.common })
        }

        return (
            <TouchableOpacity style={styles.cardBody} onPress={() => navigationDetails(country)}>
                <Text style={styles.text}>País: {country.name.common}</Text>
                <Text style={styles.text}>Capital: {country.capital}</Text>
                <Image
                    source={{ uri: country.flags.png }}
                    style={styles.flagContainer}
                />
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <StatusBar 
                animated={true} 
                barStyle={'light-content'} 
                showHideTransition={'fade'} 
                hidden={false}
            />
            <View style={styles.containerSafeArea}>
                <FlatList
                    data={countries}
                    renderItem={({ item }) => (
                        <CountriesItem country={item} />
                    )}
                    keyExtractor={(item) => item.cca3}
                    onEndReached={fetchCountries}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={renderFooter}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;