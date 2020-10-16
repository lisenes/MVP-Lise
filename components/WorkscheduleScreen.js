import React, { Component } from 'react'
import { View, Text, StyleSheet,Button, Image } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';

export default class DocumentScreen extends Component {
    static navigationOptions= {
        title:'Workschedule'
    }

    GoToSettings = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Settings');
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}> WORK SCHEDULE </Text>
                <Text style={styles.text1}> Choose a date: </Text>
                <Image style={styles.logo} source={require('./Images/workschedule-kopi.png')}/>
                <Button color={'white'} title="Confirm" onPress={this.GoToSettings} />
                <Button color={'white'} title="Go back" onPress={this.GoToSettings} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:200,
        paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#17191f',
        height:'100%'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10,
        paddingTop: 20,
        fontFamily:'AppleSDGothicNeo-Bold',
    },
    text1: {
        fontSize: 18,
        color: 'white',
        paddingBottom: 0,
        fontFamily:'AppleSDGothicNeo-Bold',
    },
    logo: {
        height: 420,
        width: 320,
    }
});