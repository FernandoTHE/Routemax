import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          color: '#268596',
          icon: 'https://bootdey.com/img/Content/avatar/avatar1.png',
          name: 'Fernando Alves',
          tags: ['Motorista', '1001000', 'tag 3'],
        },
      ],
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  };

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  };

  renderTags = (item) => {
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={styles.btnColor}
          onPress={() => {
            this.tagClickEventListener(tag);
          }}>
          <Text>{tag}</Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image
              style={[styles.icon, styles.inputIcon]}
              source={{
                uri: 'https://png.icons8.com/search/androidL/100/000000',
              }}
            />
          </View>
        </View>

        <FlatList
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[styles.card, {borderColor: item.color}]}
                onPress={() => {
                  this.cardClickEventListener(item);
                }}>
                <View style={styles.cardContent}>
                  <Image
                    style={[styles.image, styles.imageContent]}
                    source={{uri: item.icon}}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={[styles.cardContent, styles.tagsContent]}>
                  {this.renderTags(item)}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 100,
  },
  icon: {
    width: 30,
    height: 30,
  },

  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: 'wrap',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'auto',
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: '#eee',
    marginTop: 5,
  },
});
