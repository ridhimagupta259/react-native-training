import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from 'react-native';

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('https://api.myjson.com/bins/oylfu')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          data,
        });
      });
  }

  render() {
    const {data} = this.state;
    return (
      <View>
        <SectionList
          style={{
            flex: 1,
          }}
          sections={data}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.productName}</Text>
                <Text>{item.price}</Text>
                <Text>
                  {item.volume} : {item.measurementUnit.unitId}
                </Text>
              </View>
            );
          }}
          renderSectionHeader={({section: productId}) => (
            <Text>{productId}</Text>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 32,
  },
});
export default Fetch;
