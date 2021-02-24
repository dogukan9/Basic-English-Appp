import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"
import UniteScreen from "../screens/UniteScreen";
import QuestionScreen from "../screens/QuestionScreen";
import QuestionDetailScreen from "../screens/QuestionDetailScreen";
import UnitDetailScreen from "../screens/UnitDetailScreen"
import { Icon } from 'react-native-elements'





const defaultStartNavigation={
  headerStyle: {
      backgroundColor:"purple"

  },
 
  
  headerTintColor:"white", 
 
};
const UnitesNavigator=createStackNavigator({
  Unites:{
      screen:UniteScreen,
  },
  Detail:{
     screen:UnitDetailScreen
  }
 
},{
  defaultNavigationOptions:defaultStartNavigation
});


const QuestionNavigator=createStackNavigator({
 
  Questions:QuestionScreen,
  question:QuestionDetailScreen
 
},{
  defaultNavigationOptions:defaultStartNavigation
});


const tabScreens={
  Unites:{
    screen:UnitesNavigator,
    navigatonOptions:{
      tabBarIcon:(tabInfo)=>{
        return (
         <View> <Icon
          name='sc-telegram'
          type='evilicon'
          color="black"
        /></View>
          ) },
      tabBarColor:"orange",
    }
  },
  Questions:{
    screen:QuestionNavigator,
    navigatonOptions:{
    
      tabBarIcon:(tabInfo)=>{
        return (
         <Icon 
          name='sc-telegram'
          type='evilicon'
          color="black"
        />
          )
      }
    }
  }
}
const tabs=Platform.OS==="ios"
?createMaterialBottomTabNavigator(tabScreens,{
  activeColor:"black",
    shifting:true,
}):
createBottomTabNavigator(tabScreens, 
  {
      tabBarOptions:{
      activeTintColor:"orange",
      
      }
  }
  );
  
export default createAppContainer(tabs);
