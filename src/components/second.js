import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Class',
      editable: true,
    };
    // console.warn('Hello I am Constructor');
  }
  onChangeText(text) {
    console.warn(text);
  }
  render() {
    // const {text, editable} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../Assets/menu.png')}
          />
        </TouchableOpacity>
        {/* <Text>{text}</Text>
        <TextInput
          editable={editable}
          style={{
            height: 50,
            width: '90%',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onChangeText={text => this.onChangeText(text)}
        /> */}
      </SafeAreaView>
    );
  }
  componentDidMount() {
    // console.warn('Hello I am ComponentDidMount');
    setTimeout(() => {
      this.setState({
        editable: false,
      });
    }, 4000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 10,
    //justifyContent: 'center',
  },
});

export default Second;
