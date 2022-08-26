import Button from "../ui/Button";
import InputComponent from "../ui/InputComponent";

function AuthForm ({signUp}) {
    return (
        <View>
            <InputComponent title="E-mail"/>
            {signUp && <InputComponent title="Confirm e-mail"/>}
            <InputComponent title="Password"/>
            {signUp && <InputComponent title="Confirm password"/>}
            <Button title={({signUp}) => signUp ? "Sign up": "Login"}/>
        </View>
    )
}

export default AuthForm;