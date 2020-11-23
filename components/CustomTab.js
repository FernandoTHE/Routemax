import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assents/home.svg';
import PerfilIcon from '../assents/perfiltab.svg';
import ProcurarIcon from '../assents/procurar.svg';
import RotasIcon from '../assents/rotas.svg';
import ValidaIcon from '../assents/validação.svg';

const TabArea = styled.View`
  height: 70px;
  background-color: #fff;
  flex-direction: row;
  /* width: 100%; */
`;

const TabItem = styled.TouchableOpacity`
  flex: 1px;
  justify-content: center;
  /* width: 100%; */
  align-items: center;
`;

export default () => {
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <HomeIcon width={30} heigth={30} fill="#FFFFFF" />
      </TabItem>

      <TabItem>
        <PerfilIcon width={30} heigth={30} fill="#FFFFFF" />
      </TabItem>

 \   q     {/* <TabItem>
        <ProcurarIcon width={30} heigth={30} fill="#FFFFFF" />
      </TabItem> */}

      <TabItem>
        <RotasIcon width={30} heigth={30} fill="#FFFFFF" />
      </TabItem>

      <TabItem>
        <ValidaIcon width={30} heigth={30} fill="#FFFFFF" />
      </TabItem>
    </TabArea>
  );
};
