import { StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'



const App = () => {

const [number, setNumber]= useState(0)

//-------------------------------
const handleReset = ()=> {
  setNumber(0)
}
//-------------------------------

const handleAdd = ()=> {
   setNumber(number +1)
   if(number == 9999){
     setNumber(0)
   }
}
//-------------------------------






  return (
    <LinearGradient  style={styles.container}
                     colors={["#2193b0", "rgba(109, 213, 237, 0.4)"]}>
 
       <View style={styles.topContainer}>

          <Image style={styles.image}
                source={require("./assets/zikirmatik.png")}/>

            <View style={styles.screenContainer}>
              <Text style={styles.screenText}>{number}</Text>
            </View>      

          <Pressable style={styles.resetContainer}
                    onPress={handleReset}>
              <Text style={styles.resetText}></Text>
          </Pressable>

          
          <Pressable style={styles.addContainer}
                    onPress={handleAdd}>
            <Text></Text>
          </Pressable>
          
        </View>

    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"tomato",

  },
  topContainer: {
    alignItems:"center",
    justifyContent:"center",
  },
  resetContainer: {
    borderWidth:2,
    borderColor:"lime",
    bottom:360,
    left:100,
    width:50,
    padding:10,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",

  },
  resetText: {
    color:"white",
  },
  screenContainer: {
    borderWidth:2,
    borderRadius:10,
    borderColor:"lime",
    width:290,
    paddingVertical:18,
    bottom:425,
    alignItems:"center",
    justifyContent:"center",
  },
  addContainer: {
    borderWidth:2,
    borderColor:"lime",
    bottom:345,
    alignItems:"center",
    justifyContent:"center",
    width:140,
    paddingVertical:40,
    borderRadius:50,
  },
  screenText: {
    fontSize:60,
    fontWeight:"bold",
    alignSelf:"flex-end",
  },
  image: {
    marginTop:250,
  },
  backImage: {
    flex:1,
    justifyContent:"center",
  }
})