import React, { useState, useEffect } from "react";
 import { View, StyleSheet, Text, Dimensions } from "react-native";
 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");
 
 
 const App = () => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const [mode, setMode] = useState("portrait");

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
   
 return (
    
<View style={mode === "portrait" ? styles.container : styles.container2}><Text>Window Dimensions: height: {dimensions.window.height}, width: {dimensions.window.width} screen: {dimensions.screen.width}
mode ? {mode}</Text></View>
   );
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "yellow",
   },
   container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "light blue",
  }
 });
 export default App;