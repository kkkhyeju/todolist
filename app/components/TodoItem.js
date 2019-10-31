import React from 'react';
import { StyleSheet, View, Text , Dimensions ,TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

export default function TodoItem({name,isComplete,changeComplete, deleteItem}) {
    return (
      <View style={styles.listitembox}>
            <View style ={styles.makerow}>
                <TouchableOpacity onPress={changeComplete}>
                    <AntDesign name={isComplete?"checkcircle":"checkcircleo"} size={20} style={styles.check}/>
                </TouchableOpacity>
                <View style={styles.item}>
                <Text>{name}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress = {deleteItem}>
                <AntDesign name = "close" size = {20}/>
            </TouchableOpacity>
      </View>
    );
};

const{width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
    listitembox: {
      borderBottomWidth:1,
      padding:5,
      marginTop : 10,
      width :width-60,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    
    },
    item : {
        fontWeight:"bold",
        fontSize: 20,
    },
    makerow : {
        flexDirection:"row",
    },
    checkmargin : {
        marginRight:10,
    }
  });
  