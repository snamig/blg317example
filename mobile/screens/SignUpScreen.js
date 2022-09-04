import { StyleSheet, View, Text } from "react-native";
import AuthForm from "../components/Auth/AuthForm";
import IconButton from "../components/ui/IconButton";
import GlobalStyles from "../styles/GlobalStyles";

function SignUpScreeen({navigation}) {
  function onPressHandler() {
    navigation.navigate("Login")
  }
  return (
    <View style={{flex: 1, paddingTop: 60, paddingHorizontal: 10}}>
      <IconButton name="chevron-back" size={50} color={GlobalStyles.colors.brown300} onPress={onPressHandler}/>
      <View style={styles.container}>
        <Text style={styles.title}>Sikko</Text>
        <AuthForm signUp />
      </View>
      </View>

  );
}

export default SignUpScreeen;

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
  },
});
