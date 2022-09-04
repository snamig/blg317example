import Button from "../ui/Button";
import InputComponent from "../ui/InputComponent";
import {View, StyleSheet, Text} from 'react-native';
import GlobalStyles from "../../styles/GlobalStyles";

function AuthForm ({signUp, onPress}) {
    
    return (
        <View style={styles.container}>
            <InputComponent title="E-mail"/>
            {signUp && <InputComponent title="Confirm e-mail"/>}
            <InputComponent title="Password"/>
            {signUp && <InputComponent title="Confirm password"/>}
            <Button title={signUp ? "Sign up": "Login" } onPress={onPress}/>
        </View>
    )
}

export default AuthForm;

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        paddingHorizontal: 10,
        paddingBottom: 10,
        alignItems:'center',
        borderRadius: 10,
        width: "80%",
        backgroundColor: GlobalStyles.colors.primary500,
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 0.2}
    }
})