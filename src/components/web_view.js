import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native';

class MyInlineWeb extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <WebView source={require('../Assets/policy.html')} style={{flex: 1}} />
      </SafeAreaView>
    );
  }
}
export default MyInlineWeb;
