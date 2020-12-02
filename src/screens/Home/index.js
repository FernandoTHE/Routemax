import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Container} from './styles';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from 'react-native-google-maps-directions';
import {PermissionsAndroid} from 'react-native';

import Geocoder from 'react-native-geocoding';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC4Jq2Bkuf0c4BfSfZ5tAiNhLdSNYXaPUQ';
const {width} = Dimensions.get('window');

export default () => {
  const [origin, setOrigin] = useState({
    latitude: -5.0857146,
    longitude: -42.7297521,
  });
  const [destination, setDestination] = useState({
    latitude: -5.07558,
    longitude: -42.790209,
  });
  const [originText, setOriginText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  //set localização
  const [coords, setCoods] = useState(null);
  //pega localização

  //requisição de permissão
  useEffect(async () => {
    let isGranted = await requestLocationPermission();

    if (isGranted) {
      getLocation();
    }
    getLocation();
  }, []);
  //tratamento da localização
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let newOrigin = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        console.log('new origin');
        console.log(newOrigin);
        setOrigin(newOrigin);
      },
      (err) => {
        console.log('error');
        console.log(err);
      },
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
    );
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message:
            'Maps App needs access to your map ' + 'so you can be navigated.',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        return true;
      } else {
        console.log('location permission denied');
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleButton = () => {
    if (originText != '') {
      Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

      Geocoder.from(originText)
        .then((json) => {
          var location = json.results[0].geometry.location;
          console.log(location);
          setOrigin({
            origin: {latitude: location.lat, longitude: location.lng},
          });
        })
        .catch((error) => console.warn(error));
    } else {
      alert('Digite a origem ! ');
    }

    if (destinationText != '') {
      Geocoder.init(GOOGLE_MAPS_APIKEY); // use a valid API key

      Geocoder.from(destinationText)
        .then((json) => {
          var location = json.results[0].geometry.location;
          console.log(location);
          setDestination({
            destination: {latitude: location.lat, longitude: location.lng},
          });
        })
        .catch((error) => console.warn(error));
    } else {
      alert('Digite o destino ! ');
    }
  };

  const handleGetGoogleMapDirections = () => {
    const data = {
      source: origin,
      destination: destination,
      params: [
        {
          key: 'travelmode',
          value: 'driving',
        },
      ],
    };

    getDirections(data);
  };
  return (
    <Container>
      <MapView
        // ref={(map) => (this.mapView = map)}
        style={styles.map}
        region={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta:
            Math.abs(origin.latitude - destination.latitude) +
            Math.abs(origin.latitude - destination.latitude) * 0.1,
          longitudeDelta:
            Math.abs(origin.longitude - destination.longitude) +
            Math.abs(origin.longitude - destination.longitude) * 0.1,
        }}
        loadingEnabled={true}
        toolbarEnabled={true}
        zoomControlEnabled={true}>
        <MapView.Marker coordinate={destination}>
          <MapView.Callout onPress={() => handleGetGoogleMapDirections()}>
            <Text>Press to Get Direction</Text>
          </MapView.Callout>
        </MapView.Marker>

        <MapView.Marker coordinate={origin}>
          <MapView.Callout>
            <Text>This is where you are</Text>
          </MapView.Callout>
        </MapView.Marker>

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setOriginText(text)}
          placeholder="Inserir Origem"
          value={originText}
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setDestinationText(text)}
          placeholder="Inserir Destino"
          value={destinationText}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleButton()}>
          <Text style={styles.buttonText}>Buscar rota</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  button: {
    width: width - 40,
    height: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 7,
    marginBottom: 15,
    marginHorizontal: 20,
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },

  inputContainer: {
    height: '100%',
    width: '100%',
    maxHeight: 200,
  },

  input: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginBottom: 15,
    marginHorizontal: 20,
    borderRadius: 7,
    borderColor: '#ff0000',
  },
});
