/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

class Comp extends React.Component {
  constructor(props) {
    super(props);
  }
  onPressButton = id => {
    switch (id) {
      case 1:
        Alert.alert('Top left icon clicked');
        break;
      case 2:
        Alert.alert('Top right icon clicked');
        break;
      case 3:
        Alert.alert('button clicked');
        break;
      case 4:
        Alert.alert('botton left icon clicked');
        break;
      case 5:
        Alert.alert('Bottom left icon clicked');
        break;
    }
  };

  render() {
    console.log('rendering');

    return (
      <SafeAreaView style={styles.container}>
        <View
          style={[
            styles.child,
            {justifyContent: 'space-evenly'},
            {alignItems: 'flex-start'},
          ]}>
          <TouchableOpacity onPress={() => this.onPressButton(1)}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../Assets/image.jpeg')}
            />
          </TouchableOpacity>

          <Text>Click Here</Text>

          <TouchableOpacity onPress={() => this.onPressButton(2)}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../Assets/image.jpeg')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.child1,
            {justifyContent: 'space-evenly'},
            {alignItems: 'center'},
          ]}>
          <Text>Click Here</Text>

          <Button
            title="Press me"
            color="#000"
            onPress={() => this.onPressButton(3)}
          />
          <Text>Click Here</Text>
        </View>

        <View
          style={[
            styles.child2,
            {justifyContent: 'space-evenly'},
            {alignItems: 'flex-end'},
          ]}>
          <TouchableOpacity onPress={() => this.onPressButton(4)}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../Assets/image.jpeg')}
            />
          </TouchableOpacity>

          <Text>Click Here</Text>

          <TouchableOpacity onPress={() => this.onPressButton(5)}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../Assets/image.jpeg')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    //console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6cc',

    //justifyContent: 'center'
  },
  child: {
    flex: 0.35,
    flexDirection: 'row',
  },
  child1: {
    flexDirection: 'row',
    flex: 0.35,
  },
  child2: {
    flex: 0.35,
    flexDirection: 'row',
  },
});

export default Comp;
