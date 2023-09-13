import { useState } from "react";
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, Vibration, View } from "react-native";
import MyButton from "../MyButton";

const styles = StyleSheet.create({
    containerSafeArea: {
        backgroundColor: '#fccc9f'
    },
    body: {
        backgroundColor: '#fccc9f',
        height: '100%',
        alignItems: 'center'
    },
    input: {
        shadowColor: "#412",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.50,
        width: 300,
        margin: 15,
        marginTop: 10,
        borderWidth: 3,
        borderColor: '#412',
        borderRadius: 6,
        padding: 8,
        backgroundColor: '#412',
        color: '#fff'
    },
    text: {
        marginLeft: 20,
        color: '#412',
        fontSize: 18,
        marginTop: 4,
        
    },
    error: {
        color: '#f00',
        paddingLeft: 16,
        fontStyle: 'italic',
        fontSize: 12
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 18,
        marginTop: 16
    },
    containerTitle: {
        marginTop: 30,
        marginBottom: 28,
        fontSize: 50,
        fontWeight: 'bold',
        color: '#412',
        textAlign: 'center'
    },
    imageContainer: {
        height: 220,
        resizeMode: 'contain',
        marginBottom: -60,
        marginTop: 14
    },
    editButton: {
        marginTop: 1
    }
})

const RegisterPage = ({navigation}) => {

    const[registerName,setRegisterName] = useState('')
    const[registerEmail,setRegisterEmail] = useState('')
    const[registerPassword,setRegisterPassword] = useState('')
    const[validPassword,setValidPassword] = useState('')

    const[errorName, setErrorName] = useState('')
    const[errorEmail, setErrorEmail] = useState('')
    const[errorPassword, setErrorPassword] = useState('')
    const[errorPasswordDiferent,setErrorPasswordDiferent] = useState('')

    const[validName,setValidName] = useState(false)
    const[validPasswordEqual,setValidPasswordEqual] = useState(false)
    const[validation,setValidation] = useState(false)

    const validationRegister = () => {
        const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(registerName.length > 3){
            setValidName(true)
            setErrorName('')
        }else{
            Vibration.vibrate()
            setValidName(false)
            setErrorName('Nome é obrigatório')
        }

        if(registerPassword != validPassword){
            Vibration.vibrate()
            setValidPasswordEqual(false)
            setErrorPasswordDiferent(`Senha deve ser igual`)
        }else{
            setValidPasswordEqual(true)
            setErrorPasswordDiferent('')
        }

        if(emailValid.test(registerEmail)){
            if ((registerPassword.length) < 8) {
                Vibration.vibrate()
                setErrorEmail('')
                setErrorPassword('Senha é obrigatória')
                setValidation(false)
            }else{
                setErrorEmail('')
                setErrorPassword('')
                setValidation(true)
            }
        }else{
            if ((registerPassword.length) < 8 | (validPassword.length) < 8) {
                Vibration.vibrate()
                setErrorEmail('Email é obrigatório')
                setErrorPassword('Senha é obrigatória')
                setValidation(false)
            }else{
                Vibration.vibrate()
                setErrorEmail('Email é obrigatório')
                setErrorPassword('')
                setValidation(false)
            }
        }

        if(validName && validation && validPasswordEqual){
            navigation.navigate('Voltar')
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
                    <Image
                        style={styles.imageContainer}
                        source={require('../images/bandeirinhas.gif')}
                    />
                </View>
                <View>
                    <Text style={styles.containerTitle}>Crie sua Conta</Text>
                    <View>
                        <Text style={styles.text}>Insira um apelido:
                            <Text style={styles.error}> {errorName}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="apelido"
                            keyboardType='default'
                            autoComplete='name'
                            onChangeText={setRegisterName}
                            value={registerName}
                            placeholderTextColor='#8a674a'
                        />
                        <Text style={styles.text}>Insira seu Email:
                            <Text style={styles.error}> {errorEmail}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="exemple@email.com"
                            keyboardType='email-address'
                            autoComplete='email'
                            onChangeText={setRegisterEmail}
                            value={registerEmail}
                            placeholderTextColor='#8a674a'
                        />
                        <Text style={styles.text}>Insira sua senha:
                            <Text style={styles.error}> {errorPassword}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="senha"
                            keyboardType='default'
                            onChangeText={setRegisterPassword}
                            value={registerPassword}
                            secureTextEntry={true}
                            placeholderTextColor='#8a674a'
                        />
                        <Text style={styles.text}>Sua senha novamente:
                            <Text style={styles.error}> {errorPasswordDiferent}</Text>
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="mesma senha"
                            keyboardType='default'
                            onChangeText={setValidPassword}
                            value={validPassword}
                            secureTextEntry={true}
                            placeholderTextColor='#8a674a'
                        />  
                    </View>
                    <View style={styles.buttonContainer}>
                    <Text style={{color: '#412'}}>De dois toques ao preencher</Text>
                        <MyButton
                            title="Registrar"
                            onPressButton={validationRegister}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default RegisterPage;