import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';
//import SectionHeaderCustom from './SectionListHeader';
class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'abc ',
      input: 0,
      isModalVisible: false,
      sectionListArray: [],
      itemsArray: [
        {
          categoryId: 'FRUITS',
          title: 'apple',
          quantity: 2,
        },
        {
          categoryId: 'FRUITS',
          title: 'mango',
          quantity: 5,
        },

        {
          categoryId: 'FRUITS',
          title: 'orange',
          quantity: 2,
        },
        {
          categoryId: 'FRUITS',
          title: 'pomegranade',
          quantity: 2,
        },

        {
          categoryId: 'FLOWERS',
          title: 'Roses',
          quantity: 1,
        },
        {
          categoryId: 'FLOWERS',
          title: 'lili',
          quantity: 4,
        },
        {
          categoryId: 'FLOWERS',
          title: 'jasmine',
          quantity: 2,
        },
        {
          categoryId: 'FLOWERS',
          title: 'hibiscus',
          quantity: 8,
        },
        {
          categoryId: 'VEGETABLES',
          title: 'potato',
          quantity: 8,
        },
        {
          categoryId: 'VEGETABLES',
          title: 'tomato',
          quantity: 5,
        },
        {
          categoryId: 'VEGETABLES',
          title: 'guard',
          quantity: 2,
        },
        {
          categoryId: 'VEGETABLES',
          title: 'brinjal',
          quantity: 6,
        },
      ],
    };
  }
  componentDidMount() {
    const {itemsArray} = this.state;
    console.log('Component DID MOUNT!');

    const result = itemsArray.reduce(function(sections, item) {
      let section = sections.find(
        section => section.categoryId === item.categoryId,
      );
      if (!section) {
        section = {categoryId: item.categoryId, data: []};
        sections.push(section);
      }
      section.data.push(item);

      return sections;
    }, []);
    this.setState(
      {
        sectionListArray: result,
      },
      () => {
        console.log(this.state.sectionListArray);
      },
    );
  }
  msgTotal(element) {
    element.reduce(function(prev, cur) {
      return prev + cur.quantity;
    }, 0);
  }

  render() {
    const {sectionListArray} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={sectionListArray}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item finaldata={item} />}
          renderSectionHeader={({section: {categoryId, data}}) => (
            <View style={styles.header}>
              <Text style={styles.headerText}>{categoryId}</Text>
              <Text style={styles.header}>{this.msgTotal(data)}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

function Item({finaldata}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{finaldata.title}</Text>
      <Text style={styles.title}>{finaldata.quantity}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    // backgroundColor: 'red',
  },
  item: {
    backgroundColor: '#ffa366',
    padding: 20,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 22,
    backgroundColor: '#fff',
    //flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 32,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
  },
});

export default Section;
