import React from 'react';
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "./components/HomeScreen";
import { createAppContainer } from 'react-navigation';
import SettingStack from "./components/StackNavigation";
import {Image,StyleSheet} from "react-native-web";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import {createStackNavigator} from "react-navigation-stack";
import { MaterialIcons } from '@expo/vector-icons';
import WorkscheduleScreen from "./components/WorkscheduleScreen";


const styles = StyleSheet.create({
  tabIcon: {
    width: 32,
    height: 32,
  },
});

// Denne TabNavigator holder styr på det yderste niveau af navigation i appen.
const TabNavigator = createBottomTabNavigator(
    {
      /*Tilføj routes*/
      Home: {
        /*HVilket view skal loades*/
        screen: HomeScreen,
        /*Instillinger til navigation*/
        navigationOptions: {
          /*Navn*/
          tabBarLabel:"Register",
          /*Ikon*/
          tabBarIcon: ({ tintColor }) => (
              <Entypo name="home" size={24} color={'white'} />
          )
        },
      },
      /*Navn på Route*/
      Settings: {
        screen: SettingStack,
        navigationOptions: {
          tabBarLabel:"Profile",
          tabBarIcon: ({ tintColor }) => (
              <Octicons name="person" size={24} color="white" />
          )
        },
      },
      Workschedule:{
        screen: WorkscheduleScreen,
        navigationOptions: {
          tabBarLabel:"Work Schedule",
          tabBarIcon:({tintColor}) => (
              <MaterialIcons name="schedule" size={24} color="white" />
          )
        }
      }
    },

    /*Generelle label indstillinger*/
    {
      tabBarOptions: {
        showIcon:true,
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        activeBackgroundColor:'#17191f',
        inactiveBackgroundColor:'#17191f',
        size:1000,

      },

    }

)


export default createAppContainer(TabNavigator)