import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {Dimensions, Platform} from 'react-native';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  BotaoProcurar,
  LocationArea,
  LocationInput,
  LocationFinder,
} from './styles';
import ProcuraIcon from '../../assents/procurar.svg';
import MylocationIcon from '../../assents/location.svg';
import MapView from 'react-native-maps';

export default () => {
  const navigation = useNavigation();
  // //set localização
  // const [coords, setCoods] = useState(null);
  // //pega localização
  // const handleLocationFinder = async () => {
  //   setCoods(null);
  //   //ver IOS ou Android
  //   let result = await request(
  //     Platform.OS === 'ios'
  //       ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
  //       : PERMISSIONS.ANDROID.LOCATION.ACESS_FINE_LOCATION,
  //   );
  //   //acepted
  //   if (result == 'granted') {
  //     Geolocation.getCurrentPosition((info) => {
  //       console.log(info);
  //     });
  //   }
  // };

  return (
    <Container>
      <MapView
        style={{
          width: '100%',
          height: '100%',
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        loadingEnabled
      />
      <Scroller>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>Encontre Seu Destino</HeaderTitle>
        </HeaderArea>
        <LocationArea>
          <LocationInput placeholder={'Pesquisar endereço'} />
          <LocationFinder>
            <MylocationIcon width="30" height="30" fill="#FFFFFF" />
          </LocationFinder>
          {/* <LocationInput>
            
          </LocationInput>  */}
        </LocationArea>
      </Scroller>
    </Container>
  );
};
