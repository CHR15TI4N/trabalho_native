import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, StatusBar } from "react-native";

const styles = StyleSheet.create({
    image: {
        height: 190,
        width: 200,
        resizeMode: 'contain',
    },
    cardImage: {
        backgroundColor: '#290612',
        borderRadius: 18,
        marginTop: 14,
        marginBottom: 26,
        shadowColor: '#fccc9f',
        shadowOffset: {
            width: 6,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.30,
        paddingBottom: 18,
        paddingHorizontal: 8
    },  
    cardBody: {
        backgroundColor: '#412',
        padding: 100,
        margin: 40,
        paddingTop: 14,
        paddingBottom: 14,
        paddingHorizontal: 74,
        marginTop: 26,
        borderRadius: 32,
        shadowColor: '#412',
        shadowOffset: {
            width: 4,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.30,
    },   
    containerSafeArea: {
        backgroundColor: '#fccc9f',
    },   
    body: {
        height: '100%',
        alignItems: 'center',
        marginTop: 1
    },
    text: {
        color: '#dbb1ad',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textError: {
        color: '#f00',
        textAlign: 'center',
        marginBottom: 10
    },
    boxText: {
        marginVertical: 12,
        gap: 10,
    },
    textBrasao: {
        color: '#dbb1ad',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 22,
        marginTop: 18,
        fontStyle: 'italic',
    }
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
        <SafeAreaView style={styles.containerSafeArea}>
            <StatusBar animated={true} barStyle={'dark-content'} showHideTransition={'fade'} hidden={false}/>
            {detailsCountry && (
                <>
                <View style={styles.body}>
                    <View style={styles.cardBody}>
                        <View style={styles.boxText}>
                            <Text style={styles.text}>Nome Oficial: {detailsCountry.name.official}</Text>
                            <Text style={styles.text}>Fuso Horario: {detailsCountry.timezones}</Text>
                        </View>
                        <View style={styles.cardImage}>
                        <Text style={styles.textBrasao}>BRASÃO</Text>
                            {detailsCountry.coatOfArms.png ?
                                <Image
                                source={{uri: detailsCountry.coatOfArms.png}}
                                style={styles.image}
                            />
                            :<Text style={styles.textError}>*este país não possui brasão*</Text>}
                        </View>
                        <View style={styles.boxText}>
                            <Text style={styles.text}>Região: {detailsCountry.region}</Text>
                            <Text style={styles.text}>População: {detailsCountry.population}</Text>
                        </View>
                    </View>
                </View>
                </>
            )}
        </SafeAreaView>
    );
}

export default CountryDetails;