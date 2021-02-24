import React,{useState}from 'react';
import {View,Text,Platform,TouchableOpacity,Button,FlatList,StyleSheet} from 'react-native';

import Page1 from "../pages/unit1/page1";
import Page2 from "../pages/unit2/page2";
import Page3 from "../pages/unit3/page3";
import Page4 from "../pages/unit4/page4";
import Page5 from "../pages/unit5/page5";
import Page6 from "../pages/unit6/page6";
import {Unites} from "../data/data";


const UnitDetailScreen=(props)=>{
     const data=[0,Page1,Page2,Page3,Page4,Page5,Page6];                 
     const catId=props.navigation.getParam("id");

     const selectedUnit=Unites.find(data=>data.id==catId);
     const UnitNUmber=data[catId]
     return(
     <View style={{backgroundColor:"white"}}>
        <Text style={styles.title}>{selectedUnit.name}</Text>
        <UnitNUmber navigation={props.navigation}></UnitNUmber>
         
      </View> 
     
    )
}

const styles = StyleSheet.create({
title:{
 fontSize:25,
 textAlign: 'center'
}
})


export default UnitDetailScreen;