import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HistoryPage from "../screens/history_page";
import HomePage from "../screens/home_page";
import ScanPage from "../screens/scan_page";
import TripPage from "../screens/trip_page";
import WalletPage from "../screens/wallet_page";
import { Image } from 'react-native';
import styles from '../../styles';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <Tab.Navigator screenOptions={
            {
            
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor:'#038FAA',
            inactiveTintColor: '#737373',
            tabBarStyle:{
                position: "absolute",
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                height: 60,
                background:' #FFFFFF'
            }
        }}>
        <Tab.Screen name=" " component={HomePage} 
        
        options={{
            headerShown:false,
            tabBarIcon:({focused,color}) => {
                <Image 
                style= {styles.navIcon}
                source={require('../../assets/Home.png')}
                />
            }
        }}
        />
        <Tab.Screen name="Trip" component={TripPage}
         options={{
            tabBarIcon:({focused,color}) => {
                <Image 
                style= {styles.navIcon}
                source={require('../../assets/Home.png')}
                />
            }
        }}/>
        <Tab.Screen name="History" component={HistoryPage} 
        options={{
            tabBarIcon:({focused,color}) => {
                <Image 
                style= {styles.navIcon}
                source={require('../../assets/Home.png')}
                />
            }
        }}/>
        <Tab.Screen name="Scan" component={ScanPage} 
        options={{
            tabBarIcon:({focused,color}) => {
                <Image 
                style= {styles.navIcon}
                source={require('../../assets/Home.png')}
                />
            }
        }}/>
        <Tab.Screen name="Wallet" component={WalletPage} 
         options={{
            tabBarIcon:({focused,color}) => {
                <Image 
                style= {styles.navIcon}
                source={require('../../assets/Home.png')}
                />
            }
        }}/>
      </Tab.Navigator>
    );
}