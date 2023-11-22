import { View, Text, Button} from 'react-native'
import React from 'react'

function ButtonScreen() {

    let x = 0;
  return (
    <View>
      <Text>ButtonScreen</Text>

      <Button 
        color="red"
        title="Kliko"
        onPress={() => console.log("Clicked: " + x++)}
      />
    </View>
  )
}
export default ButtonScreen;