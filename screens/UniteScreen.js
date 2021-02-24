import React from 'react';
import {View,Text,Platform,TouchableOpacity,TouchableNativeFeedback,Button,FlatList,StyleSheet} from 'react-native';
import {Unites} from "../data/data"

const UniteScreen=(props)=>{

const renderUnites=(itemData)=>{
    let TouchableCmp=TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version>=21){
        TouchableCmp=TouchableNativeFeedback;
    }
      return(
          <View style={styles.gridItem}>
          <TouchableCmp onPress={()=>{
           props.navigation.navigate({routeName:"Detail",params:{
               id:itemData.item.id
           }})
            
          }}>
          <View  style={{...styles.container ,...{backgroundColor:itemData.item.color}}}><Text style={styles.title} numberOfLines={2}>{itemData.item.name}</Text>
          </View>
          </TouchableCmp>
          </View>
      );
  
    
}
    return(
       <FlatList
       data={Unites}
       keyExtractor={(item,index)=>item.id}
       renderItem={renderUnites}
       numColumns={2}
       />
    )
}

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:190,
        borderRadius:10,
        overflow:Platform.OS==="android" && Platform.Version>=21 ?  "hidden":"visible",
        
        elevation:3,
    },

  container:{
flex:1,
borderRadius:10,
padding:15,
shadowColor:"black",
shadowOpacity:0.26,
shadowOffset:{width:0,height:2},
shadowRadius:10,
justifyContent:"center"

  },
  title:{
  
    fontSize:29,
    textAlign:"center",
    
  }
});

export default UniteScreen;