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
import Perfillogo from '../../assents/perfil.svg';
import LoginInput from '../../components/LoginInput';
import {Alert} from 'react-native';

const Login = () => {
  const [nomeField, setNomeField] = useState('');
  const [matriField, setMatriField] = useState('');
  const [senhaField, setSenhaField] = useState('');
  const navigation = useNavigation();

  //Direciona tela de cadastro
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'Login'}],
    });
  };
  //
  const handleloginClick = () => {
    Alert.alert(
      'Usuário Cadastrado',
      'Teste',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <Container>
      <Perfillogo width="100%" height="120" />
      {/* area total da tela */}
      <InputArea>
        {/*campos Input */}
        <LoginInput
          placeholder="Digite seu nome"
          value={nomeField}
          onChangeText={(t) => setNomeField(t)}
        />
        {/* Campo Login */}
        <LoginInput
          placeholder="Digite seu matricula"
          value={matriField}
          onChangeText={(t) => setMatriField(t)}
        />
        {/* Campo Senha */}
        <LoginInput
          placeholder="Digite sua senha"
          value={senhaField}
          onChangeText={(t) => setSenhaField(t)}
          senha={true}
        />
        {/* Botão Cadastro */}
        <CustomButtom onPress={handleloginClick}>
          <CustomButtomText>Cadastrar</CustomButtomText>
        </CustomButtom>
      </InputArea>

      {/* mensagens abaixo do botao */}
      <SingMenssageButtom onPress={handleMessageButtonClick}>
        <SingMenssageButtomText>Já possui conta ?</SingMenssageButtomText>
        <SingMenssageButtomTextBold> Login</SingMenssageButtomTextBold>
      </SingMenssageButtom>
    </Container>
  );
};

export default Login;
