import { StyleSheet, View, Text, Button } from "react-native";
import AuthForm from "../components/Auth/AuthForm";
import GlobalStyles from "../styles/GlobalStyles";

function LoginScreen({navigation}) {
    function onPressHandler() {
        navigation.navigate("Sign Up")
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sikko</Text>
      <AuthForm signUp={false} />
      <Button title="Are you new?" color={GlobalStyles.colors.brown300} onPress={onPressHandler}/>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  title: {
    fontSize: 50,
    marginBottom: 20,
    fontWeight: "600",
    color: GlobalStyles.colors.primary500,

  }
});
