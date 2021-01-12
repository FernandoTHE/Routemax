import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assents/home.svg';
import CaraIcon from '../assents/cara.svg';
import ProcurarIcon from '../assents/lupa.svg';
import ValidaIcon from '../assents/validação.svg';

const TabArea = styled.View`
  height: 60px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const TextIcon = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #000;
`;

export default ({state, navigation}) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon
          styled={{opacity: state.index == 0 ? 1 : 0.5}}
          width={24}
          heigth={24}
          fill="#000"
        />
        <TextIcon>Home</TextIcon>
      </TabItem>

      <TabItem onPress={() => goTo('Procurar')}>
        <ProcurarIcon
          styled={{opacity: state.index == 0 ? 2 : 0.5}}
          width={24}
          heigth={24}
          fill="#000"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Validação')}>
        <ValidaIcon
          styled={{opacity: state.index == 0 ? 3 : 0.5}}
          width={24}
          heigth={24}
          fill="#000"
        />
      </TabItem>
      <TabItem onPress={() => goTo('Perfil')}>
        <CaraIcon
          styled={{opacity: state.index == 0 ? 4 : 0.5}}
          width={24}
          heigth={24}
          fill="#000"
        />
      </TabItem>
    </TabArea>
  );
};
