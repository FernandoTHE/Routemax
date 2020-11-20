import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButtomText,
  CustomButtom,
  SingMenssageButtom,
  SingMenssageButtomText,
  SingMenssageButtomTextBold,
} from './style';
import Camlogo from '../../assents/caminhao-de-entrega.svg';
import LoginInput from '../../components/LoginInput';
import Api from '../../Api';

const Login = ({navigate}) => {
  //estados da aplicação
  const [matriField, setMatriField] = useState('');
  const [senhaField, setSenhaField] = useState('');
  const navigation = useNavigation();

  //Direciona tela de cadastro
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'Cadastro'}],
    });
  };
  //
  const handleloginClick = async () => {
    // if (matriField != '' && senhaField != '') {
    //   console.log('matriField');
    //   let res = await Api.Login(matriField, senhaField);
    //   if (json.token) {
    //     alert('Ok');
    //   } else {
    //     alert('Matricula ou senha errada');
    //   }
    // } else {
    //   alert('Preencha os campos');
    // }
  };

  return (
    <Container>
      <Camlogo width="100%" height="160" />
      {/* area total da tela */}
      <InputArea>
        {/* dois campos Input */}
        <LoginInput
          placeholder="Digite sua matricula"
          value={matriField}
          onChangeText={(t) => setMatriField(t)}
        />
        <LoginInput
          placeholder="Digite sua senha"
          value={senhaField}
          onChangeText={(t) => setSenhaField(t)}
          senha={true}
        />
        {/* Botão login */}
        <CustomButtom
          onPress={() => {
            navigation.navigate('MainTabs');
          }}>
          <CustomButtomText>Login</CustomButtomText>
        </CustomButtom>
      </InputArea>

      {/* mensagens abaixo do botao */}
      <SingMenssageButtom onPress={handleMessageButtonClick}>
        <SingMenssageButtomText>
          Ainda não possui conta ?
        </SingMenssageButtomText>
        <SingMenssageButtomTextBold> Cadastre-se</SingMenssageButtomTextBold>
      </SingMenssageButtom>
    </Container>
  );
};

export default Login;
