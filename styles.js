import { StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8644A2',
      alignItems: 'center',
      justifyContent: 'center',
    },

    mapContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },

    map: {
      width:"100%",
      height:"100%",
      ...StyleSheet.absoluteFillObject,
    },

    shadow:{
      shadowColor:'#7F5DF0',
      shadowOffset:{
        width:0,
        height:10
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation:5
    }

  });

export default styles;