import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
  position: absolute;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
  padding-left: 50px;
`;
export const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
  align-items: center;
`;
export const LocationArea = styled.View`
  background-color: #ffffff;
  height: 60px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #010101;
`;

export const LocationFinder = styled.TouchableHighlight`
  width: 20px;
  height: 20px;
  align-items: center;
`;
