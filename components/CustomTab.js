import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assents/home.svg';
import PerfilIcon from '../assents/perfiltab.svg';
import ProcurarIcon from '../assents/procurar.svg';
import RotasIcon from '../assents/rotas.svg';
import ValidaIcon from '../assents/validação.svg';

const TabArea = styled.View`
  height: 110px;
  background-color: #ffffff;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1px;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <TabArea>
      <TabItem>
        <HomeIcon width="30" heigth="30" fill="#FFFFFF" />
      </TabItem>

      <TabItem>
        <PerfilIcon width="30" heigth="30" fill="#FFFFFF" />
      </TabItem>

      <TabItem>
        <ProcurarIcon width="30" heigth="30" fill="#FFFFFF" />
      </TabItem>

      <TabItem>
        <RotasIcon width="30" heigth="30" fill="#FFFFFF" />
      </TabItem>

      <TabItem>
        <ValidaIcon width="30" heigth="30" fill="#FFFFFF" />
      </TabItem>
    </TabArea>
  );
};
