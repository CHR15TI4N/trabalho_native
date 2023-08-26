import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        backgroundColor: '#bd9066',
        width: 78,
        height: 42,
        margin: 54
    },
    text: {
        textAlign: 'center',
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