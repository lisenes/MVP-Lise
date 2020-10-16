import React, { Component } from 'react'
import { View, Text, StyleSheet,Button, Image } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';

export default class DocumentScreen extends Component {
    static navigationOptions= {
        title:'Documents'
    }

    GoToProfile = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation"
        // som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Settings');
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}> DOCUMENTS </Text>
                <Text style={styles.text1}>Download and read the following documents:
                    After you have read, make sure to accept the conditions.</Text>
                <Text/>
                <Text/>
                <Image style={styles.logo} source={require('../Images/pdf-kopi.png')}/>
                <Ionicons name="ios-backspace" size={24} color="white" onPress={this.GoToProfile}/>
                <Button color={'white'} title="Back" onPress={this.GoToProfile} />
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
        paddingBottom: 50,
        fontFamily: 'AppleSDGothicNeo-Bold',
    },
    text1: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        fontFamily:'AppleSDGothicNeo-Bold',
    },
    logo: {
        height: 200,
        width: 390,
    },
    button: {
        alignSelf: 'flex-end',
        position: 'absolute',
        left: 35,
    }
});
