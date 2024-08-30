import React from 'react';
import { View, Text, StyleSheet,ViewStyle,TouchableOpacity,Image} from 'react-native';

interface HeaderProps {
  style?: ViewStyle;
}
const Header: React.FC<HeaderProps> = ({ style }) => {
  return (
    <View style={styles.generalBack}>
       <View style={styles.rowContainer}>
        <Image source={require('../public/logo.png')} style={styles.imagen}/> 
        <Text style={styles.title}> PriorityPal</Text>

        <TouchableOpacity style={styles.button}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </TouchableOpacity>
        </View>

      <View style={styles.capsula}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  generalBack: {
    maxHeight:80,
    flex: 1,
    backgroundColor: '#6f78fd',
  },
  capsula: {
    marginTop: '20%',
    height: '30%',
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    backgroundColor: 'white',
    transform: [{ scaleX: 2 }],
    overflow: 'hidden',
  },
  imagen:{
    width: 35, 
    height: 35,
    marginBottom:10,

  },
  title:{
    fontFamily:'Montserrat',
    color:'white',
    paddingRight:60,
    fontSize: 20,
    paddingBottom:15,
    paddingLeft:10,
  },
  rowContainer:{
    flexDirection:'row',
    paddingTop:20,
    paddingLeft:30,
    marginBottom:20,
    alignItems: 'center'

  },
  button: {
    padding: 10, 
    paddingLeft:100,
    marginBottom:20,
    

  },
  line: {
    width: 30, 
    height: 4,
    backgroundColor: 'white', 
    marginVertical: 2, 
    borderRadius: 2, 
    
  },


  
});

export default Header;
