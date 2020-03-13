import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'abc ',
      input: ' ',
      isModalVisible: false,
      offers: [
        {
          line1: 'Number 1',
          line2: 'Zylo Basic Health Checkup',
          line9: '#efbbcc',
        },
        {
          line1: 'Number 2',
          line2: 'Zylo Basic Health Checkup',

          line9: '#b19cd9',
        },
        {
          line1: 'Number 3',
          line2: 'Zylo Basic Health Checkup',

          line9: '#efbbcc',
        },
        {
          line1: 'Number 4',
          line2: 'Zylo Basic Health Checkup',

          line9: '#b19cd9',
        },
        {
          line1: 'Number 5',
          line2: 'Zylo Basic Health Checkup',

          line9: '#efbbcc',
        },
        {
          line1: 'Number 6',
          line2: 'Zylo Basic Health Checkup',

          line9: '#b19cd9',
        },
        {
          line1: 'Number 7',
          line2: 'Zylo Basic Health Checkup',

          line9: '#efbbcc',
        },
        {
          line1: 'Number 8',
          line2: 'Zylo Basic Health Checkup',

          line9: '#b19cd9',
        },
        {
          line1: 'Number 9',
          line2: 'Zylo Basic Health Checkup',

          line9: '#efbbcc',
        },
        {
          line1: 'Number 10',
          line2: 'Zylo Basic Health Checkup',

          line9: '#b19cd9',
        },
      ],
    };
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  render() {
    const {navigation} = this.props;
    const {input, text, offers} = this.state;
    const windowWidth = Dimensions.get('window').width;
    //const windowHeight = Dimensions.get('window').height;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={offers}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.elements,
                  {width: windowWidth - 20, backgroundColor: item.line9},
                ]}
                onPress={() => {
                  this.toggleModal(),
                    this.setState({text: item.line1, input: item.line2});
                }}>
                <View>
                  <Text style={{fontSize: 15, marginTop: 10}}>
                    {item.line1}
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 20, marginTop: 15}}>
                    {item.line2}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        {/* <View style={{flex: 1}}>
          {offers.map(item => {
            return (
              <TouchableOpacity
                style={[
                  styles.elements,
                  {width: windowWidth - 20, backgroundColor: item.line9},
                ]}
                onPress={() => {
                  this.toggleModal(),
                    this.setState({text: item.line1, input: item.line2});
                }}>
                <View>
                  <Text style={{fontSize: 15, marginTop: 10}}>
                    {item.line1}
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 20, marginTop: 15}}>
                    {item.line2}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View> */}
        <Modal
          isVisible={this.state.isModalVisible}
          animationIn="slideInDown"
          animationInTiming={500}
          onBackdropPress={this.toggleModal}>
          <View
            style={{flex: 0.2, backgroundColor: '#fff', alignItems: 'center'}}>
            <Text style={{fontSize: 20, marginBottom: 10}}>
              Item Number : {text}
            </Text>
            <Text style={{fontSize: 20, marginBottom: 40}}>
              Item Name : {input}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.toggleModal(),
                  navigation.navigate('screenNext', {
                    data: `${text}  ${input}`,
                  });
              }}>
              <Text
                style={{
                  backgroundColor: '#ffcce6',
                  fontSize: 20,
                  padding: 7,
                  //borderRadius: 30,
                }}>
                {' '}
                Click to Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    // alignItems:"flex-end",
    justifyContent: 'center',
  },
  elements: {
    height: 100,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 10,
    marginBottom: 18,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default Home;
