import React,{Component} from 'react';
import {View,TextInput,StyleSheet,ActivityIndicator,AsyncStorage} from 'react-native';

export default class AuthLoading extends Component<Props>{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this._bootstrapAsync();
    }

    _bootstrapAsync=async()=>{
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken?'LoggedIn':'LoggedOut');
    }



    render(){
        return(
            <View><ActivityIndicator size={"large"} /></View>
        );
    }
}