import React, { useState, useEffect } from 'react';
import styles from "../../styles";
import { View, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
import * as Location from "expo-location";


export default function HomePage() {
  const [position, setPosition] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    const getCurrentLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission Denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync();

      setPosition(location.coords);

      setInitialRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      })
    };
    getCurrentLocation();
  }, [
    position
  ]);
  return (
    <View style={styles.mapContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#8644A2" />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={initialRegion}>
          {position && (
            <Marker coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
            title='my Location'/>
          )}
        </MapView>
        
      
    </View>
  );
}