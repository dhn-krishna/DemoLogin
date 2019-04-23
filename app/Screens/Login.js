import React,{Component} from 'react';
import {View,Text,TextInput,Button,Alert,AsyncStorage} from 'react-native';
import {loginStyle} from '../assets/css/Customstyle'
const LoginData = require('../Jsondata/Login.json');

export default class Login extends Component<Props>{
    static navigationOptions = {
        header: null,
        }; 

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    componentDidMount(){
        console.log('Json Login',LoginData.password);
    }

    _onLogin(){
        var username = this.state.username;
        var password = this.state.password;
        if(username == ""){
            Alert.alert('Please enter username');
        }
        else if(password == "")
        {
            Alert.alert('Please enter password');
        }
        else{
            if(LoginData.username == this.state.username && LoginData.password == this.state.password){
                let storeLoggedData ={
                    username:username
                };
                AsyncStorage.setItem('userToken','1');
                this.props.navigation.navigate('LoggedIn');
            }
            else{
                Alert.alert('Invalid username or password');
            }
        }
    }

    render(){
        return(
            <View style={loginStyle.container}>
                    <View style={loginStyle.heading}><Text style={loginStyle.headingText}>Login Page</Text></View>
                    <View>
                        <TextInput 
                            style={loginStyle.usernameText}
                            placeholder={'Username'} 
                            onChangeText={(username)=>this.setState({username})} 
                            />
                    </View>
                    <View>
                        <TextInput 
                            style={loginStyle.passwordText}
                            placeholder={'Password'} 
                            onChangeText={(password)=>this.setState({password})}
                            secureTextEntry={true} 
                            />
                    </View>
                    <View><Button
                            onPress={()=>{this._onLogin()}}
                            title="Login"
                            color="#841584"
                            
                            />
                    </View>
            </View>
        );
    }


}