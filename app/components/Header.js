// MyTodoApp/app/components/Header.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
      <View style = {styles.headercontainer}>
        <Text style={styles.headertext}>MyTodoApp</Text>
      </View>
    );
};

  
const styles = StyleSheet.create({
    headercontainer: {
      marginTop : 70,
      marginBottom : 40,
    },
    headertext : {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#3f4e66',
    },
  });
  