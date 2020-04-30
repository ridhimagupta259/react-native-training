import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

class Showlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
      data: {},
    };
  }
  getdata() {
    console.warn(this.state.data);
  }
  render() {
    const {navigation, route} = this.props;
    const storeData= route.params.storeData;
    this.state.data = storeId;
    return (
      <SafeAreaView style={styles.container}>
          <Text>{this.state.data}</Text>
        {/* <TouchableOpacity
          onPress={() => {
            {
              this.getdata();
            }
          }}>
          <View style={styles.button}>
            <Text>click to show data</Text>
          </View>
          
        </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    alignItems: 'center',
  },
  child: {
    width: '100%',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    height: 50,
    width: 300,
    marginTop: 100,
  },
});

export default Showlist;
