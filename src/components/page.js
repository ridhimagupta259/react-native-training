import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Page extends React.Component {
  constructor(props) {
    super(props);
    
  }
  onChangeText(text){
   
  }

  
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.child}>
          <Text style={{fontSize:30,color:'white',marginTop:70,alignSelf:"flex-start",marginLeft:20}}>Recharge</Text>
         </View>

       <View style={styles.child2}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'black'}}>Enter Amount</Text>
        <Text style={{fontSize:15,color:'#9494b8'}}>Recommended Recharge</Text>
         <Text style={{fontSize:50,color:'#000',fontWeight:'bold',}}>₹999</Text>
         <Text style={{textAlign:'center',color:'#fff',backgroundColor:'#ff0066',fontSize:15,fontWeight:"bold",padding:15,margin:20}}>Proceed to payment</Text>
         
       </View>
       <Text style={{marginTop:50,fontSize:20,marginLeft:20}}>Recommended Plans</Text>
       <Text style={{marginTop:-23,marginLeft:300,color:'#007acc'}}>View All Plans ></Text>
       <View style={styles.child3}>
       <Text style={{fontSize:25,color:'#000',marginTop:20,alignSelf:"flex-start",marginLeft:20}}>Unlimited Data</Text>
       <Text style={{fontSize:12,color:'#9494b8',marginLeft:20,padding:5}}>VALIDITY        |  SPEED</Text>
       <Text style={{fontSize:12,color:'#9494b8',marginLeft:25,padding:0}}>30 DAYS         |  50 MBPS</Text>
       <Text style={{textAlign:'center',color:'#fff',backgroundColor:'#ff0066',marginLeft:250,marginTop:-50,marginRight:20,height:30,padding:5,fontSize:15,fontWeight:"bold"}}>₹ 1249</Text>

       
       <Text style={{fontSize:25,color:'#000',marginTop:80,alignSelf:"flex-start",marginLeft:20}}>Unlimited Data</Text>
       <Text style={{fontSize:12,color:'#9494b8',marginLeft:20,padding:5}}>VALIDITY        |  SPEED</Text>
       <Text style={{fontSize:12,color:'#9494b8',marginLeft:25,padding:0}}>90 DAYS         |  100 MBPS</Text>
       <Text style={{textAlign:'center',color:'#fff',backgroundColor:'#ff0066',marginLeft:250,marginTop:-50,marginRight:20,height:30,padding:5,fontSize:15,fontWeight:"bold"}}>₹ 1800</Text>


       </View>
      </View>
    );
  }
  componentDidMount() {
    //console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'flex-start',
    //justifyContent: 'center',
  },
  child:{

    //height: 50,
    width:'100%',
    backgroundColor: '#600080', 
    alignItems:"center",
    flex: 0.25,
    
    
  },
  child2:{
    backgroundColor:'white',
    flex: 0.25,
    marginTop: -40,
    width:'90%',
    marginLeft:20,
    alignItems:'center'

  },
  child3: {
    backgroundColor:'white',
    flex:0.35,
    width:'90%',
    marginLeft:20,
    marginTop:30,
    alignItems:'flex-start'



  }
});

export default Page;