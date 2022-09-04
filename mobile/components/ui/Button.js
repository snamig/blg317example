import { Pressable, View, StyleSheet, Text} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

function Button ({title, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 100,
    },
    text :{
        textAlign: 'center',
        color: GlobalStyles.colors.primary500,
    },

    pressed: {
        opacity: 0.5,
    }
})