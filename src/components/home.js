/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Alert,
  BackHandler,
  ToastAndroid,
  Clipboard,
  TouchableOpacity,
  navigation,
  AsyncStorage,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      input: '',
      newtext: 'xyz',
      count: 0,
      token: '',
    };
  }
  // showAlert1() {
  //   const {navigation} = this.props;
  //   Alert.alert(
  //     'Alert Title',
  //     'My Alert Msg',
  //     [
  //       {
  //         text: 'Go To Second Page',
  //         onPress: () => {
  //           Clipboard.setString(this.state.text), navigation.navigate('Second');
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  // }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('loggedInStatus', 'loggedIn');
    } catch (e) {
      // saving error
    }
  };
  onLoginPressed() {
    const {navigation} = this.props;
    fetch(
      'https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login',
      {
        method: 'POST',
        headers: {
          //'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.text,
          password: this.state.input,
        }),
      },
    ).then(response => {
      //console.warn(this.state.token);

      if (response.status != 200) {
        Alert.alert('123');
      } else {
        const token = response.headers.map.authorization;
        var temp = token.split(' ');
        this.state.token = temp[1];
        response.json();
        navigation.navigate('SplashScreen', {token: this.state.token});
      }
    });
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../Assets/menu.png')}
          />
        </TouchableOpacity> */}
        <Text style={styles.text}>{'user input: ' + this.state.text} </Text>
        <TextInput
          style={styles.field}
          onChangeText={text => this.setState({text})}
        />
        <Text style={styles.text}>{'Password: ' + this.state.input}</Text>
        <TextInput
          style={styles.field}
          onChangeText={input => this.setState({input})}
        />

        <TouchableOpacity onPress={() => this.onLoginPressed()}>
          <Text style={styles.click}>Click to Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     this.setState({count: this.state.count + 1});
  //     setTimeout(() => {
  //       this.setState({count: 0});
  //     }, 2000);

  //     if (this.state.count === 1) {
  //       ToastAndroid.showWithGravity(
  //         this.state.newtext,
  //         2000,
  //         ToastAndroid.BOTTOM,
  //       );
  //     }
  //     if (this.state.count === 2) {
  //       this.showAlert1();
  //     }
  //     return true;
  //   });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
  click: {
    fontSize: 25,
    backgroundColor: 'grey',
    marginTop: 10,
  },
  field: {
    height: 50,
    width: '90%',
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default Home;
