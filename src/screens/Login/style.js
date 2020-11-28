import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #63c2d1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
//area dos textos e butões
export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
  /* background-color: #ff0000; */
`;

export const CustomButtom = styled.TouchableOpacity`
  justify-content: center;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  background-color: #268596;
`;
export const CustomButtomText = styled.Text`
  font-size: 18px;
  color: #fff;
`;
export const SingMenssageButtom = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 60px;
`;
export const SingMenssageButtomText = styled.Text`
  font-size: 16px;
  color: #268596;
`;

export const SingMenssageButtomTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;
