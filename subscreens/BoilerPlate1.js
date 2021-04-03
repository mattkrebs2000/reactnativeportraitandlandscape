import React, { useEffect, useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
 
const App = () => {

    const [OrientationStatus, setOrientationStatus] = useState("");
    const [Height_Layout, setHeight_Layout] = useState();
    const [Width_Layout, setWidth_Layout] = useState();

    useEffect(() => {
        DetectOrientation();
    }, [Height_Layout])

 const DetectOrientation = () => {
    if(Width_Layout > Height_Layout)
    {
        setOrientationStatus("Landscape Mode");
    }
    else{
      setOrientationStatus("Portrait Mode");
    }
  }
 
 

   return (
 
     <View style={styles.MainContainer} onLayout={(event) => {
        setHeight_Layout(event.nativeEvent.layout.height),
        setWidth_Layout(event.nativeEvent.layout.width)}}>
                                                                 
     {OrientationStatus === "Landscape Mode" ? <Text style={styles.TextStyle}> { OrientationStatus } Width:{Width_Layout} Height:{Height_Layout}</Text> : <Text style={styles.TextStyle2}> { OrientationStatus }  Width:{Width_Layout} Height:{Height_Layout}</Text>}
 
     </View>
   
  );
 
};
 
 
const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   margin: 10
 },
 
 TextStyle :{
  fontSize : 30,
  color : 'blue'
 },
 TextStyle2 :{
  fontSize : 40,
  color : 'red'
 }
 
});

export default App;
