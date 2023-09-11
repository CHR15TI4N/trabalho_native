import { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";

const RegisterPage = ({navigation}) => {

    const [resgisterEmail, setRegisterEmail] = useState;
    const [resgisterPassword, setRegisterPassword] = useState;
    const [registerName, setRegisterName] = useState();

    return (
        <SafeAreaView>
            <TextInput
                placeholder={"seu nome"}
                keyboardType={'default'}
                autoComplete={'name'}
                onChangeText={setRegisterName}
                value={registerName}
            />
        </SafeAreaView>
    );
}

export default RegisterPage;