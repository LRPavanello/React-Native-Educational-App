import { StyleSheet } from 'react-native'
import Colors from '../Shared/Colors'

const styles = StyleSheet.create({
    containerTop:{
     paddingTop:40,
     marginTop:-20,
     backgroundColor: '#fff', 
     borderTopRightRadius: 20, 
     borderTopLeftRadius: 20,
    },
    welcomeText:{
     fontSize: 35,
     textAlign: 'center',
     fontWeight:'Bold',
    },
    textSignup:{
     textAlign:'center',
     marginTop:80,
     fontWeight:'Bold',
     fontSize: 20, 
    },
    buttonGoogle:{
     textAlign:'center',
     marginTop:60,
     backgroundColor:Colors.primary,
     padding:10,
     margin:30,
     display:'flex',
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     borderRadius:10,
    },
    textGoogle:{
     color:'#fff',
     fontWeight:'Bold',


    }
 })
export default styles