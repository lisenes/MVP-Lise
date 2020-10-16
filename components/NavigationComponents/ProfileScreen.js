import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";



export default class ProfileScreen extends Component {
    static navigationOptions= {
        title:'Profile'
    }

    handleGoToDetails = (route) => {
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Details');
    };


    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../Images/unnamed-kopi.png')}/>
                <Text style={styles.text}> Volunteer 1 </Text>
                <Button color={'white'} title="Edit profile" />
                <Button color={'white'} title="Documents" onPress={this.handleGoToDetails} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderColor: '#17191f',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#17191f',
        height:'100%'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        paddingTop:20,
        paddingBottom: 100,
        fontFamily:'AppleSDGothicNeo-Bold',
    },
    button:{
        color: 'white',
        fontSize: 14,
        paddingTop: 10,
    },
    logo: {
        height: 200,
        width: 200,
        borderRadius: 200/2,
    }
});
