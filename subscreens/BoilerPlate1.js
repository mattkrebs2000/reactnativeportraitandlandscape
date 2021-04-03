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
                                                                 
     {OrientationStatus === "Landscape Mode" ? <Text style={styles.TextStyle}> { OrientationStatus } Width:{Width_Layout} Height:{Height_Layout}</Text> : <Text style={styles.TextStyle}> { OrientationStatus }  Width:{Width_Layout} Height:{Height_Layout}</Text>}
 
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
  fontSize : 20,
  color : '#000'
 }
 
});

export default App;


// import React, { Component } from 'react';
 
// import { StyleSheet, View, Text } from 'react-native';
 
// class App extends Component {
 
//   constructor(){
 
//     super();
 
//     this.state = {
      
//         OrientationStatus : '',
 
//         Height_Layout : '',
 
//         Width_Layout : '',
      
//          }
//   }
 
//   componentDidMount(){
 
//     this.DetectOrientation();
 
//   }
 
//   DetectOrientation(){
 
//     if(this.state.Width_Layout > this.state.Height_Layout)
//     {
 
//       // Write Your own code here, which you want to execute on Landscape Mode.
 
//         this.setState({
//         OrientationStatus : 'Landscape Mode'
//         });
//     }
//     else{
 
//       // Write Your own code here, which you want to execute on Portrait Mode.
 
//         this.setState({
//         OrientationStatus : 'Portrait Mode'
//         });
//     }
 
//   }
 
 
//  render() {
   
//    return (
 
//      <View style={styles.MainContainer} onLayout={(event) => this.setState({
//                                                                             Width_Layout : event.nativeEvent.layout.width,
//                                                                             Height_Layout : event.nativeEvent.layout.height
//                                                                            }, ()=> this.DetectOrientation())}>
                                                                           
//      {this.state.OrientationStatus === "Landscape Mode" ? <Text style={styles.TextStyle}> { this.state.OrientationStatus } </Text> : null}
 
//      </View>
   
//   );
//  }
// }
// export default App;
 
// const styles = StyleSheet.create({
 
//  MainContainer: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    margin: 10
//  },
 
//  TextStyle :{
//   fontSize : 20,
//   color : '#000'
//  }
 
// });