import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

function ListScreen() {

    const list = [
        {fname: "Arianit", lname:"Tershnjaku", age: 29},
        {fname: "Qamil", lname:"Beqiraj", age: 19},
        {fname: "Perparim", lname:"Asllani", age: 18},
        {fname: "Malart", lname:"Peqani", age: 16}
    ];

  return (
    <View>
        <Text style={styles.textStyle}>List of Students</Text>
        <FlatList 
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={list => list.fname}
            data={list} 
            renderItem={({item}) => {
              return <Text style={styles.listWrapper}>{item.fname} {item.lname} - {item.age}</Text>
            }}
        />
    </View>
  );
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize:30,
        textAlign:"center"
    },
    listWrapper:{
        textAlign:'center'
    }
});
export default ListScreen;