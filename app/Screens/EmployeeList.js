import React,{Component} from 'react';
import {View,Text,FlatList,AsyncStorage,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DashboardStyle} from '../assets/css/Customstyle'
const EmployeeListData = require('../Jsondata/Emloyeedata.json');


export default class EmployeeList extends Component<Props>{
    static navigationOptions = ({ navigation }) => ({
        header:<View style={{backgroundColor:'grey',flexDirection:'row',justifyContent:'space-between',padding:10}}>
                    <View style={{alignContent:'flex-start'}}>
                        <TouchableOpacity onPress={navigation.getParam("Logout")} style ={{flexDirection:'row'}}>
                        <Icon name="logout" size={18} color={'white'} /><Text style={{color:'white'}}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{alignSelf:'center'}}><Text style={{color:'white'}}>Dashboard</Text></View>
                </View>
    })

    constructor(props){
        super(props);
        this.state={
            employeeData:[]
        }
    }

    componentDidMount(){
        console.log('EmployeeList',EmployeeListData);
        this.props.navigation.setParams({ Logout: this._onLogOut});
        this.setState({employeeData:EmployeeListData.user});
    }

    _onLogOut= () => {
         AsyncStorage.removeItem('userToken');
         this.props.navigation.navigate('LoggedOut');
    }

    _renderItem=({item})=>(
        <View style={{padding:10}}>
        <View style={DashboardStyle.container}>
            <View style={DashboardStyle.rowContent}>
                <View>
                    <Text>Name :{item.name}</Text>
                </View>
                <View>
                    <Text>Email :{item.email}</Text>
                </View>
            </View>
            <View style={DashboardStyle.rowContent}>
                <View>
                    <Text>Age :{item.age}</Text>
                </View>
                <View>
                    <Text>Gender :{item.gender}</Text>
                </View>
                <View>
                    <Text>Phone :{item.phoneNo}</Text>
                </View>
            </View>
            
        </View>
        </View>
    )

    render(){
        return(
            <View>
                <Text style={DashboardStyle.headingText}>EmployeeList</Text>
                <FlatList 
                    data={this.state.employeeData}
                    keyExtractor={(item, index) => index.toString()} 
                    renderItem={this._renderItem}
                    />
            </View>
        );
    }
}