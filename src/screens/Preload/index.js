import React, {useEffect} from 'react';
// import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container, LoadingIcon} from './style';
import {useNavigation} from '@react-navigation/native';

import Camlogo from '../../assents/caminhao-de-entrega.svg';

export default () => {
  const navigation = useNavigation();
  // token de verificação do login//
  useEffect(() => {
    const verifToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // alert('teste');
        //validação token
      } else {
        navigation.navigate('Login');
      }
    };
    verifToken();
  }, [navigation]);
  //style logo
  return (
    <Container>
      <Camlogo width="100%" height="160" />
      <LoadingIcon size="large" color="#ffffff" />
    </Container>
  );
};
