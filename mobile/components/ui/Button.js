import { Pressable, View } from "react-native";

function Button ({title, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {},
    text :{}
})