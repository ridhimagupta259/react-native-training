/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText(text) {}

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>{'user input: ' + this.state.text} </Text>
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onChangeText={text => this.setState({text})}
        />
        <Text>{'Password: ' + this.state.input}</Text>
        <TextInput
          style={{
            height: 50,
            width: '90%',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onChangeText={input => this.setState({input})}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Second');
          }}>
          <Text>Move to Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
  componentDidMount() {
    console.warn('Hello I am ComponentDidMount');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
