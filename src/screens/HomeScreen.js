
import React, { useState } from 'react'
import {Button,StyleSheet,Text,View} from "react-native"

export default function HomeScreen() {

  const [name,setName]=useState("Arianit");
  const [arr,setArr]=useState(["Arianit","Malsor","Lis"]);
  const [session,setSession]=useState({number:3,title:"State"});
  const [current,setCurrent]=useState(true);

  const updatest=()=>
    {
      setName("Ari");
      setSession({number:4,title:"Flatlist"});
      setCurrent(false);
    }
    const updatest1=()=>
      {
        setName("Arianit");
        setSession({number:3,title:"State"});
        setCurrent(true);
      }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name} </Text>
      <Text style={styles.text}>Day {session.number} and lesson is {session.title} </Text>
      <Text style={styles.text}>{current ? "current  day":"next day"} </Text>
      <Button color="red" title="Update State" onPress={updatest}></Button> 
      <Button color="red" title="Refresh" onPress={updatest1}></Button> 

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "red",
  },
});