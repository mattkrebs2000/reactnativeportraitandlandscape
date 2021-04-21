import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Button,
    ScrollView,
    contentContainerStyle,
    Linking,
    Modal, 
    Pressable,
    Dimensions
  } from "react-native";
  import { ScaledSheet } from "react-native-size-matters";

 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");


 
 
 const App = () => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const [mode, setMode] = useState("portrait");
   const [height, setHeight] = useState(0);
   const [width, setWidth] = useState(0);

   const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/main.jpg",
  };
  const header = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/menu.png",
  };


   const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 
      
    } else {
      setMode("portrait") 
     
    }
    console.log(mode)
   };

 const onChange = ({ window, screen }) => {
     setDimensions({ window, screen });
   };

 useEffect(() => {
     Dimensions.addEventListener("change", onChange);

     return () => {
       Dimensions.removeEventListener("change", onChange),
      modeMaker();
     };

   });
   useEffect(() => {
      setWidth(Dimensions.get('window').width),
      setHeight(Dimensions.get('window').height)
   }, [mode])
   
 return (
    
    <View style={mode === "portrait" ? styles.container : styles.container2}>
    <View style={[styles.fixed]}>
      <ImageBackground source={image} style={styles.image, {width: width, height: height}} resizeMode={'stretch'} ></ImageBackground>
    </View>
    <ScrollView style={[styles.fixed, {backgroundColor: 'transparent'}]}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GoBlue</Text>
    <Button color="white" title="Go to Blue" onPress={() => navigation.navigate("Blue")} />
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GoBlue</Text>
    <Button color="white" title="Go to Green" onPress={() => navigation.navigate("Green")} />
  </View>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text>GoBlue</Text>
  <Button color="white" title="Go to Yellow" onPress={() => navigation.navigate("Yellow")} />
</View>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<Text>GoImageBackground</Text>
<Button color="white" title="Go to Image" onPress={() => navigation.navigate('Root', { screen: 'Imagepage' })} />
</View>
  
     
    </ScrollView>
  </View>
  
  );
 }

 export default App; 
 
 const styles = StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
    },
    container2: {
        position: 'relative',
        flex: 1,
      },
    fixed: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      flex: 1,
      flexDirection:"column",
      backgroundColor:"red",
    },
    image: {
        flex: 1,
    },
  
   
  
  // height: 100,
  //     width: Dimensions.get("window").width, //for full screen
  //     resizeMode: "stretch",
  //     justifyContent: "center"
    
  });
