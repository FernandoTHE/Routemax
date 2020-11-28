import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTab from '../components/CustomTab';

import Home from '../screens/Home';
import Procurar from '../screens/Procurar';
import Rotas from '../screens/Rotas';
import Validação from '../screens/Validação';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

export default () => (
  //rotas da TabBar
  <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
    {/* //verificar Tabbar não funcionou */}
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Procurar" component={Procurar} />
    <Tab.Screen name="Rotas" component={Rotas} />
    <Tab.Screen name="Validação" component={Validação} />
    <Tab.Screen name="Perfil" component={Perfil} />
  </Tab.Navigator>
);
