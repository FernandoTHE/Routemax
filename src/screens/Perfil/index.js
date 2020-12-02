import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class ProfileView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
              }}
            />
            <Text style={styles.name}>Fernando Junior</Text>
          </View>
        </View>

        <View style={styles.profileDetail}>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Matricula</Text>
            <Text style={styles.count}>19371305</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Data de Nascimento</Text>
            <Text style={styles.count}>18/02/1994</Text>
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.title}>Cargo</Text>
            <Text style={styles.count}>Motorista</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.description}>Descrição de Rotas</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00CED1',
  },
  headerContent: {
    padding: 60,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
    fontWeight: 'bold',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 250,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#00CED1',
  },
  count: {
    fontSize: 17,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00CED1',
  },
  description: {
    fontSize: 20,
    color: '#00CED1',
    marginTop: 5,
    textAlign: 'center',
  },
});
