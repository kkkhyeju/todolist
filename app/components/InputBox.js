// app/components/InputBox.js
import React from "react";
import {TextInput,StyleSheet} from 'react-native';

export default function InputBox({value,changeText,addTodoItem})  {
return(
    <TextInput
        value ={value}

        style={styles.input}
        placeholder={"오늘의 할 일"}
        maxLength={30}
        onChangeText ={changeText}
        onEndEditing={addTodoItem}
        returnKeyType="done"/> 
);
};
const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop:15,
    }
})
//export default Input;