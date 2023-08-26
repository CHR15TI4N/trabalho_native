import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
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
        color: '#d49b96',
        fontSize: 20,
        marginTop: 12 
    },
    containerInput: {
        marginTop: 88,
    },
    containerTitle: {
        marginTop: 68,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#c77f79',
    },
    button: {
        borderRadius: 10,
    }
})


const LoginPage = () => {

    const [email, onChangeEmail] = useState('')
    const [password, onChangePassword] = useState('')

    const onPressLogin = () => {

    }

    const onPressClear = () => {

    }

    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <View style={styles.body}>
                <View>
                    <Text style={styles.containerTitle}>SEU LOGIN</Text>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.text}>Insira seu email: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                    />
                    <Text style={styles.text}>insira sua senha: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                    />
                </View>
                <View>
                    <MyButton
                        title="Login"
                        onPressButton={onPressLogin}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LoginPage;