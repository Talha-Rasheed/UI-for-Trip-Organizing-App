import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView,ImageBackground, ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'react-native-linear-gradient';

import Destination from './Destination'
import Home from './Home'

const theme={
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        border:"transparent",
    }
}

function MainPage({navigation}){
    return(
    <SafeAreaView style={styles.container}>
	    <View style={{alignItems:'center'}}>
		      <Image
			        source={{uri:'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
					style={{height:150,width:300,marginTop:10,borderRadius:20}}
			  />
		</View>

		<View style={{flex:.5,marginTop:1,backgroundColor:'#68a0cf',marginLeft:50,marginRight:50,marginTop:5,borderRadius:20}}>
		      <View style={{marginBottom:15,marginLeft:45,marginTop:5}}>
					<Text style={{color:'#fff',fontWeight:'bold',fontSize:17}}>Choose your destination</Text>
			  </View>
              <View style={{marginBottom:15,marginLeft:85}}>
					<Text style={{color:'#fff',fontWeight:'bold',fontSize:17}}>Book a ticket</Text>
			  </View>
              <View style={{marginBottom:7,marginLeft:68}}>
					<Text style={{color:'#fff',fontWeight:'bold',fontSize:17}}>Explore the nature</Text>
			  </View>
			  <TouchableOpacity style={{marginRight:70,
                                        marginLeft:30,
                                        marginTop:10,
                                        paddingTop:20,
                                        paddingBottom:20,
                                        backgroundColor:'white',
                                        borderRadius:20,
	                                    alignItems:'center',
	                                    width:200,
									   }}
                             onPress={()=>navigation.navigate("MainPage2")}
              >
           
                      <Text style={{color:'skyblue'}}>GET STARTED !</Text>

              </TouchableOpacity>
		</View>

        <View style={{flex:.48,marginTop:5,backgroundColor:'#fff',flexDirection:'row'}}>
		      <Image
			        source={{uri:'https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
					style={{height:180,width:170,borderRadius:20,marginTop:5,marginLeft:7,marginRight:5}}
			  />

              <Image
			        source={{uri:'https://images.pexels.com/photos/4140995/pexels-photo-4140995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
					style={{height:180,width:170,borderRadius:20,marginTop:5}}
			  />

		</View>

	</SafeAreaView>
    );
}

function Options({navigation}){
    return(
    <SafeAreaView style={styles.container}>
    <ScrollView>
		      <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            height: 566,
            width: 360,
            position: 'relative',
            }}
      >

		<View style={{flex:.7,backgroundColor:'#fff',margin:50,borderRadius:20,borderWidth:1.5}}>
		      <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:10}}>

        <TextInput
      label="User Name"
    />
      </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:2,marginTop:5}}>

        <TextInput
      label="Password"
    />
      </View>
			  <TouchableOpacity style={{marginRight:70,
                                        marginLeft:30,
                                        marginTop:10,
                                        paddingTop:20,
                                        paddingBottom:20,
                                        backgroundColor:'sandybrown',
                                        borderRadius:20,
	                                    width:200,
									   }}
                             onPress={()=>console.log("Enter Pressed")}
                             onPress={()=>navigation.navigate("AirplaneBusTrain")}
              >
           
                      <Text style={{color:'black',fontWeight:'bold',marginLeft:83}}>Enter</Text>

              </TouchableOpacity>
              <View style={{flex: .05, backgroundColor:'white',alignItems: 'center',marginLeft:60,marginRight:60,marginBottom:20}}>
    <Text style={{ fontSize: 10, padding:8, color:'grey'}}>-------------   OR   -------------</Text>
    </View>

    <TouchableOpacity style={{marginRight:70,
                                        marginLeft:30,
                                        marginTop:10,
                                        paddingTop:20,
                                        paddingBottom:20,
                                        backgroundColor:'sandybrown',
                                        borderRadius:20,
	                                    width:200,
									   }}
                             onPress={()=>console.log("Create an Account Selected")}
                             onPress={()=>navigation.navigate("Account")}
              >
           
                      <Text style={{color:'black',fontWeight:'bold',marginLeft:45}}>Create an Account</Text>

              </TouchableOpacity>

              <View style={{flex: .5, backgroundColor:'white',alignItems: 'center',marginLeft:60,marginRight:60,marginTop:20,marginBottom:20}}>
    <Text style={{ fontSize: 10, padding:8, color:'white'}}></Text>
    </View>
   
    
        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              alignItems:'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('Facebook Selected');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>Facebook</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="google"
                  onPress={() => {
                    alert('G-Mail Selected');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>G-Mail</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    alert('Twitter Selected');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>Twitter</Text>
              </View>
            </View>
          </View>
          </View>

		</View>

        </ImageBackground>
        </ScrollView>
	</SafeAreaView>
    );
}

function Next({navigation}){
    return(
    
        <View style={styles.container}>
        <ScrollView>
           <Image
            source={{ uri: "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073__340.png" }}
            style={{
            height: 200,
            width: 315,
            borderRadius:20,
            marginLeft:24,
            marginTop:20,
            position: 'relative',
            }}
           />
           <View style={{flex:.35,marginTop:1,backgroundColor:'#fff',marginLeft:30,marginRight:30,marginTop:5,borderRadius:20,flexDirection:'row',justifyContent:'center'}}>
        <View style={{marginTop:5}}>
			  <TouchableOpacity style={{marginRight:10,
                                        marginLeft:10,
                                        marginTop:10,
                                        paddingTop:20,
                                        paddingBottom:20,
                                        backgroundColor:'dodgerblue',
                                        borderRadius:20,
	                                    width:80,
									   }}
                                       onPress={()=>console.log("Airplane Selected")}
                                       //onPress={()=>navigation.navigate("forAirplane")}

              >
           
               <Icon
                                       containerStyle={{paddingLeft:7}}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-airplane-outline" : "airplane-outline"}
                                   />
                      

              </TouchableOpacity>
              <Text style={{color:'black',fontSize:15,fontWeight:'bold',marginLeft:25,marginTop:5}}>Airplane</Text>
		</View>

        <View style={{marginTop:5}}>
			  <TouchableOpacity style={{marginRight:10,
                                        marginLeft:10,
                                        marginTop:10,
                                        paddingTop:20,
                                        paddingBottom:20,
                                        backgroundColor:'orange',
                                        borderRadius:20,
	                                    alignItems:'center',
	                                    width:80,
									   }}
                                       onPress={()=>console.log("Bus Selected")}
                                       //onPress={()=>navigation.navigate("forBus")}

              >
           
               <Icon
                                       containerStyle={{paddingLeft:5}}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-bus-outline" : "bus-outline"}
                                   />
                      

              </TouchableOpacity>
              <Text style={{color:'black',fontSize:15,fontWeight:'bold',marginLeft:40,marginTop:5}}>Bus</Text>
		</View>

        <View style={{marginTop:5}}>
			  <TouchableOpacity style={{marginRight:10,
                                        marginLeft:10,
                                        marginTop:10,
                                        paddingTop:20,
                                        paddingBottom:20,
                                        backgroundColor:'#e973ad',
                                        borderRadius:20,
	                                    alignItems:'center',
	                                    width:80,
									   }}
                                       onPress={()=>console.log("Train Selected")}
                                       //onPress={()=>navigation.navigate("forTrain")}

              >
           
               <Icon
                                       containerStyle={{paddingLeft:2}}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-train-outline" : "train-outline"}
                                   />
                      

              </TouchableOpacity>
              <Text style={{color:'black',fontSize:15,fontWeight:'bold',marginLeft:35,marginTop:5}}>Train</Text>
        </View>
        </View>

         <View style={{flex:2,marginTop:1,backgroundColor:'#fff',marginTop:5,borderRadius:20,flexDirection:'row'}}>
              <Image
			        source={{uri:'https://images.pexels.com/photos/247474/pexels-photo-247474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
					style={{height:170,width:170,borderRadius:20,marginTop:5,marginLeft:5,marginRight:8}}
			  />

              <Image
			        source={{uri:'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
					style={{height:170,width:170,borderRadius:20,marginTop:5}}
			  />
         </View>

         <View style={{flex:2,marginTop:1,backgroundColor:'#fff',marginTop:5,borderRadius:20,flexDirection:'row'}}>
              <Text style={{marginLeft:50,fontSize:15}}>Mountains</Text>
              <Text style={{marginLeft:120,fontSize:15}}>Sunsets</Text>
         </View>

         <View style={{flex:2,marginTop:1,backgroundColor:'#fff',marginTop:5,borderRadius:20,flexDirection:'row'}}>
              <Image
			        source={{uri:'https://images.pexels.com/photos/6003108/pexels-photo-6003108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
					style={{height:170,width:170,borderRadius:20,marginTop:5,marginLeft:5,marginRight:8}}
			  />

              <Image
			        source={{uri:'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
					style={{height:170,width:170,borderRadius:20,marginTop:5}}
			  />
         </View>
         <View style={{flex:2,marginTop:1,backgroundColor:'#fff',marginTop:5,borderRadius:20,flexDirection:'row',marginBottom:5}}>
              <Text style={{marginLeft:53,fontSize:15}}>Camping</Text>
              <Text style={{marginLeft:133,fontSize:15}}>Hotels</Text>
         </View>
         </ScrollView>
    </View>
    );
}

function CreateAccount(){
    return(
    
        <View style={{flex:1,marginTop:10}}>
        <ScrollView>
        <View style={{flex:.3,backgroundColor:'lightgray',marginRight:90,marginLeft:90,borderRadius:200,borderWidth:1.5}}>
           <Icon
                                       containerStyle={{padding:8}}
                                       size={80}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-person-outline" : "person-outline"}
                                   />
        </View>
         <View style={{flex:1,backgroundColor:'#fff',marginTop:20,marginLeft:50,marginRight:50,marginBottom:10,borderWidth:1.5}}>
         <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/7621533/pexels-photo-7621533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }}
            style={{
            margin:5,
            height: 400,
            width: 247,
            borderRadius:20,
            position: 'relative',
            }}
      >
         <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:10}}>

        <TextInput
      label="First Name"
    />
      </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:2,marginTop:5}}>

        <TextInput
      label="Last Name"
    />
      </View>
		      <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:10}}>

        <TextInput
      label="User Name"
    />
      </View>

      <View style={{marginLeft:20,marginRight:20,marginBottom:5,marginTop:5}}>

        <TextInput
      label="Password"
    />
    
      </View>

      <TouchableOpacity style={{marginRight:50,
                                        marginLeft:20,
                                        marginTop:10,
                                        padding:20,
                                        backgroundColor:'sandybrown',
                                        borderRadius:20,
	                                    width:210,
									   }}
                             onPress={()=>console.log("Registered")}
              >
           
                      <Text style={{color:'black',fontWeight:'bold',marginLeft:60}}>Register</Text>

              </TouchableOpacity>

      </ImageBackground>
      </View>
      </ScrollView>
        </View>
    );
}

/*function Aeroplane(){
    return(
    
        <View style={styles.container}>
           <Text style={{alignItems:'center',fontSize:50,fontWeight:'bold'}}>AEROPLANE PAGE </Text>
        </View>
    );
}

function Bus(){
    return(
    
        <View style={styles.container}>
           <Text style={{alignItems:'center',fontSize:50,fontWeight:'bold'}}>BUS PAGE </Text>
        </View>
    );
}

function Train(){
    return(
    
        <View style={styles.container}>
           <Text style={{alignItems:'center',fontSize:50,fontWeight:'bold'}}>Train PAGE </Text>
        </View>
    );
}*/

const Stack=createStackNavigator();

const App=()=>{
    return(
        <NavigationContainer theme={theme}>
             <Stack.Navigator
                  initialRouteName={'MainPageBoarding'}
             >
                <Stack.Screen
                     name="Boarding"
                     component={MainPage}
                     options={{
                          title:"            Home Page",
                          headerStyle:{
                                backgroundColor:'white'
                          },
                          headerLeft:()=>(
                                <TouchableOpacity
                                   style={{paddingLeft:10}}
                                   onPress={()=>console.log("Settings Icon Pressed")}
                                >
                                   <Icon
                                       containerStyle={{paddingLeft:10}}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
                                   />
                                </TouchableOpacity>
                          ),
                          headerRight:()=>(
                                <TouchableOpacity
                                   style={{paddingRight:10}}
                                   onPress={()=>console.log("Menu Icon Pressed")}
                                >
                                   <Icon
                                       containerStyle={{paddingRight:10}}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                                   />
                                </TouchableOpacity>
                          )
                     }}
                />


                <Stack.Screen name="MainPage2" component={Options}
                options={{
                title:"               Details",
                          headerStyle:{
                                backgroundColor:'white'
                          },
                          headerRight:()=>(
                                <TouchableOpacity
                                   style={{paddingRight:10}}
                                   onPress={()=>console.log("Ellipsis Icon Pressed")}
                                >
                                   <Icon
                                       containerStyle={{paddingRight:10}}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-menu" : "ellipsis-vertical"}
                                   />
                                </TouchableOpacity>
                          )
                          }}
                       />


                <Stack.Screen name="AirplaneBusTrain" component={Next}
                options={{
                title:"Book your trip and enjoy",
                          headerStyle:{
                                backgroundColor:'white'
                          },
                          headerRight:()=>(
                                <TouchableOpacity
                                   style={{paddingRight:10}}
                                   onPress={()=>console.log("Ellipsis Icon Pressed")}
                                >
                                   <Icon
                                       containerStyle={{paddingRight:10}}
                                       type="ionicon"
                                       name={Platform.OS === "ios" ? "ios-menu" : "ellipsis-vertical"}
                                   />
                                </TouchableOpacity>
                          )
                          }}
                       />
                <Stack.Screen name="Account" component={CreateAccount}
                options={{
                title:"     Create your Account",
                          headerStyle:{
                                backgroundColor:'white'
                          },
                          }}
                       />

             </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ()=> {
  return <App/>;
}

const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'white'
	},
    forrow:{
  flexDirection: 'row',
  },
})

