import { useState } from "react";
import { Image, StatusBar, Text, Vibration, View } from "react-native";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import '../images/planetinha.gif'
import MyButton from "../MyButton";

const styles = StyleSheet.create({
    containerSafeArea: {
        backgroundColor: '#412'
    },
    input: {
        shadowColor: "#d49b96",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.50,
        width: 300,
        margin: 15,
        borderWidth: 3,
        borderColor: '#fccc9f',
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#fccc9f'
    },
    body: {
        backgroundColor: '#412',
        height: '100%',
        alignItems: 'center'
    },
    text: {
        marginLeft: 20,
        color: '#fccc9f',
        fontSize: 20,
        marginTop: 12,
    },
    containerInput: {
        marginTop: 88,
    },
    containerTitle: {
        marginTop: 68,
        fontSize: 52,
        fontWeight: 'bold',
        color: '#fccc9f',
        textAlign: 'center'
    },
    button: {
        borderRadius: 10,
    },
    error: {
        color: '#f00',
        paddingLeft: 16,
        fontStyle: 'italic',
        fontSize: 16
    },
    imageContainer: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: -58
    },
    buttonBox: {
        alignItems: 'center',
        marginTop: 16
    },
    textOther: {
        textAlign: 'center',
        marginTop: 10,
        color: '#fccc9f',
        fontWeight: 'bold'
    }
})

const LoginPage = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')

    const validationLogin = () => {
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(emailValid.test(email)){
            if(password.length < 8){
                Vibration.vibrate()
                setErrorMessageEmail('')
                setErrorMessagePassword('Senha invalida')
            }else{
                setErrorMessageEmail('')
                setErrorMessagePassword('')
                navigation.navigate('Voltar')
            }
        }else{
            if(password.length < 8){
                Vibration.vibrate()
                setErrorMessagePassword('Senha invalida')
                setErrorMessageEmail('Email invalido')
            }else{
                Vibration.vibrate()
                setErrorMessagePassword('')
                setErrorMessageEmail('Email invalido')
            }
        }
    }

    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <StatusBar 
                animated={true} 
                barStyle={'light-content'} 
                showHideTransition={'fade'} 
                hidden={false}
            />
            <View style={styles.body}>
                <View>
                    <Text style={styles.containerTitle}>PAISES</Text>
                    <Image
                        style={styles.imageContainer}
                        source={require('../images/planetinha.gif')}
                    /> 
                </View>
                <View>
                    <View style={styles.containerInput}>
                        <Text style={styles.text}>Insira seu email: 
                            <Text style={styles.error}> {errorMessageEmail}</Text>
                        </Text>
                        <TextInput
                            placeholder="exemple@email.com"
                            keyboardType="email-address"
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                        />
                        <Text style={styles.text}>insira sua senha: 
                            <Text style={styles.error}> {errorMessagePassword}</Text>
                        </Text>
                        <TextInput
                            placeholder="password"
                            keyboardType="default"
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={styles.buttonBox}>
                    <MyButton
                        title="Login"
                        onPressButton={validationLogin}
                    />
                    <Text style={styles.textOther}>Ou</Text>
                    <MyButton
                        title="Registrar-se"
                        onPressButton={() => navigation.navigate('Caso tenha login, volte')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LoginPage;