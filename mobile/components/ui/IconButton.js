import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from "@expo/vector-icons"

function IconButton({name, color, size, onPress}) {
    return(
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <Ionicons name={name} color={color} size={size}/>
        </Pressable>
    )
}

export default IconButton;

const styles= StyleSheet.create({
    container: {
        flex: 1,
    },

    pressed: {opacity: 0.5},
})