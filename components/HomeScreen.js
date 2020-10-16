import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions={
        title:'Home'
    }

    /*Init value*/
    state = {Børge:''}

    /*Lav reference, så val kan sættes*/
    subtitle = React.createRef();

    /*Hent text input med text prop felt og sæt det i state*/
    handleTextChange = (text) => {
        this.setState({Børge: text})
    }

    /*Sæt inputVal til vores subTitle reference i BoxComponenten via Set*/
    handleButtonPressing = (route)=>{
        this.props.navigation.navigate('Settings');
        /*Se om knappen virker console.log*/
        /*console.log(this.state.Børge)
        this.subtitle.current.setTitel(this.state.Børge)*/

    };

    render(){
        return (
            <View style={styles.container}>

                <Text style={styles.text}> Welcome to FestiVol </Text>

                <Image style={styles.logo} source={require('./Images/logo-kopi.png')}/>

                <Text style={styles.text1}> Please fill out the registration form: </Text>

                <Text style={styles.inputTitle}>Name: </Text>
                <TextInput style={styles.textInput}
                           placeholder='Type your name here' placeholderTextColor={'white'}
                           onChangeText={this.handleTextChange}
                />
                <Text style={styles.inputTitle}>E-mail: </Text>
                <TextInput style={styles.textInput}
                           placeholder='Type your e-mail here' placeholderTextColor={'white'}
                           onChangeText={this.handleTextChange}
                />
                <Text style={styles.inputTitle}>Tlf-nr: </Text>
                <TextInput style={styles.textInput}
                           placeholder='Type your tlf-nr here' placeholderTextColor={'white'}
                           onChangeText={this.handleTextChange}
                />
                <Text style={styles.inputTitle}>Address: </Text>
                <TextInput style={styles.textInput}
                           placeholder='Type your address here' placeholderTextColor={'white'}
                           onChangeText={this.handleTextChange}
                />
                <Text style={styles.inputTitle}>Birthdate: </Text>
                <TextInput style={styles.textInput}
                           placeholder='Type your birthdate here' placeholderTextColor={'white'}
                           onChangeText={this.handleTextChange}
                />

                <Button style={styles.button} onPress={this.handleButtonPressing} title='REGISTER' color={'#FFFFFF'}/>

                <Text style={styles.textInfo}>If approved as a volunteer, username for login is sent to e-mail address. </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#17191f',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#17191f',
    },
    text: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        fontFamily:'AppleSDGothicNeo-Bold',
    },

    button:{
        color: '#17191f',
        fontSize: 14,
        paddingTop: 20,
        marginHorizontal:30,
        backgroundColor: 'white',
        borderRadius: 4,
        height: 52,
        alignItems:'center',
        justifyContent: 'center',
        fontFamily:'AppleSDGothicNeo-Bold',

    },
    text1: {
        fontSize: 18,
        paddingBottom: 10,
        paddingTop: 5,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'AppleSDGothicNeo-Bold',
    },

    inputTitle: { //For input titlers above text fields
        color: "#FFFFFF",
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: 'bold',
        paddingTop: 5,
        fontFamily:'AppleSDGothicNeo-Bold',
    },

    textInput:{
        alignItems:'stretch',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 35,
        borderColor:'#FFFFFF',
        fontSize:14,
        fontFamily:'AppleSDGothicNeo-Thin',
        color: 'white',
    },

    textInfo:{
        alignItems:'stretch',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 10,
        borderColor:'#FFFFFF',
        fontSize:11,
        fontFamily:'AppleSDGothicNeo-Thin',
        color: 'white',
        paddingBottom: 5,
    },

    logo: {
        height: 140,
        width: 140,
        borderRadius: 140/2,
    }
});
