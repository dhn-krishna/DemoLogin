import {StyleSheet,Dimensions} from 'react-native';
let winSize = Dimensions.get('window');

export const loginStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        paddingBottom:40
    },
    headingText:{
        fontWeight:'bold',
        fontSize:20
    },
    usernameText:{ 
        height: 40, 
        width: winSize.width/1.5, 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 10,  
        marginBottom: 20, 
        fontSize: 18 
    },
    passwordText:{ 
        height: 40, 
        width: winSize.width/1.5, 
        borderColor: 'gray', 
        borderWidth: 1, 
        borderRadius: 10,  
        marginBottom: 20, 
        fontSize: 18
    }
})  

export const DashboardStyle = StyleSheet.create({
    container:{
        backgroundColor:'#c0f963'
    },
    
    headingText:{
        alignSelf:'center',
        fontWeight:'bold'
    },
    rowContent:{ 
        flexDirection:'row',
        justifyContent:'space-between' 
    }
})  