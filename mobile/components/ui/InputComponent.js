import {Text, View, TextInput, StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

function InputComponent ({title, value, onChange}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput value={value} onChange={onChange} style={styles.input}/>
        </View>
    )
}

export default InputComponent;

const styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 8,
        justifyContent: 'center',
        width: "100%"
    },

    title: {
        marginBottom: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        color: GlobalStyles.colors.primary100,
    }, 

    input: {
        borderRadius: 3,
        padding: 5,
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary500,

    }
})