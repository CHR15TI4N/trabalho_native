import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        backgroundColor: '#bd9066',
        width: 116,
        height: 48,
        margin: 52,
        padding: 3,
        marginBottom: -1,
        marginTop: 10,
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        margin: 12,
        fontWeight: 'bold'
    }
})

const MyButton = ({title, onPressButton}) => {
    return (
        <TouchableOpacity onPress={onPressButton}>
            <View style={styles.buttonContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MyButton;