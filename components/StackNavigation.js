import {createStackNavigator} from "react-navigation-stack";
import ProfileScreen from "./NavigationComponents/ProfileScreen";
import DocumentScreen from "./NavigationComponents/DocumentScreen";

/*Her har vi stack navigationen*/
const SettingStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Settings: {
            screen: ProfileScreen,
            navigationOptions: {
                header:null,
            }
        },
        Details:{
            screen: DocumentScreen,
            navigationOptions: {
                header:null,
            }
        }
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Settings',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default SettingStack
