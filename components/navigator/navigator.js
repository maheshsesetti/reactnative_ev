import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HistoryPage from "../screens/history_page";
import HomePage from "../screens/home_page";
import ScanPage from "../screens/scan_page";
import TripPage from "../screens/trip_page";
import WalletPage from "../screens/wallet_page";
import { Image, View } from 'react-native';
import { Platform } from 'react-native'
import styles from '../../styles';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
            tabBarIcon: true,
            tabBarStyle:{
                position:'absolute',
                bottom:25,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#ffffff',
                borderRadius:15,
                height:90,
                ...styles.shadow
            }
        }}>
            <Tab.Screen name=" " component={HomePage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => {
                       <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                         <Image
                            source={require('../assets/icons/Home.png')}
                            resizeMode='contain'
                            style= {{
                                width:25,
                                height:25,
                                tintColor: focused ? '#039599' : '#737373'
                            }}
                        />
                       </View>
                    }
                }}
            />
            <Tab.Screen name="Trip" component={TripPage}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                           source={require('../assets/icons/Home.png')}
                           resizeMode='contain'
                           style= {{
                               width:25,
                               height:25,
                               tintColor: focused ? '#039599' : '#737373'
                           }}
                       />
                      </View>
                    }
                }} />
            <Tab.Screen name="History" component={HistoryPage}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                         <Image
                            source={require('../assets/icons/Home.png')}
                            resizeMode='contain'
                            style= {{
                                width:25,
                                height:25,
                                tintColor: focused ? '#039599' : '#737373'
                            }}
                        />
                       </View>
                    }
                }} />
            <Tab.Screen name="Scan" component={ScanPage}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                           source={require('../assets/icons/Home.png')}
                           resizeMode='contain'
                           style= {{
                               width:25,
                               height:25,
                               tintColor: focused ? '#039599' : '#737373'
                           }}
                       />
                      </View>
                    }
                }} />
            <Tab.Screen name="Wallet" component={WalletPage}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                           source={require('../assets/icons/Home.png')}
                           resizeMode='contain'
                           style= {{
                               width:25,
                               height:25,
                               tintColor: focused ? '#039599' : '#737373'
                           }}
                       />
                      </View>
                    }
                }} />
        </Tab.Navigator>
    );
}