import React,{useState}from 'react';
import {View,Text,Platform,TouchableOpacity,Button,FlatList,StyleSheet} from 'react-native';

import Questions from "../questions/question";

import {Unites} from "../data/data";


const QuestionDetailScreen=(props)=>{
              
     const catId=props.navigation.getParam("id");

     const selectedUnit=Unites.find(data=>data.id==catId);
  
     return(
     <View style={{backgroundColor:"white"}}>
        <Text style={styles.title}>{selectedUnit.name}</Text>
        <Questions navigation={props.navigation}></Questions>
         
      </View> 
     
    )
}

const styles = StyleSheet.create({
title:{
 fontSize:25,
 textAlign: 'center'
}
})


export default QuestionDetailScreen;