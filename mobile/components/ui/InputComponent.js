import {Text, View, TextInput, StyleSheet} from 'react-native'

function InputComponent ({title, value, onChange}) {
    return (
        <View>
            <Text>{title}</Text>
            <TextInput value={value} onChange={onChange}/>
        </View>
    )
}

export default InputComponent;

const styles = StyleSheet.create({})