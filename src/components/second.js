import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Clipboard,
  Text,
  navigation,
} from 'react-native';

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello Class',
      editable: true,
      nextScreen: '',
      auth: '',
      storeData: {},
      storeId: '',
    };
    // console.warn('Hello I am Constructor');
  }
  onChangeText(text) {
    console.warn(text);
  }
  // async getContent() {
  //   const content = await Clipboard.getString();
  //   this.setState({
  //     nextScreen: content,
  //   });
  // }
  getdata() {
    const {data, storeData, storeId} = this.state;
    const {navigation, route} = this.props;
    fetch(
      'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
      {
        method: 'GET',
        headers: {
          Authorization: data,
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({storeData: responseJson});
        //this.toggleModal();
        this.state.storeId = this.state.storeData.map(item => item.storeId);
        console.warn(storeId);
        navigation.navigate('Showlist', {
          storeData: this.state.storeData,
        });
      });
  }
  render() {
    // const {text, editable} = this.state;
    const {nextScreen, auth} = this.state;
    const {navigation, route} = this.props;
    const token = route.params.token;
    this.state.data = token;
    //console.warn(auth);
    return (
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../Assets/menu.png')}
          />
        </TouchableOpacity>
        <Text>{text}</Text>
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
        <TouchableOpacity
          onPress={() => {
            this.getdata();
          }}>
          <Text style={styles.textChild}> click to show storeId</Text>
        </TouchableOpacity>
        <Text style={styles.textChild}>{nextScreen}</Text>
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
