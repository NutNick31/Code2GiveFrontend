import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react'
import CustomeDropDown from '../../components/CustomeDropDown'
import { useNavigation } from "@react-navigation/native";

const AddictionChoice = () => {
    const [value, setValue] = useState("")
    const navigation = useNavigation()
    const data = ["Alcohol", "Internet", "Pornography", "Gambling", "Gaming", "Anger", "Family", "Suicidal"]
  return (
    <View style={styles.container}>
      <CustomeDropDown data={data} value={value} setValue={setValue} string={"Choose most relevant"} />
      <Button title="Next" onPress={()=>{
        if(value=="Anger") navigation.navigate("Anger")
        else if(value=="Alcohol") navigation.navigate("Alcohol")
        else if(value=="Family") navigation.navigate("Family")
        else if(value=="Gambling") navigation.navigate("Gambling")
        else if(value=="Gaming") navigation.navigate("Gaming")
        else if(value=="Internet") navigation.navigate("Internet")
        else if(value=="Pornography") navigation.navigate("Pornography")
        else if(value=="Suicidal") navigation.navigate("Suicidal")
      }} />
    </View>
  )
}

export default AddictionChoice

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'center'
  }
})